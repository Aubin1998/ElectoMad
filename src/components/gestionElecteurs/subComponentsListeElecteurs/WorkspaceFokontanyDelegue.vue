<template>
  <div class="list" v-if="show.user == 'admin'">
    <div class="titre">
      <h4 class="subtitle">
        Liste des délégués de vote
      </h4>
      <h4 class="number">{{ listFokontany.length }}</h4>
      <h3 class="btnAdd add" @click="see()">Ajouter</h3>

      <div class="itemContainer">
        <input v-model="searchQuery" type="text" placeholder="Recherche par nom" class="input" />
      </div>
    </div>
    <!-- <div v-if="listeElecteur?.electeurs.length === 0">
      <h1>Aucun electeur trouvé</h1>
    </div> -->
    <div v-if="filteredElecteurs.length === 0" class="no-results">

      <h4 class="message">Aucune électeur trouvée.</h4>
    </div>

    <div v-if="filteredElecteurs.length !== 0" class="flex mb-8  items-center">
      <h1 class="px-2 w-[10%]">Numéros</h1>
      <div class="flex items-center justify-between  w-[70%]">
        <h1 class=" ml-10 ">Nom</h1>
        <h1 class="mr-14">Sexe</h1>
      </div>
      <div class="  flex justify-center w-[20%]">
        Action
      </div>
    </div>


    <div class="scroll-container  border-t-2">
      <div class="item" v-for="(item, index) in filteredElecteurs" :key="index">

        <h4 class="w-[10%] px-2">{{ item?.id }}</h4>
        <div class=" flex w-[70%] justify-between px-4  ">
          <h4>{{ item.nomComplet }}</h4>
          <h5>{{ item.sexe }}</h5>
        </div>
        <div class="flex justify-between px-2 w-[20%]">
          <div class="icon blue" @click="voir(item)">
            <i class="pi pi-eye" style="font-size: 18px; color: white;"></i>
          </div>
          <div class="icon orange" @click="modifier(item)">
            <i class="pi pi-pencil" style="font-size: 18px; color: white;"></i>
          </div>
          <div class="icon red" @click="supprimer(item)">
            <i class="pi pi-trash" style="font-size: 18px; color: white;"></i>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="list" v-if="show.user == 'Opérateur de saisie'">
    <div class="titre">
      <h4 class="subtitle">
        Liste des électeurs
      </h4>
      <h3 class="btnAdd add" @click="show.showModalAjoutElecteur = !show.showModalAjoutElecteur">Ajouter</h3>

      <div class="itemContainer">
        <input v-model="searchQuery" type="text" placeholder="Recherche par nom" class="input" />
      </div>
    </div>
    <div v-if="filteredElecteurs.length === 0" class="no-results">
      <h4 class="message">Aucune année trouvée.</h4>
    </div>

    <div v-if="filteredElecteurs.length !== 0" class="flex items-center">
      <h1 class="px-2 w-[10%] text-color-numeros">ID</h1>
      <div class="flex items-center justify-between px-4 w-[70%]">
        <h1 class="text-color-nom">Nom</h1>
        <h1 class="text-color-sexe">Sexe</h1>
      </div>
      <div class=" bg-green-500   w-[20%]">
      </div>
    </div>


    <div class="scroll-container">
      <div class="item" v-for="(item, index) in filteredElecteurs" :key="index">
        <h4 class="w-[10%] px-2">{{ item?.id }}</h4>
        <div class=" flex w-[70%] justify-between px-4  ">
          <h4>{{ item.nomComplet }}</h4>
          <h5>{{ item.sexe }}</h5>
        </div>
        <div class="flex justify-between px-2 w-[15%]">
          <div @click="assigne(item)">Assigner</div>
        </div>
      </div>
    </div>

    <div>
      <h1 class="px-4 py-2">Liste des delegues </h1>
      <div class="scroll-container">
        <div class="item" v-for="(item, index) in delegue.listDelegues" :key="index">
          <h4 class="w-[10%] px-2">{{ item?.id }}</h4>
          <div class=" flex w-[70%] justify-between px-4  ">
            <h4>{{ item.electeur.nomComplet }}</h4>
          </div>
          <div class="flex justify-around px-2 w-[15%]">

            <i class="pi pi-eye" style="font-size: 18px; color:blue" @click="voirdetail(item)"></i>
            <!-- <i class="pi pi-times" style="font-size: 18px; color:red" @click="deleteDelegue(item)"></i> -->
          </div>
        </div>
      </div>
    </div>













  </div>




  <div class="list" v-if="show.user === 'Contrôleur'">
    <div class="titre">
      <h4 class="subtitle">
        Liste des électeurs
      </h4>
      <h4 class="number">{{ listeElecteur?.electeurs.length }}</h4>
      <h3 class="btnAdd add" @click="show.showModalAjoutElecteur = !show.showModalAjoutElecteur">Ajouter</h3>

      <div class="itemContainer">
        <input v-model="searchQuery" type="text" placeholder="Recherche par nom" class="input" />
      </div>
    </div>
    <!-- <div v-if="listeElecteur?.electeurs.length === 0">
      <h1>Aucun electeur trouvé</h1>
    </div> -->
    <div v-if="filteredElecteurs.length === 0" class="no-results">
      <img src="/candidat01.jpg" alt="">

      <h4 class="message">Aucune électeur trouvée.</h4>
    </div>

    <div v-if="filteredElecteurs.length !== 0" class="flex items-center">
      <h1 class="px-2 w-[10%]">Numéros</h1>
      <div class="flex items-center justify-between px-4 w-[70%]">
        <h1>Nom</h1>
        <h1>Sexe</h1>
      </div>
      <div class=" bg-green-500   w-[20%]">
      </div>
    </div>


    <div class="scroll-container">
      <div class="item" v-for="(item, index) in filteredElecteurs" :key="index">


        <h4 class="w-[10%] px-2">{{ item?.id }}</h4>
        <div class=" flex w-[70%] justify-between px-4  ">
          <h4>{{ item.nomComplet }}</h4>
          <h5>{{ item.sexe }}</h5>
        </div>
        <div class="flex justify-between px-2 w-[20%]">
          <div class="icon blue" @click="voir(item)">
            <i class="pi pi-eye" style="font-size: 18px; color: white;"></i>
          </div>
          <div class="icon orange" @click="modifier(item)">
            <i class="pi pi-pencil" style="font-size: 18px; color: white;"></i>
          </div>
          <div class="icon red" @click="supprimer(item)">
            <i class="pi pi-trash" style="font-size: 18px; color: white;"></i>
          </div>
        </div>
      </div>
    </div>
  </div>



