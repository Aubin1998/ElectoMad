<template>
  <Transition>
    <div class="showModal backdrop-blur p-2px" v-if="show.showModalVoirElecteur">
      <div class="modal">
        <div class="closeForm" @click="show.showModalVoirElecteur = !show.showModalVoirElecteur">
          <i class="pi pi-times" style="font-size: 18px; color: #2d4051"></i>
        </div>
        <div class="contenaireModal">
          <div class="content">


            <div class="contenaireModal">
              <h1 class="tritreModal">INFORMATION PERSONNEL DE L'ELECTEUR</h1>

              <div class="contenaire">

                <div class="cardFile">
                  <!-- Display image if file_id exists -->
                  <img v-if="listeElecteur.voirElecteurData?.file?.titre"
                    :src="listeElecteur.voirElecteurData.file?.titre" alt="" class="card-image" />

                  <!-- Display file input if file_id does not exist -->
                  <div class="file-input-container" v-else>
                    <input type="file" @change="(event) => onFileChange(event, listeElecteur.voirElecteurData.id)"
                      id="file-upload" />
                    <label for="file-upload" class="file-input-label">
                      <i class="pi pi-camera text-red-500"></i>
                    </label>
                  </div>
                </div>



                <div class="inputCard">
                  <h3 class="label">Nom et prénom</h3>
                  <h3 class="val">{{ listeElecteur.voirElecteurData.nomComplet }}</h3>

                </div>

                <div class="inputCard">
                  <h3 class="label">Email</h3>
                  <h3 class="val">{{ listeElecteur.voirElecteurData.user.email }}</h3>

                </div>

                <div class="inputCard">
                  <h3 class="label">Date de naissance</h3>
                  <h3 class="val">{{ listeElecteur.voirElecteurData.dateNaissance }}</h3>

                </div>
                <div class="inputCard">
                  <h3 class="label">Lieu de naissance</h3>
                  <h3 class="val">{{ listeElecteur.voirElecteurData.lieuNaissance }}</h3>
                </div>
                <div class="inputCard">
                  <h3 class="label">Sexe</h3>
                  <h3 class="val">{{ listeElecteur.voirElecteurData.sexe }}</h3>

                </div>
                <div class="inputCard">
                  <h3 class="label">Filiation</h3>
                  <h3 class="val">{{ listeElecteur.voirElecteurData.filiation }}</h3>

                </div>
                <div class="inputCard">
                  <h3 class="label">Téléphone</h3>
                  <h3 class="val">{{ listeElecteur.voirElecteurData.telephone }}</h3>

                </div>
                <div class="inputCard">
                  <h3 class="label">Numéro de la CIN</h3>
                  <h3 class="val">{{ listeElecteur.voirElecteurData.numeroCIN }}</h3>

                </div>
                <div class="inputCard">
                  <h3 class="label">Date de délivrance</h3>
                  <h3 class="val">{{ listeElecteur.voirElecteurData.dateDelivreCIN }}</h3>

                </div>
                <div class="inputCard">
                  <h3 class="label">Lieu de délivrance CIN</h3>
                  <h3 class="val">{{ listeElecteur.voirElecteurData.lieuDelivreCIN }}</h3>


                </div>
                <div class="inputCard">
                  <h3 class="label">Adresse ou le lieu de résidence</h3>

                  <h3 class="val">{{ listeElecteur.voirElecteurData.adresse }}</h3>


                </div>
                <div class="inputCard">
                  <h3 class="label">Profession</h3>
                  <h3 class="val">{{ listeElecteur.voirElecteurData.profession }}</h3>


                </div>
                <div class="inputCard">
                  <h3 class="label">Date d'inscription</h3>

                  <h3 class="val">{{ listeElecteur.voirElecteurData.dateInscription }}</h3>

                </div>
                <div class="inputCard">
                  <h3 class="label">Carte d'électeur</h3>

                  <h3 class="val">{{ listeElecteur.voirElecteurData.carteElecteur }}</h3>

                </div>
                <div class="inputCard">
                  <h3 class="label">Année électorale</h3>


                  <h3 class="val">{{ listeElecteur.voirElecteurData.annee_electorale.annee }}</h3>

                </div>

                <div class="btn">
                  <h3 class=""></h3>
                </div>
              </div>

              <div class="modalFooter">

              </div>



            </div>

          </div>
        </div>
      </div>
    </div>
  </Transition>

</template>

<script setup>
import { onMounted, computed, ref, watch } from 'vue'
import { useShow } from "@/stores/show";
const show = useShow();

import { useAuth } from "@/stores/auth";
import { useUtilisateur } from "@/stores/utilisateur";
import { useAnneeElectorale } from "@/stores/anneeElectorale";
import axios from "axios";

import { uselisteElecteur } from "@/stores/listeElecteur";


