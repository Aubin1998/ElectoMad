<template>
    <div class="form1">
        <div class="form">
            <h4>Création élection</h4>
            <div class="formulaire">
                <div class="itemContainer">
                    <p>Veuillez sélectionner une année </p>

                    <select class="annee" v-model="anneeElectorale.annee" id="">
                        <option disabled value="">Année électorale :</option>
                        <option v-for="item in anneeData" :key="item.id" :value=item>{{ item }}</option>
                    </select>

                </div>
                <div class="itemContainer">
                    <p>Type électoral </p>

                    <select class="annee" v-model="type" id="">
                        <option disabled value="">Types :</option>
                        <option v-for="item in descriptionAnneeData" :key="item.id" :value=item>{{ item }}</option>
                    </select>
                </div>

                <div class="itemContainer" v-if="'Parlémentaire' === type">
                    <p>Type électoral Parlémentaire </p>

                    <select class="annee" v-model="parlementSelected" id="">
                        <option disabled value="">Types :</option>
                        <option v-for="item in listParlementaire" :key="item.id" :value=item>{{ item }}</option>
                    </select>
                </div>

                <div class="itemContainer" v-if="'Municipale' === type">
                    <p>Type électoral Municipale </p>

                    <select class="annee" v-model="municipaleSelected" id="">
                        <option disabled value="">Types :</option>
                        <option v-for="item in listMunicipale" :key="item.id" :value=item>{{ item }}</option>
                    </select>
                </div>

                <h3 class="btnAdd add" @click="creer()">Créer</h3>
            </div>
        </div>
    </div>







    <div class="list">
        <div class="titre">
            <h4 class="subtitle">
                Liste des élections
            </h4>
            <h4 class="number1">{{ anneeElectorale?.allanneeData?.length }}</h4>

            <div class="itemContainer1">
                <i class="pi pi-search icon1"></i>

                <input type="text" placeholder="Recherche par année" v-model="searchTerm" class="input1" />
            </div>



        </div>

        <div class="scroll-container">



            <div class="relative overflow-x-auto shadow-md sm:rounded-lg down">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Année
                            </th>

                            <th scope="col" class="px-6 py-3">
                                Genre
                            </th>

                            <th scope="col" class="px-6 py-3">

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <div v-if="filteredCandidats.length === 0" class="no-results">
                            <h4 class="message">Aucune année trouvée.</h4>
                        </div>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            v-for="(item, index) in filteredCandidats" :key="index">

                            <th scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ item.annee }}
                            </th>

                            <td class="px-6 py-4">
                                {{ item.descriptionAnnee }}
                            </td>
                            <td class="px-6 py-4">
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
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>






        <div class="modal" v-if="show.showModalAjout">
            <div class="contenaireModal">
                <h1 class="tritreModal">AJOUT NOUVEAU ELECTION</h1>
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
                    <h3 class="btnAdd add" @click="show.showModalAjoutFunc">Ajouter</h3>
                    <h3 class="btnAdd cancel" @click="show.showModalAjoutFunc">Annuler</h3>
                </div>
            </div>
        </div>





        <div class="modal" v-if="show.showModalOeil">

            <div class="contenaireModal">
                <h1 class="tritreModal">INFORMATION ELECTORALE</h1>

                <h1 class="tritreModal"> </h1>
                <div class="flex">

                    <div class="section">
                        <div class="inputCard">
                            <h3 class="label">Année</h3>
                            <h4 class="contenu">{{ anneeElectorale.voirData.annee }}</h4>
                        </div>
                    </div>

                    <div class="section">
                        <div class="inputCard">
                            <h3 class="label">Description</h3>
                            <h4 class="contenu">{{ anneeElectorale.voirData.descriptionAnnee }}</h4>
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
                <h1 class="tritreModal">MODIFIER INFORMATION ELECTORALE</h1>
                <div class="flex">



                    <div class="section">
                        <!-- <div class="inputCard">
                            <h3 class="label">Année</h3>
                            <input type="text" placeholder="Ajoutez un nom" class="input"
                                v-model="anneeElectorale.annee" />
                        </div> -->
                        <p>Sélectionner une année </p>

                        <select class="annee" v-model="anneeElectorale.annee" id="">
                            <option disabled value="">Année électorale :</option>
                            <option v-for="item in anneeData" :key="item.id" :value=item>{{ item }}</option>
                        </select>
                    </div>








                    <div class="section">
                        <p>Type électoral </p>

                        <select class="annee" v-model="anneeElectorale.descriptionAnnee" id="">
                            <option disabled value="">Types :</option>
                            <option v-for="item in descriptionAnneeData" :key="item.id" :value=item>{{ item }}</option>
                        </select>
                    </div>

                </div>
                <div class="modalFooter">
                    <h3 class="btnAdd add" @click="enregistrer()">Enregistrer</h3>
                    <h3 class="btnAdd cancel" @click="show.showModalModifierFunc">Annuler</h3>
                </div>
            </div>
        </div>



        <div class="modal" v-if="show.showModalAnneSupprimer">
            <div class="contenaireModalSupp">
                <h4 class="supp">
                    Voulez vous vraiment supprimer
                </h4>
                <h4 class="suppNom">
                    Cette année {{ anneeElectorale.supprimerData.annee }} ?

                </h4>
                <div class="flex">
                    <h3 class="btnAdd add" @click="accepter()">Oui</h3>
                    <h3 class="btnAdd cancel" @click="show.showModalAnneSupprimer = !show.showModalAnneSupprimer">Non
                    </h3>
                </div>
            </div>
        </div>


    </div>

