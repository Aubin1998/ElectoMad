import {defineStore} from "pinia";
import {ref, onMounted} from "vue";
import {useShow} from "@/stores/show";
import {useUrl} from "@/stores/url";
import axios from "axios";
import {useAuth} from "./auth";
import {useUtilisateur} from "./utilisateur";

export const useAnneeElectorale = defineStore('AnneeElectorale', () => {
	const show = useShow();
	const URL = useUrl().url;
	const auth = useAuth();
	const utilisateur = useUtilisateur();
	const anneeElectoraleChoisi = ref()
	const annee = ref()
	const descriptionAnnee = ref()
	const allanneeData = ref()
	const voirData = ref()
	const modifierData = ref()
	const enregistrerData = ref()
	const supprimerData = ref()
	const filteredanneeElectorale = ref()
	const allanneeElectorale = ref()

	const oneAnneeData = ref({})


	function getAnnees() {
		show.showSpinner = true;
		axios.get(`${URL}/api/anneeElectorale`, {
			headers: {
				"Content-Type": "application/json"
			}
		}).then((response) => {

			if (response.status === 200) {
				allanneeData.value = response.data

			}


		}).catch((err) => {
			show.showAlertType = 'danger';
			show.showAlertMessage = 'Erreur lors de la récupération des années';
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
	function getByIdAnnees(id) {

		axios.get(`${URL}/api/anneeElectorale/${id}`, {
			headers: {
				"Content-Type": "application/json"
			}
		}).then((response) => {
			oneAnneeData.value = response.data
			utilisateur.controlleurAnneeElectorale = response.data
			utilisateur.operateurSaisieAnneeElectorale = response.data


		}).catch((err) => {
			console.log(err);

		})
	}

	function createAnnee() {

		let formData = {
			annee: annee.value,
			descriptionAnnee: descriptionAnnee.value
		}


		show.showSpinner = true;
		axios.post(`${URL}/api/anneeElectorale`, formData, {
			headers: {
				Authorization: `Bearer ${
					auth.token
				}`
			}
		}).then((response) => {

			if (response.status === 201) {
				getAnnees()


			}


		}).catch((err) => {
			show.showAlertType = 'danger';
			show.showAlertMessage = 'Erreur lors de la création de l\'année';
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

	function updateAnnee(id) {


		let updatedAnnee = {
			annee: annee.value,
			descriptionAnnee: descriptionAnnee.value
		}
		show.showSpinner = true;
		axios.put(`${URL}/api/anneeElectorale/${id}`, updatedAnnee, {
			headers: {
				Authorization: `Bearer ${
					auth.token
				}`
			}
		}).then((response) => {
			if (response.status === 200) {
				getAnnees()

			}
		}).catch((err) => {
			show.showAlertType = 'danger';
			show.showAlertMessage = 'Erreur lors de la mise à jour de l\'année';
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

	function deleteAnnee(id) {
		show.showSpinner = true;
		axios.delete(`${URL}/api/anneeElectorale/${id}`, {
			headers: {
				"Content-Type": "application/json"
			}
		}).then((response) => {

			if (response.status === 204) {
				show.showModalAnneSupprimer = false
				getAnnees()
				show.showAlert = true;
				show.showAlertType = 'success';
				show.showAlertMessage = 'Année électorale supprimée avec succès';
			} else {
				show.showAlert = true;
				show.showAlertType = 'warning';
				show.showAlertMessage = 'Échec de la suppression de l\'année';
			}

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		}).catch((err) => {
			show.showAlertType = 'danger';
			show.showAlertMessage = 'Erreur lors de la suppression de l\'année';
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
		getAnnees()
	});

	return {
		getByIdAnnees,
		oneAnneeData,
		allanneeElectorale,
		filteredanneeElectorale,
		anneeElectoraleChoisi,
		supprimerData,
		enregistrerData,
		modifierData,
		voirData,
		allanneeData,
		descriptionAnnee,

		annee,
		getAnnees,
		createAnnee,
		updateAnnee,
		deleteAnnee
	};
});
