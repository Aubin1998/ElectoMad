<!-- <template>
  <div class="list">
    <div class="titre">
      <h4 class="subtitle">
        Liste des utilisateurs
      </h4>
      <h4 class="number">{{ dataListePersonne.length }}</h4>

      <div class="itemContainer">
        <input type="text" placeholder="Recherche par nom" class="input" />
      </div>

    </div>
    <div class="navFonction">
      <div class="btn btnHover" :class="{ activeFonction: show.showPresident === true }"
        @click="show.showSelectFonction('president')">PRESIDENT</div>
      <div class="btn btnHover" :class="{ activeFonction: show.showVicePresident === true }"
        @click="show.showSelectFonction('vice-President')">VICE-PRESIDENT</div>
      <div class="btn btnHover" :class="{ activeFonction: show.showSecretaire === true }"
        @click="show.showSelectFonction('secretaire')">SECRETAIRE</div>
      <div class="btn btnHover" :class="{ activeFonction: show.showAcesseur === true }"
        @click="show.showSelectFonction('acesseur')">ACESSEUR</div>
    </div>

    <div class="scroll-container " v-if="show.showPresident">

      <div class="item" v-for="(item, index) in dataListePersonne" :key="index">
        <h4>{{ item.id }}</h4>
        <div class="subItem">
          <h4>{{ item.nom }}</h4>
          <h5>{{ item.fonction }}</h5>
        </div>
        <div class="btn">
          <div class="icon blue" @click="show.showModalOeilFunc">
            <i class="pi pi-eye" style="font-size: 18px; color: white;"></i>
          </div>
          <div class="icon orange" @click="show.showModalModifierFunc">
            <i class="pi pi-pencil" style="font-size: 18px; color: white;"></i>
          </div>
          <div class="icon red" @click="show.showModalSupprimerFunc">
            <i class="pi pi-trash" style="font-size: 18px; color: white;"></i>
          </div>
        </div>

      </div>
    </div>
    <div class="scroll-container " v-if="show.showVicePresident">

      <div class="item" v-for="(item, index) in dataListePersonne" :key="index">
        <h4>{{ item.id }}</h4>
        <div class="subItem">
          <h4>{{ item.nom }}</h4>
          <h5>{{ item.fonction }}</h5>
        </div>
        <div class="btn">
          <div class="icon blue" @click="show.showModalOeilFunc">
            <i class="pi pi-eye" style="font-size: 18px; color: white;"></i>
          </div>
          <div class="icon orange" @click="show.showModalModifierFunc">
            <i class="pi pi-pencil" style="font-size: 18px; color: white;"></i>
          </div>
          <div class="icon red" @click="show.showModalSupprimerFunc">
            <i class="pi pi-trash" style="font-size: 18px; color: white;"></i>
          </div>
        </div>

      </div>
    </div>
    <div class="scroll-container " v-if="show.showSecretaire">

      <div class="item" v-for="(item, index) in dataListePersonne" :key="index">
        <h4>{{ item.id }}</h4>
        <div class="subItem">
          <h4>{{ item.nom }}</h4>
          <h5>{{ item.fonction }}</h5>
        </div>
        <div class="btn">
          <div class="icon blue" @click="show.showModalOeilFunc">
            <i class="pi pi-eye" style="font-size: 18px; color: white;"></i>
          </div>
          <div class="icon orange" @click="show.showModalModifierFunc">
            <i class="pi pi-pencil" style="font-size: 18px; color: white;"></i>
          </div>
          <div class="icon red" @click="show.showModalSupprimerFunc">
            <i class="pi pi-trash" style="font-size: 18px; color: white;"></i>
          </div>
        </div>

      </div>
    </div>
    <div class="scroll-container " v-if="show.showAcesseur">

      <div class="item" v-for="(item, index) in dataListePersonne" :key="index">
        <h4>{{ item.id }}</h4>
        <div class="subItem">
          <h4>{{ item.nom }}</h4>
          <h5>{{ item.fonction }}</h5>
        </div>
        <div class="btn">
          <div class="icon blue" @click="show.showModalOeilFunc">
            <i class="pi pi-eye" style="font-size: 18px; color: white;"></i>
          </div>
          <div class="icon orange" @click="show.showModalModifierFunc">
            <i class="pi pi-pencil" style="font-size: 18px; color: white;"></i>
          </div>
          <div class="icon red" @click="show.showModalSupprimerFunc">
            <i class="pi pi-trash" style="font-size: 18px; color: white;"></i>
          </div>
        </div>

      </div>
    </div>


    <div class="modal" v-if="show.showModalAjout">
      <div class="contenaireModal">
        <h1 class="tritreModal">AJOUT NOUVEAU ELECTEUR</h1>
        <div class="flex">
          <div class="section">
            <div class="inputCard">
              <h3 class="label">Nom</h3>
              <input type="text" placeholder="Ajoutez un nom" class="input" />
            </div>
            <div class="inputCard">
              <h3 class="label">Prénom</h3>
              <input type="text" placeholder="Ajoutez un prénom" class="input" />
            </div>
            <div class="inputCard">
              <h3 class="label">Date de naissance</h3>
              <input type="text" placeholder="Insérez une date de naissance" class="input" />

            </div>
            <div class="inputCard">
              <h3 class="label">Lieu de naissance</h3>
              <input type="text" placeholder="Insérez un lieu de naissance" class="input" />

            </div>
            <div class="inputCard">
              <h3 class="label">Sexe</h3>
              <input type="text" placeholder="Ajoutez un sexe" class="input" />

            </div>
            <div class="inputCard">
              <h3 class="label">Filiation</h3>
              <input type="text" placeholder="Nom du père et de la mère" class="input" />
            </div>

          </div>
          <div class="section">
            <div class="inputCard">
              <h3 class="label">Numéro de la CIN</h3>
              <input type="text" placeholder="Insérez un numéro de la CIN" class="input" />
            </div>
            <div class="inputCard">
              <h3 class="label">Date de délivrance de la CIN</h3>
              <input type="text" placeholder="Insérez une date de délivrance de la CIN" class="input" />
            </div>
            <div class="inputCard">
              <h3 class="label">Lieu de délivrance de la CIN</h3>
              <input type="text" placeholder="Insérez un lieu de délivrance de la CIN" class="input" />
            </div>
            <div class="inputCard">
              <h3 class="label">Adresse ou le lieu de résidence</h3>
              <input type="text" placeholder="Insérez une adresse ou le lieu de résidence" class="input" />
            </div>
            <div class="inputCard">
              <h3 class="label">Profession</h3>
              <input type="text" placeholder="Ajoutez un profession" class="input" />
            </div>
            <div class="inputCard">
              <h3 class="label">Carte d'électeur</h3>
              <input type="text" placeholder="Ecrire le numéro de la Carte électeur" class="input" />

            </div>

          </div>
        </div>
        <div class="modalFooter">
          <h3 class="btnAdd add" @click="show.showModalAjoutFunc">Ajouter</h3>
          <h3 class="btnAdd cancel" @click="show.showModalAjoutFunc">Annuler</h3>
        </div>

      </div>
    </div>

    <div class="modal" v-if="show.showModalOeil">
      <div class="contenaireModal">
        <h1 class="tritreModal">INFORMATION PERSONNEL</h1>
        <div class="flex">
          <div class="section">
            <div class="inputCard">
              <h3 class="label">Nom</h3>

              <h4 class="contenu">Aubin</h4>
            </div>
            <div class="inputCard">
              <h3 class="label">Prénom</h3>
              <h4 class="contenu">Aubin</h4>
            </div>
            <div class="inputCard">
              <h3 class="label">Date de naissance</h3>
              <h4 class="contenu">Aubin</h4>

            </div>
            <div class="inputCard">
              <h3 class="label">Lieu de naissance</h3>
              <h4 class="contenu">Aubin</h4>

            </div>
            <div class="inputCard">
              <h3 class="label">Sexe</h3>
              <h4 class="contenu">Aubin</h4>

            </div>
            <div class="inputCard">
              <h3 class="label">Filiation</h3>
              <h4 class="contenu">Aubin</h4>
            </div>
          </div>
          <div class="section">
            <div class="inputCard">
              <h3 class="label">Numéro de la CIN</h3>
              <h4 class="contenu">Aubin</h4>
            </div>
            <div class="inputCard">
              <h3 class="label">Date de délivrance de la CIN</h3>


              <h4 class="contenu">Aubin</h4>
            </div>
            <div class="inputCard">
              <h3 class="label">Lieu de délivrance de la CIN</h3>


              <h4 class="contenu">Aubin</h4>
            </div>
            <div class="inputCard">
              <h3 class="label">Adresse ou le lieu de résidence</h3>



              <h4 class="contenu">Aubin</h4>
            </div>
            <div class="inputCard">
              <h3 class="label">Profession</h3>
              <h4 class="contenu">Aubin</h4>


            </div>
            <div class="inputCard">
              <h3 class="label">Carte d'électeur</h3>
              <h4 class="contenu">Aubin</h4>

            </div>

          </div>
        </div>
        <div class="modalFooter">
          <h3 class="btnAdd cancel" @click="show.showModalOeilFunc">Fermer</h3>
        </div>
      </div>
    </div>

    <div class="modal" v-if="show.showModalModifier">
      <div class="contenaireModal">
        <h1 class="tritreModal">MODIFIER INFORMATION PERSONNEL</h1>
        <div class="flex">
          <div class="section">
            <div class="inputCard">
              <h3 class="label">Nom</h3>
              <input type="text" placeholder="Ajoutez un nom" class="input" />
            </div>
            <div class="inputCard">
              <h3 class="label">Prénom</h3>
              <input type="text" placeholder="Ajoutez un prénom" class="input" />
            </div>
            <div class="inputCard">
              <h3 class="label">Date de naissance</h3>
              <input type="text" placeholder="Insérez une date de naissance" class="input" />

            </div>
            <div class="inputCard">
              <h3 class="label">Lieu de naissance</h3>
              <input type="text" placeholder="Insérez un lieu de naissance" class="input" />

            </div>
            <div class="inputCard">
              <h3 class="label">Sexe</h3>
              <input type="text" placeholder="Ajoutez un sexe" class="input" />

            </div>
            <div class="inputCard">
              <h3 class="label">Filiation</h3>
              <input type="text" placeholder="Nom du père et de la mère" class="input" />
            </div>

          </div>
          <div class="section">
            <div class="inputCard">
              <h3 class="label">Numéro de la CIN</h3>
              <input type="text" placeholder="Insérez un numéro de la CIN" class="input" />
            </div>
            <div class="inputCard">
              <h3 class="label">Date de délivrance de la CIN</h3>
              <input type="text" placeholder="Insérez une date de délivrance de la CIN" class="input" />
            </div>
            <div class="inputCard">
              <h3 class="label">Lieu de délivrance de la CIN</h3>
              <input type="text" placeholder="Insérez un lieu de délivrance de la CIN" class="input" />
            </div>
            <div class="inputCard">
              <h3 class="label">Adresse ou le lieu de résidence</h3>
              <input type="text" placeholder="Insérez une adresse ou le lieu de résidence" class="input" />
            </div>
            <div class="inputCard">
              <h3 class="label">Profession</h3>
              <input type="text" placeholder="Ajoutez un profession" class="input" />
            </div>
            <div class="inputCard">
              <h3 class="label">Carte d'électeur</h3>
              <input type="text" placeholder="Ecrire le numéro de la Carte électeur" class="input" />
            </div>

          </div>
        </div>
        <div class="modalFooter">
          <h3 class="btnAdd add" @click="show.showModalModifierFunc">Ajouter</h3>
          <h3 class="btnAdd cancel" @click="show.showModalModifierFunc">Annuler</h3>
        </div>
      </div>
    </div>

    <div class="modal" v-if="show.showModalSupprimer">
      <div class="contenaireModalSupp">
        <h4 class="supp">
          Voulez vous vraiment supprimer
        </h4>
        <h4 class="suppNom">
          Cet utilisateur ?
        </h4>
        <div class="flex">
          <h3 class="btnAdd add" @click="show.showModalSupprimerFunc">Oui</h3>
          <h3 class="btnAdd cancel" @click="show.showModalSupprimerFunc">Non</h3>
        </div>
      </div>
    </div>



  </div>
