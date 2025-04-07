<template>
    <Transition>
        <div class="modal w-full h-screen bg-gray-400 bg-opacity-40 absolute inset-0 overflow-y-hidden flex items-center z-50 backdrop-blur-[2px]"
            v-if="show.municipaux">
            <div class="contenaireModal">
                <div class="flex justify-between">
                    <h1 class="tritreModal">Recherche Commune</h1>

                </div>

                <div class="flex justify-center items-center border-b-2 pb-4 mb-2">
                    <form class="max-w-md mx-[5px]">

                        <div class="relative w-[250px]">

                            <input type="search" id="default-search" v-model="searchQuery" class="block w-full p-2  text-sm text-gray-900 border border-gray-300 focus:outline-none
                                 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 
                                 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                                  dark:focus:border-blue-500 " placeholder="Rechecher region" required />
                            <button type="submit"
                                class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800
                                 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm
                                  px-2   py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-full">
                                <svg class="w-3 h-3 text-gray-500 text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </button>
                        </div>
                    </form>


                    <form class="max-w-md mx-[5px]" v-if="formdistrict">

                        <div class="relative w-[250px]">

                            <input type="search" id="default-search" v-model="searchQueryDistrict"
                                class="block w-full p-2  text-sm text-gray-900 border border-gray-300
                                 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 
                                 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rechecher district"
                                required />
                            <button type="submit"
                                class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800
                                 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm
                                  px-2   py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-full">
                                <svg class="w-3 h-3 text-gray-500 text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg></button>
                        </div>
                    </form>


                    <form class="max-w-md mx-[5px]" v-if="formcommune">

                        <div class="relative w-[250px]">

                            <input type="search" id="default-search" v-model="searchQueryCommune"
                                class="block w-full p-2  text-sm text-gray-900 border border-gray-300
                                 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 
                                 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rechecher commune"
                                required />
                            <button type="submit"
                                class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800
                                 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm
                                  px-2   py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-full">
                                <svg class="w-3 h-3 text-gray-500 text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg></button>
                        </div>
                    </form>






                </div>


                <div class="flex flex-row flex-wrap   px-5" v-if="region">
                    <a class="inline-block w-[200px] flex justify-center items-center
                     rounded-sm border border-current px-2 py-3 my-3 mx-2 text-sm font-medium
                     text-white transition hover:scale-110 hover:rotate-2 focus:ring-3 focus:outline-hidden" href="#"
                        v-for="(item, index) in filteredData" :key="index" @click="setQuery(item.region, item)"
                        v-if="region">
                        {{ item.region }}
                    </a>
                </div>
                <div class="flex flex-row flex-wrap   px-5" v-if="district">
                    <a class="inline-block w-[200px] flex justify-center items-center
                     rounded-sm border border-current px-2 py-3 my-3 mx-2 text-sm font-medium
                     text-white transition hover:scale-110 hover:rotate-2 focus:ring-3 focus:outline-hidden" href="#"
                        v-for="(item, index) in filteredDataDistrict" :key="index"
                        @click="setQueryDistrict(item.district, item)">
                        {{ item.district }}
                    </a>
                </div>
                <div class="flex flex-row flex-wrap   px-5" v-if="commune">
                    <a class="inline-block w-[200px] flex justify-center items-center
                     rounded-sm border border-current px-2 py-3 my-3 mx-2 text-sm font-medium
                     text-white transition hover:scale-110 hover:rotate-2 focus:ring-3 focus:outline-hidden" href="#"
                        v-for="(item, index) in filteredDataCommune" :key="index"
                        @click="setQueryCommune(item.commune, item)">
                        {{ item.commune }}
                    </a>
                </div>



                <div class="flex flex-row flex-wrap justify-between   px-5" v-if="formulaire">



                    <MyDateInput label="Date de naissance" placeholder="Insérez une date de naissance"
                        v-model="listeCandidat.dateNaissance" format="dd-MM-yyyy" />


                    <MyInput label="Lieu de naissance" placeholder="Insérez un lieu de naissance"
                        v-model="listeCandidat.lieuNaissance" />


                    <SelectInput label="Déclaration honneur des biens" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.declarationHonneurBiens" />


                    <MyInput label="Nom et prénom" placeholder="Ajoutez un nom" v-model="listeCandidat.nomComplet" />




                    <SelectInput label="Sexe" defaultOption="" :options="[
                        { text: 'Masculin', value: 'Masculin' },
                        { text: 'Femme', value: 'Femme' }
                    ]" v-model="listeCandidat.sexe" />



                    <MyInput label="Filiation" placeholder="Nom du père et de la mère"
                        v-model="listeCandidat.filiation" />

                    <MyInput label="Email" placeholder="Nom du père et de la mère" v-model="listeCandidat.email" />

                    <SelectInput label="Déclaration honneur des biens" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.declarationHonneurBiens" />

                    <SelectInput label="Certificat de nationalité" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.certificatNationalite" />



                    <SelectInput label="Déclaration honneur des impôts" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.declarationHonneurImpôts" />



                    <SelectInput label="Copie d'acte de naissance" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.copieActeNaissance" />

                    <SelectInput label="Certificat d'administration fiscale" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.certificatAdministrationFiscale" />





                    <SelectInput label=" Copie de carte électeur" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.copieCarteElecteur" />


                    <SelectInput label=" Déclaration de probite" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.declarationProbite" />



                    <SelectInput label="  Copie de récipissé patrimoine" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.copieRecipissePatrimoine" />



                    <MyInput label="Numéro de la CIN" placeholder="Insérez un numéro de la CIN"
                        v-model="listeCandidat.numeroCIN" />





                    <MyDateInput label="Date de délivrance CIN" placeholder="Insérez une date de naissance"
                        v-model="listeCandidat.dateDelivreCIN" format="dd-MM-yyyy" />

                    <MyInput label="Lieu de délivrance CIN" placeholder="Insérez un lieu de délivrance de la CIN"
                        v-model="listeCandidat.lieuDelivreCIN" />


                    <MyInput label="Adresse ou le lieu de résidence"
                        placeholder="Insérez une adresse ou le lieu de résidence" v-model="listeCandidat.adresse" />


                    <MyInput label="Profession" placeholder="Ajoutez un profession"
                        v-model="listeCandidat.profession" />

                    <SelectInput label=" Casier judiciaire" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.casierJudiciaire" />

                    <MyInput label="Carte d'électeur" placeholder="Ecrire le numéro de la Carte électeur"
                        v-model="listeCandidat.carteElecteur" />


                    <MyInput label="Téléphone" placeholder="Ecrire votre numéro de téléphone"
                        v-model="listeCandidat.telephone" />

                    <MyDateInput label="Date d'inscription" placeholder="Insérez une date d'inscription"
                        v-model="listeCandidat.dateInscription" format="dd-MM-yyyy" />


                    <SelectInput label=" Matrice support électronique" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.matriceSupportElectronique" />


                    <SelectInput label="Quittance de contribution" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.quittanceContribution" />


                    <SelectInput label="Déclaration d'honneur de constitution" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.declarationHonneurConstitution" />

                    <SelectInput label="Attestation d'investiture " defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.attestationInvestiture" />

                    <SelectInput label="Certificat de résidence " defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.certificatResidence" />
                    <div class="flex w-[20%] mr-2 ">
                        <Cancel @toggle="show.municipaux = !show.municipaux" />
                        <Confirm @toggle="ajouter()" buttonText="Ajouter" />
                    </div>

                </div>




            </div>











        </div>



    </Transition>
