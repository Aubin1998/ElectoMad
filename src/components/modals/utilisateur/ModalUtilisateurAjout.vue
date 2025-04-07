<template>
  <Transition>
    <div class="showModal backdrop-blur p-2px" v-if="show.showModalAjoutUtilisateur">
      <div class="modal">
        <div class="content">

          <div class="titre">

            <h1 class="tritreModal">AJOUT NOUVEAU UTILISATEUR </h1>
            <div class="closeForm" @click="show.showModalAjoutUtilisateur = !show.showModalAjoutUtilisateur">
              <i class="pi pi-times" style="font-size: 18px; color: #2d4051"></i>
            </div>
          </div>

          <!-- {{ utilisateur.AllElecteurs }} -->

          <div class="mb-3">
            <dt class="font-semibold text-sm text-gray-900 dark:text-white pb-1">Rechercher un électeur</dt>
            <input type="text" placeholder="Chercher par nom" class="input text-sm focus:outline-none"
              v-model="searchQuery" />
          </div>
          <div class="w-full h-[55vh] overflow-y-scroll px-2">
            <div class="grid grid-cols-1 gap-y-1">
              <div v-for="electeur in filteredElecteurs" :key="electeur.id"
                class="flex items-center justify-between bg-white px-4 py-1 rounded shadow">

                <div class="flex-1 text-sm font-semibold text-gray-800">
                  {{ electeur.nomComplet }}
                  {{ electeur.user?.roles[0]?.nomRole }}

                </div>
                <div class="w-[250px] flex justify-end space-x-2">
                  <button @click="makePresident(electeur.user.id, 2, electeur.annee_electorale_id)"
                    v-if="electeur.user?.roles[0]?.nomRole !== 'Contrôleur'"
                    class="bg-blue-500 text-white px-4 py-2 rounded text-[11px]">
                    Nommer Controleur
                  </button>
                  <button @click="makePresident(electeur.user.id, 3, electeur.annee_electorale_id)"
                    v-if="electeur.user?.roles[0]?.nomRole !== 'Opérateur de saisie'"
                    class="bg-green-500 text-white px-4 py-2 rounded text-[11px]">
                    Nommer saisie
                  </button>
                </div>

              </div>
            </div>
          </div>

          <!-- 
          <div class="contenaire" v-if="isFirst">

            <div class="inputCard">
              <h3 class="label">Nom et prénom</h3>
              <input type="text" placeholder="Ajoutez un nom" class="input" v-model="nomComplet" />
            </div>
            <div class="inputCard">
              <h3 class="label">Email</h3>
              <input type="text" placeholder="Son email" class="input" v-model="email" />
            </div>
            <div class="inputCard">
              <h3 class="label">Status</h3>
              <select class="annee" v-model="status" id="">
                <option disabled value="">Choisir un status</option>
                <option value="Permanent">Permanent</option>
                <option value="Journalier">Journalier</option>
              </select>
            </div>
            <div class="inputCard" @click="generate()">
              <h3 class="label">Mot de passe</h3>
              <input type="text" placeholder="Mot de passe" class="input" v-model="role.mdpGenerate" disabled />
            </div>
            <div class="inputCard">
              <div class="inputCard">
                <button @click="toggleDropdown('users')"
                  class="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4
                  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm
                  px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                  {{ selectRoleVar ? selectRoleVar : 'Rôle' }}
                  <svg class="w-2.5 h-2.5 ms-3 pl-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <div v-if="isDropdownOpenRole"
                  class="z-10 bg-white rounded-lg shadow-sm w-60 dark:bg-gray-700 absolute right-50 mt-2">
                  <ul class="h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownUsersButton">
                    <li v-for="role in role.allRolesData" :key="role.id">
                      <a href="#" @click="selectRole(role)"
                        class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        <img class="w-6 h-6 me-2 rounded-full" src="/admin.png" :alt="role.nomRole + ' image'" />
                        {{ role.nomRole }}
                      </a>
                    </li>
                  </ul>

                  <InputComposant v-model="nomRole" placeholder="Rôle" v-if="isInput" />
                  <a href="#" @click="Confirmer()" v-if="isInput"
                    class="flex items-center p-3 text-sm font-medium text-blue-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-blue-500 hover:underline">
                    <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                      viewBox="0 0 20 18">
                      <path
                        d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
                    </svg>
                    Confirmer
                  </a>
                </div>
              </div>
            </div>
            <div class="inputCard">
              <h3 class="label">Profession</h3>
              <input type="text" placeholder="Sa fonction" class="input" v-model="profession" />
            </div>
            <div class="modalFooter" v-if="areFieldsFilled">
              <h3 class="btnAdd add" @click="suivant2('2')">Suivant</h3>
            </div>
          </div>




          <div class="contenaire" v-if="isSeconde">
            <i class="pi pi-arrow-left" style="font-size: 18px; color: white;" @click="suivant2('1')"></i>

            <div class="inputCard">
              <h3 class="label">Adresse</h3>
              <input type="text" placeholder="Son adresse" class="input" v-model="adresse" />
            </div>
            <div class="inputCard">
              <h3 class="label">Carte électeur</h3>
              <input type="text" placeholder="Numéro de la carte électeur" class="input" v-model="carteElecteur" />
            </div>
            <div class="inputCard">
              <h3 class="label">Numéro de la CIN</h3>
              <input type="text" placeholder="Son numéro CIN" class="input" v-model="numeroCIN" />
            </div>
 

            <div class="inputCard">
              <h3 class="label">Date de délivrance </h3>
              <Datepicker v-model="dateDelivreCIN" placeholder="Insérez une date de délivrance"
                style="padding: 5px 10px;width: 100%;border-radius: 5px;border: 1px solid #aaaac5;background-color: #3c4c6d09;color: #fafbfd;"
                class="input" format="dd-MM-yyyy"   :format="formatDate" :model-config="modelConfig" />
            </div>



            <div class="inputCard">
              <h3 class="label">Lieu de délivrance CIN</h3>
              <input type="text" placeholder="Insérez un lieu de délivrance" class="input" v-model="lieuDelivreCIN" />
            </div>




            <div class="inputCard">
              <h3 class="label">Sexe</h3>
              <input type="text" placeholder="Son sexe" class="input" v-model="sexe" />
            </div>
            <div class="modalFooter" v-if="areFieldsFilled2">
              <h3 class="btnAdd add" @click="suivant2('3')">Suivant</h3>
            </div>
          </div>



          <div class="contenaire" v-if="isThird">
            <i class="pi pi-arrow-left" style="font-size: 18px; color: white;" @click="suivant2('2')"></i>


            <div class="inputCard">
              <h3 class="label">Date d'inscription </h3>
              <Datepicker v-model="dateInscription" placeholder="Insérez une date d'inscription"
                style="padding: 5px 10px;width: 100%;border-radius: 5px;border: 1px solid #aaaac5;background-color: #3c4c6d09;color: #fafbfd;"
                class="input" format="dd-MM-yyyy"   />
            </div>
            
            <div class="inputCard">
              <h3 class="label">Date de naissance </h3>
              <Datepicker v-model="dateNaissance" placeholder="Insérez une date de naissance"
                style="padding: 5px 10px;width: 100%;border-radius: 5px;border: 1px solid #aaaac5;background-color: #3c4c6d09;color: #fafbfd;"
                class="input" format="dd-MM-yyyy"   />
            </div>

            


            <div class="inputCard">
              <h3 class="label">Lieu de naissance</h3>
              <input type="text" placeholder="Son lieu de naissance" class="input" v-model="lieuNaissance" />
            </div>
            <div class="inputCard">
              <h3 class="label">Filiation</h3>
              <input type="text" placeholder="Père et mère" class="input" v-model="filiation" />
            </div>
        



            <div class="inputCard">
              <h3 class="label">Téléphone</h3>
              <input type="text" placeholder="Numéro" class="input" v-model="telephone" />
            </div>
        
            <div class="modalFooter" v-if="areFieldsFilled3">
              <h3 class="btnAdd add" @click="Ajout()">Ajouter</h3>
            </div>
          </div> -->

        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>

