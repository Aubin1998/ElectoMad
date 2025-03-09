<template>


  <header x-data="{navbarOpen: false}" class="absolute sticky left-0 top-0 z-50 bg-white/90 w-full backdrop-blur">
    <div class="mx-auto h-[90px] max-w-7xl px-8 md:px-6">
      <div class="relative flex h-full items-center justify-between border-b border-slate-500/10">
        <!-- logo -->
        <div class="flex items-center w-[15rem] max-w-full">
          <a href="#" class="flex items-center">
            <img src="/logo.svg" alt="logo" class="w-1/3">
            <span class="ml-1 text-4xl font-bold" style="color:  #0A2753;">votiflow</span>
          </a>
        </div>





        <!-- menu -->
        <div class="flex w-full items-center justify-between">
          <nav x-transition :class="!navbarOpen && 'hidden'" id="navbarCollapse"
            class="absolute right-0 top-[90px] w-full max-w-[350px] rounded-lg border border-blue-200 bg-white py-5 px-6 shadow-lg shadow-blue-400/5 transition-all lg:static lg:block lg:max-w-full lg:border-none lg:shadow-none lg:bg-transparent lg:px-0 lg:py-0">
            <ul class="flex flex-col justify-center gap-8 lg:flex-row">
              <li>
                <a href="#" class="text-lg font-medium text-slate-700 duration-200 hover:text-blue-600 lg:text-base"
                  @click="goAccueil">Accueil</a>
              </li>
              <li>
                <a href="#actualite"
                  class="text-lg font-medium text-slate-700 duration-200 hover:text-blue-600 lg:text-base "
                  @click="goAccueil">Actualités</a>
              </li>
              <!-- <li>
                <a href="#apropos"
                  class="text-lg font-medium text-slate-700 duration-200 hover:text-blue-600 lg:text-base"
                  @click="goAccueil">A
                  propos</a>
              </li> -->

              <li>
                <a href="#contact"
                  class="text-lg font-medium text-slate-700 duration-200 hover:text-blue-600 lg:text-base">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- menu btn -->
        <div class="flex">


          <button @click="goToLogin()"
            class="mr-6 hidden rounded-md bg-blue-500 px-8 py-2.5 font-semibold text-white shadow-md shadow-blue-500/20 duration-200 hover:bg-blue-600 sm:block lg:mr-0"
            style="white-space: nowrap;">
            Se connecter
          </button>

        </div>
      </div>
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

function goAccueil() {
  router.push("/")

}


const menuItems = [
  { tag: 'router-link', to: '/elections/communale', text: 'Communales ' },
  { tag: 'router-link', to: '/elections/legislative', text: 'Législative ' },
  { tag: 'router-link', to: '/elections/presidentiel', text: 'Présidentielle ' },
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




import { Cookies } from "../plugins/cookies";
import BtnMenu from './drop/BtnMenu.vue';

const cookies = new Cookies();
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



}

</script>