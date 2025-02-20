<template>
  <Transition>
    <div class="showModal" v-if="show.showModalModifierElecteur">
      <div class="modal">
        <div class="closeForm" @click="show.showModalModifierElecteur = !show.showModalModifierElecteur">
          <i class="pi pi-times" style="font-size: 18px; color: #2d4051"></i>
        </div>
        <div class="contenaireModal">
          <div class="content">


            <div class="contenaireModal">
              <h1 class="tritreModal">MODIFIER L'INFORMATION PERSONNEL</h1>
<!-- {{ listeElecteur.modifierElecteurData }} -->




              <div class="contenaire">
                
                <div class="w-full h-[40vh] bg-[#b2b0b030] flex items-center justify-center">
                            <img v-if="listeElecteur.modifierElecteurData.file?.titre"
                                :src="listeElecteur.modifierElecteurData.file?.titre" alt=""
                                class="w-full h-full rounded-t-lg object-cover" />

                            <div class="relative w-[50px] h-[50px]" v-else>
                                <input type="file"
                                    @change="(event) => onFileChange(event, listeElecteur.modifierElecteurData.id)"
                                    id="file-upload" class="absolute inset-0 opacity-0 cursor-pointer" />
                                <label for="file-upload"
                                    class="flex items-center justify-center w-full h-full bg-[#e1dada] rounded-full cursor-pointer text-[24px]">
                                    <i class="pi pi-camera text-red-500"></i>
                                </label>
                            </div>
                            <div class="absolute w-[50px] h-[50px] t-0" v-if="listeElecteur.modifierElecteurData.file?.titre">
                                <input type="file"
                                    @change="(event) => onFileChange(event, listeElecteur.modifierElecteurData.id)"
                                    id="file-upload" class="absolute inset-0 opacity-0 cursor-pointer" />
                                <label for="file-upload"
                                    class="flex items-center justify-center w-full h-full  rounded-full cursor-pointer text-[24px]">
                                    <i class="pi pi-camera "></i>
                                </label>
                            </div>
                        </div>
              
              
              
              
              
              
              
              
              
              
              
              
                        <div class="inputCard">
                  <h3 class="label">Nom et prénom</h3>
                  <input type="text" placeholder="Ajoutez un nom" class="input"
                    v-model="listeElecteur.modifierElecteurData.nomComplet" />
                </div>

                <div class="inputCard">
                  <h3 class="label">Email</h3>
                  <input type="text" placeholder="Insérez une date de naissance" class="input"
                    v-model="listeElecteur.modifierElecteurData.user.email" />
                </div>

                <div class="inputCard">
                  <h3 class="label">Date de naissance</h3>
                  <VueDatePicker v-model="listeElecteur.modifierElecteurData.dateNaissance"
                    placeholder="Insérez une date de naissance" class="input" />
                </div>



                <div class="inputCard">
                  <h3 class="label">Lieu de naissance</h3>
                  <input type="text" placeholder="Insérez un lieu de naissance" class="input"
                    v-model="listeElecteur.modifierElecteurData.lieuNaissance" />
                </div>
                <div class="inputCard">
                  <h3 class="label">Sexe</h3>
                  <input type="text" placeholder="Ajoutez un sexe" class="input"
                    v-model="listeElecteur.modifierElecteurData.sexe" />
                </div>
                <div class="inputCard">
                  <h3 class="label">Filiation</h3>
                  <input type="text" placeholder="Nom du père et de la mère" class="input"
                    v-model="listeElecteur.modifierElecteurData.filiation" />
                </div>
                <div class="inputCard">
                  <h3 class="label">Téléphone</h3>
                  <input type="text" placeholder="Nom du père et de la mère" class="input"
                    v-model="listeElecteur.modifierElecteurData.telephone" />
                </div>
                <div class="inputCard">
                  <h3 class="label">Numéro de la CIN</h3>
                  <input type="text" placeholder="Insérez un numéro de la CIN" class="input"
                    v-model="listeElecteur.modifierElecteurData.numeroCIN" />
                </div>
               



                <div class="inputCard">
                  <h3 class="label">Date de délivrance</h3>
                  <VueDatePicker v-model="listeElecteur.modifierElecteurData.dateDelivreCIN"
                    placeholder="Insérez une date de naissance" class="input" />
                </div>



                <div class="inputCard">
                  <h3 class="label">Lieu de délivrance CIN</h3>
                  <input type="text" placeholder="Insérez un lieu de délivrance de la CIN" class="input"
                    v-model="listeElecteur.modifierElecteurData.lieuDelivreCIN" />
                </div>
                <div class="inputCard">
                  <h3 class="label">Adresse ou le lieu de résidence</h3>
                  <input type="text" placeholder="Insérez une adresse ou le lieu de résidence" class="input"
                    v-model="listeElecteur.modifierElecteurData.adresse" />

                </div>
                <div class="inputCard">
                  <h3 class="label">Profession</h3>
                  <input type="text" placeholder="Ajoutez un profession" class="input"
                    v-model="listeElecteur.modifierElecteurData.profession" />
                </div>

                <div class="inputCard">
                  <h3 class="label">Date d'inscription</h3>
                  <VueDatePicker v-model="listeElecteur.modifierElecteurData.dateInscription"
                    placeholder="Insérez une date de naissance" class="input" />
                </div>

                <div class="inputCard">
                  <h3 class="label">Carte d'électeur</h3>
                  <input type="text" placeholder="Ajoutez une carte d'électeur" class="input"
                    v-model="listeElecteur.modifierElecteurData.carteElecteur" />
                </div>
                <!-- <div class="inputCard">
                <h3 class="label">Date d'inscription</h3>
                <input type="text" placeholder="Ajoutez une date d'inscription" class="input"
                  v-model="listeElecteur.modifierElecteurData.dateInscription" />
              </div> -->


                <!-- <div class="inputCard">
                <h3 class="label">Année électorale</h3>
                <input type="text" placeholder="Ajoutez une année électorale" class="input"
                  v-model="listeElecteur.modifierElecteurData.annee_electorale_id" />
              </div> -->
                <!-- <div class="inputCard">
                <h3 class="label">User</h3>
                <input type="text" placeholder="Ajoutez une année électorale" class="input"
                  v-model="listeElecteur.modifierElecteurData.user_id" />
              </div> -->
                <!-- <div class="btn">
                  <h3 class=""></h3>
                </div> -->
                 <!-- <div class="inputCard">
                <h3 class="label">Date de délivrance</h3>
                <input type="text" placeholder="Insérez une date de délivrance de la CIN" class="input"
                  v-model="listeElecteur.modifierElecteurData.dateDelivreCIN" />
              </div> -->
              </div>

              <div class="modalFooter">
                <h3 class="btnAdd add" @click="modifier()">modifier</h3>
                <!-- <h3 class="btnAdd cancel" @click="show.showModalModifierElecteur = !show.showModalModifierElecteur">
                  Annuler</h3> -->
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
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const auth = useAuth();
const utilisateur = useUtilisateur();
const anneeElectorale = useAnneeElectorale();
const listeElecteur = uselisteElecteur();