import Datepicker from "vue3-datepicker";
import InputComposant from "@/components/InputComposant.vue"


import { defineStore } from "pinia";
import { useShow } from "@/stores/show";
const show = useShow();

import { useAnneeElectorale } from "@/stores/anneeElectorale";
import { uselisteElecteur } from "@/stores/listeElecteur";
import { useUtilisateur } from "@/stores/utilisateur";
const isFirst = ref(true)
const isSecond = ref(true)

const utilisateur = useUtilisateur()
import { onMounted, ref, computed } from 'vue';
import '@vuepic/vue-datepicker/dist/main.css';
import { useRole } from "@/stores/role";
const role = useRole();

const anneeElectorale = useAnneeElectorale();
const listeElecteur = uselisteElecteur();

const isSeconde = ref(false)
const isThird = ref(false)
const page = ref('1')

const searchQuery = ref('');
const filteredElecteurs = computed(() => {
  if (!searchQuery.value) {
    return utilisateur.AllElecteurs;
  }
  return utilisateur.AllElecteurs.filter(electeur =>
    electeur.nomComplet.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});




const makePresident = (idUser, idRole, annee_electorale_id) => {
  // listeElecteur.updateElecteurRole(id, "president des bureaux de vote");

  let data = {
    roleId: idRole,
    userId: idUser,
  }
  utilisateur.updateRole(data, annee_electorale_id)

};














function suivant2(item) {
  // Initialiser toutes les valeurs à false
  isFirst.value = false;
  isSeconde.value = false;
  isThird.value = false;

  // Mettre à jour les valeurs en fonction de l'item
  if (item === '1') {
    page.value = item;
    isFirst.value = true;
  } else if (item === '2') {
    page.value = item;
    isSeconde.value = true;
  } else if (item === '3') {
    page.value = item;
    isThird.value = true;
  }
}




function suivant3() {
  isFirst.value = false
  isSeconde.value = false



}
function backtoSecond() {
  isFirst.value = false
  isSeconde.value = true
  isThird.value = false


}

function backtoFirst() {
  isFirst.value = true
  isSeconde.value = false

}
function ajout() {
  show.showModalAjoutUtilisateur = !show.showModalAjoutUtilisateur;
  const password = generatePassword(12);
  role.mdpGenerate = password;
}

const nomComplet = ref('');
const email = ref('');
const nomRole = ref('');
const status = ref('');
const mdp = ref('');
const profession = ref('');
mdp.value = role.mdpGenerate


const adresse = ref('');
const numeroCIN = ref('');
const dateDelivreCIN = ref('');
const lieuDelivreCIN = ref('');
const carteElecteur = ref('');
const sexe = ref('');

const lieuNaissance = ref('');
const filiation = ref('');
const dateNaissance = ref('');
const telephone = ref('');
const dateInscription = ref('');

// États réactifs
const isYearDropdownOpen = ref(false);
const isElectionTypeDropdownOpen = ref(false);
const isDistrictDropdownOpen = ref(false);
const isRegionDropdownOpen = ref(false);
const isDropdownOpenRole = ref(false);
const isDropdownOpen = ref(false);
const showDropdown = ref(false);
const currentUserId = ref(null);
const dropdownBottomPosition = ref('auto');
const isInput = ref(false);
const selectedAnnee = ref(null);
const selectedDistrict = ref(null);
const selectedRegion = ref(null);
const selectRoleVar = ref('');
const roleId = ref('');
function selectRole(role) {
  selectRoleVar.value = role.nomRole;
  roleId.value = role.id;

  isDropdownOpenRole.value = false;
}

function generate() {


}

function generatePassword(length = 12) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];

  }
  mdp.value = password
  return password;
}