</template>

<script setup>
import { useShow } from "@/stores/show";
const show = useShow(); //call Show in show.js

const dataListePersonne = [
  {
    "id": "01",
    "nom": "Aubin",
    "fonction": "Acesseur"
  },
  {
    "id": "02",
    "nom": "Claire",
    "fonction": "Sécrétaire"
  },
  {
    "id": "03",
    "nom": "Jean",
    "fonction": "Acesseur"
  },
  {
    "id": "04",
    "nom": "Sophie",
    "fonction": "Sécrétaire"
  },
  {
    "id": "05",
    "nom": "Michel",
    "fonction": "Acesseur"
  },
  {
    "id": "06",
    "nom": "Laura",
    "fonction": "Sécrétaire"
  },
  {
    "id": "07",
    "nom": "Paul",
    "fonction": "Acesseur"
  },
  {
    "id": "08",
    "nom": "Julie",
    "fonction": "Sécrétaire"
  },
  {
    "id": "09",
    "nom": "Antoine",
    "fonction": "Acesseur"
  },
  {
    "id": "10",
    "nom": "Marie",
    "fonction": "Sécrétaire"
  },
  {
    "id": "11",
    "nom": "Luc",
    "fonction": "Acesseur"
  },
  {
    "id": "12",
    "nom": "Emma",
    "fonction": "Sécrétaire"
  },
  {
    "id": "13",
    "nom": "Thomas",
    "fonction": "Acesseur"
  },
  {
    "id": "14",
    "nom": "Alice",
    "fonction": "Sécrétaire"
  },
  {
    "id": "15",
    "nom": "Hugo",
    "fonction": "Acesseur"
  },
  {
    "id": "16",
    "nom": "Nina",
    "fonction": "Sécrétaire"
  }
];

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
  height: 50vh;
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

