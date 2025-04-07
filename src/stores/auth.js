import {defineStore} from "pinia";
import {ref} from "vue";

import {useShow} from "@/stores/show";
import {useUrl} from "@/stores/url";
import axios from "axios";
import {useRouter} from 'vue-router';
import {useUtilisateur} from "@/stores/utilisateur";


import {uselisteElecteur} from "@/stores/listeElecteur";

export const useAuth = defineStore('Auth', () => {
	const listeElecteur = uselisteElecteur();

	const name = ref('Aubin')
	const email = ref('Aubin@gmail.com')
	const mdp = ref('123')
	const role_id = ref('1')
	const show = useShow()
	const user = ref({})
	const utilisateur = useUtilisateur(); // c
	const params = ref();


	const userId = ref('')
	const utilisateurId = ref('')


	const URL = useUrl().url

	function register() {
		show.showSpinner = true
		let formData = {
			username: name.value,
			email: email.value,
			password: mdp.value,
			role_id: role_id.value

		}


		axios.post(`${URL}/api/register`, formData, {
			headers: {
				"Content-Type": "application/json"
			}
		}).then((response) => {
			if (response.status === 201) {
				user.value = JSON.stringify(response.data.user)

				localStorage.setItem("user", JSON.stringify(response.data.user));
				show.showAlert = true
				show.showAlertType = 'success'
				show.showAlertMessage = 'Enregistré'

				show.showSingUp = false
				show.showLogin = true


			} else {
				show.showAlert = true
				show.showAlertType = 'warning'
				show.showAlertMessage = 'échoué'
			}


			setTimeout(() => {

				show.showAlert = false
				show.showAlertType = ''
				show.showAlertMessage = ''
			}, 3000);
		}).catch((err) => {

			show.showAlert = true
			show.showAlertType = 'danger'
			show.showAlertMessage = 'Tous les champs sont obligatoire'
			console.error(err);
			setTimeout(() => {
				show.showAlert = false
				show.showAlertType = ''
				show.showAlertMessage = ''
			}, 3000);
		}). finally(() => {
			show.showSpinner = false

		});
	}

	function login() {


		show.showSpinner = true
		let formData = {
			email: email.value,
			password: mdp.value

		}


		axios.post(`${URL}/api/login`, formData, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${
					document.cookie.split("=")[1]
				}`
			}
		}).then((response) => {
			if (response.status === 200) {

				show.showAlert = true
				show.showAlertType = 'success'
				show.showAlertMessage = 'connecté'

				userId.value = response.data.user.id
				utilisateurId.value = response.data.utilisateur[0] ?. id


				document.cookie = `access_token=${
					response.data.access_token
				};path=/;max-age=${
					response.data.expires_in
				}`;
				localStorage.setItem("user", JSON.stringify(response.data.user));
				localStorage.setItem("usersRole", JSON.stringify(response.data.usersRole[0].role.nomRole));
				localStorage.setItem("utilisateur", JSON.stringify(response.data.utilisateur));
				console.log('ici ajout show user role');

				show.user = JSON.parse(localStorage.getItem('usersRole'));


				show.showDashboard = true
				show.showLogin = false


				utilisateur.getUserInfo(response.data.user.id)
				// listeElecteur.getElecteurDistrict(params.value, paramsId.value);
			} else {
				show.showAlert = true
				show.showAlertType = 'warning'
				show.showAlertMessage = 'échoué'
			}


			setTimeout(() => {

				show.showAlert = false
				show.showAlertType = ''
				show.showAlertMessage = ''
			}, 3000);
		}).catch((err) => {

			show.showAlert = true
			show.showAlertType = 'danger'
			show.showAlertMessage = 'Tous les champs sont obligatoire'
			console.error(err);
			setTimeout(() => {
				show.showAlert = false
				show.showAlertType = ''
				show.showAlertMessage = ''
			}, 3000);
		}). finally(() => {
			show.showSpinner = false

		});
	}


	const router = useRouter();

	function logout() {
		show.showSpinner = true;

		// Extract the token from the cookie
		const token = document.cookie.split('; ').find(row => row.startsWith('access_token=')) ?. split('=')[1];


		if (! token) { // If token is not found, clear local storage and redirect
			localStorage.removeItem("usersRole");
			localStorage.removeItem("user");
			localStorage.removeItem("anneeSelectionne");
			localStorage.removeItem("utilisateur");
			localStorage.removeItem("selectCommune");
			localStorage.removeItem("selectDistrict");
			localStorage.removeItem("selectFokontany");
			localStorage.removeItem("selectRegion");
			localStorage.removeItem("selectedCommune");
			localStorage.removeItem("selectedProvince");
			show.showModalLogout = false;
			show.showDashboard = false;
			show.showLogin = false;
			show.showAlert = true;
			show.showModalDeconnexion = false;
			show.showAlertType = "success";
			show.showAlertMessage = "Déconnexion réussie";
			show.showSpinner = false;
			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = "";
				show.showAlertMessage = "";

				router.push('/').then(() => {
					setTimeout(() => {
						window.location.reload();
					}, 100); // Petit délai pour laisser la redirection s'effectuer
				});
			}, 2000);


			return;
		}

		axios.post(`${URL}/api/logout/ok`, {}, {
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer ${token}`
			}
		}).then((response) => {
			if (response.status === 200) {
				show.showModalLogout = false;
				show.showDashboard = false;
				show.showLogin = false;
				show.showAlert = true;
				show.showModalDeconnexion = false;
				show.showAlertType = "success";
				show.showAlertMessage = "Déconnexion réussie";

				// Clear the token from cookies
				document.cookie = `access_token=;path=/;max-age=0`;

				// Clear local storage
				localStorage.removeItem("usersRole");
				localStorage.removeItem("user");
				localStorage.removeItem("anneeSelectionne");
				localStorage.removeItem("utilisateur");
				localStorage.removeItem("selectCommune");
				localStorage.removeItem("selectDistrict");
				localStorage.removeItem("selectFokontany");
				localStorage.removeItem("selectRegion");
				localStorage.removeItem("selectedCommune");
				localStorage.removeItem("selectedProvince");
				show.showAdmin = false;

				// Redirect to the home page
				router.push('/');
			} else {
				show.showAlert = true;
				show.showAlertType = "danger";
				show.showAlertMessage = "Échec de la déconnexion";
			}

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = "";
				show.showAlertMessage = "";
			}, 3000);
		}).catch((err) => {
			show.showAlert = true;
			show.showAlertType = "warning";
			show.showAlertMessage = "Erreur lors de la déconnexion";
			console.error(err);

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = "";
				show.showAlertMessage = "";
			}, 3000);
		}). finally(() => {
			show.showSpinner = false;
		});
	}


	return {
		userId,
		utilisateurId,
		user,
		logout,
		name,
		email,
		mdp,
		role_id,
		register,
		login
	}


})
