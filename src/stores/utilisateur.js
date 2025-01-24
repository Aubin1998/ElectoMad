import {defineStore} from "pinia";
import {ref, onMounted} from "vue";
import {useShow} from "@/stores/show";
import {useAuth} from "@/stores/auth";
import {useUrl} from "@/stores/url";
import axios from "axios";

export const useUtilisateur = defineStore('Utilisateur', () => {
	const show = useShow();
	const auth = useAuth();
	const URL = useUrl().url;
	const user = ref({})


	const nom = ref('xxxxxxx')
	const prenom = ref('xxxxxxx')
	const nomComplet = ref('xxxxxxx');
	const profession = ref('xxxxxxx');
	const adresse = ref('xxxxxxx');
	const numeroCIN = ref('xxxxxxx');
	const dateDelivreCIN = ref('xxxxxxx');
	const lieuDelivreCIN = ref('xxxxxxx');
	const carteElecteur = ref('xxxxxxx');
	const sexe = ref('xxxxxxx');
	const lieuNaissance = ref('xxxxxxx');
	const filiation = ref('xxxxxxx');
	const dateNaissance = ref('xxxxxxx');
	const telephone = ref('xxxxxxx');
	const dateInscription = ref('xxxxxxx');

	const region = ref('xxxxxxx');
	const district = ref('xxxxxxx');
	const commune = ref('xxxxxxx');
	const fokontany = ref('xxxxxxx');


	const user_id = ref('')
	const utilisateurId = ref('')


	function getUserInfo(userId) {
		show.showSpinner = true;

		axios.get(`${URL}/api/electeur/user/${userId}`, {
			headers: {
				"Content-Type": "application/json"
			}
		}).then((response) => {
			if (response.status === 200) {
				const data = response.data;

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

			user_id: auth.userId

		};


		
		axios.put(`${URL}/api/electeur/${
			userId
		}`, formData, {
			headers: {
				"Content-Type": "application/json"
			}
		}).then((response) => {

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


	onMounted(() => {


		const user = JSON.parse(localStorage.getItem("user"));
		if (user && user.id) {
			getUserInfo(user.id);
		}
	});

	return {

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
		sexe,
		lieuNaissance,
		filiation,
		dateNaissance,
		telephone,
		dateInscription,
		getUserInfo,
		updateUserInfo
	};
});