</template>

<script setup>
import { ref, computed } from 'vue'

import { useShow } from "@/stores/show";
import { useAuth } from "@/stores/auth";
import { useUtilisateur } from "@/stores/utilisateur";
import { useAnneeElectorale } from "@/stores/anneeElectorale";


const show = useShow(); //call Show in show.js
const auth = useAuth();
const utilisateur = useUtilisateur();
const anneeElectorale = useAnneeElectorale();

const type = ref('')
const parlementSelected = ref('')
const municipaleSelected = ref('')



const searchTerm = ref('');
const filteredCandidats = computed(() => {
    if (!searchTerm.value) {
        return anneeElectorale.allanneeData;
    } return anneeElectorale.allanneeData.filter(item => {
        return item.annee.toLowerCase().includes(searchTerm.value.toLowerCase());
    });
});

function creer() {
    if (anneeElectorale.annee) {

        if (type.value == 'Parlémentaire') {
            anneeElectorale.descriptionAnnee = type.value + ' : ' + parlementSelected.value
            console.log('ppppppppppp', anneeElectorale.descriptionAnnee);
        }

        if (type.value == 'Municipale') {
            anneeElectorale.descriptionAnnee = type.value + ' : ' + municipaleSelected.value
            console.log('ppppppppppp', anneeElectorale.descriptionAnnee);
        }

        if (type.value == 'Présidentiel') {
            anneeElectorale.descriptionAnnee = type.value
            console.log('ppppppppppp', anneeElectorale.descriptionAnnee);
        }
        anneeElectorale.createAnnee();
    } else {
        alert("Veuillez sélectionner une date.");
    }
}
function voir(item) {
    show.showModalOeil = !show.showModalOeil
    anneeElectorale.voirData = item
}
function modifier(item) {
    show.showModalModifier = !show.showModalModifier
    anneeElectorale.modifierData = item
    anneeElectorale.annee = item.annee
    anneeElectorale.descriptionAnnee = item.descriptionAnnee
}

function enregistrer() {
    show.showModalModifier = !show.showModalModifier
    anneeElectorale.updateAnnee(anneeElectorale.modifierData.id)
}

function supprimer(item) {
    anneeElectorale.supprimerData = item
    show.showModalAnneSupprimer = true

    // anneeElectorale.deleteAnnee(anneeElectorale.supprimerData.id)

}

function accepter() {
    anneeElectorale.deleteAnnee(anneeElectorale.supprimerData.id)

}





const anneeData = [
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
    2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029,
    2030, 2031, 2032, 2033, 2034, 2035
];
const descriptionAnneeData = [
    'Présidentiel', 'Parlémentaire', 'Municipale'
];

const listParlementaire = [
    'Député', 'Sénateur'
];

const listMunicipale = [
    'Maires', 'Conseillé municipaux'
];



</script>

<style scoped>
.form1 {
    width: 100%;
    margin-bottom: 0px;
    display: flex;
    justify-content: center;
    border-radius: 10px;


}

.form {
    width: 98%;
    margin-bottom: 0px;
    background-color: #414b5e;
    align-items: center;
    border-radius: 6px 6px 0px 0px;
    margin-top: 5px;
}

