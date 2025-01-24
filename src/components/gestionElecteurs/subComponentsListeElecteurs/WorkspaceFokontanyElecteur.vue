<template>
  <div class="list">
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

    <div class="scroll-container">
      <div class="item" v-for="(item, index) in filteredElecteurs" :key="index">
        <h4>{{ item?.id }}</h4>
        <div class="subItem">
          <h4>{{ item.nomComplet }}</h4>
          <h5>{{ item.sexe }}</h5>
        </div>
        <div class="btn">
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
import { ref, computed } from 'vue';
import { useShow } from "@/stores/show";
import { uselisteElecteur } from "@/stores/listeElecteur";

const show = useShow();
const listeElecteur = uselisteElecteur();

// Déclaration de query de recherche
const searchQuery = ref('');

// Paramètres pour la requête axios
const params = ref({
  annee_electorale_id: localStorage.getItem('anneeSelectionne') ? JSON.parse(localStorage.getItem('anneeSelectionne')).id : null,
  region: localStorage.getItem('region'),
  district: localStorage.getItem('district'),
  commune: localStorage.getItem('commune'),
  fokontany: localStorage.getItem('fokontany')
});

const Voir = (item) => {
  show.showModalVoirElecteur = !show.showModalVoirElecteur
  listeElecteur.voirElecteurData = item
}

const Modifier = (item) => {
  show.showModalModifierElecteur = !show.showModalModifierElecteur
  listeElecteur.modifierElecteurData = item
}

const Supprimer = (item) => {
  show.showModalSupprimer = !show.showModalSupprimer
  listeElecteur.supprimerElecteurData = item
}

// Filtrer les électeurs par nom complet basé sur la recherche
const filteredElecteurs = computed(() => {
  return listeElecteur.electeurs.filter(electeur =>
    electeur.nomComplet.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
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

.red {
  background-color: rgb(241, 74, 74)
}

.input {
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #aaaac5;
  background-color: #3c4c6d09;
  color: #2c2b2b;
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

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 10px;
}

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