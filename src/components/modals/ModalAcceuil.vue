<template>
  <Transition>
    <div class="showModal" v-if="show.showAcceuilModala">
      <div class="modal backdrop-blur ">
        <div class="closeForm" @click="show.showAcceuilModala = !show.showAcceuilModala">
          <i class="pi pi-times" style="font-size: 18px; color: #2d4051"></i>
        </div>
        <div class="contenaireModal">
          <div class="content">
            <h1 class="title">Choisir une année</h1>

            <div class="cards-container">
              <template v-if="anneeElectorale.allanneeData && anneeElectorale.allanneeData.length > 0">
                <div class="card" v-for="(item, index) in anneeElectorale.allanneeData" :key="index">
                  <div class="anneeElectorale">
                    <h2 class="text-bold"> {{ item.annee }}</h2>
                  </div>
                  <div class="h-[40%]">
                    <h3 class="text-[#555]">{{ item.descriptionAnnee }}</h3>
                  </div>
                  <div class="flex justify-center items-center px-4 py-2 rounded-lg bg-green-600 bgs"
                    @click="voirDetails(item)">
                    <h4>Voir</h4>
                  </div>
                </div>
              </template>
              <template v-else>

                <div
                  style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
                  <p style="font-size: 18px; margin: 0;">Aucune donnée disponible pour l'année électorale.</p>
                  <p style="font-size: 14px; margin-top: 5px;">Veuillez aller ajouter une année!</p>
                </div>
              </template>
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

const auth = useAuth();
const utilisateur = useUtilisateur();
const anneeElectorale = useAnneeElectorale();

function voirDetails(item) {

  show.showAlert = true;
  show.showAlertType = 'success';
  show.showAlertMessage = `Année choisi ${item.annee}`
  anneeElectorale.anneeElectoraleChoisi = item
  localStorage.setItem('anneeSelectionne', JSON.stringify(item));
  show.showAcceuilModala = false;


}
</script>

<style scoped>
.contenaireModal {
  width: 80%;
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
  right: 210px;
  top: 90px;
  align-items: center;
  display: flex;
  justify-content: center;
}

.showModal {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(216, 213, 213, 0.326);
  z-index: 100;
  height: 100%;
  display: flex;
  background: rgba(43, 38, 38, 0.801);
  justify-content: center;
  align-items: center;
}

.modal {
  width: 100%;
  height: 100vh;
  background-color: rgba(246, 237, 237, 0);
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
  background-color: rgb(19, 161, 19);

  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.cta-button:hover {
  background-color: rgb(19, 161, 19);
}

.bgs {
  background-color: rgb(19, 161, 19);
}

.bgs:hover {
  background-color: rgb(15, 117, 15);
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
  height: 200px;
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
</style>