</template>

<script setup>
import axios from "axios";
import { useShow } from "@/stores/show";
import { ref, computed, onMounted, watch } from "vue";
import { useAuth } from "@/stores/auth";
import { useUtilisateur } from "@/stores/utilisateur";
import { uselisteCandidat } from "@/stores/listeCandidat";
import { useAnneeElectorale } from "@/stores/anneeElectorale";
import { useListeFokontanyDistrictStore } from "@/stores/jsonData/liste_fokontany_par_district";


import Datepicker from "vue3-datepicker";
import Cancel from "@/components/btnComponents/Cancel.vue";
import Confirm from "@/components/btnComponents/Confirm.vue";
import ModalUploadFile from "@/components/UploadFile/ModalUploadFile.vue";

import MyInput from "../InputComponets/MyInput.vue";
import MyDateInput from "../date/MyDateInput.vue";
import SelectInput from "../selects/SelectInput.vue";





const show = useShow(); //call Show in show.js
const auth = useAuth();
const utilisateur = useUtilisateur();
const listeCandidat = uselisteCandidat();
const anneeElectorale = useAnneeElectorale();
const listeFokontanyDistrictStore = useListeFokontanyDistrictStore();
const searchQuery = ref('');
const searchQueryDistrict = ref('');
const searchQueryCommune = ref('')
const region = ref(true)
const district = ref(false)