const auth = useAuth();
const utilisateur = useUtilisateur();
const anneeElectorale = useAnneeElectorale();
const listeElecteur = uselisteElecteur();

function Ajout() {
  listeElecteur.createElecteur()


}







const imageSource = ref(listeElecteur.voirElecteurData?.file.titre);
// Define computed properties
const fileIdExists = computed(() => !!listeElecteur.voirElecteurData.file_id);
// const imageSource = computed(() => listeElecteur.voirElecteurData.file.titre);
const imageAltText = computed(() => 'Electeur Image');

const filer = ref()

// Watcher for imageSource
watch(listeElecteur.voirElecteurData?.file, (newUrl, oldUrl) => {
  console.log('Image source changed from', oldUrl, 'to', newUrl);
  console.log('mimi');

  listeElecteur.voirElecteurData.file_id = newUrl
  // Add any additional logic you want to execute when imageSource changes
});

watch(imageSource, (newUrl, oldUrl) => {
  console.log('Image source changed from', oldUrl, 'to', newUrl);
  listeElecteur.voirElecteurData.file_id = newUrl
  // Add any additional logic you want to execute when imageSource changes
});
// Define the onFileChange function
const onFileChange = async (event, electeurId) => {
  const file = event.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post(
      `http://localhost:8000/api/electeur/${electeurId}/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    // Update the file information after successful upload
    console.log('zzzzzzzzzzzzzzzzz', response.data);

    filer.value = {
      id: 1,
      titre: response.data.url,
      file_name: response.data.url,
    }


    listeElecteur.voirElecteurData.file = filer.value

  } catch (error) {
    console.error('Erreur lors de l\'upload de l\'image :', error);
  }
};



// const onFileChange = async (event, electeurId) => {
//   const file = event.target.files[0];
//   if (!file) return;

//   const formData = new FormData();
//   formData.append("file", file);

//   try {
//     const response = await axios.post(
//       `http://localhost:8000/api/electeur/${electeurId}/upload`,
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );
//   } catch (error) {
//     console.error("Erreur lors de l'upload de l'image :", error);
//   }
// };

function voirDetails(item) {

  show.showAlert = true;
  show.showAlertType = 'success';
  show.showAlertMessage = `Année choisi ${item.annee}`
  anneeElectorale.anneeElectoraleChoisi = item

  setTimeout(() => {
    show.showAlert = false;
    show.showAlertType = '';
    show.showAlertMessage = '';
    show.showAcceuilModala = false;
  }, 3000);


}
let image

onMounted(() => {

  anneeElectorale.getAnnees()

  console.log('manaraka');


  // image = `http://127.0.0.1:8000/${listeElecteur.voirElecteurData.file.titre}`

  let test = ['a', 'b', 'c']
})

function modifier() {

  //listeElecteur.updateElecteur(listeElecteur.modifierElecteurData.electeur.id, listeElecteur.modifierElecteurData)
  ('listeElecteur.voirElecteurData', listeElecteur.voirElecteurData);


}
</script>

<style scoped>
.cardFile {
  width: 100%;
  height: 40vh;
  background-color: #b2b0b030;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-image {
  width: 100%;
  height: 100%;
  border-radius: 5px 5px 0px 0px;
  box-sizing: border-box;
  object-fit: cover;
  /* Cette propriété permet de conserver le ratio de l'image tout en la remplissant */
}

input[type="file"] {
  display: block;
  margin-top: 10px;
}

.file-input-container {
  position: relative;
  width: 50px;
  height: 50px;
  /* background-color: #f5572c; */
}

.file-input-label {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #e1dada;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
}

.file-input-label i {
  color: #555;
}

input[type="file"] {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
}

.modalFooter {
  width: 20%;
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
  align-items: center;
  position: absolute;

  right: 70px;
  bottom: 2px;

}

.val {
  padding: 10px
}

.btnAdd {
  color: #fff;
  font-weight: 600;
  width: 50%;
  display: block;
  margin: 0 auto;
  text-align: center;
  background-color: rgb(34, 199, 83);
  padding: 5px 20px;
  border-radius: 5px;

}

.cancel {
  width: 100px !important;
  background-color: #fff !important;
  border: 2px solid rgb(34, 199, 83);
  color: rgb(34, 199, 83) !important;
}

.add {
  width: 100px !important;

}

.btn {
  width: 200px;
}

.label {
  font-size: 12px;
  font-weight: 600;
}

.inputCard {
  width: 200px !important;
  margin: 10px 2px !important;
}

.contenaire {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

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
  right: 150px;
  top: 90px;
  align-items: center;
  display: flex;
  justify-content: center;
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
  background: rgba(43, 38, 38, 0.801);
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
  font-size: 14px;
  border: 2px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
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
