<template>

  <!-- Image avec icône pour ouvrir le modal -->

  <!-- Modal -->
    <Transition name="fade">
      <div class="modal-container bg-contact-grayscale" v-if="show.showModalCIN">
        <div class="modal-content bg-contact-grayscale">
          <div class="header">
            <h1>Votre pièce d'identité</h1>
            <!-- Logo en haut à droite -->
          </div>
          <div class="image-container">

            <img :src="listeElecteur.electeurFind.file.titre" alt="Left Image" class="left-image duration-200 hover:scale-95" style="cursor:pointer " @click="gotoPhotoId" />
            <div class="right-images">
              <h2>Recto de la pièce d'identité</h2>
              <img :src="listeElecteur.electeurFind.electeur.recto_c_i_n_file.titre" alt="Top Right Image" class="top-right-image duration-200 hover:scale-95" style="cursor:pointer " @click="gotoRectoCIN" />
              <h2 class="pt-4">Verso de la pièce d'identité</h2>
              <img :src="listeElecteur.electeurFind.electeur.verso_c_i_n_file.titre" alt="Bottom Right Image" class="bottom-right-image duration-200 hover:scale-95" style="cursor:pointer " @click="gotoVersoCIN" />
            </div>
          </div>
          <button @click="show.showModalCIN = !show.showModalCIN" class="close-button">Fermer</button>
        </div>
      </div>
    </Transition>



</template>
<script setup>
import { ref } from 'vue';
import { useShow } from "@/stores/show";
import { useRouter } from 'vue-router';
import TypeElection from './TypeElection.vue';
import { uselisteElecteur } from "@/stores/listeElecteur";
const listeElecteur = uselisteElecteur();
const router = useRouter();
const showModal = ref(false);
const logoUrl = ref('/logo.svg');
const leftImageUrl = ref('/profil.png');
const topRightImageUrl = ref('/faceCIN.jpg');
const bottomRightImageUrl = ref('/dosCIN1.jpg');
const show = useShow(); //call Show in show.js


function gotoVersoCIN() {
  console.log("HERE");
  router.push("/elections/versoCIN")

  show.showModalCIN = !show.showModalCIN
}

function gotoRectoCIN() {
  console.log("HERE");
  router.push("/elections/rectoCIN")

  show.showModalCIN = !show.showModalCIN
}

function gotoPhotoId() {
  console.log("HERE");
  router.push("/elections/photoIdentite")

  show.showModalCIN = !show.showModalCIN
}


</script>
<style scoped>
.bg-contact-grayscale {
  background-image: url('/effect.png');
  /* Remplacez par le chemin de votre image */
  background-size: cover;
  /* L'image couvre toute la section */
  background-position: center;
  /* Centre l'image */
  background-repeat: no-repeat;
  /* Empêche la répétition de l'image */
  position: relative;
  /* Permet d'utiliser un pseudo-élément pour le filtre */
}
.modal-content {
  position: relative;
  margin-top: 50px;
  box-shadow: 50px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-weight: 700;
}

.logo {
  width: 50px;
  /* Ajustez la taille selon vos besoins */
  height: auto;
  margin-left: auto;
  /* Aligne le logo à droite */
}

.left-image,
.top-right-image,
.bottom-right-image {
  width: 100%;
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  /* Ajustez les valeurs selon vos besoins */
  border-radius: 8px;
  /* Optionnel : pour des coins arrondis */
}

.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 50px;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  color: black;
  font-weight: bold;
  font-size: 25px;

}

.image-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 400px;
  font-size: 15px;
  color: #748091(49, 49, 49);
  text-align: center;
  font-weight: 900 !important;
  border-radius: 20px !important;
  /* Ajustez la hauteur selon vos besoins */
}

.left-image {
  width: 45%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 40px !important;
}

.right-images {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45%;
  border-radius: 20px !important;
  height: 100%;
  font-weight: 700;
  color: #4a6889;
  font-size: 15px;
}

.top-right-image,
.bottom-right-image {
  width: 100%;
  height: 48%;
  /* Ajustez pour laisser un espace entre les images */
  object-fit: cover;
  border-radius: 20px !important;
  padding-top: 5px;
}

.close-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.close-button:hover {
  background-color: #0056b3;
}
</style>