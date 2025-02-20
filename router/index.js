import {createRouter, createWebHistory} from 'vue-router';
import Accueil from '@/views/Acceuil.vue';
import Elections from '@/views/Elections.vue';
import Resultats from '@/views/Resultats.vue';
import Actualite from '@/views/Actualite.vue';
import APropos from '@/views/Apropos.vue';
import Admin from '@/views/Admin.vue';
import Test from '@/views/test.vue';
import ElectionsCommunale from '@/components/user/elections/ElectionsCommunale.vue';
import ElectionsLegislative from '@/components/user/elections/ElectionsLegislative.vue';
import ElectionsPresidentiel from '@/components/user/elections/ElectionsPresidentiel.vue';
import ElectionsEtapesSuivie from '@/components/user/elections/ElectionsEtapesSuivie.vue';
import ElectionsTextsElection from '@/components/user/elections/ElectionsTextsElection.vue';
import ElectionsVerificationNom from '@/components/user/elections/ElectionsVerificationNom.vue';
import ElectionsPiecesAFounir from '@/components/user/elections/ElectionsPiecesAFounir.vue';
import ResultatsCommunale from '@/components/user/resultats/ResultatsCommunale.vue';
import ResultatsLegislative from '@/components/user/resultats/ResultatsLegislative.vue';
import ResultatsPresidentiel from '@/components/user/resultats/ResultatsPresidentiel.vue';
import ResultatsArchivesElections from '@/components/user/resultats/ResultatsArchivesElections.vue';
import ListeElectoraleNoms from '@/components/user/listeElectorale/ListeElectoraleNoms.vue';
import ListeElectoraleLegislative from '@/components/user/listeElectorale/ListeElectoraleLegislative.vue';
import ListeElectoralePresidentiel from '@/components/user/listeElectorale/ListeElectoralePresidentiel.vue';
import ListeElectoraleArchives from '@/components/user/listeElectorale/ListeElectoraleArchives.vue';
import ActualiteALaUne from '@/components/user/actualite/ActualiteALaUne.vue';
import ActualiteDepeche from '@/components/user/actualite/ActualiteDepeche.vue';
import ActualiteCommuniquePresse from '@/components/user/actualite/ActualiteCommuniquePresse.vue';
import ActualiteDecision from '@/components/user/actualite/ActualiteDecision.vue';
import ActualiteGenreInclusion from '@/components/user/actualite/ActualiteGenreInclusion.vue';
// import ActualiteComponent from '@/components/ActualiteComponent.vue';
import ListeElectorale from '@/views/ListeElectorale.vue';
import PdfTest from '@/views/PdfTest.vue';
import Carte from '@/views/Carte.vue';
import TypeElection from '@/views/TypeElection.vue';
import ModalPhotoId from '@/views/ModalPhotoId.vue';
import ModalRectoCIN from '@/views/ModalRectoCIN.vue';
import ModalVersoCIN from '@/views/ModalVersoCIN.vue';
import ElectionPresidentiel from '@/views/ElectionPresidentiel.vue';
import ElectionParlementaire from '@/views/ElectionParlementaire.vue';
import AnneeDepute from '@/views/AnneeDepute.vue';
import AnneeSenateur from '@/views/AnneeSenateur.vue';
import ElectionMunicipale from '@/views/ElectionMunicipale.vue';
import AnneeConseilleMunicipaux from '@/views/AnneeConseilleMunicipaux.vue';
import AnneeMaire from '@/views/AnneeMaire.vue';


















const routes = [
	{
		path: '/',
		component: Accueil
	},
	// Elections
	{
		path: '/elections/listeElectorale',
		component: ListeElectorale
	},
	// {
	// path: '/elections/actualite',
	// component: ActualiteComponent
	// },
	{
		path: '/elections/Pdf',
		component: PdfTest
	},
	{
		path: '/elections/carte',
		component: Carte
	}, {
		path: '/elections/typeElection',
		component: TypeElection
	}, {
		path: '/elections/photoIdentite',
		component: ModalPhotoId
	}, {
		path: '/elections/rectoCIN',
		component: ModalRectoCIN
	}, {
		path: '/elections/versoCIN',
		component: ModalVersoCIN
	},
	{
		path: '/elections/electionPresidentiel',
		component: ElectionPresidentiel
	}, 

	// Resultats
	{
		path: '/elections/electionParlementaire',
		component: ElectionParlementaire
	}, {
		path: '/elections/anneeDepute',
		component: AnneeDepute
	}, {
		path: '/elections/anneeSenateur',
		component: AnneeSenateur
	},
	// Liste électorale
	{
		path: '/elections/electionMunicipale',
		component: ElectionMunicipale
	}, {
		path: '/elections/anneeConseilleMunicipaux',
		component: AnneeConseilleMunicipaux
	}, {
		path: '/elections/anneeMaire',
		component: AnneeMaire
	}, {
		path: '/liste-electorale/archives',
		component: ListeElectoraleArchives
	},


	// Actualité
	{
		path: '/actualite/alaune',
		component: ActualiteALaUne
	}, {
		path: '/actualite/depeche',
		component: ActualiteDepeche
	}, {
		path: '/actualite/communiquePresse',
		component: ActualiteCommuniquePresse
	}, {
		path: '/actualite/decision',
		component: ActualiteDecision
	}, {
		path: '/actualite/genreInclusion',
		component: ActualiteGenreInclusion
	},
	// A propos
	{
		path: '/apropos',
		component: APropos
	},
	// admin
	{
		path: '/admin',
		component: Admin
	},
	// test
	{
		path: '/test',
		component: Test
	},
];

const router = createRouter({history: createWebHistory(), routes});


export default router;