const users = ref([
  { id: 9, name: 'Neil Sims', email: 'neil.sims@flowbite.com', role: 'Opérateur de saisie', status: 'Journalier', image: '/admin.png' },
  { id: 10, name: 'Bonnie Green', email: 'bonnie@flowbite.com', role: 'Opérateur de saisie', status: 'Journalier', image: '/admin.png' },
  { id: 11, name: 'Jese Leos', email: 'jese@flowbite.com', role: 'Controller', status: 'Permanent', image: '/admin.png' },
  { id: 12, name: 'Thomas Lean', email: 'thomes@flowbite.com', role: 'Opérateur de saisie', status: 'Journalier', image: '/admin.png' },
  { id: 13, name: 'Leslie Livingston', email: 'leslie@flowbite.com', role: 'Opérateur de saisie', status: 'Journalier', image: '/admin.png' },
]);





const adjustDropdownPosition = () => {
  const dropdownButton = document.querySelector(`button[data-user-id="${currentUserId.value}"]`);
  if (dropdownButton) {
    const rect = dropdownButton.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    if (rect.bottom + 150 > viewportHeight) {
      dropdownBottomPosition.value = `${viewportHeight - rect.bottom}px`;
    } else {
      dropdownBottomPosition.value = 'auto';
    }
  }
};

