<template>
    <Transition>



        <!-- 
            <h1 v-if="show.electeurDistrictData.verifier == 0" @click="verifier(show.electeurDistrictData.id)">
                Verifier</h1>
            {{ show.electeurDistrictData }}
            <h1 @click="show.electeurDistrict = !show.electeurDistrict">ferme</h1> -->
        <!-- v-if="show.electeurDistrict" -->
        <div class="showModal backdrop-blur p-2px" v-if="show.electeurDistrict">
            <div class="modal">
                <div class="closeForm" @click="show.electeurDistrict = !show.electeurDistrict">
                    <i class="pi pi-times" style="font-size: 18px; color: #2d4051"></i>
                </div>


                <div class="contenaireModal">
                    <div class="content">


                        <h1 class="tritreModal">MODIFIER L'INFORMATION PERSONNEL dffffffff</h1>




                        <div class="contenaire">

                            <div class="flex justify-between   flex-col mt-4">

                                <!-- <div class=" flex justify-around  h-[200px]  ">


                                    <div class=" w-[30%] flex justify-center items-center   ">
                                        <img v-if="show.electeurDistrictData.file?.titre"
                                            :src="show.electeurDistrictData.file?.titre" alt=""
                                            class="object-cover  mt-8   h-full w-full rounded-t-xl" />


                                        <div class="file-input-container" v-else>
                                            <input type="file"
                                                @change="(event) => onFileChange(event, show.electeurDistrictData.id)"
                                                id="file-upload" class="file-input-label" />
                                            <label for="file-upload"
                                                class="flex items-center justify-center w-full h-full bg-[#e1dada] rounded-full cursor-pointer text-[24px]">
                                                <i class="pi pi-camera text-red-500"></i>
                                            </label>
                                        </div>



                                        <div class="absolute w-[50px] h-[50px] t-0"
                                            v-if="show.electeurDistrictData.file?.titre">
                                            <input type="file"
                                                @change="(event) => onFileChange(event, show.electeurDistrictData.id)"
                                                id="file-upload" class="absolute inset-0 opacity-0 cursor-pointer" />
                                            <label for="file-upload"
                                                class="flex items-center justify-center w-full h-full  rounded-full cursor-pointer text-[24px]">
                                                <i class="pi pi-camera "></i>
                                            </label>
                                        </div>
                                    </div>





                                    <div class=" w-[65%]  grid grid-cols-2 gap-4  ">
                                        <MyInput label="Nom et prénom" placeholder="Ajoutez un nom"
                                            v-model="show.electeurDistrictData.nomComplet" />

                                        <MyInput label="Email" placeholder="Ajouter un email"
                                            v-model="show.electeurDistrictData.user.email" />

                                        <MyDateInput label="Date de naissance"
                                            placeholder="Insérez une date de naissance"
                                            v-model="show.electeurDistrictData.dateDelivreCIN" format="dd-MM-yyyy" />

                                        <MyInput label="Lieu de naissance" placeholder="Insérez un lieu de naissance"
                                            v-model="show.electeurDistrictData.lieuNaissance" />


                                        <MyDateInput label="Date d'inscription"
                                            placeholder="Ecrire la date d'inscription"
                                            v-model="show.electeurDistrictData.dateInscription" format="dd-MM-yyyy" />


                                        <MyInput label="Filiation" placeholder="Nom du père et de la mère"
                                            v-model="show.electeurDistrictData.filiation" />
                                    </div>
                                </div> -->







                                <!-- <div class="m-2 mt-8 grid grid-cols-3 gap-4">

                                    <MyInput label="Téléphone" placeholder="Ecrire le numéro de la Carte électeur"
                                        v-model="show.electeurDistrictData.telephone" />


                                    <MyInput label="Numéro de la CIN" placeholder="Insérez un numéro de la CIN"
                                        v-model="show.electeurDistrictData.numeroCIN" />

                                    {{ show.electeurDistrictData.dateDelivreCIN }}
                                    <MyDateInput label="Date de délivrance"
                                        placeholder="Insérez une date de délivrance de la CIN"
                                        v-model="show.electeurDistrictData.dateDelivreCIN" format="dd-MM-yyyy" />



                                    <MyInput label="Lieu de délivrance CIN"
                                        placeholder="Insérez un lieu de délivrance de la CIN"
                                        v-model="show.electeurDistrictData.lieuDelivreCIN" />

                                    <MyInput label="Adresse" placeholder="Insérez une adresse ou le lieu de résidence"
                                        v-model="show.electeurDistrictData.adresse" />



                                    <MyInput label="Profession" placeholder="Ajoutez un profession"
                                        v-model="show.electeurDistrictData.profession" />


                                    <SelectInput label="Sexe" defaultOption="" :options="[
                                        { text: 'Homme', value: 'Homme' },
                                        { text: 'Femme', value: 'Femme' }
                                    ]" v-model="show.electeurDistrictData.sexe" />

                                    <MyInput label="Carte électeur" placeholder="Insérez le numéro de la carte"
                                        v-model="show.electeurDistrictData.carteElecteur" />




                                    <div class="flex   items-end justify-end font-bold gap-5 mr-4 ">
                                        <h3 class="bg-green-500 px-4 h-8 rounded flex  items-center"
                                            @click="modifier()">
                                            modifier</h3>
                                        <h1 class="bg-green-500 px-4 h-8 rounded flex items-center"
                                            v-if="show.electeurDistrictData.verifier == 0"
                                            @click="verifier(show.electeurDistrictData.id)">
                                            Verifier</h1>

                                    </div>


                                </div> -->


                                <MyInput label="Carte électeur" placeholder="Insérez le numéro de la carte"
                                    v-model="show.electeurDistrictData.carteElecteur" />
                                <button @click="modifiero">clickeo</button>

                            </div>
                        </div>
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



