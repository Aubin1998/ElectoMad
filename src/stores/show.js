import {defineStore} from "pinia";
import {ref} from "vue";
import {useAuth} from "@/stores/auth";


export const useShow = defineStore('Show', () => {
	const auth = useAuth()
	const municipaux = ref(false)
	const user = ref()
	const senateur = ref(false)
	const showLogin = ref(true)
	const deputes = ref(false)
	const showSingUp = ref(false)
	const showAcceuilModala = ref(false)
	const showDashboard = ref(false)
	const showDesc = ref(false)
	const showElection = ref(false)
	const showModalSupprimerElecteur = ref(false)
	const showCandidat = ref(false)
	const showElecteur = ref(false)
	const showBureau = ref(false)
	const showUtilisateur = ref(false)
	const showStatistique = ref(false)
	const showHistorique = ref(false)
	const showElectionActive = ref(false)
	const showCandidatActive = ref(false)
	const showElecteursActive = ref(false)
	const showBureauxActive = ref(false)
	const showUtilisateurActive = ref(false)
	const showStatistiquesActive = ref(false)
	const showHistoriqueActive = ref(false)
	const showModalLogout = ref(false)
	const showModalModifierCandidat = ref(false)
	const showModalOeilCandidat = ref(false)
	const showModalAnneSupprimer = ref(false)
	const showVoirAnnee = ref(false)
	const showModal = ref(false)
	const showModalVoirElecteur = ref(false)
	const showModalModifierElecteur = ref(false)
	const showModalElecteurSupprimer = ref(false)
	const showModalAjoutElecteur = ref(false)
	const showHomePage = ref(false)

	const showUser = ref(false)
	const showAdmin = ref(false)
	const showModalCIN = ref(false)
	const see = ref(true)

	function showLoginFunc() {
		showLogin.value = true
		showSingUp.value = false
		test.value = true


	}
	function showSingUpFunc() {
		showLogin.value = false
		showSingUp.value = true

	}
	function showDashboardFunc() {
		showLogin.value = false
		showSingUp.value = false
		showDashboard.value = true
	}

	function showDescFunc() {
		showDesc.value = ! showDesc.value
		// !showDesc.value veut dire exécute le cas contraire , soit true soit false

	}
	function showElectionFunc() {
		showElection.value = ! showElection.value

	}
	function showCandidatFunc() {
		showCandidat.value = ! showCandidat.value

	}
	function showElecteurFunc() {
		showElecteur.value = ! showElecteur.value

	}
	function showBureauFunc() {
		showBureau.value = ! showBureau.value

	}
	function showUtilisateurFunc() {
		showUtilisateur.value = ! showUtilisateur.value

	}

	function showStatistiqueFunc() {
		showStatistique.value = ! showStatistique.value

	}

	function showHistoriqueFunc() {
		showHistorique.value = ! showHistorique.value

	}


	// Activation des listes sur le sideBar
	const selectSideBar = ref('')
	function setSelectSideBar(text) {
		selectSideBar.value = text;
		// for Création électorale
		if (selectSideBar.value === "Création élection") {
			showElectionFunc();
			// showElection.value = true
			showElectionActive.value = true
		} else {
			showElectionActive.value = false
			showElection.value = false

		}
		// for Gestion des candidats
		if (selectSideBar.value === "Gestion des candidats") {
			showCandidatFunc();
			// showElection.value = true
			showCandidatActive.value = true

		} else {
			showCandidatActive.value = false
			showCandidat.value = false

		}
		// for Gestion des électeurs
		if (selectSideBar.value === "Gestion des électeurs") {
			showElecteurFunc();
			// showElecteur.value = true

			showElecteursActive.value = true //

		} else {
			showElecteursActive.value = false
			showElecteur.value = false


		}

		// for gestion bureaux
		if (selectSideBar.value === "Gestion des bureaux") {
			showBureauFunc();
			// showBureau.value = true

			showBureauxActive.value = true //

		} else {
			showBureauxActive.value = false
			showBureau.value = false


		}

		// for gestion utilisateur
		if (selectSideBar.value === "Gestion des utilisateurs") {
			showUtilisateurFunc();
			// showUtilisateur.value = true

			showUtilisateurActive.value = true //

		} else {
			showUtilisateurActive.value = false
			showUtilisateur.value = false

		}
		// for gestion utilisateur
		if (selectSideBar.value === "Statistiques") {
			showStatistiqueFunc();
			// showStatistique.value = true

			showStatistiquesActive.value = true //
		} else {
			showStatistiquesActive.value = false
			showStatistique.value = false

		}
		// for gestion utilisateur
		if (selectSideBar.value === "Historique") {
			showHistoriqueFunc();
			showHistoriqueActive.value = true //
		} else {
			showHistoriqueActive.value = false
			showHistorique.value = false

		}


	}

	// Variable of  subsection list
	const optionText = ref('')
	const showAnneElectoral = ref(false);
	const showGenreElection = ref(false);
	const showListeCandidat = ref(false);
	const showAjoutCandidat = ref(false);
	const showListeElecteurs = ref(false);
	const showFiltrageRecherche = ref(false);
	const showActionsGestion = ref(false);
	const showSurveillance = ref(false);
	const showCreation = ref(false);
	const showListe = ref(false)
	const showAjoutUtilisateur = ref(false)
	const showListeUtilisateurs = ref(false)
	const showChanger = ref(false)
	const showElecteurInscrit = ref(false)
	const showBureauActifs = ref(false)
	const showTauxParticipation = ref(false)
	const showNombreTotalVotes = ref(false)
	const showMesTaches = ref(false)
	const showAutres = ref(false)


	// condition non ternaire
	function setOption(option) { // set option ampesaign @condition jiaby, na showElectionFunc na showElecteurFunc na ...
		optionText.value = option
		// for election
		if (option === 'Année électorale') {
			showElectionFunc()
			showAnneElectoral.value = true
			acceuil.value = false


		} else {
			showAnneElectoral.value = false

		}


		if (option === 'Liste location élection') { // showElectionFunc()
			showLocalisationElection.value = true
			// acceuil.value = false


		} else { // showAnneElectoral.value = false

		}
		if (option === 'Genre élection') {
			showElectionFunc()
			showGenreElection.value = true
			acceuil.value = false


		} else {
			showGenreElection.value = false

		}
		// for candidat
		if (option === 'Liste totale des candidats') {
			showCandidatFunc()
			showListeCandidat.value = true
			acceuil.value = false

		} else {
			showListeCandidat.value = false
		}

		if (option === 'Ajout des candidats') {
			showCandidatFunc()
			showAjoutCandidat.value = true
			acceuil.value = false

		} else {
			showAjoutCandidat.value = false
		}
		// for electeur
		if (option === 'Liste complète des électeurs') {
			showElecteurFunc()
			showListeElecteurs.value = true
			acceuil.value = false


		} else {
			showListeElecteurs.value = false
		}

		if (option === 'Filtrage et recherche') {
			showElecteurFunc()
			showFiltrageRecherche.value = true
			acceuil.value = false

		} else {
			showFiltrageRecherche.value = false
		}

		if (option === 'Actions de gestion') {
			showElecteurFunc()
			showActionsGestion.value = true
			acceuil.value = false

		} else {
			showActionsGestion.value = false
		}

		if (option === 'Surveillance') {
			showElecteurFunc()
			showSurveillance.value = true
			acceuil.value = false

		} else {
			showSurveillance.value = false
		}

		// for bureaux
		if (option === 'Création') {
			showBureauFunc()
			showCreation.value = true
			acceuil.value = false

		} else {
			showCreation.value = false
		}

		if (option === 'Liste des bureaux de votes') {
			showBureauFunc()
			showListe.value = true
			acceuil.value = false

		} else {
			showListe.value = false
		}


		// for utilisateur
		if (option === 'Ajout des utilisateurs') {
			showUtilisateurFunc()
			showAjoutUtilisateur.value = true
			acceuil.value = false

		} else {
			showAjoutUtilisateur.value = false
		}

		if (option === 'Liste des utilisateurs') {
			showUtilisateurFunc()
			showListeUtilisateurs.value = true
			acceuil.value = false

		} else {
			showListeUtilisateurs.value = false
		}

		if (option === 'Changer') {
			showUtilisateurFunc()
			showChanger.value = true
			acceuil.value = false

		} else {
			showChanger.value = false
		}

		// for statistique
		if (option === 'Nombre total inscrit des électeurs') {
			showStatistiqueFunc()
			showElecteurInscrit.value = true
			acceuil.value = false

		} else {
			showElecteurInscrit.value = false
		}
		if (option === 'Nombre de bureaux de vote actifs') {
			showStatistiqueFunc()
			showBureauActifs.value = true
			acceuil.value = false

		} else {
			showBureauActifs.value = false
		}
		if (option === 'Taux de participation global') {
			showStatistiqueFunc()
			showTauxParticipation.value = true
			acceuil.value = false

		} else {
			showTauxParticipation.value = false
		}
		if (option === 'Nombre total de votes enregistrés') {
			showStatistiqueFunc()
			showNombreTotalVotes.value = true
			acceuil.value = false

		} else {
			showNombreTotalVotes.value = false
		}

		// for historique
		if (option === 'Mes tâches') {
			showHistoriqueFunc()
			showMesTaches.value = true
			acceuil.value = false

		} else {
			showMesTaches.value = false
		}
		if (option === 'Autres') {
			showHistoriqueFunc()
			showAutres.value = true
			acceuil.value = false

		} else {
			showAutres.value = false
		}

	}
	// Liste complet electeur province
	// variable liste electeur chaque province
	const showProvince = ref(true)
	const showProvinceAntsiranana = ref(false)
	const showProvinceAntananarivo = ref(false)
	const showProvinceToamasina = ref(false)
	const showProvinceMahajanga = ref(false)
	const showProvinceFianarantsoa = ref(false)
	const showProvinceToliara = ref(false)

	// Fonction chaque province
	// liste des province à Mada
	function showProvinceFunc() {
		showProvince.value = ! showProvince.value
		showProvinceAntsiranana.value = false
		showProvinceAntananarivo.value = false
		showProvinceToamasina.value = false
		showProvinceMahajanga.value = false
		showProvinceFianarantsoa.value = false
		showProvinceToliara.value = false
	}

	// fonction pour chaque Province à Mada
	function showProvinceAntsirananaFunc() {
		showProvince.value = false
		showProvinceAntsiranana.value = ! showProvinceAntsiranana.value

	}

	function showProvinceAntananarivoFunc() {
		showProvince.value = false
		showProvinceAntananarivo.value = ! showProvinceAntananarivo.value
	}
	function showProvinceToamasinaFunc() {
		showProvince.value = false
		showProvinceToamasina.value = ! showProvinceToamasina.value
	}
	function showProvinceMahajangaFunc() {
		showProvince.value = false
		showProvinceMahajanga.value = ! showProvinceMahajanga.value
	}
	function showProvinceFianarantsoaFunc() {
		showProvince.value = false
		showProvinceFianarantsoa.value = ! showProvinceFianarantsoa.value
	}
	function showProvinceToliaraFunc() {
		showProvince.value = false
		showProvinceToliara.value = ! showProvinceToliara.value
	}

	// Province d'Antananarivo
	// Province jiaby ambony agny
	// District d'Antananarivo
	// Liste complet electeur District
	// variable liste electeur chaque District
	const showDistrictElecteurAntananarivo = ref(true)
	const showDistrictElecteurAmbohidratrimo = ref(false)
	const showDistrictElecteurAntananarivoAvaradrano = ref(false)
	const showDistrictElecteurAntananarivoRenivohitra = ref(false)
	const showDistrictElecteurFenoarivo = ref(false)
	const showDistrictElecteurManjakandriana = ref(false)
	const showDistrictElecteurTananariveRural = ref(false)
	// Fonction chaque District
	// liste electeur chaque District
	function showDistrictElecteurAntananarivoFunc() {
		showDistrictElecteurAntananarivo.value = ! showDistrictElecteurAntananarivo.value
		showDistrictElecteurAmbohidratrimo.value = false
		showDistrictElecteurAntananarivoAvaradrano.value = false
		showDistrictElecteurAntananarivoRenivohitra.value = false
		showDistrictElecteurFenoarivo.value = false
		showDistrictElecteurManjakandriana.value = false
		showDistrictElecteurTananariveRural.value = false
	}

	// fonction pour electeur par District
	function showDistrictElecteurAmbohidratrimoFunc() {
		showDistrictElecteurAntananarivo.value = false
		showDistrictElecteurAmbohidratrimo.value = ! showDistrictElecteurAmbohidratrimo.value
	}

	function showDistrictElecteurAntananarivoAvaradranoFunc() {
		showDistrictElecteurAntananarivo.value = false
		showDistrictElecteurAntananarivoAvaradrano.value = ! showDistrictElecteurAntananarivoAvaradrano.value
	}
	function showDistrictElecteurAntananarivoRenivohitraFunc() {
		showDistrictElecteurAntananarivo.value = false
		showDistrictElecteurAntananarivoRenivohitra.value = ! showDistrictElecteurAntananarivoRenivohitra.value
	}
	function showDistrictElecteurFenoarivoFunc() {
		showDistrictElecteurAntananarivo.value = false
		showDistrictElecteurFenoarivo.value = ! showDistrictElecteurFenoarivo.value
	}
	function showDistrictElecteurManjakandrianaFunc() {
		showDistrictElecteurAntananarivo.value = false
		showDistrictElecteurManjakandriana.value = ! showDistrictElecteurManjakandriana.value
	}
	function showDistrictElecteurTananariveRuralFunc() {
		showDistrictElecteurAntananarivo.value = false
		showDistrictElecteurTananariveRural.value = ! showDistrictElecteurTananariveRural.value
	}

	// Commune d'Antananarivo
	// variable liste electeur chaque Commune d'Ambohidratrimo
	const showCommuneElecteurAmbohidratrimo = ref(true)
	const showCommuneElecteurAmbatolampy = ref(false)
	const showCommuneElecteurAmbohidratrimoTanana = ref(false)
	const showCommuneElecteurAnosiala = ref(false)
	const showCommuneElecteurFenoarivo = ref(false)
	const showCommuneElecteurIvato = ref(false)
	const showCommuneElecteurTanjombato = ref(false)
	// Fonction chaque Commune
	// liste electeur chaque Commune de District d'Ambohidratrimo
	function showCommuneElecteurAmbohidratrimoFunc() {
		showCommuneElecteurAmbohidratrimo.value = ! showCommuneElecteurAmbohidratrimo.value
		showCommuneElecteurAmbatolampy.value = false
		showCommuneElecteurAmbohidratrimoTanana.value = false
		showCommuneElecteurAnosiala.value = false
		showCommuneElecteurFenoarivo.value = false
		showCommuneElecteurIvato.value = false
		showCommuneElecteurTanjombato.value = false
	}

	// fonction pour electeur par Commune de District d'Ambohidratrimo
	function showCommuneElecteurAmbatolampyFunc() {
		showCommuneElecteurAmbohidratrimo.value = false
		showCommuneElecteurAmbatolampy.value = ! showCommuneElecteurAmbatolampy.value
	}

	function showCommuneElecteurAmbohidratrimoTananaFunc() {
		showCommuneElecteurAmbohidratrimo.value = false
		showCommuneElecteurAmbohidratrimoTanana.value = ! showCommuneElecteurAmbohidratrimoTanana.value
	}
	function showCommuneElecteurAnosialaFunc() {
		showCommuneElecteurAmbohidratrimo.value = false
		showCommuneElecteurAnosiala.value = ! showCommuneElecteurAnosiala.value
	}
	function showCommuneElecteurFenoarivoFunc() {
		showCommuneElecteurAmbohidratrimo.value = false
		showDistrictElecteurFenoarivo.value = ! showDistrictElecteurFenoarivo.value
	}
	function showCommuneElecteurIvatoFunc() {
		showCommuneElecteurAmbohidratrimo.value = false
		showCommuneElecteurIvato.value = ! showCommuneElecteurIvato.value
	}
	function showCommuneElecteurTanjombatoFunc() {
		showCommuneElecteurAmbohidratrimo.value = false
		showCommuneElecteurTanjombato.value = ! showCommuneElecteurTanjombato.value
	}
	// Fokontany d'Antananarivo
	// variable liste electeur chaque Fokontany d'Ambatolampy
	const showFokontanyElecteurAmbatolampy = ref(true)
	const showFokontanyElecteurAmbatolampyGara = ref(false)
	const showFokontanyElecteurAmbohipanja = ref(false)
	const showFokontanyElecteurAnkadikely = ref(false)
	const showFokontanyElecteurAntanetibe = ref(false)
	const showFokontanyElecteurMahavelona = ref(false)
	const showFokontanyElecteurManjakarivo = ref(false)
	// Fonction chaque Commune
	// liste electeur chaque Commune de District d'Ambohidratrimo
	function showFokontanyElecteurAmbatolampyFunc() {
		showFokontanyElecteurAmbatolampy.value = ! showFokontanyElecteurAmbatolampy.value
		showFokontanyElecteurAmbatolampyGara.value = false
		showFokontanyElecteurAmbohipanja.value = false
		showFokontanyElecteurAnkadikely.value = false
		showFokontanyElecteurAntanetibe.value = false
		showFokontanyElecteurMahavelona.value = false
		showFokontanyElecteurManjakarivo.value = false
	}

	// fonction pour electeur par Commune de District d'Ambohidratrimo
	function showFokontanyElecteurAmbatolampyGaraFunc() {
		showFokontanyElecteurAmbatolampy.value = false
		showFokontanyElecteurAmbatolampyGara.value = ! showFokontanyElecteurAmbatolampyGara.value
	}

	function showFokontanyElecteurAmbohipanjaFunc() {
		showFokontanyElecteurAmbatolampy.value = false
		showFokontanyElecteurAmbohipanja.value = ! showFokontanyElecteurAmbohipanja.value
	}
	function showFokontanyElecteurAnkadikelyFunc() {
		showFokontanyElecteurAmbatolampy.value = false
		showFokontanyAnkadikely.value = !showFokontanyAnkadikely.value
	}
	function showFokontanyElecteurAntanetibeFunc() {
		showFokontanyElecteurAmbatolampy.value = false
		showFokontanyElecteurAntanetibe.value = ! showFokontanyElecteurAntanetibe.value
	}
	function showFokontanyElecteurMahavelonaFunc() {
		showFokontanyElecteurAmbatolampy.value = false
		showFokontanyElecteurMahavelona.value = ! showFokontanyElecteurMahavelona.value
	}
	function showFokontanyElecteurManjakarivoFunc() {
		showFokontanyElecteurAmbatolampy.value = false
		showFokontanyElecteurManjakarivo.value = ! showFokontanyElecteurManjakarivo.value
	}


	// Commune ANTANANARIVO AVARADRANO
	// variable liste electeur chaque Commune d' ANTANANARIVO AVARADRANO
	const showCommuneElecteurAntananarivoAvaradrano = ref(true)
	const showCommuneElecteurAmbohimangakely = ref(false)
	const showCommuneElecteurAndranonahoatra = ref(false)
	const showCommuneElecteurAnkadifotsy = ref(false)
	const showCommuneElecteurAnosizatoNord = ref(false)
	const showCommuneElecteurMantasoa = ref(false)
	const showCommuneElecteurTanjombato1 = ref(false)
	// Fonction chaque Commune
	// liste electeur chaque Commune de District d' ANTANANARIVO AVARADRANO
	function showCommuneElecteurAntananarivoAvaradranoFunc() {
		showCommuneElecteurAntananarivoAvaradrano.value = ! showCommuneElecteurAntananarivoAvaradrano.value
		showCommuneElecteurAmbohimangakely.value = false
		showCommuneElecteurAndranonahoatra.value = false
		showCommuneElecteurAnkadifotsy.value = false
		showCommuneElecteurAnosizatoNord.value = false
		showCommuneElecteurMantasoa.value = false
		showCommuneElecteurTanjombato1.value = false
	}

	// fonction pour electeur par Commune de District d'ANTANANARIVO AVARADRANO
	function showCommuneElecteurAmbohimangakelyFunc() {
		showCommuneElecteurAntananarivoAvaradrano.value = false
		showCommuneElecteurAmbohimangakely.value = ! showCommuneElecteurAmbohimangakely.value
	}

	function showCommuneElecteurAndranonahoatraFunc() {
		showCommuneElecteurAntananarivoAvaradrano.value = false
		showCommuneElecteurAndranonahoatra.value = ! showCommuneElecteurAndranonahoatra.value
	}
	function showCommuneElecteurAnkadifotsyFunc() {
		showCommuneElecteurAntananarivoAvaradrano.value = false
		showCommuneElecteurAnkadifotsy.value = ! showCommuneElecteurAnkadifotsy.value
	}
	function showCommuneElecteurAnosizatoNordFunc() {
		showCommuneElecteurAntananarivoAvaradrano.value = false
		showCommuneElecteurAnosizatoNord.value = ! showCommuneElecteurAnosizatoNord.value
	}
	function showCommuneElecteurMantasoaFunc() {
		showCommuneElecteurAntananarivoAvaradrano.value = false
		showCommuneElecteurMantasoa.value = ! showCommuneElecteurMantasoa.value
	}
	function showCommuneElecteurTanjombato1Func() {
		showCommuneElecteurAntananarivoAvaradrano.value = false
		showCommuneElecteurTanjombato1.value = ! showCommuneElecteurTanjombato1.value
	}

	// Commune ANTANANARIVO RENIVOHITRA
	// variable liste electeur chaque Commune d'Antananarivo Renivohitra
	const showCommuneElecteurAntananarivoRenivohitra = ref(true)
	const showCommuneElecteurAmbatomirahavavy = ref(false)
	const showCommuneElecteurAmbohijatovo = ref(false)
	const showCommuneElecteurAndohan_Analamahitsy = ref(false)
	const showCommuneElecteurAntananarivo = ref(false)
	// Fonction chaque Commune
	// liste electeur chaque Commune de District d'Antananarivo Renivohitra
	function showCommuneElecteurAntananarivoRenivohitraFunc() {
		showCommuneElecteurAntananarivoRenivohitra.value = ! showCommuneElecteurAntananarivoRenivohitra.value
		showCommuneElecteurAmbatomirahavavy.value = false
		showCommuneElecteurAmbohijatovo.value = false
		showCommuneElecteurAndohan_Analamahitsy.value = false
		showCommuneElecteurAntananarivo.value = false
	}

	// fonction pour electeur par Commune de District d'Antananarivo Renivohitra
	function showCommuneElecteurAmbatomirahavavyFunc() {
		showCommuneElecteurAntananarivoRenivohitra.value = false
		showCommuneElecteurAmbatomirahavavy.value = ! showCommuneElecteurAmbatomirahavavy.value
	}

	function showCommuneElecteurAmbohijatovoFunc() {
		showCommuneElecteurAntananarivoRenivohitra.value = false
		showCommuneElecteurAmbohijatovo.value = ! showCommuneElecteurAmbohijatovo.value
	}
	function showCommuneElecteurAndohan_AnalamahitsyFunc() {
		showCommuneElecteurAntananarivoRenivohitra.value = false
		showCommuneElecteurAndohan_Analamahitsy.value = ! showCommuneElecteurAndohan_Analamahitsy.value
	}
	function showCommuneElecteurAntananarivoFunc() {
		showCommuneElecteurAntananarivoRenivohitra.value = false
		showCommuneElecteurAntananarivo.value = ! showCommuneElecteurAntananarivo.value
	}


	// Commune FENOARIVO
	// variable liste electeur chaque Commune de FENOARIVO
	const showCommuneElecteurFenoarivo1 = ref(true)
	const showCommuneElecteurAmbodivona = ref(false)
	const showCommuneElecteurAmbohimiadana = ref(false)
	const showCommuneElecteurAmbohitralanana = ref(false)
	const showCommuneElecteurAmpitatafika = ref(false)
	const showCommuneElecteurFenoarivoTanana = ref(false)
	const showCommuneElecteurManjakandriana = ref(false)
	// Fonction chaque Commune
	// liste electeur chaque Commune de District de FENOARIVO
	function showCommuneElecteurFenoarivo1Func() {
		showCommuneElecteurFenoarivo1.value = ! showCommuneElecteurFenoarivo1.value
		showCommuneElecteurAmbodivona.value = false
		showCommuneElecteurAmbohimiadana.value = false
		showCommuneElecteurAmbohitralanana.value = false
		showCommuneElecteurAmpitatafika.value = false
		showCommuneElecteurFenoarivoTanana.value = false
		showCommuneElecteurManjakandriana.value = false
	}

	// fonction pour electeur par Commune de District de FENOARIVO
	function showCommuneElecteurAmbodivonaFunc() {
		showCommuneElecteurFenoarivo1.value = false
		showCommuneElecteurAmbodivona.value = ! showCommuneElecteurAmbodivona.value
	}

	function showCommuneElecteurAmbohimiadanaFunc() {
		showCommuneElecteurFenoarivo1.value = false
		showCommuneElecteurAmbohimiadana.value = ! showCommuneElecteurAmbohimiadana.value
	}
	function showCommuneElecteurAmbohitralananaFunc() {
		showCommuneElecteurFenoarivo1.value = false
		showCommuneElecteurAmbohitralanana.value = ! showCommuneElecteurAmbohitralanana.value
	}
	function showCommuneElecteurAmpitatafikaFunc() {
		showCommuneElecteurFenoarivo1.value = false
		showCommuneElecteurAmpitatafika.value = ! showCommuneElecteurAmpitatafika.value
	}
	function showCommuneElecteurFenoarivoTananaFunc() {
		showCommuneElecteurFenoarivo1.value = false
		showCommuneElecteurFenoarivoTanana.value = ! showCommuneElecteurFenoarivoTanana.value
	}
	function showCommuneElecteurManjakandrianaFunc() {
		showCommuneElecteurFenoarivo1.value = false
		showCommuneElecteurManjakandriana.value = ! showCommuneElecteurManjakandriana.value
	}

	// Commune MANJAKANDRIANA
	// variable liste electeur chaque Commune de MANJAKANDRIANA
	const showCommuneElecteurManjakandriana1 = ref(true)
	const showCommuneElecteurAmbatolampy1 = ref(false)
	const showCommuneElecteurAmpitatafika1 = ref(false)
	const showCommuneElecteurAndranomanelatra = ref(false)
	const showCommuneElecteurAnkazobe = ref(false)
	const showCommuneElecteurFivoarana = ref(false)
	const showCommuneElecteurManjakandrianaTanana = ref(false)
	// Fonction chaque Commune
	// liste electeur chaque Commune de District de MANJAKANDRIANA
	function showCommuneElecteurManjakandriana1Func() {
		showCommuneElecteurManjakandriana1.value = ! showCommuneElecteurManjakandriana1.value
		showCommuneElecteurAmbatolampy1.value = false
		showCommuneElecteurAmpitatafika1.value = false
		showCommuneElecteurAndranomanelatra.value = false
		showCommuneElecteurAnkazobe.value = false
		showCommuneElecteurFivoarana.value = false
		showCommuneElecteurManjakandrianaTanana.value = false
	}

	// fonction pour electeur par Commune de District de MANJAKANDRIANA
	function showCommuneElecteurAmbatolampy1Func() {
		showCommuneElecteurManjakandriana1.value = false
		showCommuneElecteurAmbatolampy1.value = ! showCommuneElecteurAmbatolampy1.value
	}

	function showCommuneElecteurAmpitatafika1Func() {
		showCommuneElecteurManjakandriana1.value = false
		showCommuneElecteurAmpitatafika1.value = ! showCommuneElecteurAmpitatafika1.value
	}
	function showCommuneElecteurAndranomanelatraFunc() {
		showCommuneElecteurManjakandriana1.value = false
		showCommuneElecteurAndranomanelatra.value = ! showCommuneElecteurAndranomanelatra.value
	}
	function showCommuneElecteurAnkazobeFunc() {
		showCommuneElecteurManjakandriana1.value = false
		showCommuneElecteurAnkazobe.value = ! showCommuneElecteurAnkazobe.value
	}
	function showCommuneElecteurFivoaranaFunc() {
		showCommuneElecteurManjakandriana1.value = false
		showCommuneElecteurFivoarana.value = ! showCommuneElecteurFivoarana.value
	}
	function showCommuneElecteurManjakandrianaTananaFunc() {
		showCommuneElecteurManjakandriana1.value = false
		showCommuneElecteurManjakandrianaTanana.value = ! showCommuneElecteurManjakandrianaTanana.value
	}


	// Commune TANANARIVE RURAL
	// variable liste electeur chaque Commune de  TANANARIVE RURAL
	const showCommuneElecteurTananariveRural = ref(true)
	const showCommuneElecteurAmbohidratrimo1 = ref(false)
	const showWorkspaceCommuneElecteurAndranonahoatra = ref(false)
	const showCommuneElecteurAnosizato = ref(false)
	const showCommuneElecteurIvato1 = ref(false)
	const showCommuneElecteurManjakandriana2 = ref(false)
	const showCommuneElecteurMantasoa1 = ref(false)
	// Fonction chaque Commune
	// liste electeur chaque Commune de District de  TANANARIVE RURAL
	function showCommuneElecteurTananariveRuralFunc() {
		showCommuneElecteurTananariveRural.value = ! showCommuneElecteurTananariveRural.value
		showCommuneElecteurAmbohidratrimo1.value = false
		showWorkspaceCommuneElecteurAndranonahoatra.value = false
		showCommuneElecteurAnosizato.value = false
		showCommuneElecteurIvato1.value = false
		showCommuneElecteurManjakandriana2.value = false
		showCommuneElecteurMantasoa1.value = false
	}

	// fonction pour electeur par Commune de District de  TANANARIVE RURAL
	function showCommuneElecteurAmbohidratrimo1Func() {
		showCommuneElecteurTananariveRural.value = false
		showCommuneElecteurAmbohidratrimo1.value = ! showCommuneElecteurAmbohidratrimo1.value
	}

	function showCommuneElecteurAndranonahoatraFunc() {
		showCommuneElecteurTananariveRural.value = false
		showCommuneElecteurAndranonahoatra.value = ! showCommuneElecteurAndranonahoatra.value
	}
	function showCommuneElecteurAnosizatoFunc() {
		showCommuneElecteurTananariveRural.value = false
		showCommuneElecteurAnosizato.value = ! showCommuneElecteurAnosizato.value
	}
	function showCommuneElecteurIvato1Func() {
		showCommuneElecteurTananariveRural.value = false
		showCommuneElecteurIvato1.value = ! showCommuneElecteurIvato1.value
	}
	function showCommuneElecteurManjakandriana2Func() {
		showCommuneElecteurTananariveRural.value = false
		showCommuneElecteurManjakandriana2.value = ! showCommuneElecteurManjakandriana2.value
	}
	function showCommuneElecteurMantasoa1Func() {
		showCommuneElecteurTananariveRural.value = false
		showCommuneElecteurMantasoa1.value = ! showCommuneElecteurMantasoa1.value
	}

	// vao2

	const selectedProvince = ref("")
	const selectedDistrict = ref("")
	const selectedCommune = ref("")
	const selectedFokontany = ref("")

	const isOptionProvince = ref(false)
	const isOptionDistrict = ref(false)
	const isOptionCommune = ref(false)
	const isOptionFokontany = ref(false)


	const isProvince = ref(false)
	const isDistrict = ref(false)
	const isCommune = ref(false)
	const isFokontany = ref(false)
	const isNo = ref(true)


	const showProvinceElecteur = ref(false)
	function showProvinceElecteurFunc() {
		showProvince.value = false
		showProvinceElecteur.value = ! showProvinceElecteur.value
	}
	const districtData = ref([])
	function showOptionProvince(option, District) {
		districtData.value = District
		showProvinceElecteurFunc()

		selectedProvince.value = option
		isProvince.value = true
		isOptionProvince.value = true
		isNo.value = false


	}


	const listeCommune = ref(false)
	const dataCommune = ref([])
	function showListeCommuneFunc(option, Commune) {
		listeCommune.value = ! listeCommune.value
		dataCommune.value = Commune
		showProvinceElecteur.value = false
		selectedDistrict.value = option
		isDistrict.value = true
		isOptionDistrict.value = true
		isProvince.value = false


	}

	const listeFokontany = ref(false)
	const dataFokontany = ref([])
	function listeFokontanyFunc(option, Fokontany) {
		dataFokontany.value = Fokontany
		listeFokontany.value = ! listeFokontany.value
		listeCommune.value = false
		selectedCommune.value = option
		isCommune.value = true
		isOptionCommune.value = true
		isDistrict.value = false
	}

	const listePersonne = ref(false)

	const dataPersonne = ref([])
	function listePersonneFunc(option, Personne) {
		dataPersonne.value = Personne
		listePersonne.value = true
		listeFokontany.value = false
		selectedFokontany.value = option
		isFokontany.value = true
		isOptionFokontany.value = true
		isCommune.value = false

	}

	const isProvinceSpecial = ref(false)
	function showOption(option) { // Réinitialisation des états
		showProvinceElecteur.value = false;
		showProvince.value = false;
		listeCommune.value = false;
		listeFokontany.value = false;

		isProvince.value = false;
		isDistrict.value = false;
		isCommune.value = false;
		isFokontany.value = false;
		listePersonne.value = false;

		// Mise à jour des états en fonction de l'option
		switch (option) {
			case "district": showProvinceElecteur.value = true;
				isDistrict.value = true;
				break;

			case "province": showProvince.value = true;
				isProvince.value = true;
				break;

			case "commune": listeCommune.value = true;
				isCommune.value = true;
				break;

			case "fokontany": listeFokontany.value = true;
				isFokontany.value = true;
				break;

			default:
				console.warn("Option inconnue: ", option);
				break;
		}

		// Debugging des valeurs après mise à jour


		// Mise à jour de l'état spécial
		isProvinceSpecial.value = ! isDistrict.value && ! isCommune.value && ! isFokontany.value && ! isProvince.value;
	}

	// Liste des électeur et ajout
	const showModalAjout = ref(false)
	function showModalAjoutFunc() {
		showModalAjout.value = ! showModalAjout.value
	}
	const showChoixElection = ref(false)
	function showChoixElectionFunc() {
		showChoixElection.value = ! showChoixElection.value
	}
	const showModalAjout1 = ref(false)
	function showModalAjout1Func() {
		showModalAjout1.value = ! showModalAjout1.value
	}

	const closeOeil = ref(true)
	const showVerifier = ref(false)
	const showModalOeil = ref(false)
	function showModalOeilVerifierFunc() {
		showVerifier.value = true
		closeOeil.value = false
		showModalOeilFunc()
	}
	function showModalOeilFunc() {
		showModalOeil.value = ! showModalOeil.value
	}
	const showModalModifier = ref(false)
	function showModalModifierFunc() {
		showModalModifier.value = ! showModalModifier.value
	}
	const showModalSupprimer = ref(false)
	function showModalSupprimerFunc() {
		showModalSupprimer.value = ! showModalSupprimer.value
	}
	const acceuil = ref(true)
	function acceuilFunc() {
		acceuil.value = ! acceuil.value
	}
	function showModalVoirElecteurFunc() {
		showModalVoirElecteur.value = ! showModalVoirElecteur.value
	}

	const showPresident = ref(true)
	const showVicePresident = ref(false)
	const showSecretaire = ref(false)
	const showAcesseur = ref(false)

	function showSelectFonction(text) {
		if (text === 'president') {
			showPresident.value = true
			showVicePresident.value = false
			showSecretaire.value = false
			showAcesseur.value = false
		}
		if (text === 'vice-President') {
			showVicePresident.value = true
			showPresident.value = false
			showSecretaire.value = false
			showAcesseur.value = false
		}
		if (text === 'secretaire') {
			showSecretaire.value = true
			showVicePresident.value = false
			showPresident.value = false
			showAcesseur.value = false
		}
		if (text === 'acesseur') {
			showAcesseur.value = true
			showVicePresident.value = false
			showSecretaire.value = false
			showPresident.value = false
		}


	}

	const showSpinner = ref(false)
	const showAlert = ref(false)
	const showAlertType = ref('')
	const showAlertMessage = ref('')

	const showModalCompte = ref(false)
	function showModalCompteFunc() {
		showModalCompte.value = ! showModalCompte.value
	}
	const showModalDeconnexion = ref(false)
	function showModalDeconnexionFunc() {
		showModalDeconnexion.value = ! showModalDeconnexion.value
	}

	function showacceuilFunc() {
		if (acceuil.value == false) {
			acceuil.value = true
		}


		showAnneElectoral.value = false
		showGenreElection.value = false
		showListeElecteurs.value = false
		showFiltrageRecherche.value = false
		showActionsGestion.value = false
		showSurveillance.value = false
		showCreation.value = false
		showListe.value = false
		showAjoutUtilisateur.value = false
		showListeUtilisateurs.value = false
		showChanger.value = false
		showElecteurInscrit.value = false
		showBureauActifs.value = false
		showTauxParticipation.value = false
		showNombreTotalVotes.value = false
		showMesTaches.value = false
		showAutres.value = false
		showListeCandidat.value = false
		showAjoutCandidat.value = false

	}

	const showModalAjoutUtilisateur = ref(false)

	const depute = ref(false)
	const showLocalisationElection = ref(false)

	const showAreas = ref(false)

	const typeProvince = ref(false)
	const typeRegion = ref(false)
	const typeDistrict = ref(false)
	const typeCommune = ref(false)
	const afterTypeCandidat = ref(false)





	function showTypeElection(itemName) {
		showAreas.value = true


		const itemMap = {
			"province": typeProvince,
			"region": typeRegion,
			"district": typeDistrict,
			"commune": typeCommune,
			"afterTypeCandidat": afterTypeCandidat

		};

		// Réinitialiser toutes les valeurs à false
		for (const key in itemMap) {
			itemMap[key].value = false;
			
		}

		// Activer l'élément sélectionné
		if (itemMap[itemName]) {
			itemMap[itemName].value = true;
			console.log('1', itemName );
			console.log('2', itemMap[itemName].value );
			
		}
	}


	return {

		typeProvince,
		typeRegion,
		typeDistrict,
		typeCommune,
		afterTypeCandidat,
		showTypeElection,
		showAreas,
		municipaux,
		depute,
		showModalAjoutUtilisateur,
		showAdmin,
		showUser,

		showHomePage,
		showModalAjoutElecteur,
		showModalElecteurSupprimer,
		showModalModifierElecteur,
		showModalCIN,
		showModalVoirElecteur,
		showModalVoirElecteurFunc,
		showVoirAnnee,
		showacceuilFunc,
		showModalAnneSupprimer,
		showModalOeilCandidat,
		showModalModifierCandidat,
		showModalLogout,
		showModalCompteFunc,
		showModalCompte,
		showModalDeconnexionFunc,
		showModalDeconnexion,

		showAlert,
		showAlertType,
		showAlertMessage,
		showSpinner,
		closeOeil,
		showVerifier,
		showModalOeilVerifierFunc,

		showSelectFonction,
		showPresident,
		showVicePresident,
		showSecretaire,
		showAcesseur,
		acceuilFunc,
		acceuil,

		showModalAjout1Func,
		showModalAjout1,

		showModalSupprimerFunc,
		showModalSupprimer,

		showModalModifierFunc,
		showModalModifier,


		showModalOeilFunc,
		showModalOeil,

		showModalAjoutFunc,
		showModalAjout,


		isProvinceSpecial,

		showOption,
		isOptionProvince,
		isOptionDistrict,
		isOptionCommune,
		isOptionFokontany,

		isProvince,
		isDistrict,
		isCommune,
		isFokontany,

		selectedProvince,
		selectedDistrict,
		selectedCommune,
		selectedFokontany,


		// vao2
		showListeCommuneFunc,
		listeCommune,
		dataCommune,

		listeFokontanyFunc,
		listeFokontany,
		dataFokontany,

		listePersonneFunc,
		listePersonne,
		dataPersonne,

		// se connecter
		showLogin,
		showLoginFunc,
		showSingUp,
		showSingUpFunc,

		// tableau de bord
		showDashboard,
		showDashboardFunc,
		showDesc,
		showDescFunc,
		showElection,
		showElectionFunc,
		showCandidat,
		showCandidatFunc,
		showElecteur,
		showElecteurFunc,
		showAcceuilModala,
		showBureau,
		showBureauFunc,
		showUtilisateur,
		showUtilisateurFunc,
		showStatistique,
		showStatistiqueFunc,
		showHistorique,
		showHistoriqueFunc,
		selectSideBar,
		setSelectSideBar,
		showChoixElection,
		// active
		showElectionActive,
		showCandidatActive,
		showElecteursActive,
		showBureauxActive,
		showUtilisateurActive,
		showStatistiquesActive,
		showHistoriqueActive,

		// importation subsection list
		optionText,
		setOption,
		showAnneElectoral,
		showGenreElection,
		showLocalisationElection,
		showListeElecteurs,
		showFiltrageRecherche,
		showActionsGestion,
		showSurveillance,
		showCreation,
		showListe,
		showAjoutUtilisateur,
		showListeUtilisateurs,
		showChanger,
		showElecteurInscrit,
		showBureauActifs,
		showTauxParticipation,
		showNombreTotalVotes,
		showMesTaches,
		showAutres,
		showListeCandidat,
		showAjoutCandidat,

		// Province
		showProvinceFunc,
		showProvince,

		showProvinceAntsirananaFunc,
		showProvinceAntsiranana,
		showProvinceAntananarivoFunc,
		showProvinceAntananarivo,
		showProvinceToamasinaFunc,
		showProvinceToamasina,
		showProvinceMahajangaFunc,
		showProvinceMahajanga,
		showProvinceFianarantsoaFunc,
		showProvinceFianarantsoa,
		showProvinceToliaraFunc,
		showProvinceToliara,

		showDistrictElecteurAntananarivoFunc,
		showDistrictElecteurAntananarivo,
		showDistrictElecteurAmbohidratrimoFunc,
		showDistrictElecteurAmbohidratrimo,
		showDistrictElecteurAntananarivoAvaradranoFunc,
		showDistrictElecteurAntananarivoAvaradrano,
		showDistrictElecteurAntananarivoRenivohitraFunc,
		showDistrictElecteurAntananarivoRenivohitra,
		showDistrictElecteurFenoarivoFunc,
		showDistrictElecteurFenoarivo,
		showDistrictElecteurManjakandrianaFunc,
		showDistrictElecteurManjakandriana,
		showDistrictElecteurTananariveRuralFunc,
		showDistrictElecteurTananariveRural,


		showCommuneElecteurAmbohidratrimoFunc,
		showCommuneElecteurAmbohidratrimo,
		// Les Communes de District d'Ambohidratrimo
		showCommuneElecteurAmbatolampyFunc,
		showCommuneElecteurAmbatolampy,
		showCommuneElecteurAmbohidratrimoTananaFunc,
		showCommuneElecteurAmbohidratrimoTanana,
		showCommuneElecteurAnosialaFunc,
		showCommuneElecteurAnosiala,
		showCommuneElecteurFenoarivoFunc,
		showCommuneElecteurFenoarivo,
		showCommuneElecteurIvatoFunc,
		showCommuneElecteurIvato,
		showCommuneElecteurTanjombatoFunc,
		showCommuneElecteurTanjombato,
		// Fokontany d'AMBATOLAMPY
		// Fokontany
		showFokontanyElecteurAmbatolampyFunc,
		showFokontanyElecteurAmbatolampy,
		// Fokontany par Commune
		showFokontanyElecteurAmbatolampyGaraFunc,
		showFokontanyElecteurAmbatolampyGara,
		showFokontanyElecteurAmbohipanjaFunc,
		showFokontanyElecteurAmbohipanja,
		showFokontanyElecteurAnkadikelyFunc,
		showFokontanyElecteurAnkadikely,
		showFokontanyElecteurAntanetibeFunc,
		showFokontanyElecteurAntanetibe,
		showFokontanyElecteurMahavelonaFunc,
		showFokontanyElecteurMahavelona,
		showFokontanyElecteurManjakarivoFunc,
		showFokontanyElecteurManjakarivo,

		// AntananarivoAvaradrano
		// District AntananarivoAvaradrano
		showCommuneElecteurAntananarivoAvaradranoFunc,
		showCommuneElecteurAntananarivoAvaradrano,
		// Les Communes de District d'AntananarivoAvaradrano
		showCommuneElecteurAmbohimangakelyFunc,
		showCommuneElecteurAmbohimangakely,
		showCommuneElecteurAndranonahoatraFunc,
		showCommuneElecteurAndranonahoatra,
		showCommuneElecteurAnkadifotsyFunc,
		showCommuneElecteurAnkadifotsy,
		showCommuneElecteurAnosizatoNordFunc,
		showCommuneElecteurAnosizatoNord,
		showCommuneElecteurMantasoaFunc,
		showCommuneElecteurMantasoa,
		showCommuneElecteurTanjombato1Func,
		showCommuneElecteurTanjombato1,
		// Antananarivo Renivohitra
		// District Antananarivo Renivohitra
		showCommuneElecteurAntananarivoRenivohitraFunc,
		showCommuneElecteurAntananarivoRenivohitra,
		// Les Communes de District d'AntananarivoAvaradrano
		showCommuneElecteurAmbatomirahavavyFunc,
		showCommuneElecteurAmbatomirahavavy,
		showCommuneElecteurAmbohijatovoFunc,
		showCommuneElecteurAmbohijatovo,
		showCommuneElecteurAndohan_AnalamahitsyFunc,
		showCommuneElecteurAndohan_Analamahitsy,
		showCommuneElecteurAntananarivoFunc,
		showCommuneElecteurAntananarivo,
		// Fenoarivo
		// District Fenoarivo
		showCommuneElecteurFenoarivo1Func,
		showCommuneElecteurFenoarivo1,
		// Les Communes de District de Fenoarivo
		showCommuneElecteurAmbodivonaFunc,
		showCommuneElecteurAmbodivona,
		showCommuneElecteurAmbohimiadanaFunc,
		showCommuneElecteurAmbohimiadana,
		showCommuneElecteurAmbohitralananaFunc,
		showCommuneElecteurAmbohitralanana,
		showCommuneElecteurAmpitatafikaFunc,
		showCommuneElecteurAmpitatafika,
		showCommuneElecteurFenoarivoTananaFunc,
		showCommuneElecteurFenoarivoTanana,
		showCommuneElecteurManjakandrianaFunc,
		showCommuneElecteurManjakandriana,
		// Manjakandriana
		// District Manjakandriana
		showCommuneElecteurManjakandriana1Func,
		showCommuneElecteurManjakandriana1,
		// Les Communes de District de Manjakandriana
		showCommuneElecteurAmbatolampy1Func,
		showCommuneElecteurAmbatolampy1,
		showCommuneElecteurAmpitatafika1Func,
		showCommuneElecteurAmpitatafika1,
		showCommuneElecteurAndranomanelatraFunc,
		showCommuneElecteurAndranomanelatra,
		showCommuneElecteurAnkazobeFunc,
		showCommuneElecteurAnkazobe,
		showCommuneElecteurFivoaranaFunc,
		showCommuneElecteurFivoarana,
		showCommuneElecteurManjakandrianaTananaFunc,
		showCommuneElecteurManjakandrianaTanana,
		// TANANARIVE RURALE
		// District TANANARIVE RURALE
		showCommuneElecteurTananariveRuralFunc,
		showCommuneElecteurTananariveRural,
		// Les Communes de District de TANANARIVE RURALE
		showCommuneElecteurAmbohidratrimo1Func,
		showCommuneElecteurAmbohidratrimo1,
		showCommuneElecteurAndranonahoatraFunc,
		showCommuneElecteurAndranonahoatra,
		showCommuneElecteurAnosizatoFunc,
		deputes,
	senateur,
		showCommuneElecteurAnosizato,
		showCommuneElecteurIvato1Func,
		showCommuneElecteurIvato1,
		showCommuneElecteurManjakandriana2Func,
		showCommuneElecteurManjakandriana2,
		showCommuneElecteurMantasoa1Func,
		showCommuneElecteurMantasoa1,
		user,
		showModalSupprimerElecteur,
		see,


		// vao2

		showProvinceElecteurFunc,
		showProvinceElecteur,

		/*showDistrictElecteurFunc,
		showDistrictElecteur,

		showCommuneElecteurFunc,
		showCommuneElecteur,*/

		showOptionProvince,
		districtData,

		/*	showOptionDistrict,
		communeData,

		showOptionCommune,
		fokontanyData*/
		showChoixElectionFunc

	}


})