// Fonctions
const toggleDropdown = (dropdown, userId = null) => {
  // Réinitialiser tous les états de dropdown
  isElectionTypeDropdownOpen.value = false;
  isDistrictDropdownOpen.value = false;
  isDropdownOpen.value = false;
  isRegionDropdownOpen.value = false;
  isYearDropdownOpen.value = false;
  showDropdown.value = false;

  // Basculer l'état du dropdown spécifié
  switch (dropdown) {
    case 'year':
      isYearDropdownOpen.value = !isYearDropdownOpen.value;
      break;
    case 'electionType':
      isElectionTypeDropdownOpen.value = !isElectionTypeDropdownOpen.value;
      break;
    case 'district':
      isDistrictDropdownOpen.value = !isDistrictDropdownOpen.value;
      break;
    case 'users':
      isDropdownOpenRole.value = !isDropdownOpenRole.value;
      if (isDropdownOpen.value == true) {
        isDropdownOpen.value = false;
      } else {
        isDropdownOpen.value = true;
      }
      break;
    case 'dots':
      showDropdown.value = !showDropdown.value;
      currentUserId.value = userId;
      break;
    case 'region':
      isRegionDropdownOpen.value = !isRegionDropdownOpen.value;
      break;
    default:
      console.warn(`Unknown dropdown type: ${dropdown}`);
  }

  adjustDropdownPosition();
};

function Ajout() {

  // users


  let formData = {
    username: nomComplet.value,
    email: email.value,
    mdp: role.mdpGenerate,
    roleId: roleId.value,
    status: status.value,
    nomComplet: nomComplet.value,
    adresse: adresse.value,
    numeroCIN: numeroCIN.value,
    dateDelivreCIN: dateDelivreCIN.value,
    lieuDelivreCIN: lieuDelivreCIN.value,
    carteElecteur: carteElecteur.value,
    sexe: sexe.value,
    lieuNaissance: lieuNaissance.value,
    filiation: filiation.value,
    dateNaissance: dateNaissance.value,
    telephone: telephone.value,
    dateInscription: dateInscription.value,
    profession: profession.value,
    annee_electorale_id: utilisateur.anneeSelected,
    region: utilisateur.regionSelected,
    district: utilisateur.districtSelected,
    commune: '',
    fokontany: ''
  }


  utilisateur.createUtilisateur(formData)















}



const areFieldsFilled = computed(() => {
  return nomComplet.value && email.value && status.value && role.mdpGenerate && roleId.value && profession.value;
});

const areFieldsFilled2 = computed(() => {
  return adresse.value && numeroCIN.value && dateDelivreCIN.value && lieuDelivreCIN.value && carteElecteur.value && sexe.value;
});

const areFieldsFilled3 = computed(() => {
  return lieuNaissance.value && filiation.value && dateNaissance.value && telephone.value && dateInscription.value;
});












function voirDetails(item) {
  show.showAlert = true;
  show.showAlertType = 'success';
  show.showAlertMessage = `Année choisi ${item.annee}`;
  anneeElectorale.anneeElectoraleChoisi = item;

  setTimeout(() => {
    show.showAlert = false;
    show.showAlertType = '';
    show.showAlertMessage = '';
    show.showAcceuilModala = false;
  }, 3000);
}
</script>

<style scoped>
.modalFooter {
  background-color: rgb(34, 199, 83);
  width: 170px;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  margin: 0 auto;
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
  width: 100% !important;
  margin: 10px 2px !important;
}

.contenaire {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.contenaireModal {
  width: 50%;
  border-radius: 10px;
  margin: 0 auto;
  padding: 10px;
}

.closeForm {
  background-color: rgb(231, 230, 230);
  width: 40px;
  height: 40px;
  border-radius: 100%;
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
  background-color: rgba(216, 213, 213, 0.035) !important;
  z-index: 2;
  height: 100%;
  display: flex;
  background: rgba(43, 38, 38, 0.063) !important;
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
  width: 60%;
  margin: 0 auto;
}

.titre {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