const commune = ref(false)

const dataDistrict = ref()
const dataCommune = ref()
const formregion = ref(true)
const formdistrict = ref(false)
const formcommune = ref(false)
const formulaire = ref(false)

function ajouter() {


    listeCandidat.annee_electorale_id = anneeElectorale?.anneeElectoraleChoisi.id

    listeCandidat.regionCandidat = searchQuery.value
    listeCandidat.districtCandidat = searchQueryDistrict.value
    listeCandidat.communeCandidat = searchQueryCommune.value


    listeCandidat.createCandidat();
}



function close() {

    dataDistrict.value = ''
    district.value = false
    commune.value = false
    region.value = false
    show.showAreas = false
    formdistrict.value = false
    formcommune.value = false
    formulaire.value = false
    searchQuery.value = ''
    searchQueryDistrict.value = ''
    searchQueryCommune.value = ''

}

function setQuery(query, item) {
    searchQuery.value = query
    region.value = false
    district.value = true
    formdistrict.value = true
    dataDistrict.value = item.listeDistrict
}

function setQueryDistrict(query, item) {
    searchQueryDistrict.value = query
    district.value = false

    if (show.typeDistrict) {
        commune.value = false
        formcommune.value = false
        formulaire.value = true
    } else {
        formcommune.value = true
        commune.value = true
        dataCommune.value = item.listeCommune
    }

}

function setQueryCommune(query, item) {
    searchQueryCommune.value = query
    commune.value = false
    formcommune.value = true
    formulaire.value = true
    // dataDistrict.value= item.listeDistrict  
}

// Transformation des données
const data = computed(() => {
    const rawData = listeFokontanyDistrictStore.listeFokontanyDistrict;
    if (rawData && typeof rawData === 'object') {
        const transformedData = Object.entries(rawData).slice(1, 24).map(([region, districts]) => {
            return {
                region,
                listeDistrict: Object.entries(districts).map(([district, communes]) => {
                    return {
                        district,
                        listeCommune: Object.entries(communes).map(([commune, fokontanyList]) => {
                            return {
                                commune,
                                listeFokontany: fokontanyList.map(fokontany => fokontany.fokontany),
                            };
                        }),
                    };
                }),
            };
        });
        return transformedData;
    }
    return [];

});

onMounted(() => {
    listeFokontanyDistrictStore.get
})

// Filtrer les données en fonction de la recherche
const filteredData = computed(() => {
    let filtered = data.value;

    if (searchQuery.value) {
        filtered = data.value.filter(item => item.region.toLowerCase().includes(searchQuery.value.toLowerCase()));
    } return filtered; // Ignorer le premier élément 
});

const filteredDataDistrict = computed(() => {
    let filtered = dataDistrict.value
    if (searchQueryDistrict.value) {
        filtered = dataDistrict.value.filter(item => item.district.toLowerCase().includes(searchQueryDistrict.value.toLowerCase()));
    } return filtered; // Ignorer le premier élément 
});

const filteredDataCommune = computed(() => {
    let filtered = dataCommune.value
    if (searchQueryCommune.value) {
        filtered = dataCommune.value.filter(item => item.commune.toLowerCase().includes(searchQueryCommune.value.toLowerCase()));
    } return filtered; // Ignorer le premier élément 
});

const dataJSON = computed(() => {
    return JSON.stringify(data.value, null, 2);
});

watch(searchQuery, (newValue, oldValue) => {
    if (oldValue) {
        region.value = true
        district.value = false
        searchQueryDistrict.value = ''
    } else {
        region.value = false
    }






});

watch(searchQueryDistrict, (newValue, oldValue) => {
    if (oldValue) {
        district.value = true

    } else {

    }






});

watch(dataJSON, (newDataJSON) => {
}, { immediate: true });


watch(data, (newData) => {
}, { immediate: true });





</script>


<style scoped>
.position {
    position: absolute;
    right: 150px;
    bottom: 120px;
}