import { ref } from "vue";
import axios from "axios";
function Ajout() {
  listeElecteur.createElecteur()


}
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


const filer = ref()
const onFileChange = async (event, electeurId) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
        console.log('rrrrrrrrrrrrr',listeElecteur.modifierElecteurData?.file?.titre);
        
        
        const response = await axios.post(
            `http://localhost:8000/api/electeur/${electeurId}/upload`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
      

        if (listeElecteur.modifierElecteurData.file?.titre) {
          listeElecteur.modifierElecteurData.file.titre = response.data.url;
        } else {

            filer.value = {
                id: 1,
                titre: response.data.url,
                file_name: response.data.url,
            }


            listeElecteur.modifierElecteurData.file = filer.value
        }






    } catch (error) {
        console.error('Erreur lors de l\'upload de l\'image :', error);
    }
};


function modifier() {

  listeElecteur.updateElecteur(listeElecteur.modifierElecteurData.id)


}
</script>

<style scoped>
.modalFooter {
  width: 20%;
  display: flex;
  justify-content: space-around;
  /* padding-top: 2px; */
  align-items: center;
  position: absolute;
  top: 480px;
  right: 200px;
  bottom: 300px;

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
  background-color: rgb(84, 80, 80);
  color: rgb(250, 246, 246);
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
