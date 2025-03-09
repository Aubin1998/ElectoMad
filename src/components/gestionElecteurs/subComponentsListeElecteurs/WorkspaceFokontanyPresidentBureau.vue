<template>
  <div class="w-full h-full flex justify-between">
    <div class="w-[65%] h-full">
      <div class="bg-gray-700 p-2 mb-2 flex justify-between items-center">
        <h1 class="text-xl font-semibold">President de bureaux</h1>
        <div class="flex">
          <h2 v-if="!listeElecteur.presidentData" class="text-sm px-4 py-1 bg-green-400 rounded-sm mx-2 text-white"
            @click="ajouter">
            Ajouter</h2>
          <h2 v-if="listeElecteur.presidentData" class="text-sm px-4 py-1 bg-yellow-400 rounded-sm text-white">Modifier
          </h2>
        </div>
      </div>
      <template v-if="listeElecteur.presidentData">
        <div class="w-full grid grid-cols-2 gap-x-4 gap-y-1">
          <div class="mb-3">
            <dt class="font-semibold text-sm text-gray-900 dark:text-white pb-1">Nom et prénom</dt>
            <input type="text" placeholder="Dupont Jean" class="input text-sm focus:outline-none"
              v-model="listeElecteur.presidentData.nomComplet" />
          </div>
          <div class="mb-3">
            <dt class="font-semibold text-sm text-gray-900 dark:text-white pb-1">Adresse e-mail</dt>
            <input type="email" placeholder="exemple@gmail.com" class="input text-sm focus:outline-none"
              v-model="listeElecteur.presidentData.user.email" />
          </div>
          <div class="mb-3">
            <dt class="font-semibold text-sm text-gray-900 dark:text-white pb-1">Date de naissance</dt>
            <input type="date" class="input text-sm focus:outline-none"
              :value="formatDateToInput(listeElecteur.presidentData.dateNaissance)"
              @input="updateDateNaissance($event.target.value)" />
          </div>
          <div class="mb-3">
            <dt class="font-semibold text-sm text-gray-900 dark:text-white pb-1">Lieu de naissance</dt>
            <input type="text" placeholder="Ville, Pays" class="input text-sm focus:outline-none"
              v-model="listeElecteur.presidentData.lieuNaissance" />
          </div>
          <div class="mb-3">
            <dt class="font-semibold text-sm text-gray-900 dark:text-white pb-1">Téléphone</dt>
            <input type="tel" placeholder="+33 6 01 02 03 04" class="input text-sm focus:outline-none"
              v-model="listeElecteur.presidentData.telephone" />
          </div>
          <div class="mb-3">
            <dt class="font-semibold text-sm text-gray-900 dark:text-white pb-1">Numéro de carte d'identité</dt>
            <input type="text" placeholder="123456789" class="input text-sm focus:outline-none"
              v-model="listeElecteur.presidentData.numeroCIN" />
          </div>
          <div class="mb-3">
            <dt class="font-semibold text-sm text-gray-900 dark:text-white pb-1">Date de délivrance</dt>
            <input type="date" class="input text-sm focus:outline-none"
              v-model="listeElecteur.presidentData.dateDelivreCIN" />
          </div>
          <div class="mb-3">
            <dt class="font-semibold text-sm text-gray-900 dark:text-white pb-1">Lieu de délivrance</dt>
            <input type="text" placeholder="Ville, Pays" class="input text-sm focus:outline-none"
              v-model="listeElecteur.presidentData.lieuDelivreCIN" />
          </div>
          <div class="mb-3">
            <dt class="font-semibold text-sm text-gray-900 dark:text-white pb-1">Sexe</dt>
            <input type="text" placeholder="M/F" class="input text-sm focus:outline-none"
              v-model="listeElecteur.presidentData.sexe" />
          </div>
          <div class="mb-3">
            <dt class="font-semibold text-sm text-gray-900 dark:text-white pb-1">Adresse</dt>
            <input type="text" placeholder="123 Rue de la Paix, 75000 Paris" class="input text-sm focus:outline-none"
              v-model="listeElecteur.presidentData.adresse" />
          </div>
        </div>
      </template>
      <template v-else>
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
              </div>
              <div>
                <button @click="makePresident(electeur.id)"
                  class="bg-blue-500 text-white px-4 py-2 rounded text-[11px]">
                  Nommer président
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="w-[30%] h-full">
      <div class="w-full h-[70%] bg-gray-600" v-if="listeElecteur.presidentData">
        <img v-if="listeElecteur.presidentData?.file?.titre" :src="listeElecteur.presidentData?.file?.titre" alt=""
          class="size-full rounded-tl-xl rounded-tr-xl  object-cover" />

        <div class="file-input-container" v-else>
          <input type="file" @change="(event) => onFileChange(event, listeElecteur.presidentData.id)" id="file-upload"
            class="file-input-label" />
          <label for="file-upload"
            class="flex1 items-center justify-center w-full h-full bg-[#130e0e] rounded-full cursor-pointer text-[24px]">
            <i class="pi pi-camera cursor-pointer text-gray-500 pointer-events-auto"></i>
          </label>
        </div>


      </div>
      <div class="w-full h-[27%] mt-4 bg-gray-600 p-2" v-if="listeElecteur.presidentData">
        <div class="bg-gray-700 p-2 mb-2 flex justify-between items-center rounded-sm">
          <h1 class="text-sm font-semibold">Bureaux</h1>
          <h2 @click="creerBureau" class="text-sm px-4 py-1 bg-green-400 rounded-sm text-white"
            v-if="!listeElecteur.listBureaux">Creer
          </h2>
        </div>
        <h1 class="text-sm font-semibold">Nom : {{ listeElecteur.listBureaux?.nomBureau }}</h1>
        <h1 class="text-sm font-semibold">Adresse : {{ listeElecteur.listBureaux?.adresse }}</h1>
        <h1 class="text-sm font-semibold">Nombre population : {{ listeElecteur.listElecteursFiltrer.length }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useShow } from "@/stores/show";
