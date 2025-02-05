import {createRouter, createWebHistory} from 'vue-router';
import Accueil from '@/views/Acceuil.vue';
import Elections from '@/views/Elections.vue';
import Resultats from '@/views/Resultats.vue';
import ListeElectorale from '@/views/ListeElectorale.vue';
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


const routes = [
	{
		path: '/',
		component: Accueil
	},
	//Elections
	{
		path: '/elections/communale',
		component: ElectionsCommunale
	},
	{
		path: '/elections/legislative',
		component: ElectionsLegislative
	},
	{
		path: '/elections/presidentiel',
		component: ElectionsPresidentiel
	},
	{
		path: '/elections/etapeSuivie',
		component: ElectionsEtapesSuivie
	},
	{
		path: '/elections/textsElection',
		component: ElectionsTextsElection
	},
	{
		path: '/elections/verificationNom',
		component: ElectionsVerificationNom
	},
	{
		path: '/elections/piecesAFournir',
		component: ElectionsPiecesAFounir
	},
	

	//Resultats
	{
		path: '/resultats/communale',
		component: ResultatsCommunale
	},
	{
		path: '/resultats/legislative',
		component: ResultatsLegislative
	},
	{
		path: '/resultats/presidentiel',
		component: ResultatsPresidentiel
	},
	{
		path: '/resultats/archivesElections',
		component: ResultatsArchivesElections
	},
	//Liste électorale
	{
		path: '/liste-electorale/noms',
		component: ListeElectoraleNoms
	},
	{
		path: '/liste-electorale/legislative',
		component: ListeElectoraleLegislative
	},
	{
		path: '/liste-electorale/presidentiel',
		component: ListeElectoralePresidentiel
	},
	{
		path: '/liste-electorale/archives',
		component: ListeElectoraleArchives
	},
	

	//Actualité
	{
		path: '/actualite/alaune',
		component: ActualiteALaUne
	}, 
	{
		path: '/actualite/depeche',
		component: ActualiteDepeche
	},
	{
		path: '/actualite/communiquePresse',
		component: ActualiteCommuniquePresse
	},
	{
		path: '/actualite/decision',
		component: ActualiteDecision
	},
	{
		path: '/actualite/genreInclusion',
		component: ActualiteGenreInclusion
	},
	//A propos
	{
		path: '/apropos',
		component: APropos
	}, 
	//admin
	{
		path: '/admin',
		component: Admin
	}, 
	//test
	{
		path: '/test',
		component: Test
	},
];

const router = createRouter({history: createWebHistory(), routes});


export default router;