.form h4 {
    font-weight: 600;
    padding: 10px;
}

.list {
    /* background-color: green;*/
    width: 100%;
    height: 60vh;
}

.titre {
    display: flex;
    justify-content: space-around;
    padding: 5px;
    align-items: center;
}

.scroll-container {
    max-height: 100%;
    /* Limite la hauteur */
    overflow-y: auto;
    /* Ajoute un défilement vertical si nécessaire */
    padding: 10px;
    height: 50vh;
    /* Espacement interne */
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

.contenaireModalSupp {
    width: 25%;
    height: 25vh;
    background-color: rgb(84, 81, 81);
    border-radius: 10px;
    margin: 0 auto;
    padding: 10px;
}

.supp {
    color: #e1dddd;
    padding: 0px 10px 20px 10px;
}

.suppNom {
    color: white;
    padding: 0px 10px;
    font-weight: bold;
    margin-bottom: 20px;
}

.contenaireModal {
    width: 60%;
    height: 25vh;
    background-color: rgb(84, 81, 81);
    border-radius: 10px;
    margin: 0 auto;
    color: white;
    /* position: relative; */
    padding: 10px;
}

.tritreModal {
    color: white;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    padding-bottom: 10px;
}

.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 10px;
}

.section {
    width: 45%;

}

.inputCard {
    padding: 4px 0;
}

.label {
    color: #ffffff80;

    font-weight: bold;
    font-size: 15px;
    padding-left: 5px;

}

.annee {
    width: 100%;
    padding: 5px;
    background-color: #3c4c6d09;
    border-radius: 5px;
    border: 1px solid #aaaac5;
    color: #d4d4e3;
}

.annee option {
    height: 200px !important;
    /* Cela peut ne pas fonctionner dans tous les navigateurs */
    padding: 5px;
    color: #f2f2f2;
    background-color: #1F2937;

}


.contenu {
    color: #e1dddd;
    font-weight: bold;
    background-color: #d2cece13;
    padding: 10px 5px 5px 20px;
    border-radius: 5px;
    margin: 0;
}

/* .modalFooter {
   display: flex;
background-color: red;
width: 35%;
position: absolute;
right: 0;
} */
.modalFooter {
    display: flex;
    width: 35%;
    position: relative;
    float: right;
    /* Ajoutez cette ligne */
}

.subtitle {
    width: 60%;
    font-weight: 700;
}

.itemContainer {
    width: 20%;
    margin: 10px 2px;

}

.itemContainer1 {
    width: 20%;
    margin: 10px 2px;

    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* Aligner les éléments à droite */
}


.icon1 {
    margin-right: 10px;
    /* Espace entre l'icône et le champ de saisie */
    font-size: 18px;
    color: rgb(212, 206, 206);
}



.number1 {
    font-weight: 600;
    color: white;
    flex: 1;
    text-align: left;
    font-size: 20px;
    /* Aligner à gauche */
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
    width: 100%;
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
    width: 100% !important;
    border-radius: 5px;
    border: 1px solid #aaaac5;
    background-color: #3c4c6d09;
    color: white;
    font-weight: 600;
}

.input1 {
    width: 100%;
    border-radius: 5px;
    border: 1px solid #aaaac5;
    background-color: #3c4c6d09;
    color: #faf7f7;
    font-weight: 600;

    padding: 5px;
    max-width: 200px;
}

.input2 {
    width: 100% !important;
    border-radius: 5px;
    border: 1px solid #aaaac5;
    background-color: #3c4c6d09;
    color: #faf7f7;
    font-weight: 600;
    padding: 5px;
    max-width: 400px;
    /* Augmenter la largeur maximale */
}

.dateElectionInput {
    margin-right: 10px;
}

.descriptionInput {
    margin-left: 20px;
}


input-placeholder {
    color: red;
}

.formulaire {
    display: flex;
    justify-content: space-around;
    background-color: #1F2937;
    align-items: center;
    border-radius: 0px 0px 6px 6px;
    padding: 5px 10px;


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
    background-color: rgb(192, 190, 190);
    border: 2px solid rgb(34, 199, 83);
    color: rgb(7, 185, 60) !important;

}

.add {
    width: 100px !important;

}


.btnAdd h3:hover {
    background-color: rgb(101, 230, 140);
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
</style>