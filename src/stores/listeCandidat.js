import {defineStore} from "pinia";
import {ref, onMounted} from "vue";
import axios from "axios";
import {useShow} from "@/stores/show";
import {useUrl} from "@/stores/url";
import {useAuth} from "./auth";
import {useUtilisateur} from "./utilisateur";


export const uselisteCandidat = defineStore('ListeCandidat', () => {
	const show = useShow();
	const URL = useUrl().url;
	const auth = useAuth();
	const utilisateur = useUtilisateur();
	const regionCandidat = ref('')
	const districtCandidat = ref('')
	const communeCandidat = ref('')
	const provinceCandidat = ref('')


	const declarationHonneurBiens = ref();
	const certificatNationalite = ref();
	const declarationHonneurImpôts = ref();
	const certificatAdministrationFiscale = ref();
	const copieCarteElecteur = ref();
	const declarationProbite = ref();
	const copieRecipissePatrimoine = ref();

	const matriceSupportElectronique = ref();
	const quittanceContribution = ref();
	const declarationHonneurConstitution = ref();
	const attestationInvestiture = ref();
	const certificatResidence = ref();
	const casierJudiciaire = ref();
	const copieActeNaissance = ref();
	const annee_electorale_id = ref();


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


	const allCandidatData = ref();
	const voirData = ref();
	const modifierData = ref();
	const enregistrerData = ref();
	const supprimerData = ref();
	const modifierCandidatData = ref();
	const allListeCandidat = ref();
	const voirCandidatData = ref()


	const ModifierdeclarationHonneurBiens = ref('')
	const ModifiercertificatNationalite = ref('')
	const ModifierdeclarationHonneurImpôts = ref('')
	const ModifiercertificatAdministrationFiscale = ref('')
	const ModifiercopieCarteElecteur = ref('')
	const ModifierdeclarationProbite = ref('')
	const ModifiercopieRecipissePatrimoine = ref('')
	const ModifiermatriceSupportElectronique = ref('')
	const ModifierquittanceContribution = ref('')
	const ModifierdeclarationHonneurConstitution = ref('')
	const ModifierattestationInvestiture = ref('')
	const ModifiercertificatResidence = ref('')
	const ModifiercasierJudiciaire = ref('')
	const ModifiercopieActeNaissance = ref('')
	const Modifierannee_electorale_id = ref('')
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
	const Modifieremail = ref('')
	const Modifieruser_id = ref('')
	const ModifierIdCandidat = ref('')
	const randomVal = ref(0)


	async function getCandidats() {
		show.showSpinner = true;
		axios.get(`${URL}/api/allcandidat`, {
			headers: {
				"Content-Type": "application/json"
			}
		}).then((response) => {

			if (response.status === 200) {
				randomVal.value += Math.random()


				allCandidatData.value = response.data;
				show.showAlert = true;
				allListeCandidat.value = response.data.candidats;


				show.showAlertType = 'success';
				show.showAlertMessage = 'Données des candidats récupérées avec succès';
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
			show.showAlertMessage = 'Erreur lors de la récupération des données des candidats';
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

	function createCandidat() {
		let formData = {

			declarationHonneurBiens: declarationHonneurBiens.value,
			certificatNationalite: certificatNationalite.value,
			declarationHonneurImpôts: declarationHonneurImpôts.value,
			certificatAdministrationFiscale: certificatAdministrationFiscale.value,
			copieCarteElecteur: copieCarteElecteur.value,
			declarationProbite: declarationProbite.value,
			copieRecipissePatrimoine: copieRecipissePatrimoine.value,
			matriceSupportElectronique: matriceSupportElectronique.value,
			quittanceContribution: quittanceContribution.value,
			declarationHonneurConstitution: declarationHonneurConstitution.value,
			attestationInvestiture: attestationInvestiture.value,
			certificatResidence: certificatResidence.value,
			casierJudiciaire: casierJudiciaire.value,
			copieActeNaissance: copieActeNaissance.value,

			annee_electorale_id: annee_electorale_id.value,
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
			email: email.value,
			region: regionCandidat.value,
			district: districtCandidat.value,
			commune: communeCandidat.value,
			province: provinceCandidat.value


		};


		show.showSpinner = true;
		axios.post(`${URL}/api/candidat`, formData, {
			headers: {
				Authorization: `Bearer ${
					auth.token
				}`
			}
		}).then((response) => {


			if (response.status === 201) {
				email.value = ''
				show.showModalAjout = false
				show.municipaux = false
				show.senateur = false

				show.showModalAjoutImage = true
				show.showCandidatDataImage = response.data
				getCandidats();


				show.showAlert = true;
				show.showAlertType = 'success';
				show.showAlertMessage = 'Candidat créé avec succès';
			} else {
				show.showAlert = true;
				show.showAlertType = 'warning';
				show.showAlertMessage = 'Échec de la création du candidat';
			}
			if (response.status === 500) {}

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		}).catch((err) => {
			show.showAlertType = 'danger';
			show.showAlertMessage = 'Erreur lors de la création du candidat';
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

	function updateCandidat(id, data) {

		let updatedData = {
			id: ModifierIdCandidat.value,
			declarationHonneurBiens: ModifierdeclarationHonneurBiens.value,
			certificatNationalite: ModifiercertificatNationalite.value,
			declarationHonneurImpôts: ModifierdeclarationHonneurImpôts.value,
			certificatAdministrationFiscale: ModifiercertificatAdministrationFiscale.value,
			copieCarteElecteur: ModifiercopieCarteElecteur.value,
			declarationProbite: ModifierdeclarationProbite.value,
			copieRecipissePatrimoine: ModifiercopieRecipissePatrimoine.value,
			matriceSupportElectronique: ModifiermatriceSupportElectronique.value,
			quittanceContribution: ModifierquittanceContribution.value,
			declarationHonneurConstitution: ModifierdeclarationHonneurConstitution.value,
			attestationInvestiture: ModifierattestationInvestiture.value,
			certificatResidence: ModifiercertificatResidence.value,
			casierJudiciaire: ModifiercasierJudiciaire.value,
			copieActeNaissance: ModifiercopieActeNaissance.value,
			annee_electorale_id: Modifierannee_electorale_id.value,

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

			email: Modifieremail.value,
			user_id: Modifieruser_id.value
		};


		show.showSpinner = true;
		axios.put(`${URL}/api/candidat/${id}`, updatedData, {
			headers: {
				Authorization: `Bearer ${
					auth.token
				}`
			}
		}).then((response) => {
			if (response.status === 200) {


				getCandidats();
				show.showAlert = true;
				show.showModalModifierCandidat = false

				show.showAlertType = 'success';
				show.showAlertMessage = 'Candidat mis à jour avec succès';
			} else {
				show.showAlert = true;
				show.showAlertType = 'warning';
				show.showAlertMessage = 'Échec de la mise à jour du candidat';
			}

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		}).catch((err) => {
			show.showAlertType = 'danger';
			show.showAlertMessage = 'Erreur lors de la mise à jour du candidat';
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

	async function deleteCandidat(id) {
		show.showSpinner = true;
		try {
			const response = await axios.delete(`${URL}/api/candidat/${id}`, {
				headers: {
					"Content-Type": "application/json"
				}
			});

			if (response.status === 200) {

				await getCandidats();
				show.showAlert = true;
				show.showModalSupprimer = false;
				show.showAlertType = 'success';
				show.showAlertMessage = 'Candidat supprimé avec succès';
			} else {
				show.showAlert = true;
				show.showAlertType = 'warning';
				show.showAlertMessage = 'Échec de la suppression du candidat';
			}

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		} catch (err) {
			show.showAlertType = 'danger';
			show.showAlertMessage = 'Erreur lors de la suppression du candidat';
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
		getCandidats();
	});

	return {
		randomVal,
		ModifierIdCandidat,
		voirCandidatData,
		modifierCandidatData,
		allListeCandidat,
		annee_electorale_id,
		provinceCandidat,
		regionCandidat,
		districtCandidat,
		communeCandidat,
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


		ModifierdeclarationHonneurBiens,
		ModifiercertificatNationalite,
		ModifierdeclarationHonneurImpôts,
		ModifiercertificatAdministrationFiscale,
		ModifiercopieCarteElecteur,
		ModifierdeclarationProbite,
		ModifiercopieRecipissePatrimoine,
		ModifiermatriceSupportElectronique,
		ModifierquittanceContribution,
		ModifierdeclarationHonneurConstitution,
		ModifierattestationInvestiture,
		ModifiercertificatResidence,
		ModifiercasierJudiciaire,
		ModifiercopieActeNaissance,
		Modifierannee_electorale_id,
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
		Modifieremail,
		Modifieruser_id,


		supprimerData,
		enregistrerData,
		modifierData,
		voirData,
		allCandidatData,
		declarationHonneurBiens,
		certificatNationalite,
		declarationHonneurImpôts,
		certificatAdministrationFiscale,
		copieCarteElecteur,
		declarationProbite,
		copieRecipissePatrimoine,
		matriceSupportElectronique,
		quittanceContribution,
		declarationHonneurConstitution,
		attestationInvestiture,
		certificatResidence,
		casierJudiciaire,
		copieActeNaissance,
		electeur_id,
		getCandidats,
		createCandidat,
		updateCandidat,
		deleteCandidat
	};
});
