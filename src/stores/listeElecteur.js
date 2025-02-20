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

	const allListeElecteur = ref('');
	const Modifieruser_id = ref('');

	const electeurs = ref([]);

	const electeurFind = ref()


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



			console.log('recherche', response.data);
			
			if (response.data.status === 'success') { // Stockage des données dans l'état du store si la recherche est réussie
				electeurFind.value = response.data.data;
				console.log('Electeur trouvé:', response.data.data);

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


	function getElecteurs() {
		const anneeData = JSON.parse(localStorage.getItem('anneeSelectionne'));


		const anneeElectoraleId = anneeData ?. id;
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
			electeurs.value = response.data;

			if (response.status === 200) {
				// let data = []


				// console.log('ty isy', response.data);
				// response.data.map((item) => {
				// 	let data1
				// 	if (item.file) {
				// 		data1 = item

				// 		console.log('peee', item.file ?. titre)
				// 		data1.file.titre = "http://127.0.0.1:8000/" + item.file.titre

				// 	} else {
				// 		data1 = item
				// 	}

				// 	//
				// 	data.push(data1)
				// })


				// console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', data)


				allElecteurData.value = response.data;
				show.showAlert = true;
				allListeElecteur.value = response.data.electeurs;

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


				console.log('yes', response);
				if (fileUpload.value) {
					console.log('ato ^poury');
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
			console.log('response uploadImage', response.data);

		} catch (error) {
			console.error("Erreur lors de l'upload de l'image :", error);
		}
	};
	function updateElecteur(id) {

		// adresse: "uijo"
		// annee_electorale_id: 2
		// carteElecteur: "io"
		// commune: "AMBALAHONKO"
		// created_at : "2025-02-07T13:59:40.000000Z"
		// dateDelivreCIN: "2025-02-15T13:59:00.000Z"
		// dateInscription: "2025-02-14T13:59:00.000Z"
		// dateNaissance: "2025-02-05T13:59:00.000Z"
		// district: "AMBANJA"
		// filiation: "ui"
		// fokontany: "AMBALAHONKO"
		// id: 13
		// lieuDelivreCIN: "uio"
		// lieuNaissance: "tyu"
		// nomComplet: "sdrf"
		// numeroCIN: "yu"
		// profession: "uijo"
		// region: "DIANA"
		// sexe: "yui"
		// status : null
		// telephone: "tyu"
		// updated_at : "2025-02-07T13:59:40.000000Z"
		// user : created_at : "2025-02-07T13:59:40.000000Z"
		// email: "rfcfhhhhhhhhh@gmail.com"
		// email_verified_at : null
		// id: 13
		// showPasswords : "0"
		// updated_at : "2025-02-07T13:59:40.000000Z"
		// username: "sdrf"
		// [[Prototype]] : Object
		// user_id: 13

		let updatedData = {
			electeur_id: modifierElecteurData.value.id,
			nomComplet: modifierElecteurData.value.nomComplet,
			profession: modifierElecteurData.value.profession,
			adresse: modifierElecteurData.value.adresse,
			numeroCIN: modifierElecteurData.value.numeroCIN,
			dateDelivreCIN: modifierElecteurData.value.dateDelivreCIN,
			lieuDelivreCIN: modifierElecteurData.value.lieuDelivreCIN,
			carteElecteur: modifierElecteurData.value.carteElecteur,
			sexe: modifierElecteurData.value.sexe,
			lieuNaissance: modifierElecteurData.value.lieuNaissance,
			filiation: modifierElecteurData.value.filiation,
			dateNaissance: modifierElecteurData.value.dateNaissance,
			telephone: modifierElecteurData.value.telephone,
			dateInscription: modifierElecteurData.value.dateInscription,
			annee_electorale_id: modifierElecteurData.value.annee_electorale_id,
			email: modifierElecteurData.value.user.email,

			user_id: modifierElecteurData.value.user_id,

			region: modifierElecteurData.value.region,
			district: modifierElecteurData.value.district,
			commune: modifierElecteurData.value.commune,
			fokontany: modifierElecteurData.value.fokontany,
			verifier: false
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

			console.log('cfvbnnj,k;lcfvbnnj,k;', response.data);

			if (response.status === 200) {

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
	onMounted(() => {
		getElecteurs();
	});
	return {
		searchElecteur,
		electeurs,
		Modifierregion,
		Modifierdistrict,
		Modifiercommune,
		Modifierfokontany,

		region,
		district,
		commune,
		fokontany,

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

		electeurFind,
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
		voirData,
		allElecteurData,

		electeur_id,
		supprimerElecteurData,
		getElecteurs,
		createElecteur,
		updateElecteur,
		deleteElecteur
	};
});
