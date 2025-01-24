import {defineStore} from "pinia";
import {ref} from "vue";

import {useShow} from "@/stores/show";
import {useUrl} from "@/stores/url";
import axios from "axios";

export const useAuth = defineStore('Auth', () => {

	const name = ref('Aubin')
	const email = ref('Aubin@gmail.com')
	const mdp = ref('123')
	const role_id = ref('1')
	const show = useShow()
	const user = ref({})

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

		console.log('username', name.value);

		console.log('email', email.value);

		console.log('password', mdp.value);

		console.log('role_id', '1');


		axios.post(`${URL}/api/register`, formData, {
			headers: {
				"Content-Type": "application/json"
			}
		}).then((response) => {
			console.log(response.data);
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


		console.log('email', email.value);

		console.log('password', mdp.value);

		axios.post(`${URL}/api/login`, formData, {
			headers: {
				"Content-Type": "application/json"
			}
		}).then((response) => {
			console.log("response login", response.data);
			if (response.status === 200) {
				show.showAlert = true
				show.showAlertType = 'success'
				show.showAlertMessage = 'connecté'

				userId.value = response.data.user.id
				utilisateurId.value = response.data.utilisateur[0].id
				console.log('userId', userId.value);

				console.log('utilisateurId', utilisateurId.value);


				document.cookie = `access_token=${
					response.data.access_token
				};path=/;max-age=${
					response.data.expires_in
				}`;
				localStorage.setItem("user", JSON.stringify(response.data.user));
				localStorage.setItem("usersRole", JSON.stringify(response.data.usersRole));
				localStorage.setItem("utilisateur", JSON.stringify(response.data.utilisateur));
				show.showDashboard = true
				show.showLogin = false
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


	function logout() {
		show.showSpinner = true;
		axios.post(`${URL}/api/logout`, {}, {
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer ${
					document.cookie.split("=")[1]
				}`
			}
		}).then((response) => {
			console.log("response", response.data);
			if (response.status === 200) {
				show.showModalLogout = false;

				show.showDashboard = false;
				show.showLogin = true;
				show.showAlert = true;
				show.showModalDeconnexion = false
				show.showAlertType = "success";
				show.showAlertMessage = "Déconnexion réussie";
				document.cookie = `access_token=;path=/;max-age=0`;
				
				localStorage.removeItem("usersRole");
				localStorage.removeItem("user");
				localStorage.removeItem("anneeSelectionne");
				localStorage.removeItem("utilisateur");



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


		/*axios.post(`${URL}/api/login`, formData, {
			headers: {
				"Content-Type": "application/json"
			}
		}).then((response) => {
			console.log("response login",response.data);
			if (response.status === 200) {
				show.showAlert = true
				show.showAlertType = 'success'
				show.showAlertMessage = 'connecté'

				document.cookie = `access_token=${response.data.access_token};path=/;max-age=${response.data.expires_in}`;
				localStorage.setItem("user", JSON.stringify(response.data.user));
				localStorage.setItem("usersRole", JSON.stringify(response.data.usersRole));

				show.showDashboard = true
				show.showLogin = false
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

		});*/
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