import { uselisteElecteur } from "@/stores/listeElecteur";
import axios from "axios";



const listeElecteur = uselisteElecteur();
const show = useShow();

const searchQuery = ref('');



const ajouter = () => {
  const params = {
    annee_electorale_id: localStorage.getItem('anneeSelectionne')
      ? JSON.parse(localStorage.getItem('anneeSelectionne')).id
      : null,
    region: JSON.parse(localStorage.getItem('selectRegion')),
    district: JSON.parse(localStorage.getItem('selectDistrict')),
    commune: JSON.parse(localStorage.getItem('selectCommune')),
    fokontany: JSON.parse(localStorage.getItem('selectFokontany'))
  };

  listeElecteur.getElecteurFiltrer(params);
};

onMounted(() => {
  const params = {
    annee_electorale_id: localStorage.getItem('anneeSelectionne')
      ? JSON.parse(localStorage.getItem('anneeSelectionne')).id
      : null,
    region: JSON.parse(localStorage.getItem('selectRegion')),
    district: JSON.parse(localStorage.getItem('selectDistrict')),
    commune: JSON.parse(localStorage.getItem('selectCommune')),
    fokontany: JSON.parse(localStorage.getItem('selectFokontany')),
    role: 'president des bureaux de vote'
  };
  listeElecteur.getElecteurFiltrerRole(params);
  listeElecteur.presidentData = listeElecteur.listElecteursFiltrer.find((electeur) => electeur.role === 'president des bureaux de vote');
});

function formatDate(isoDateString) {
  const date = new Date(isoDateString);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  };

  return date.toLocaleDateString(undefined, options);
}

watch(() => listeElecteur.listElecteursFiltrer, (newVal) => {
  listeElecteur.presidentData = newVal.find((electeur) => electeur.role === 'president des bureaux de vote');

  listeElecteur.getBureauxByElecteurId(listeElecteur.presidentData.id)

});

