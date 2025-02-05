<template>
    <header class="bg-white shadow">
        <div class="container mx-auto flex justify-between items-center py-4 px-6">
            <div class="flex items-center" @click="acceuil()">
                <img alt="CENI logo" class="h-12" height="50"
                    src="https://storage.googleapis.com/a1aa/image/t1JhXr1JNqnk-8qtkFQF2X0xVAmkBECUq9W24hwRSNg.jpg"
                    width="50" />
                <h1 class="text-3xl font-bold text-blue-700 ml-2">CENI</h1>
            </div>
            <nav class="flex space-x-4">
                <BtnMenu label="Accueil" @click="acceuil()" />
                <Drop label="Élections" :menuItems="menuItems" />
                <Drop label="Résultats" :menuItems="menuItems1" />
                <Drop label="Liste électorale" :menuItems="menuItems2" />
                <Drop label="Actualité" :menuItems="menuItems3" />
                <BtnMenu label="À propos" @click="propos()" />

                <!-- <a class="text-blue-700 hover:underline" href="#"></a>  -->
            </nav>
            <div class="relative">
                <input class="border rounded-full py-1 px-3" placeholder="recherche" type="text" />
                <i class="fas fa-search absolute right-3 top-2 text-gray-500"></i>
            </div>
            <button @click="goToLogin()" class="bg-blue-500 text-white px-4 py-2 rounded ml-4">
                Se connecter
            </button>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Drop from "../components/drop/Drop.vue";
import { useShow } from "@/stores/show";

const show = useShow();

import { useRouter } from 'vue-router';

const router = useRouter();
const menuItems = [
    { tag: 'router-link', to: '/elections/communale', text: 'Communales ' },
    { tag: 'router-link', to: '/elections/legislative', text: 'Législative ' },
    { tag: 'router-link', to: '/elections/presidentiel', text: 'Présidentiel ' },
    { tag: 'router-link', to: '/elections/etapeSuivie', text: 'Les étapes suivies dans le processus électoral' },
    { tag: 'router-link', to: '/elections/textsElection', text: 'Textes pour les élections' },
    { tag: 'router-link', to: '/elections/verificationNom', text: 'Vérification des noms' },
    { tag: 'router-link', to: '/elections/piecesAFournir', text: "Pièces à fournir pour demande d'agrément" },
];

const menuItems1 = [
    { tag: 'router-link', to: '/resultats/communale', text: 'Communales ' },
    { tag: 'router-link', to: '/resultats/legislative', text: 'Législatives ' },
    { tag: 'router-link', to: '/resultats/presidentiel', text: 'Présidentielles' },
    { tag: 'router-link', to: '/resultats/archivesElections', text: 'Archives élections 2018-2019-2020' },
];

const menuItems2 = [
    { tag: 'router-link', to: '/liste-electorale/noms', text: 'Noms dans la liste électorale' },
    { tag: 'router-link', to: '/liste-electorale/legislative', text: 'Législatives ' },
    { tag: 'router-link', to: '/liste-electorale/presidentiel', text: 'Présidentielles' },
    { tag: 'router-link', to: '/liste-electorale/archives', text: 'Archives élections 2018-2019-2020' },
];

const menuItems3 = [
    { tag: 'router-link', to: '/actualite/alaune', text: 'À la une' },
    { tag: 'router-link', to: '/actualite/depeche', text: 'Dépêches' },
    { tag: 'router-link', to: '/actualite/communiquePresse', text: 'Communiqué de presse' },
    { tag: 'router-link', to: '/actualite/decision', text: 'Décisions' },
    { tag: 'router-link', to: '/actualite/genreInclusion', text: 'Genre et inclusion' },
];

const menuItems4 = [
    { tag: 'router-link', to: '/apropos', text: 'Mot du président de la CENI' },
    { tag: 'router-link', to: '/a-propos', text: 'Organisation et fonctionnement' },
    { tag: 'router-link', to: '/a-propos', text: 'Composition bureau et plénière' },
];




//   function goToLogin() {
//     // show.showLogin = true;
//     // show.showHomePage = false;
//     // show.showAdmin = true;
//     // show.showUser = false;
import { Cookies } from "../plugins/cookies";
import BtnMenu from './drop/BtnMenu.vue';

const cookies = new Cookies();
//     // console.log("Go to login");
//   }
function acceuil() {
    router.push('/');
}
function propos() {
    router.push('/apropos');
}

function goToLogin() {
    show.showUser = false;
    router.push('/admin');
    show.showLogin = true;


    // if (localStorage.getItem("user")) {
    //     show.showDashboard = true;
    //     show.showLogin = false;
    // } else {
    //     show.showDashboard = false;
    //     show.showLogin = true;
    //     //   show.showHomePage = true;

    // }
}

</script>