.form {
    width: 100%;
    margin-bottom: 0px;
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

.down {
    z-index: 0 !important;
}

.modal {

    z-index: 100;
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

.contenaireModal {
    width: 95%;
    height: 95vh;
    background-color: #414752;
    border-radius: 10px;
    margin: 0 auto;
    padding: 10px;
}

.tritreModal {
    color: white;
    font-weight: 600;
    font-size: 20px;
    padding-bottom: 10px;
    padding-left: 5%;
}



.section {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;



}

.inputCard {
    padding: 4px 0;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.label {
    color: rgb(174, 168, 168);
    font-weight: 600;
    font-size: 15px;
    padding-left: 5px;
    display: block;
    align-self: first baseline;

}

.contenu {
    color: #d4cdcd80;
    font-weight: bold;
    background-color: #807c7c13;
    padding: 10px 5px 5px 20px;
    border-radius: 5px;
    margin: 0;
}

.modalFooter {
    width: 20%;
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
    align-items: center;
    position: absolute;

    right: 70px;
    bottom: 120px;

}

.subtitle {
    width: 60%;
    font-weight: 700;
}

.icon {
    margin-right: 10px;
    /* Espace entre l'icône et le champ de saisie */
    font-size: 18px;
    color: grey;
}

.icon1 {
    margin-right: 10px;
    /* Espace entre l'icône et le champ de saisie */
    font-size: 18px;
    color: rgb(212, 206, 206);
}

.input {
    padding: 5px 10px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #aaaac5;
    background-color: #3c4c6d09;
    color: #fafbfd;
}

.input1 {
    padding: 5px 10px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #aaaac5;
    background-color: #0d101509;
    color: #131415;
}


.input:focus {
    border-color: #1b65b4;
    /* Couleur de bordure bleue quand l'input est actif */
    box-shadow: 0 2px 10px rgba(0, 123, 255, 0.3);
    /* Ombre bleue plus marquée */
    outline: none;
    /* Enlever le contour par défaut */
    color: rgb(219, 213, 213);
    /* Couleur du texte quand l'input est actif */
}

.itemContainer {
    display: flex;
    align-items: center;
    /* Aligne verticalement les éléments */
}



.number {
    font-weight: 600;
    color: #d4d9e2;
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

.name h4 {
    word-wrap: break-word;
    /* Permet de couper les mots et de les mettre à la ligne */
    white-space: normal;
    /* Assure que le texte peut revenir à la ligne */
    overflow-wrap: break-word;
    /* Permet le retour à la ligne même pour les mots longs */
    width: 50%;
    /* Prend toute la largeur disponible */
    background-color: red;
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



input-placeholder {
    color: red;
}

.input::placeholder {
    color: #8b8787;
    /* Couleur initiale du placeholder */
    font-style: italic;
    /* Optionnel: pour ajouter un style en italique */
    transition: color 0.3s ease;
    /* Transition fluide quand la couleur change */
}

.input:focus::placeholder {
    color: #bebaba;
    /* Couleur du placeholder quand l'input est focusé */
}


.formulaire {
    display: flex;
    justify-content: space-around;
    background-color: rgba(213, 235, 235, 0.212);
    align-items: center;
}



.btnAdd {
    color: #fff;
    font-weight: 900;
    width: 50%;
    text-align: center;
    background-color: rgb(34, 199, 83);
    padding: 5px 20px;
    border-radius: 5px;

    display: inline-block;
    position: relative;
    margin-left: 0;
    /* Positionne l'élément à gauche */

}

.cancel {
    width: 100px !important;
    background-color: rgb(192, 190, 190);
    border: 2px solid rgb(34, 199, 83);
    color: rgb(7, 185, 60) !important;
}

.add {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px !important;
    height: 30px;
    border-radius: 100%;
    padding: 5px;
    margin-left: 20px;

}

.add1 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    border-radius: 5px;
    margin-left: 20px;
    padding: 5px 20px;

    border: 2px solid rgb(34, 199, 83);


}


.btnAdd h3:hover {
    background-color: rgb(101, 230, 140);
}

.flexCard input {
    display: flex;
    justify-content: space-between;
    width: 90%;

}

.flexCard {
    display: flex;
    justify-content: space-between;
    width: 90%;

}

.annee {
    width: 100%;
    padding: 5px;
    background-color: #3c4c6d09;
    border-radius: 5px;
    border: 1px solid #aaaac5;
    color: #fafbfd;
}

option {
    background-color: rgba(67, 67, 79, 0.83);
    color: #f0f3f6;
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