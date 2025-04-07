import {defineStore} from "pinia";
import {ref, onMounted} from "vue";
import {useShow} from "@/stores/show";
import {useAuth} from "@/stores/auth";
import {useUrl} from "@/stores/url";
import {useAnneeElectorale} from "@/stores/anneeElectorale";
import axios from "axios";

export const useUtilisateur = defineStore('Utilisateur', () => {
	const show = useShow();
	const auth = useAuth();
	const anneeElectorale = useAnneeElectorale();
	const URL = useUrl().url;

	const newUtilisateur = ref()
	const user = ref({})


	const anneeSelected = ref('')
	const regionSelected = ref('')
	const districtSelected = ref('')


	const nom = ref('')
	const prenom = ref('')
	const nomComplet = ref('');
	const profession = ref('');
	const adresse = ref('');
	const numeroCIN = ref('');
	const dateDelivreCIN = ref('');
	const lieuDelivreCIN = ref('');
	const carteElecteur = ref('');
	const sexe = ref('');
	const lieuNaissance = ref('');
	const filiation = ref('');
	const dateNaissance = ref('');
	const telephone = ref('');
	const dateInscription = ref('');

	const region = ref('');
	const district = ref('');
	const commune = ref('');
	const fokontany = ref('');


	const user_id = ref('')
	const usernameAdmin = ref('')
	const emailAdmin = ref('')

	const update = ref()


	const utilisateurId = ref('')
	const allElecteurs = ref()
	const AllElecteurs = ref()


	const controlleurRegion = ref()
	const operateurSaisieRegion = ref()
	const controlleurDistrict = ref()
	const operateurSaisieDistrict = ref()
	const controlleurAnneeElectorale = ref({})
	const operateurSaisieAnneeElectorale = ref({})


	function getUserInfo(userId) {
		show.showSpinner = true;

		axios.get(`${URL}/api/electeur/user/${userId}`, {
			headers: {
				"Content-Type": "application/json"
			}

		}).then((response) => {
			if (response.status === 200) {


				const data = response.data;
				nomComplet.value = data.nomComplet

				utilisateurId.value = response.data.id

				profession.value = data.profession;
				adresse.value = data.adresse;
				numeroCIN.value = data.numeroCIN;
				dateDelivreCIN.value = data.dateDelivreCIN;
				lieuDelivreCIN.value = data.lieuDelivreCIN;
				carteElecteur.value = data.carteElecteur;
				sexe.value = data.sexe;
				lieuNaissance.value = data.lieuNaissance;
				filiation.value = data.filiation;
				dateNaissance.value = data.dateNaissance;
				telephone.value = data.telephone;
				dateInscription.value = data.dateInscription;

				region.value = data.region;
				district.value = data.district;
				commune.value = data.commune;
				fokontany.value = data.fokontany;

				let role = JSON.parse(localStorage.getItem('usersRole'))


				if (role === 'Contrôleur') {
					controlleurRegion.value = response.data.region
					controlleurDistrict.value = response.data.district
					anneeElectorale.getByIdAnnees(response.data.annee_electorale_id)
					controlleurAnneeElectorale.value = anneeElectorale.oneAnneeData

				}
				if (role === 'Opérateur de saisie') {


					operateurSaisieRegion.value = response.data.region
					operateurSaisieDistrict.value = response.data.district
					anneeElectorale.getByIdAnnees(response.data.annee_electorale_id)
					operateurSaisieAnneeElectorale.value = anneeElectorale.oneAnneeData


				}

				show.showAlert = true;

				show.showAlertType = 'success';
				show.showAlertMessage = 'Informations récupérées avec succès';
			} else {
				// show.showAlert = true;
				// show.showAlertType = 'warning';
				// // show.showAlertMessage = 'Échec de la récupération des informations';

			}


			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		}).catch((err) => {
			show.showAlertType = 'danger';
			show.showAlertMessage = 'Erreur lors de la récupération des informations';
			console.error(err);

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		}). finally(() => {
			show.showSpinner = false;
		});
	}

	function updateUserInfo(userId) {
		show.showSpinner = true;

		let formData = {
			nomComplet: nomComplet.value,
			profession: profession.value,
			adresse: adresse.value,
			numeroCIN: numeroCIN.value,
			dateDelivreCIN: dateDelivreCIN.value,
			lieuDelivreCIN: lieuDelivreCIN.value,
			carteElecteur: carteElecteur.value,
			sexe: sexe.value,
			lieuNaissance: lieuNaissance.value,
			filiation: filiation.value,
			dateNaissance: dateNaissance.value,
			telephone: telephone.value,
			dateInscription: dateInscription.value,

			region: region.value,
			district: district.value,
			commune: commune.value,
			fokontany: fokontany.value,

			user_id: auth.userId,
			username: usernameAdmin.value,
			email: emailAdmin.value


		};


		axios.put(`${URL}/api/electeur/${
			userId
		}`, formData, {
			headers: {
				"Content-Type": "application/json"
			}
		}).then((response) => {
			show.showAlert = true;


			if (response.status === 200) {
				show.showAlertType = 'success';
				show.showAlertMessage = 'Informations mises à jour avec succès';
			} else {
				show.showAlertType = 'warning';
				show.showAlertMessage = 'Échec de la mise à jour des informations';
			}

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		}).catch((err) => {
			show.showAlertType = 'danger';
			show.showAlertMessage = 'Erreur lors de la mise à jour des informations';
			console.error(err);

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		}). finally(() => {
			show.showSpinner = false;
		});
	}

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	async function createUtilisateur(formData) {
		show.showSpinner = true;

		try {
			const response = await axios.post(`${URL}/api/electeur/user`, formData, {
				headers: {
					'Content-Type': 'application/json'
				}
			});

			if (response.status === 201) {
				show.showAlertType = 'success';
				show.showAlertMessage = 'Utilisateur et électeur créés avec succès';

				await getElecteur(formData.annee_electorale_id)


				// Exemple : nombre entier aléatoire entre 1 et 100
				newUtilisateur.value = getRandomInt(1, 100);

			} else {
				show.showAlertType = 'warning';
				show.showAlertMessage = 'Échec de la création de l\'utilisateur et de l\'électeur';
			}

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		} catch (err) {
			show.showAlertType = 'danger';
			show.showAlertMessage = 'Erreur lors de la création de l\'utilisateur et de l\'électeur';
			console.error(err);

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		} finally {
			show.showSpinner = false;
		}
	}


	async function updateRole(formData, annee_electorale_id) {
		show.showSpinner = true;

		try {
			const response = await axios.put(`${URL}/api/electeur/user/role`, formData, {
				headers: {
					'Content-Type': 'application/json'
				}
			});
			await getElecteur(annee_electorale_id)
			update.value = Math.random()


			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		} catch (err) {
			show.showAlertType = 'danger';
			show.showAlertMessage = 'Erreur lors de la création de l\'utilisateur et de l\'électeur';
			console.error(err);

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		} finally {
			show.showSpinner = false;
		}
	}


	async function getElecteur(anneeId) {
		show.showSpinner = true;

		try {
			const response = await axios.get(`${URL}/api/electeurs/annee/${anneeId}`, {
				headers: {
					'Content-Type': 'application/json'
				}
			});

			if (response.status === 200) {
				const data = response.data;
				allElecteurs.value = Object.values(response.data.electeurs)


				show.showAlert = true;
				show.showAlertType = 'success';
				show.showAlertMessage = 'Informations récupérées avec succès';
			} else {
				show.showAlert = true;
				show.showAlertType = 'warning';
				show.showAlertMessage = 'Échec de la récupération des informations';
			}

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		} catch (err) {
			show.showAlertType = 'danger';
			show.showAlertMessage = 'Erreur lors de la récupération des informations';
			console.error(err);

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		} finally {
			show.showSpinner = false;
		}
	}


	onMounted(() => {


		const user = JSON.parse(localStorage.getItem("user"));
		if (user && user.id) {
			getUserInfo(user.id);
		}
	});

	return {
		controlleurAnneeElectorale,
		operateurSaisieAnneeElectorale,
		controlleurRegion,
		operateurSaisieDistrict,
		operateurSaisieRegion,
		controlleurDistrict,
		updateRole,
		anneeSelected,
		regionSelected,
		districtSelected,

		region,
		district,
		commune,
		fokontany,

		utilisateurId,
		user_id,
		user,
		nom,
		prenom,
		nomComplet,
		profession,
		adresse,
		numeroCIN,
		dateDelivreCIN,
		lieuDelivreCIN,
		carteElecteur,
		createUtilisateur,
		getElecteur,
		sexe,
		lieuNaissance,
		filiation,
		dateNaissance,
		newUtilisateur,
		telephone,
		dateInscription,
		usernameAdmin,
		emailAdmin,
		allElecteurs,
		AllElecteurs,
		update,
		getUserInfo,
		updateUserInfo
	};
});
