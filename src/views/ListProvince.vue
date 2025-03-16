<template>
  <div class="flex flex-col h-[86.5vh]">
    <div class="w-full h-full flex items-center justify-center">
      <div class="w-32 h-[86vh]">
        <h1 @click="goToRegion('Mahajanga')"
          class="mt-32 text-gray-700 font-bold text-center hover:text-green-700 p-2 bg-gray-200 rounded-sm shadow-sm transition-transform transform hover:scale-110">
          Mahajanga
        </h1>
        <h1 @click="goToRegion('Antananarivo')"
          class="mt-32 text-gray-700 font-bold text-center hover:text-green-700 p-2 bg-gray-200 rounded-sm shadow-sm transition-transform transform hover:scale-110">
          Antananarivo
        </h1>
        <h1 @click="goToRegion('Toliara')"
          class="mt-32 text-gray-700 font-bold text-center hover:text-green-700 p-2 bg-gray-200 rounded-sm shadow-sm transition-transform transform hover:scale-110">
          Toliara
        </h1>
      </div>
      <img src="../../public/Madagascar.png" alt=""
        class="w-96 h-[86vh] transition-transform transform hover:scale-105">
      <div class="w-32 h-[86vh] pt-10">
        <h1 @click="goToRegion('Antsiranana')"
          class="mb-36 text-gray-700 font-bold text-center hover:text-green-700 p-2 bg-gray-200 rounded-sm shadow-sm transition-transform transform hover:scale-110">
          Antsiranana
        </h1>
        <h1 @click="goToRegion('Toamasina')"
          class="mb-36 text-gray-700 font-bold text-center hover:text-green-700 p-2 bg-gray-200 rounded-sm shadow-sm transition-transform transform hover:scale-110">
          Toamasina
        </h1>
        <h1 @click="goToRegion('Fianaratsoa')"
          class="text-gray-700 font-bold text-center hover:text-green-700 p-2 bg-gray-200 rounded-sm shadow-sm transition-transform transform hover:scale-110">
          Fianaratsoa
        </h1>
      </div>
    </div>
    <footer class="bg-blue-800 text-white text-center p-4 w-full">
      Commission Électorale Nationale - Enceinte CUR - Lazaret nord Antsiranana (201)
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { uselisteElecteur } from "@/stores/listeElecteur";
import "primeicons/primeicons.css";
import { onMounted, ref } from "vue";
import { useShow } from "@/stores/show";
import { useUtilisateur } from "@/stores/utilisateur";
import { useAnneeElectorale } from "@/stores/anneeElectorale";

const show = useShow();
const utilisateur = useUtilisateur();
const anneeElectorale = useAnneeElectorale();
utilisateur.user = JSON.parse(localStorage.getItem("user"));
const utilisateurrole = ref();
const listeElecteur = uselisteElecteur();
const router = useRouter();

function goToRegion(province) {
  show.provinceSelectUser = province;
  // Store the selected province in localStorage
  localStorage.setItem('selectedProvince', province);
  router.push("/elections/ListProvince/region");
}
</script>

<style scoped>
.footer {
  margin: 0 auto;
  width: 100%;
}
</style>
