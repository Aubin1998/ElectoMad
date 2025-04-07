import {defineStore} from "pinia";
import {ref, onMounted} from "vue";
import {useShow} from "@/stores/show";
import {useAuth} from "@/stores/auth";
import {useUrl} from "@/stores/url";
import {useAnneeElectorale} from "@/stores/anneeElectorale";
import axios from "axios";

export const useDelegue = defineStore('Delegue', () => {
	const show = useShow();
	const auth = useAuth();
	const anneeElectorale = useAnneeElectorale();
	const URL = useUrl().url;


	const listCandidats = ref([])


	function getCandidatByAnneeElectoral(id) {
		axios.get(`${URL}/api/candidats/annee/${id}`, {
			headers: {
				"Content-Type": "application/json"
			}

		}).then((response) => {
			console.log((response.data));
			listCandidats.value = response.data


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

	function postDeleguer(data) {
		axios.post(`${URL}/api/delegues`, data, {
			headers: {
				"Content-Type": "application/json"
			}
		}).then((response) => {
			console.log(response.data);
			show.modalAssignerDeleduer = false

















		}).catch((err) => {
			show.showAlertType = 'danger';
			show.showAlertMessage = 'Erreur lors de l\'envoi des informations';
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

	const listDelegues = ref([])


	function filterDelegue(anneeId, region, commune, district, fokontany) {
		axios.get(`${URL}/api/delegues/filter/${anneeId}/${region}/${commune}/${district}/${fokontany}`).then((response) => {
			console.log("Délégués récupérés :", response.data);
			listDelegues.value = response.data
		}).catch((error) => {
			console.error("Erreur lors de la récupération des délégués :", error);
		});
	}


	function deleteDelegue(id) {
		axios.delete(`${URL}/api/delegues/${id}`).then((response) => {
			console.log("Délégués récupérés :", response.data);
		}).catch((error) => {
			console.error("Erreur lors de la récupération des délégués :", error);
		});
	}

	return {
		getCandidatByAnneeElectoral,
		listCandidats,
		postDeleguer,
		deleteDelegue,
		filterDelegue,
		listDelegues
	};
});
