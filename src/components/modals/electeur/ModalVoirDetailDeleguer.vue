<template>
  <Transition>
    <div class="showModal backdrop-blur p-2px" v-if="show.showDetailDelegue">
      <div class="modal">
        <div class="closeForm" @click="show.showDetailDelegue = !show.showDetailDelegue">
          <i class="pi pi-times" style="font-size: 18px; color: #2d4051"></i>
        </div>
        <div class="closeForm1" @click="show.see = !show.see" v-if="!show.see">
          <i class="pi pi-arrow-left" style="font-size: 18px; color: white"></i>
        </div>

        <div class="contenaireModal">
          <div class="content">



            <div class="contenaireModal" v-if="show.see">
              <h1 class="tritreModal  text-[23px]">Détail sur le délégué<datalist></datalist></h1>
              <div class="contenaire ">
                <!-- {{ show.showDetailDelegueData }} -->

                <div class="mt-4 w-full flex justify-around ">

                  <div class="w-[40%]">
                    <h1 class="p-2 mb-1 bg-gray-300 text-black font-semibold">{{
                      show.showDetailDelegueData.electeur.nomComplet }}</h1>
                    <h1 class="p-2 mb-1 bg-gray-300 text-black font-semibold">{{
                      show.showDetailDelegueData.electeur.profession }}</h1>
                    <h1 class="p-2 mb-1 bg-gray-300 text-black font-semibold">{{
                      show.showDetailDelegueData.electeur.adresse }}</h1>
                    <h1 class="p-2 mb-1 bg-gray-300 text-black font-semibold">{{
                      show.showDetailDelegueData.electeur.numeroCIN }}</h1>
                    <h1 class="p-2 mb-1 bg-gray-300 text-black font-semibold">{{
                      show.showDetailDelegueData.electeur.dateDelivreCIN }}</h1>
                    <h1 class="p-2 mb-1 bg-gray-300 text-black font-semibold">{{
                      show.showDetailDelegueData.electeur.lieuDelivreCIN }}</h1>
                    <h1 class="p-2 mb-1 bg-gray-300 text-black font-semibold">{{
                      show.showDetailDelegueData.electeur.carteElecteur }}</h1>
                    <h1 class="p-2 mb-1 bg-gray-300 text-black font-semibold">{{
                      show.showDetailDelegueData.electeur.sexe }}</h1>
                    <h1 class="p-2 mb-1 bg-gray-300 text-black font-semibold">{{
                      show.showDetailDelegueData.electeur.lieuNaissance }}</h1>
                    <h1 class="p-2 mb-1 bg-gray-300 text-black font-semibold">{{
                      show.showDetailDelegueData.electeur.filiation }}</h1>
                    <!-- <h1 class="p-2 mb-1 bg-gray-300 text-black font-semibold">{{
                      show.showDetailDelegueData.electeur.dateNaissance }}</h1>
                    <h1 class="p-2 mb-1 bg-gray-300 text-black font-semibold">{{
                      show.showDetailDelegueData.electeur.telephone }}</h1>
                    <h1 class="p-2 mb-1 bg-gray-300 text-black font-semibold">{{
                      show.showDetailDelegueData.electeur.dateInscription }}</h1> -->
                  </div>


                  <div class="w-[40%]">
                    <h1 class="p-2 mb-1 bg-gray-300 text-black font-semibold">{{
                      show.showDetailDelegueData.electeur.dateNaissance }}</h1>
                    <h1 class="p-2 mb-1 bg-gray-300 text-black font-semibold">{{
                      show.showDetailDelegueData.electeur.telephone }}</h1>
                    <h1 class="p-2 mb-1 bg-gray-300 text-black font-semibold">{{
                      show.showDetailDelegueData.electeur.dateInscription }}</h1>

                    <div>
                      <h2 class="p-2 mb-1">Information sur le candidat</h2>
                    </div>


                    <h1 class="p-2 mb-1 bg-gray-300 text-black font-semibold">{{
                      show.showDetailDelegueData.candidat.electeur.nomComplet }}</h1>
                    <h1 class="p-2 mb-1 bg-gray-300 text-black font-semibold">{{
                      show.showDetailDelegueData.candidat.electeur.sexe }}</h1>
                    <h1 class="p-2 mb-1 bg-gray-300 text-black font-semibold">{{
                      show.showDetailDelegueData.candidat.electeur.telephone }}</h1>
                    <h1 class="p-2 mb-1 bg-gray-300 text-black font-semibold">{{
                      show.showDetailDelegueData.candidat.electeur.profession }}</h1>
                    <h1 class="p-2 mb-1 bg-gray-300 text-black font-semibold">{{
                      show.showDetailDelegueData.candidat.electeur.adresse }}</h1>
                    <h1 class="p-2 mb-1 bg-gray-300 text-black font-semibold">{{
                      show.showDetailDelegueData.electeur.lieuDelivreCIN }}</h1>



                  </div>





                </div>

              </div>


            </div>



            <div class="contenaireModal" v-if="!show.see">


              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload
                file</label>
              <input
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input" type="file" @change="(event) => upload(event)">
              <div class="modalFooter">
                <h3 class="btnAdd add" @click="Ajout()">Ajouter</h3>
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  </Transition>

