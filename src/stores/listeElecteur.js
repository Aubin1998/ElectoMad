import {defineStore} from "pinia";
import {ref, onMounted} from "vue";
import axios from "axios";
import {useShow} from "@/stores/show";
import {useUrl} from "@/stores/url";
import {useAuth} from "./auth";
import {useUtilisateur} from "./utilisateur";


export const uselisteElecteur = defineStore('ListeElecteur', () => {
	const show = useShow();
	const URL = useUrl().url;
	const auth = useAuth();
	const utilisateur = useUtilisateur();


	const electeur_id = ref();
	const nomComplet = ref()
	const dateNaissance = ref()
	const lieuNaissance = ref()
	const sexe = ref()
	const filiation = ref()
	const numeroCIN = ref()
	const dateDelivreCIN = ref()
	const lieuDelivreCIN = ref()
	const adresse = ref()
	const profession = ref()
	const carteElecteur = ref()
	const telephone = ref()
	const dateInscription = ref()

	const user_id = ref()
	const username = ref()
	const email = ref()
	const password = ref()


	const voirData = ref();
	const modifierData = ref();
	const enregistrerData = ref();
	const supprimerData = ref();

	const allElecteurData = ref();

	const annee_electorale_id = ref();

	const modifierElecteurData = ref();
	const voirElecteurData = ref();

	

	


	const Modifierelecteur_id = ref('')
	const ModifiernomComplet = ref('')
	const Modifierprofession = ref('')
	const Modifieradresse = ref('')
	const ModifiernumeroCIN = ref('')
	const ModifierdateDelivreCIN = ref('')
	const ModifierlieuDelivreCIN = ref('')
	const ModifiercarteElecteur = ref('')
	const Modifiersexe = ref('')
	const ModifierlieuNaissance = ref('')
	const Modifierfiliation = ref('')
	const ModifierdateNaissance = ref('')
	const Modifiertelephone = ref('')
	const ModifierdateInscription = ref('')
	const Modifierannee_electorale_id = ref('')
	const allListeElecteur = ref('')


	
	const Modifieruser_id = ref('')


	function getElecteurs() {
		show.showSpinner = true;
		axios.get(`${URL}/api/allElecteur`, {
			headers: {
				"Content-Type": "application/json"
			}
		}).then((response) => {
			console.log('responseData', response.data);

			if (response.status === 200) {
				allElecteurData.value = response.data;
				show.showAlert = true;
				allListeElecteur.value = response.data.electeurs;
				console.log("type, ", response.data.electeurs[0]);

				show.showAlertType = 'success';
				show.showAlertMessage = 'Données des électeurs récupérées avec succès';
			} else {
				show.showAlert = true;
				show.showAlertType = 'warning';
				show.showAlertMessage = 'Échec de la récupération des données des candidats';
			}

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		}).catch((err) => {
			show.showAlertType = 'danger';
			show.showAlertMessage = 'Erreur lors de la récupération des données des électeurs';
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

	function createElecteur() {
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
			annee_electorale_id: annee_electorale_id.value,
			email: email.value
		};

		console.log('formDataElecteur', formData);
		console.log('aaaaaaa');

		show.showSpinner = true;
		axios.post(`${URL}/api/electeur`, formData, {
			headers: {
				Authorization: `Bearer ${
					auth.token
				}`
			}
		}).then((response) => {
			console.log('responseData', response.data);

			if (response.status === 201) {
				email.value = ''
				getElecteurs();

				show.showAlert = true;
				show.showAlertType = 'success';
				show.showAlertMessage = 'Electeur créé avec succès';

				  // Réinitialiser les champs d'entrée
				  nomComplet.value = '';
				  profession.value = '';
				  adresse.value = '';
				  numeroCIN.value = '';
				  dateDelivreCIN.value = '';
				  lieuDelivreCIN.value = '';
				  carteElecteur.value = '';
				  sexe.value = '';
				  lieuNaissance.value = '';
				  filiation.value = '';
				  dateNaissance.value = '';
				  telephone.value = '';
				  dateInscription.value = '';
				  annee_electorale_id.value = '';
				  email.value = '';

			} else {
				show.showAlert = true;
				show.showAlertType = 'warning';
				show.showAlertMessage = 'Échec de la création électeur';
			}
			if (response.status === 500) {
				console.log('qzsdefrtytujiklo');

			}

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		}).catch((err) => {
			show.showAlertType = 'danger';
			show.showAlertMessage = 'Erreur lors de la création électeur';
			console.error(err);
			console.log('qzsdefrtytujiklo');
			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		}). finally(() => {
			show.showSpinner = false;
		});
	}

	function updateElecteur(id, data) {

		let updatedData = {

			electeur_id: Modifierelecteur_id.value,
			nomComplet: ModifiernomComplet.value,
			profession: Modifierprofession.value,
			adresse: Modifieradresse.value,
			numeroCIN: ModifiernumeroCIN.value,
			dateDelivreCIN: ModifierdateDelivreCIN.value,
			lieuDelivreCIN: ModifierlieuDelivreCIN.value,
			carteElecteur: ModifiercarteElecteur.value,
			sexe: Modifiersexe.value,
			lieuNaissance: ModifierlieuNaissance.value,
			filiation: Modifierfiliation.value,
			dateNaissance: ModifierdateNaissance.value,
			telephone: Modifiertelephone.value,
			dateInscription: ModifierdateInscription.value,
			annee_electorale_id: annee_electorale_id.value,
			email: email.value,

			user_id: Modifieruser_id.value
		};

		console.log('updatedData', updatedData);


		show.showSpinner = true;
		axios.put(`${URL}/api/electeur/${id}`, updatedData, {
			headers: {
				Authorization: `Bearer ${
					auth.token
				}`
			}
		}).then((response) => {
			if (response.status === 200) {

				console.log('responseData', response.data);

				getElecteurs();
				show.showAlert = true;
				show.showModalModifierElecteur = false

				show.showAlertType = 'success';
				show.showAlertMessage = 'Electeur mis à jour avec succès';
			} else {
				show.showAlert = true;
				show.showAlertType = 'warning';
				show.showAlertMessage = 'Échec de la mise à jour électeur';
			}

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		}).catch((err) => {
			show.showAlertType = 'danger';
			show.showAlertMessage = 'Erreur lors de la mise à jour électeur';
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

	function deleteElecteur(id) {
		show.showSpinner = true;
		axios.delete(`${URL}/api/electeur/${id}`, {
			headers: {
				"Content-Type": "application/json"
			}
		}).then((response) => {
			console.log('responseData', response.status);

			if (response.status === 200) {
				getElecteurs();
				show.showAlert = true;
				show.showModalSupprimer = false;
				show.showAlertType = 'success';
				show.showAlertMessage = 'Electeur supprimé avec succès';
			} else {
				show.showAlert = true;
				show.showAlertType = 'warning';
				show.showAlertMessage = 'Échec de la suppression électeur';
			}

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		}).catch((err) => {
			show.showAlertType = 'danger';
			show.showAlertMessage = 'Erreur lors de la suppression électeur';
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
		getElecteurs();
	});

	return {
		voirElecteurData,
		modifierElecteurData,
		Modifierannee_electorale_id,
		annee_electorale_id,
		nomComplet,
		dateNaissance,
		lieuNaissance,
		sexe,
		filiation,
		numeroCIN,
		dateDelivreCIN,
		lieuDelivreCIN,
		adresse,
		profession,
		carteElecteur,
		telephone,
		dateInscription,
		username,
		email,
		password,


		Modifierelecteur_id,
		ModifiernomComplet,
		Modifierprofession,
		Modifieradresse,
		ModifiernumeroCIN,
		ModifierdateDelivreCIN,
		ModifierlieuDelivreCIN,
		ModifiercarteElecteur,
		Modifiersexe,
		ModifierlieuNaissance,
		Modifierfiliation,
		ModifierdateNaissance,
		Modifiertelephone,
		ModifierdateInscription,
		Modifieruser_id,


		supprimerData,
		enregistrerData,
		modifierData,
		voirData,
		allElecteurData,

		electeur_id,
		getElecteurs,
		createElecteur,
		updateElecteur,
		deleteElecteur
	};
});
