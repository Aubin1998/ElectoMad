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
	const supprimerElecteurData = ref()
	const electeur_id = ref();
	const nomComplet = ref('');
	const dateNaissance = ref('');
	const lieuNaissance = ref('');
	const sexe = ref('');
	const filiation = ref('');
	const numeroCIN = ref('');
	const dateDelivreCIN = ref('');
	const lieuDelivreCIN = ref('');
	const adresse = ref('');
	const profession = ref('');
	const carteElecteur = ref('');
	const telephone = ref('');
	const dateInscription = ref('');

	const region = ref('');
	const district = ref('');
	const commune = ref('');
	const fokontany = ref('');

	const user_id = ref('');
	const username = ref('');
	const email = ref('');
	const password = ref('');

	const voirData = ref();
	const modifierData = ref();
	const enregistrerData = ref();
	const supprimerData = ref();

	const allElecteurData = ref();

	const annee_electorale_id = ref();

	const modifierElecteurData = ref();
	const voirElecteurData = ref();


	const Modifierelecteur_id = ref('');
	const ModifiernomComplet = ref('');
	const Modifierprofession = ref('');
	const Modifieradresse = ref('');
	const ModifiernumeroCIN = ref('');
	const ModifierdateDelivreCIN = ref('');
	const ModifierlieuDelivreCIN = ref('');
	const ModifiercarteElecteur = ref('');
	const Modifiersexe = ref('');
	const ModifierlieuNaissance = ref('');
	const Modifierfiliation = ref('');
	const ModifierdateNaissance = ref('');
	const Modifiertelephone = ref('');
	const ModifierdateInscription = ref('');
	const Modifierannee_electorale_id = ref('');

	const Modifierregion = ref('');
	const Modifierdistrict = ref('');
	const Modifiercommune = ref('');
	const Modifierfokontany = ref('');
	const params = ref()
	const paramsId = ref()
	const listElecteursFiltrer = ref([])

	const allListeElecteur = ref('');
	const listBureaux = ref();
	const Modifieruser_id = ref('');

	const electeurs = ref([]);

	const electeurFind = ref()
	const presidentData = ref(null)
	const find = ref(false)


	const fileUpload = ref()


	function searchElecteur(numeroCIN, nomComplet) {

		show.showSpinner = true;

		let formData = {
			numeroCIN: numeroCIN,
			nomComplet: nomComplet
		}


		axios.post(`${URL}/api/search-electeur`, formData, {
			headers: {
				Authorization: `Bearer ${
					auth.token
				}`
			}
		}).then((response) => {


			if (response.data.status === 'success') { // Stockage des données dans l'état du store si la recherche est réussie

				electeurFind.value = response.data.data;
				setTimeout(() => {
					find.value = true
				}, 3000);

				// Afficher un message de succès
				show.showAlert = true;
				show.showAlertType = 'success';
				show.showAlertMessage = 'Électeur trouvé avec succès';
			} else { // Si l'électeur n'est pas trouvé ou une autre erreur, afficher un message d'avertissement
				show.showAlert = true;
				show.showAlertType = 'warning';
				show.showAlertMessage = response.data.message;
			}

			// Masquer l'alerte après 3 secondes
			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);

		}).catch((err) => { // Gestion des erreurs
			show.showAlertType = 'danger';
			show.showAlertMessage = 'Erreur lors de la récupération des données de l\'électeur';
			console.error(err);

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);

		}). finally(() => { // Masquer le spinner après la fin de la requête
			show.showSpinner = false;
		});
	}

	// probleme finnd id annee
	function getElecteurs() { // Retrieve and parse the 'anneeSelectionne' from localStorage
		const anneeData = JSON.parse(localStorage.getItem('anneeSelectionne'));
		let utilisateur = JSON.parse(localStorage.getItem('utilisateur'))

		if (! utilisateur) {
			utilisateur = JSON.parse(localStorage.getItem('utilisateur'))
		}
		// Determine the 'anneeElectoraleId'
		const anneeElectoraleId = anneeData ?. id || utilisateur[0] ?. annee_electorale_id;


		// Show spinner while fetching data
		show.showSpinner = true;

		axios.get(`${URL}/api/electeurs/${anneeElectoraleId}`, {
			headers: {
				"Content-Type": "application/json"
			},
			params: {
				annee_electorale_id: anneeElectoraleId,
				region: localStorage.getItem('region'),
				district: localStorage.getItem('district'),
				commune: localStorage.getItem('commune'),
				fokontany: localStorage.getItem('fokontany')
			}
		}).then((response) => {
			if (response.status === 200) { // Update the electoral data
				electeurs.value = response.data;
				allElecteurData.value = response.data;
				allListeElecteur.value = response.data.electeurs;

				// Show success alert
				show.showAlert = true;
				show.showAlertType = 'success';
				show.showAlertMessage = 'Données des électeurs récupérées avec succès';
			} else { // Show warning alert if data retrieval fails
				show.showAlert = true;
				show.showAlertType = 'warning';
				show.showAlertMessage = 'Échec de la récupération des données des électeurs';
			}

			// Hide alert after 3 seconds
			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		}).catch((err) => { // Show error alert if an error occurs
			show.showAlert = true;
			show.showAlertType = 'danger';
			show.showAlertMessage = 'Erreur lors de la récupération des données des électeurs';
			console.error(err);

			// Hide alert after 3 seconds
			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		}). finally(() => { // Hide spinner after the request is complete
			show.showSpinner = false;
		});
	}


	function getElecteursWithParam(anneeid, region, district, commune) {
		// Retrieve and parse the 'anneeSelectionne' from localStorage

		// Show spinner while fetching data
		show.showSpinner = true;

		axios.get(`${URL}/api/electeurs/${anneeid}`, {
			headers: {
				"Content-Type": "application/json"
			},
			params: {
				annee_electorale_id: anneeid,
				region: region,
				district: localStorage.getItem('district'),
				commune: localStorage.getItem('commune'),
				fokontany: localStorage.getItem('fokontany')
			}
		}).then((response) => {
			if (response.status === 200) { // Update the electoral data
				electeurs.value = response.data;
				allElecteurData.value = response.data;
				allListeElecteur.value = response.data.electeurs;

				// Show success alert
				show.showAlert = true;
				show.showAlertType = 'success';
				show.showAlertMessage = 'Données des électeurs récupérées avec succès';
			} else { // Show warning alert if data retrieval fails
				show.showAlert = true;
				show.showAlertType = 'warning';
				show.showAlertMessage = 'Échec de la récupération des données des électeurs';
			}

			// Hide alert after 3 seconds
			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		}).catch((err) => { // Show error alert if an error occurs
			show.showAlert = true;
			show.showAlertType = 'danger';
			show.showAlertMessage = 'Erreur lors de la récupération des données des électeurs';
			console.error(err);

			// Hide alert after 3 seconds
			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		}). finally(() => { // Hide spinner after the request is complete
			show.showSpinner = false;
		});
	}

	function createElecteur() {


		let anneeselect = JSON.parse(localStorage.getItem('anneeSelectionne')).id


		// listeElecteur.annee_electorale_id

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
			annee_electorale_id: anneeselect,
			email: email.value,

			region: JSON.parse(localStorage.getItem('selectRegion')),
			district: JSON.parse(localStorage.getItem('selectDistrict')),
			commune: JSON.parse(localStorage.getItem('selectCommune')),
			fokontany: JSON.parse(localStorage.getItem('selectFokontany'))
		};


		show.showSpinner = true;
		axios.post(`${URL}/api/electeur`, formData, {
			headers: {
				Authorization: `Bearer ${
					auth.token
				}`
			}
		}).then((response) => {
			if (response.status === 201) {


				if (fileUpload.value) {
					onFileChange(fileUpload.value, response.data.electeur.id)
				}


				email.value = '';
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

				region.value = '';
				district.value = '';
				commune.value = '';
				fokontany.value = '';
			} else {
				show.showAlert = true;
				show.showAlertType = 'warning';
				show.showAlertMessage = 'Échec de la création électeur';
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

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		}). finally(() => {
			show.showSpinner = false;
		});
	}


	function createElecteurSaisie() {


		let anneeselect = JSON.parse(localStorage.getItem('utilisateur'))[0].annee_electorale_id
		console.log(anneeselect);


		// listeElecteur.annee_electorale_id

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
			annee_electorale_id: anneeselect,
			email: email.value,

			region: JSON.parse(localStorage.getItem('selectRegion')),
			district: JSON.parse(localStorage.getItem('selectDistrict')),
			commune: JSON.parse(localStorage.getItem('selectCommune')),
			fokontany: JSON.parse(localStorage.getItem('selectFokontany'))
		};


		show.showSpinner = true;
		axios.post(`${URL}/api/electeur`, formData, {
			headers: {
				Authorization: `Bearer ${
					auth.token
				}`
			}
		}).then((response) => {
			if (response.status === 201) {


				if (fileUpload.value) {
					onFileChange(fileUpload.value, response.data.electeur.id)
				}


				email.value = '';
				getElecteurs();

				show.showAlert = true;
				show.showAlertType = 'success';
				show.showAlertMessage = 'Electeur créé avec succès';
				show.showModallAddElecteur = false

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

				region.value = '';
				district.value = '';
				commune.value = '';
				fokontany.value = '';
			} else {
				show.showAlert = true;
				show.showAlertType = 'warning';
				show.showAlertMessage = 'Échec de la création électeur';
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

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		}). finally(() => {
			show.showSpinner = false;
		});
	}

	const onFileChange = async (event, electeur_id) => {
		const file = event;
		if (! file) 
			return;
		


		const formData = new FormData();
		formData.append("file", file);

		try {
			const response = await axios.post(` ${URL}/api/electeur/${electeur_id}/upload`, formData, {
				headers: {
					"Content-Type": "multipart/form-data"
				}
			});

		} catch (error) {
			console.error("Erreur lors de l'upload de l'image :", error);
		}
	};


	function updateElecteur(id, objet) {


		show.showSpinner = true;
		axios.put(`${URL}/api/electeur/${id}`, objet, {
			headers: {
				Authorization: `Bearer ${
					auth.token
				}`
			}
		}).then((response) => {


			if (response.status === 200) {
				show.electeurDistrict = false
				getElecteurDistrict()

				show.showAlert = true;
				show.showModalModifierElecteur = false;

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

			if (response.status === 200) {
				getElecteurs();
				show.showModalSupprimerElecteur = false
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

	const allElecteurDataDistrict = ref()
	const allElecteurDataDistrictlength = ref()
	const nonlistVerifierNumber = ref(0)


	const listVerifier = ref([])
	const nolistVerifier = ref([])

	function getElecteurDistrict() {


		let utilisateur = JSON.parse(localStorage.getItem('utilisateur'))

		let district = utilisateur[0].district
		let region = utilisateur[0].region
		let idAnnee = utilisateur[0].annee_electorale_id
		console.log('utilisateur', utilisateur[0]);


		show.showSpinner = true;

		axios.get(`${URL}/api/electeursDistrict/${idAnnee}/${district}/${region}`, {
			headers: {
				"Content-Type": "application/json"
			}
		}).then((response) => {
			if (response.status === 200) {

				console.log('tester le ', response.data);

				listVerifier.value = response.data.filter((electeur) => electeur.verifier === 1)
				nolistVerifier.value = response.data.filter((electeur) => electeur.verifier === 0)
				console.log('verifier', listVerifier.value);
				console.log('noverifier', nolistVerifier.value);


				allElecteurDataDistrict.value = response.data;
				allElecteurDataDistrictlength.value = response.data.length

				for (let index = 0; index < response.data.length; index++) {
					const element = response.data[index];


					if (element.verifier === 1) {

						nonlistVerifierNumber.value += 1
					}
				}


				show.showAlert = true;
				show.showAlertType = 'success';
				show.showAlertMessage = 'Données des électeurs récupérées avec succès';
			} else {
				show.showAlert = true;
				show.showAlertType = 'warning';
				show.showAlertMessage = 'Échec de la récupération des données des électeurs';
			}

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		}).catch((err) => {
			show.showAlert = true;
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

	async function getElecteurDistrictAll(param, anneeId) {
		try {
			show.showSpinner = true;

			const response = await axios.get(`${URL}/api/electeursDistrict/${anneeId}`, {
				headers: {
					"Content-Type": "application/json"
				},
				params: param
			});

			return response.data;
		} catch (err) {
			show.showAlert = true;
			show.showAlertType = 'danger';
			show.showAlertMessage = 'Erreur lors de la récupération des données des électeurs';
			console.error(err);

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);

			return null;
		} finally {
			show.showSpinner = false;
		}
	}


	function verifierElecteur(id) {
		show.showSpinner = true;

		axios.put(`${URL}/api/electeurs/${id}/valider`, {}, {
			headers: {
				"Content-Type": "application/json"
			}
		}).then((response) => {
			if (response.status === 200) {
				getElecteurDistrict(params.value, paramsId.value);
				show.showAlert = true;
				show.showAlertType = 'success';
				show.showAlertMessage = 'Électeur vérifié avec succès';
			} else {
				show.showAlert = true;
				show.showAlertType = 'warning';
				show.showAlertMessage = 'Échec de la vérification de l\'électeur';
			}

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		}).catch((err) => {
			show.showAlert = true;
			show.showAlertType = 'danger';
			show.showAlertMessage = 'Erreur lors de la vérification de l\'électeur';
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


	function getElecteurFiltrer(param) {

		show.showSpinner = true;

		axios.get(`${URL}/api/electeurs/filter`, {
			params: param,
			headers: {
				"Content-Type": "application/json"
			}
		}).then((response) => {

			if (response.status === 200) {
				const listElecteurFilterFonkontany = filterElecteurs(response.data, param);
				listElecteursFiltrer.value = listElecteurFilterFonkontany
				show.showAlert = true;
				show.showAlertType = 'success';
				show.showAlertMessage = 'Données des électeurs récupérées avec succès';
			} else {
				show.showAlert = true;
				show.showAlertType = 'warning';
				show.showAlertMessage = 'Échec de la récupération des données des électeurs';
			}

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		}).catch((err) => {
			show.showAlert = true;
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

	function updateElecteurRole(id, role) {

		show.showSpinner = true;

		axios.put(`${URL}/api/electeurs/${id}/role`, {
			role: role
		}, {
			headers: {
				"Content-Type": "application/json"
			}
		}).then((response) => {

			if (response.status === 200) {
				presidentData.value = response.data
				show.showAlert = true;
				show.showAlertType = 'success';
				show.showAlertMessage = 'Rôle de l\'électeur mis à jour avec succès';
			} else {
				show.showAlert = true;
				show.showAlertType = 'warning';
				show.showAlertMessage = 'Échec de la mise à jour du rôle de l\'électeur';
			}

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		}).catch((err) => {
			show.showAlert = true;
			show.showAlertType = 'danger';
			show.showAlertMessage = 'Erreur lors de la mise à jour du rôle de l\'électeur';
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


	function filterElecteurs(electeurs, params) {
		return electeurs.filter(electeur => {
			return((! params.annee_electorale_id || electeur.annee_electorale_id === params.annee_electorale_id) && (! params.region || electeur.region === params.region) && (! params.district || electeur.district === params.district) && (! params.commune || electeur.commune === params.commune) && (! params.fokontany || electeur.fokontany === params.fokontany));
		});
	}

	function createBureau(formData) {


		show.showSpinner = true;
		axios.post(`${URL}/api/bureau`, formData, {
			headers: {
				"Content-Type": "application/json"
			}
		}).then((response) => {
			if (response.status === 201) {
				getBureauxByElecteurId(formData.electeur_id)
				show.showCreationBureau = false
				show.showAlert = true;
				show.showAlertType = 'success';
				show.showAlertMessage = 'Bureau créé avec succès';
			} else {
				show.showAlert = true;
				show.showAlertType = 'warning';
				show.showAlertMessage = 'Échec de la création du bureau';
			}

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		}).catch((err) => {
			show.showAlertType = 'danger';
			show.showAlertMessage = 'Erreur lors de la création du bureau';
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

	function updateBureau(id) {
		let formData = {
			nomBureau: nomBureau.value,
			adresse: adresse.value,
			responsable: responsable.value,
			dateOuverture: dateOuverture.value,
			dateFermeture: dateFermeture.value,
			region: JSON.parse(localStorage.getItem('selectRegion')),
			district: JSON.parse(localStorage.getItem('selectDistrict')),
			commune: JSON.parse(localStorage.getItem('selectCommune')),
			fokontany: JSON.parse(localStorage.getItem('selectFokontany')),
			electeur_id: electeur_id.value
		};

		show.showSpinner = true;
		axios.put(`${URL}/api/bureaux/${id}`, formData, {
			headers: {
				Authorization: `Bearer ${
					auth.token
				}`
			}
		}).then((response) => {
			if (response.status === 200) { // Réinitialiser les champs d'entrée
				nomBureau.value = '';
				adresse.value = '';
				responsable.value = '';
				dateOuverture.value = '';
				dateFermeture.value = '';
				region.value = '';
				district.value = '';
				commune.value = '';
				fokontany.value = '';
				electeur_id.value = '';

				show.showAlert = true;
				show.showAlertType = 'success';
				show.showAlertMessage = 'Bureau mis à jour avec succès';
			} else {
				show.showAlert = true;
				show.showAlertType = 'warning';
				show.showAlertMessage = 'Échec de la mise à jour du bureau';
			}

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		}).catch((err) => {
			show.showAlertType = 'danger';
			show.showAlertMessage = 'Erreur lors de la mise à jour du bureau';
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

	function getBureauxByElecteurId(electeur_id) {
		console.log(electeur_id);

		show.showSpinner = true;

		axios.get(`${URL}/api/bureaux/electeur/${electeur_id}`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${
					auth.token
				}`
			}
		}).then((response) => {
			console.log('Réponse : ', response.data[0]);

			if (response.status === 200) {
				listBureaux.value = response.data[0];
				show.showAlert = true;
				show.showAlertType = 'success';
				show.showAlertMessage = 'Données des bureaux récupérées avec succès';
			} else {
				show.showAlert = true;
				show.showAlertType = 'warning';
				show.showAlertMessage = 'Échec de la récupération des données des bureaux';
			}

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		}).catch((err) => {
			show.showAlert = true;
			show.showAlertType = 'danger';
			show.showAlertMessage = 'Erreur lors de la récupération des données des bureaux';
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


	const listElecteurByFOnkontany = ref([])


	function filterElecteurByFonkontany(anneeId, region, commune, district, fokontany) {
		axios.get(`${URL}/api/electeurs/filter/${anneeId}/${region}/${commune}/${district}/${fokontany}`).then((response) => {
			console.log("electeur récupérés :", response.data);
			listElecteurByFOnkontany.value = response.data


			listElecteursFiltrer.value = response.data

		}).catch((error) => {
			console.error("Erreur lors de la récupération des délégués :", error);
		});
	}


	function getElecteurFiltrerRole(annee_electorale_id, region, commune, district, fokontany, role) {

		show.showSpinner = true;

		axios.get(`${URL}/api/electeurs/role/${annee_electorale_id}/${region}/${commune}/${district}/${fokontany}/${role}`, {
			headers: {
				"Content-Type": "application/json"
			}
		}).then((response) => {

			console.log('complete ment ici', response.data);
			presidentData.value = response.data
			console.log('verifier ', presidentData.value);

			getBureauxByElecteurId(presidentData.value.id)

			filterElecteurByFonkontany(annee_electorale_id, region, commune, district, fokontany)


			// presidentData.value = listElecteurFilterFonkontany.find((electeur) => electeur.role === 'president des bureaux de vote');
			// getBureauxByElecteurId(presidentData.value.id)


			if (response.status === 200) {
				show.showAlert = true;
				show.showAlertType = 'success';
				show.showAlertMessage = 'Données des électeurs récupérées avec succès';
			} else {
				show.showAlert = true;
				show.showAlertType = 'warning';
				show.showAlertMessage = 'Échec de la récupération des données des électeurs';
			}

			setTimeout(() => {
				show.showAlert = false;
				show.showAlertType = '';
				show.showAlertMessage = '';
			}, 3000);
		}).catch((err) => {
			show.showAlert = true;
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

	return {
		updateElecteurRole,
		getBureauxByElecteurId,
		listElecteurByFOnkontany,
		presidentData,
		updateBureau,
		listBureaux,
		getElecteurFiltrerRole,
		filterElecteurByFonkontany,
		getElecteurFiltrer,
		createBureau,
		verifierElecteur,
		allElecteurDataDistrictlength,
		allElecteurDataDistrict,
		nonlistVerifierNumber,
		getElecteursWithParam,
		getElecteurDistrict,
		searchElecteur,
		electeurs,
		listElecteursFiltrer,
		Modifierregion,
		Modifierdistrict,
		Modifiercommune,
		Modifierfokontany,

		region,
		district,
		commune,
		fokontany,
		params,
		voirElecteurData,
		modifierElecteurData,
		Modifierannee_electorale_id,
		listVerifier,
		nolistVerifier,
		annee_electorale_id,
		nomComplet,
		dateNaissance,
		lieuNaissance,
		sexe,
		paramsId,
		filiation,
		numeroCIN,

		electeurFind,
		dateDelivreCIN,
		lieuDelivreCIN,
		adresse,
		profession,
		find,
		carteElecteur,
		telephone,
		dateInscription,

		username,
		email,
		password,
		region,

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
		fileUpload,


		supprimerData,
		enregistrerData,
		modifierData,
		getElecteurDistrictAll,
		voirData,
		allElecteurData,

		electeur_id,
		supprimerElecteurData,
		getElecteurs,
		createElecteur,
		updateElecteur,
		deleteElecteur,
		createElecteurSaisie
	};
});