</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useShow } from "@/stores/show";
import { uselisteElecteur } from "@/stores/listeElecteur";
import { useDelegue } from '@/stores/delegue';


const listeElecteur = uselisteElecteur();
const show = useShow();
const delegue = useDelegue()



// Déclaration de query de recherche
const searchQuery = ref('');
const params = ref({
  annee_electorale_id: localStorage.getItem('anneeSelectionne') ? JSON.parse(localStorage.getItem('anneeSelectionne')).id : null,
  region: localStorage.getItem('region'),
  district: localStorage.getItem('district'),
  commune: localStorage.getItem('commune'),
  fokontany: localStorage.getItem('fokontany')
});

function assigne(item) {
  show.modalAssignerDeleduer = true
  show.modalAssignerDeleduerData = item



}



const voir = (item) => {
  show.showModalVoirElecteur = !show.showModalVoirElecteur;
  listeElecteur.voirElecteurData = item;

}

const modifier = (item) => {
  show.showModalModifierElecteur = !show.showModalModifierElecteur;
  listeElecteur.modifierElecteurData = item;





}

function see() {
  show.showModalAjoutElecteur = !show.showModalAjoutElecteur
  show.see = true
}

const supprimer = (item) => {
  show.showModalSupprimerElecteur = !show.showModalSupprimerElecteur;
  listeElecteur.supprimerElecteurData = item;





}

const listElect = computed(() => listeElecteur.electeurs);

function filtreElect() {
  // Vider les listes avant de les remplir à nouveau
  listRegion.value = [];
  listDistrict.value = [];
  listCommne.value = [];
  listFokontany.value = [];

  listeElecteur.electeurs.forEach((elec) => {
    if (elec.region === show.selectedProvince) {
      listRegion.value.push(elec);
    }


    if (listRegion.value.length) {
      if (elec.district === show.selectedDistrict) {
        listDistrict.value.push(elec);
      }
    }

    if (listDistrict.value.length) {
      if (elec.commune === show.selectedCommune) {
        listCommne.value.push(elec);
      }
    }

    if (listCommne.value.length) {
      if (elec.fokontany === show.selectedFokontany) {
        listFokontany.value.push(elec);
      }
    }
  });
}

watch(listElect, (newList, oldList) => {
  filtreElect();



  getListDelegue()


});

function getListDelegue() {
  let annee_electorale_id = JSON.parse(localStorage.getItem('utilisateur'))[0].annee_electorale_id
  let region = JSON.parse(localStorage.getItem('selectRegion'))
  let district = JSON.parse(localStorage.getItem('selectDistrict'))
  let commune = JSON.parse(localStorage.getItem('selectCommune'))
  let fokontany = JSON.parse(localStorage.getItem('selectFokontany'))

  delegue.filterDelegue(annee_electorale_id, region, commune, district, fokontany)


  setTimeout(() => {
    console.log(delegue.listDelegues);
  }, 3000);
}


// Filtrer les électeurs par nom complet basé sur la recherche
const filteredElecteurs = computed(() => {
  // return listeElecteur.electeurs.filter(electeur =>
  //   electeur.nomComplet.toLowerCase().includes(searchQuery.value.toLowerCase())
  // );
  return listFokontany.value.filter(electeur =>
    electeur.nomComplet.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const filtresDelegue = computed(() => {
  return listFokontany.value.filter(electeur =>
    electeur.nomComplet.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});









const listDef = ref([])
const listRegion = ref([])
const listDistrict = ref([])
const listCommne = ref([])
const listFokontany = ref([])


onMounted(() => {
  filtreElect()
  listeElecteur.getElecteurs();
});


function deleteDelegue(item) {
  console.log(item.id);
  delegue.deleteDelegue(item.id)
  getListDelegue()
}

function voirdetail(item) {
  show.showDetailDelegue = true
  show.showDetailDelegueData = item

  
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
  height: 200px;
  margin-bottom: 5px;
  /* Limite la hauteur */
  overflow-y: scroll;
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

.input {
  padding: 10px;
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