const filteredElecteurs = computed(() => {
  if (!searchQuery.value) {
    return listeElecteur.listElecteursFiltrer;
  }
  return listeElecteur.listElecteursFiltrer.filter(electeur =>
    electeur.nomComplet.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const makePresident = (id) => {
  listeElecteur.updateElecteurRole(id, "president des bureaux de vote");
};

function formatDateToInput(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Méthode pour mettre à jour la date de naissance
function updateDateNaissance(newDate) {
  listeElecteur.presidentData.dateNaissance = newDate;
}
const filer = ref()
const onFileChange = async (event, idElecteur) => {
  const file = event.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post(
      `http://localhost:8000/api/electeur/${idElecteur}/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    const params = {
      annee_electorale_id: localStorage.getItem('anneeSelectionne')
        ? JSON.parse(localStorage.getItem('anneeSelectionne')).id
        : null,
      region: JSON.parse(localStorage.getItem('selectRegion')),
      district: JSON.parse(localStorage.getItem('selectDistrict')),
      commune: JSON.parse(localStorage.getItem('selectCommune')),
      fokontany: JSON.parse(localStorage.getItem('selectFokontany'))
    };

    listeElecteur.getElecteurFiltrer(params);
  } catch (error) {
    console.error('Erreur lors de l\'upload de l\'image :', error);
  }
};



const creerBureau = () => {
  show.showCreationBureau = true



  show.showDataParamBureau = {
    region: JSON.parse(localStorage.getItem('selectRegion')),
    district: JSON.parse(localStorage.getItem('selectDistrict')),
    commune: JSON.parse(localStorage.getItem('selectCommune')),
    fokontany: JSON.parse(localStorage.getItem('selectFokontany')),
    electeur_id: listeElecteur.presidentData.id
  };
  console.log('possss', show.showDataParamBureau);



}



</script>


<style scoped>
.contenaire {
  padding-top: 20px;
}

.form {
  width: 100%;
  margin-bottom: 20px;
}

.form h4 {
  font-weight: 600;
  padding: 10px;
}

.itemForm {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.list {
  /* background-color: green;*/
  width: 100%;
  height: 100%;
  scroll-behavior: auto;
  overflow-y: auto;
}

.titre {
  display: flex;
  justify-content: space-around;
  padding: 5px;
  align-items: center;
}

.subtitle {
  width: 70%;
  padding-left: 20px;
  font-weight: 700;
}

.itemContainer {
  width: 30%;
  margin: 10px 2px;
}

.number {
  font-weight: 600;
  color: #d4d9e2;
  width: 10%;
}

.item {
  /*background-color: aqua;*/
  background-color: rgba(236, 247, 236, 0.089);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  margin-bottom: 5px;
  border-bottom: 2px solid rgba(231, 222, 222, 0.507);

}

.scroll-container {
  max-height: 100%;
  /* Limite la hauteur */
  overflow-y: auto;
  /* Ajoute un défilement vertical si nécessaire */
  padding: 10px;
  /* Espacement interne */
}

.item h4 {
  font-weight: 600;

}

.item h5 {
  font-weight: 600;

}

.subItem {
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn {
  width: 25%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.icon {
  background-color: rgb(0, 2, 128);
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 100%;
}

.icon:hover {
  background-color: rgb(168, 169, 230);

}

.blue {
  background-color: rgb(74, 74, 241)
}

.orange {
  background-color: rgb(241, 169, 74)
}

.text-color-numeros {
  color: white;
  /* Choisissez la couleur que vous souhaitez */
}

.text-color-nom {
  color: white;
  /* Choisissez la couleur que vous souhaitez */
}

.text-color-sexe {
  color: white;
  /* Choisissez la couleur que vous souhaitez */
}

.message {
  display: flex;
  justify-content: center;
  /* Centre horizontalement */
  align-items: center;
  /* Centre verticalement */
  height: 100%;
  /* Assure que le conteneur prend toute la hauteur disponible */
  text-align: center;
  /* Centre le texte à l'intérieur de l'élément */
  margin: 20px 0;
  /* Ajoute un espacement au-dessus et en dessous */
  color: rgb(231, 216, 216);
  /* Couleur du texte pour le message */
  font-size: 18px;
  /* Taille de la police */
}

.red {
  background-color: rgb(241, 74, 74)
}

.info {
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  background-color: #8a8e9769;
  color: #fff;
}

.input {
  padding: 5px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #aaaac5;
  background-color: #3c4c6d09;
  color: #aca5a5;
}

input-placeholder {
  color: red;
}

.formulaire {
  width: 25%;
  background-color: rgba(128, 221, 133, 0.13);
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px 5px;
  border-radius: 5px;
  padding: 10px 0px;
}

.cercle {
  width: 120px;
  height: 120px;
  background-color: rgb(180, 245, 180);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 100%;
}

.cercle h1 {
  font-weight: 600;
  color: rgba(112, 105, 105, 0.74);
}

.add {
  width: 100px !important;

}

.cancel {
  width: 100px !important;
  background-color: #fff !important;
  border: 2px solid rgb(34, 199, 83);
  color: rgb(34, 199, 83) !important;
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

.btnAdd h3:hover {
  background-color: rgb(101, 230, 140);

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

.contenaireModal {
  width: 60%;
  height: 80vh;
  background-color: white;
  border-radius: 10px;
  margin: 0 auto;
  padding: 10px;
}

.contenaireModalSupp {
  width: 25%;
  height: 25vh;
  background-color: white;
  border-radius: 10px;
  margin: 0 auto;
  padding: 10px;
}

.supp {
  color: #2c2b2b;
  padding: 0px 10px 20px 10px;
}

.suppNom {
  color: #2c2b2b;
  padding: 0px 10px;
  font-weight: bold;
  margin-bottom: 20px;
}

.section {
  width: 45%;

}

/* .flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 10px;
} */

.label {
  color: rgb(56, 55, 55);
  font-weight: bold;
  font-size: 15px;
  padding-left: 5px;

}

.inputCard {
  padding: 4px 0;
}

.tritreModal {
  color: #2c2b2b;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  padding-bottom: 10px;
}

.modalFooter {
  width: 20%;
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
  align-items: center;
  position: absolute;
  right: 320px;
  bottom: 80px;

}

.contenu {
  color: #57565680;
  font-weight: bold;
  background-color: #302f2f13;
  padding: 10px 5px 5px 20px;
  border-radius: 5px;
  margin: 0;
}
</style>
