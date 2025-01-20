<template>
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
        <div class="btn btnHover" :class="{activeFonction : show.showPresident === true}" @click="show.showSelectFonction('president')">PRESIDENT</div>
        <div class="btn btnHover" :class="{activeFonction : show.showVicePresident ===true}" @click="show.showSelectFonction('vice-President')">VICE-PRESIDENT</div>
        <div class="btn btnHover" :class="{activeFonction : show.showSecretaire === true}" @click="show.showSelectFonction('secretaire')">SECRETAIRE</div>
        <div class="btn btnHover" :class="{activeFonction : show.showAcesseur === true}" @click="show.showSelectFonction('acesseur')">ACESSEUR</div>
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
                            <input type="text" placeholder="Insérez une adresse ou le lieu de résidence"
                                class="input" />
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
  .navFonction{
    display: flex;
    padding: 5px;
    width: 50%;
    justify-content: space-around;
    align-items: center;

  }
  .btnHover:hover{
    background-color: rgb(189, 107, 107);
    border-radius: 5px;
  } 
  .activeFonction{
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
  .supp{
    color: #2c2b2b;
    padding: 0px 10px 20px 10px;
  }
  .suppNom{
    color: #2c2b2b;
    padding: 0px 10px ;
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