</template>

<script setup>
import { useShow } from "@/stores/show";
const show = useShow();

import { useAuth } from "@/stores/auth";
import { useUtilisateur } from "@/stores/utilisateur";
import { useAnneeElectorale } from "@/stores/anneeElectorale";
import { uselisteElecteur } from "@/stores/listeElecteur";

import { ref, onMounted, computed } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import { watch } from 'vue';
import { useDelegue } from "@/stores/delegue";


const auth = useAuth();
const utilisateur = useUtilisateur();
const anneeElectorale = useAnneeElectorale();
const listeElecteur = uselisteElecteur();
const delegue = useDelegue();
let anneeElectoralId
const searchQuery = ref('');


watch(() => show.modalAssignerDeleduer, (newValue) => {
  if (newValue) {
    anneeElectoralId = show.modalAssignerDeleduerData.annee_electorale_id
    console.log(anneeElectoralId);
    delegue.getCandidatByAnneeElectoral(anneeElectoralId)
  }
});

const filteredElecteurs = computed(() => {
  if (!searchQuery.value) {
    return delegue.listCandidats;
  }
  return delegue.listCandidats.filter(electeur =>
    electeur.electeur.nomComplet.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});


function selectCandidat(candidat) {

  let data = {
    electeur_id: show.modalAssignerDeleduerData.id,
    candidat_id: candidat.id,
    annee_electorale_id: show.modalAssignerDeleduerData.annee_electorale_id,
    region: show.modalAssignerDeleduerData.region,
    commune: show.modalAssignerDeleduerData.commune,
    district: show.modalAssignerDeleduerData.district,
    fokontany: show.modalAssignerDeleduerData.fokontany,
  }

  delegue.postDeleguer(data)

}

</script>

<style scoped>
.modalFooter {
  background-color: rgb(34, 199, 83);
  width: 170px;
  position: relative;
  left: 105vh;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  margin-top: 20px;
}

.btn {
  width: 200px;
}

.label {
  font-size: 12px;
  font-weight: 600;
}

.annee {
  width: 100%;
  padding: 5px;
  background-color: #3c4c6d09;
  border-radius: 5px;
  border: 1px solid #aaaac5;
  color: #fafbfd;
}

.annee option {
  background-color: #383a3d;
  /* Couleur de l'arrière-plan pour les options */
  color: #f5f6f8;
}

.annee:focus {
  border-color: #3498db;
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
  outline: none;
}

.inputCard {
  width: 200px !important;
  margin: 10px 2px !important;
}

.contenaire {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  gap: 15px;
}

.contenaireModal {
  width: 90%;
  border-radius: 10px;
  margin: 0 auto;
  padding: 10px;
}

.closeForm {
  background-color: rgb(231, 230, 230);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  position: absolute;
  right: 160px;
  top: 90px;
  align-items: center;
  display: flex;
  justify-content: center;
}

.closeForm1 {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  position: absolute;
  left: 160px;
  top: 90px;
  align-items: center;
  display: flex;
  justify-content: center;
  color: white;
}

.closeForm:hover {
  background-color: rgba(222, 41, 41, 0.753);
  transform: scale(1.1);
}

.showModal {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(216, 213, 213, 0.326);
  z-index: 100;
  height: 100%;
  display: flex;
  background: rgba(43, 38, 38, 0);
  justify-content: center;
  align-items: center;

}

.modal {
  width: 100%;
  height: 100vh;
  background-color: rgba(196, 190, 190, 0.452);
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: hidden;
  align-items: center;
  padding: 10vh;
}

.content {
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 30px;
  border-radius: 10px;
}

.title {
  font-size: 48px;
  margin-bottom: 30px;
}

.message {
  font-size: 24px;
  margin-bottom: 30px;
}

.cta-button {
  padding: 15px 30px;
  font-size: 20px;
  color: white;
  background-color: rgb(15, 117, 15);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.cta-button:hover {
  background-color: rgb(19, 161, 19);
}

.spinner-6 {
  width: 80px;
  aspect-ratio: 1;
  display: grid;
  -webkit-mask: conic-gradient(from 15deg, #0000, #000);
  -moz-mask: conic-gradient(from 15deg, #0000, #000);
  mask: conic-gradient(from 15deg, #0000, #000);
  animation: s6 1s infinite steps(12);
}

.spinner-6,
.spinner-6:before,
.spinner-6:after {
  background:
    radial-gradient(closest-side at 50% 12.5%, #6261CC 96%, #0000) 50% 0/20% 80% repeat-y,
    radial-gradient(closest-side at 12.5% 50%, #6261CC 96%, #0000) 0 50%/80% 20% repeat-x;
}

.spinner-6:before,
.spinner-6:after {
  content: "";
  grid-area: 1/1;
  transform: rotate(30deg);
}

.spinner-6:after {
  transform: rotate(60deg);
}

@keyframes s6 {
  100% {
    transform: rotate(1turn);
  }
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  height: 52vh;
  overflow-y: scroll;
}

.card {
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 30%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05);
}

.anneeElectorale h2 {
  font-size: 36px;
  /* Plus grand pour l'année */
  color: #333;
  margin: 0;
  padding: 8px 0;
}

.genreElection h3 {
  font-size: 24px;
  /* Taille moyenne pour le genre d'élection */
  color: #555;
  margin: 0;
  padding: 8px 0;
}

.bouton h4 {
  font-size: 18px;
  /* Plus petit pour "Voir" */
  color: white;
  background-color: rgb(15, 117, 15);
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s;
}

.bouton h4:hover {
  background-color: rgb(19, 161, 19);
}

.input {
  width: 100%;
  padding: 5px 10px;
  font-size: 16px;
  border: 1px solid #aaaac5;
  border-radius: 4px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  color: #fafbfd;
  background-color: #3c4c6d09;

}

.p {
  background-color: red;
}

.input1 {
  width: 100%;
  padding: 5px 10px;
  font-size: 16px;
  border: 1px solid #aaaac5;
  border-radius: 4px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  color: #fafbfd;
  background-color: #0f52d609;

}


.input1:focus {
  border-color: #1a93d0;
  /* Couleur de la bordure lors du focus */
  box-shadow: 0 0 5px rgba(102, 204, 255, 0.5);
  /* Ombre */
}


.input:focus {
  border-color: #3498db;
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
  outline: none;
}

.input::placeholder {
  color: #999;
}
</style>