import { uselisteElecteur } from "@/stores/listeElecteur";


const show = useShow(); //call Show in show.js
const auth = useAuth();
const listeElecteur = uselisteElecteur();
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



function modifiero() {

    console.log('objet :', show.electeurDistrictData);

    let objet = {
        carteElecteur: show.electeurDistrictData.carteElecteur

    }
    listeElecteur.updateElecteur(show.electeurDistrictData.id, objet)


    // console.log('objet :', show.electeurDistrictData);

    // let object = {
    //     electeur_id: show.electeurDistrictData.id,
    //     nomComplet: modifierElecteurData.value.nomComplet,
    //     profession: show.electeurDistrictData.profession,
    //     adresse: modifierElecteurData.value.adresse,
    //     numeroCIN: modifierElecteurData.value.numeroCIN,
    //     dateDelivreCIN: modifierElecteurData.value.dateDelivreCIN,
    //     lieuDelivreCIN: modifierElecteurData.value.lieuDelivreCIN,
    //     carteElecteur: show.electeurDistrictData.carteElecteur,
    //     sexe: modifierElecteurData.value.sexe,
    //     lieuNaissance: modifierElecteurData.value.lieuNaissance,
    //     filiation: modifierElecteurData.value.filiation,
    //     dateNaissance: modifierElecteurData.value.dateNaissance,
    //     telephone: modifierElecteurData.value.telephone,
    //     dateInscription: modifierElecteurData.value.dateInscription,
    //     annee_electorale_id: modifierElecteurData.value.annee_electorale_id,
    //     email: modifierElecteurData.value.user.email,

    //     user_id: modifierElecteurData.value.user_id,

    //     region: modifierElecteurData.value.region,
    //     district: modifierElecteurData.value.district,
    //     commune: modifierElecteurData.value.commune,
    //     fokontany: modifierElecteurData.value.fokontany,
    //     verifier: false
    // };


    // listeElecteur.updateElecteur(show.electeurDistrictData.id, object)







}


function verifier(idElecteur) {
    listeElecteur.verifierElecteur(idElecteur)
}

function ajouter() {
    console.log('lllllllllllll', anneeElectorale?.anneeElectoraleChoisi);


    listeCandidat.annee_electorale_id = anneeElectorale?.anneeElectoraleChoisi.id

    listeCandidat.regionCandidat = searchQuery.value
    listeCandidat.districtCandidat = searchQueryDistrict.value
    listeCandidat.communeCandidat = searchQueryCommune.value


    listeCandidat.createCandidat();
}

function modifier() {

    listeElecteur.updateElecteur(listeElecteur.modifierElecteurData.id)

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
    console.log('date', typeof show.electeurDistrictData?.dateDelivreCIN);

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
    console.log('new', newValue);
    console.log('old', oldValue);
    console.log('--------------------');
    if (oldValue) {
        region.value = true
        district.value = false
        searchQueryDistrict.value = ''
    } else {
        region.value = false
    }






});

watch(searchQueryDistrict, (newValue, oldValue) => {
    console.log('new', newValue);
    console.log('old', oldValue);
    console.log('--------------------');
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
    width: 100%;
    height: 100vh;
    background-color: rgba(196, 190, 190, 0);
    position: absolute;
    top: 0;
    left: 0;
    overflow-y: hidden;
    align-items: center;
    padding: 10vh;
}

.closeForm {
    background-color: rgb(231, 230, 230);
    width: 40px;
    height: 40px;
    border-radius: 100%;
    position: absolute;
    right: 210px;
    top: 90px;
    align-items: center;
    display: flex;
    justify-content: center;
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
    width: 90%;
    border-radius: 10px;
    margin: 0 auto;
    padding: 10px;
}

.content {
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 30px;
    margin-right: 0px;
    border-radius: 10px;
    width: 95%;

}

.tritreModal {
    color: white;
    font-weight: 600;
    font-size: 20px;
    padding-bottom: 10px;
    padding-left: 5%;
}

.contenaire {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

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


.btnAdd {}

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