.navFonction {
  display: flex;
  padding: 5px;
  width: 50%;
  justify-content: space-around;
  align-items: center;

}

.btnHover:hover {
  background-color: rgb(189, 107, 107);
  border-radius: 5px;
}

.activeFonction {
  background-color: rgb(189, 107, 107);
  border-radius: 5px;
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
</style> -->

<template>

  <!-- {{ regionData}} -->

  <!-- <form @submit.prevent="handleSubmit" class="flex items-center max-w-lg mx-auto">
      <label for="voice-search" class="sr-only">Search</label>
      <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"/>
          </svg>
        </div>
        <input
          type="text"
          id="voice-search"
          v-model="searchQuery"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos, Design Templates..."
          required
        />
        <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-3">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"/>
          </svg>
        </button>
      </div>
      <button type="submit" class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        Search
      </button>
    </form> -->
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div
      class="flex flex-col md:flex-row items-center rounded-lg justify-between p-3 space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
      <div>
        <h2 class="text-xl font-bold mb-2.5">Gestion des utilisateurs</h2>


        <button @click="ajout()" type="button" v-if="seeAjout"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
          <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
            viewBox="0 0 20 20">
            <path
              d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          Ajouter utilisateur
        </button>

      </div>


      <div class="relative space-y-4  forme">
        <!-- Dropdown 1: Année -->
        <div class="droper">
          <button @click="toggleDropdown('year')"
            class="inline-flex items-center justify-between text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-full"
            type="button">
            <span class="sr-only">Action button</span>
            {{ selectedAnnee ? selectedAnnee.annee : 'Année' }}
            <svg class="w-2.5 h-2.5 ml-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 4 4 4-4" />
            </svg>
          </button>

          <!-- Dropdown menu -->
          <div v-if="isYearDropdownOpen"
            class="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-full dark:bg-gray-700 dark:divide-gray-600 mt-2">
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
              <li v-for="annee in anneeElectorale.allanneeData" :key="annee.id" @click="selectAnnee(annee)">
                <a href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full">
                  {{ annee.annee }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Dropdown 3: Region -->
        <div class="droper" v-if="seeRegion">
          <button @click="toggleDropdown('region')"
            class="inline-flex items-center justify-between text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-full"
            type="button">
            <span class="sr-only">Action button</span>
            {{ selectedRegion ? selectedRegion : 'Region' }}
            <svg class="w-2.5 h-2.5 ml-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 4 4 4-4" />
            </svg>
          </button>

          <!-- Dropdown menu -->
          <div v-if="isRegionDropdownOpen"
            class="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-full dark:bg-gray-700 dark:divide-gray-600 mt-2 droperlist">
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">


              <li v-for="region in transformedData" :key="region.id" @click="selectRegion(region.region)">
                <!-- {{ region.region }} -->
                <a href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full">
                  {{ region.region }}
                </a>
              </li>
            </ul>

          </div>
        </div>

        <!-- Dropdown 3: District -->
        <div class="droper" v-if="seeDistrict">
          <button @click="toggleDropdown('district')"
            class="inline-flex items-center justify-between text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-full"
            type="button">
            <span class="sr-only">Action button</span>
            {{ selectedDistrict ? selectedDistrict : 'District' }}
            <svg class="w-2.5 h-2.5 ml-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 4 4 4-4" />
            </svg>
          </button>


          <div v-if="isDistrictDropdownOpen"
            class="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-full dark:bg-gray-700 dark:divide-gray-600 mt-2 droperlist">
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">


              <li v-for="district in districtData" :key="district.id" @click="selectDistrict(district)">
                <a href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full">
                  {{ district }}
                </a>
              </li>
            </ul>

          </div>
        </div>



      </div>

      <div class="flex items-center space-x-4">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="text" id="table-search-users"
            class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Recherche des utilisateurs" />
        </div>

        <!-- Project Users Dropdown -->
        <div>
          <button @click="toggleDropdown('users')"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button">
            Rôles
            <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 4 4 4-4" />
            </svg>
          </button>

          <!-- Dropdown menu -->
          <div v-if="isDropdownOpenRole"
            class="z-10 bg-white rounded-lg shadow-sm w-60 dark:bg-gray-700 absolute right-0 mt-2">
            <ul class="h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownUsersButton">
              <li v-for="role in role.allRolesData" :key="role.id">
                <a href="#"
                  class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  <img class="w-6 h-6 me-2 rounded-full" src="/admin.png" :alt="role.nomRole + ' image'" />
                  {{ role.nomRole }}
                </a>
              </li>
            </ul>

            <InputComposant v-model="nomRole" placeholder="Rôle" v-if="isInput" />

            <a href="#" @click="ajoutRole()" v-if="!isInput"
              class="flex items-center p-3 text-sm font-medium text-blue-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-blue-500 hover:underline">
              <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 20 18">
                <path
                  d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
              </svg>
              Ajout rôle
            </a>

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


    </div>


    <div class="overflow-y-auto max-h-[55vh]">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">Rôle</th>
            <th scope="col" class="px-6 py-3">Status</th>
            <th scope="col" class="px-6 py-3">Mot de passe</th>
            <th scope="col" class="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in listUtilisateur" :key="user.id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
              <img class="w-10 h-10 rounded-full" src="/admin.png" :alt="user.name + ' image'" />
              <div class="ps-3">
                <div class="text-base font-semibold">{{ user.nomComplet }}</div>
                <div class="font-normal text-gray-500">{{ user.user.email }}</div>
              </div>
            </th>
            <td class="px-6 py-4">{{ user.user.roles[0].nomRole }}</td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full"
                  :class="user.status === 'Permanent' ? 'bg-green-500' : 'bg-red-500'"></div>
                {{ user.status }}
              </div>
            </td>
            <td class="px-6 py-4">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">.........<span
                  class="pi pi-eye ms-2"></span></a>
            </td>
            <td class="px-6 py-4 relative">
              <!-- Button for vertical dots dropdown -->
              <button @click="toggleDropdown('dots', user.id)"
                class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 4 15">
                  <path
                    d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
              </button>

              <!-- Dropdown menu -->
              <div v-if="showDropdown && currentUserId === user.id"
                class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600 absolute right-0"
                :style="{ bottom: dropdownBottomPosition }">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <a href="#" @click="voir"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <i class="pi pi-eye" style="font-size: 18px; color: white;"></i> Voir
                    </a>
                  </li>
                  <li>
                    <a href="#" @click="modifier"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <i class="pi pi-pencil" style="font-size: 18px; color: white;"></i> Modifier
                    </a>
                  </li>
                  <li>
                    <a href="#" @click="supprimer"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <i class="pi pi-trash" style="font-size: 18px; color: white;"></i> Supprimer
                    </a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useShow } from "@/stores/show";
import InputComposant from '@/components/InputComposant.vue';
import { useAnneeElectorale } from "@/stores/anneeElectorale";
import { useRole } from "@/stores/role";
import { useListeCommuneDistrictStore } from "@/stores/jsonData/liste_commune_par_district";
import { useListeFokontanyDistrictStore } from "@/stores/jsonData/liste_fokontany_par_district";

import { useUtilisateur } from "@/stores/utilisateur";


const utilisateur = useUtilisateur()

const listeFokontanyDistrictStore = useListeFokontanyDistrictStore()
const anneeElectorale = useAnneeElectorale();
const listeCommuneDistrictStore = useListeCommuneDistrictStore();
const role = useRole();
const show = useShow();


// États réactifs
const isYearDropdownOpen = ref(false);
const isElectionTypeDropdownOpen = ref(false);
const isDistrictDropdownOpen = ref(false);
const isRegionDropdownOpen = ref(false);



const isDropdownOpenRole = ref(false)

const isDropdownOpen = ref(false);
const showDropdown = ref(false);
const currentUserId = ref(null);
const dropdownBottomPosition = ref('auto');
const isInput = ref(false);
const nomRole = ref('');
const selectedAnnee = ref(null);
const selectedDistrict = ref(null);
const selectedRegion = ref(null);





const users = ref([
  { id: 9, name: 'Neil Sims', email: 'neil.sims@flowbite.com', role: 'Opérateur de saisie', status: 'Journalier', image: '/admin.png' },
  { id: 10, name: 'Bonnie Green', email: 'bonnie@flowbite.com', role: 'Opérateur de saisie', status: 'Journalier', image: '/admin.png' },
  { id: 11, name: 'Jese Leos', email: 'jese@flowbite.com', role: 'Controller', status: 'Permanent', image: '/admin.png' },
  { id: 12, name: 'Thomas Lean', email: 'thomes@flowbite.com', role: 'Opérateur de saisie', status: 'Journalier', image: '/admin.png' },
  { id: 13, name: 'Leslie Livingston', email: 'leslie@flowbite.com', role: 'Opérateur de saisie', status: 'Journalier', image: '/admin.png' },
]);

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
        isDropdownOpen.value = false

      } else {
        isDropdownOpen.value = true
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

const voir = () => {
  show.showModalOeil = !show.showModalOeil;
};

const modifier = () => {
  show.showModalModifier = !show.showModalModifier;
};

const supprimer = () => {
  const anneeElectoraleData = {}; // Assurez-vous que anneeElectoraleData est défini correctement
  const item = {}; // Assurez-vous que item est défini correctement
  anneeElectoraleData.supprimerData = item;
  show.showModalAnneSupprimer = true;
  // anneeElectorale.deleteAnnee(anneeElectoraleData.supprimerData.id);
};

const ajoutRole = () => {
  isInput.value = !isInput.value;
};

const Confirmer = () => {
  isInput.value = !isInput.value;
  role.createRole(nomRole.value);
};

const listUtilisateur = ref([])
const seeRegion = ref(false)
const selectAnnee = async (annee) => {
  seeRegion.value = true
  selectedAnnee.value = annee;
  isYearDropdownOpen.value = false; // Fermez le menu déroulant après la sélection

  utilisateur.anneeSelected = annee.id

  await utilisateur.getElecteur(annee.id)

  console.log('electeur  ,,,,', utilisateur.allElecteurs?.length);

  for (let i = 0; i < utilisateur.allElecteurs?.length; i++) {
    const electeur = utilisateur.allElecteurs[i];
    if (utilisateur.allElecteurs[i].user.roles.length !== 0) {
      if (utilisateur.allElecteurs[i].user.roles[0].nomRole !== 'admin') {
        console.log('electeur', electeur);
        listUtilisateur.value.push(electeur)
        console.log('listUtilisateur.value', listUtilisateur.value);

      }
    }

  }






};

const confirmerSelection = () => {
  if (selectedAnnee.value) {
    // Ajoutez ici la logique pour confirmer la sélection
  }
  isYearDropdownOpen.value = false;
};

const selectDistrict = (district) => {

  selectedDistrict.value = district;
  utilisateur.districtSelected = district
  console.log(utilisateur.districtSelected);

  isDistrictDropdownOpen.value = false; // Fermez le menu déroulant après la sélection
  seeAjout.value = true
};

const seeDistrict = ref(false)

const selectRegion = (region) => {
  selectedDistrict.value = ''
  seeDistrict.value = true
  selectedRegion.value = region;
  utilisateur.regionSelected = region

  isRegionDropdownOpen.value = false; // Fermez le menu déroulant après la sélection
  let data = transformedData.value


  for (let i = 0; i < data.length; i++) {
    if (data[i].region == region) {

      districtData.value = data[i].listeDistrict.map(e => e[0])

    } else {

    }





  }
};

import { useDataRegion } from "@/service/dataLocation"
const { data, transform, transformedData, regionData } = useDataRegion();

const districtData = ref([])

function ajout() {
  show.showModalAjoutUtilisateur = !show.showModalAjoutUtilisateur
  const password = generatePassword(12);
  console.log('Generated Password:', password);
  role.mdpGenerate = password

}

const seeAjout = ref(false)



function generatePassword(length = 12) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

// Exemple d'utilisation






onMounted(async () => {
  await listeFokontanyDistrictStore.get(); // Assurez-vous que cette méthode est correctement définie dans votre store
  transform();
});

// Filtrer les données en fonction de la recherche
const filteredData = computed(() => {
  let filtered = data.value;
  if (searchQuery.value) {
    filtered = data.value.filter(item => item.region.toLowerCase().includes(searchQuery.value.toLowerCase()));
  } return filtered.slice(1); // Ignorer le premier élément 
});

const dataJSON = computed(() => {
  return JSON.stringify(data.value, null, 2);
});

watch(dataJSON, (newDataJSON) => {
}, { immediate: true });


watch(data, (newData) => {
}, { immediate: true });


// Hooks
onMounted(() => {
  anneeElectorale.getAnnees();

  listeCommuneDistrictStore.get;

});
</script>


<style scoped>
/* Ajoutez des styles spécifiques si nécessaire */



.subtitle {
  width: 100%;
  font-weight: 700;
  /* Correction de la valeur à 700 pour la propriété font-weight */
  padding-right: 60px;
  /* Ajout d'espace à droite */
  text-align: center;
  /* Centrer le texte */

  box-sizing: border-box;
  /* Inclure le padding dans la largeur totale */
}

.droper {
  width: 200px;
}

.forme {
  height: 140px;
}

.droperlist {
  height: 200px;
  overflow-y: scroll;
}

.btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

.custom-padding {
  padding: 5px 10px;
  margin: 5px;
  width: 90%;
  margin: 5px auto;
}
</style>
