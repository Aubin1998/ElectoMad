<template>
    <div class=" w-full h-full   " v-if="show.showControleElecteur">
        <div class=" w-full flex  items-center  p-4">

            <h1 class="w-[20%] font-bold ">{{ utilisateur.controlleurRegion }}</h1>
            <h1 class="w-[20%]   ">{{ utilisateur.controlleurDistrict }}</h1>
        </div>
        <div class=" w-full h-[90%] flex justify-between">
            <div class="w-[24%] h-[450px]  ">
                <!-- <h1 class="w-[100%] p-2 border-b-2 shadow-sm mb-1">Fokontany</h1> -->
                <div class="w-[100%] h-[500px] rounded-lg bg-gray-600">
                    <div class="px-4 py-1">
                        <ul class=" space-y-1">
                            <li>
                                <a href="#"
                                    class="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                                    Fokontany
                                </a>
                            </li>
                            <li v-for="item in listeFokontany" :key="item.id">
                                <a href="#"
                                    class="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-gray-700">
                                    {{ item }}
                                </a>
                            </li>
                            <li>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="w-[75%] h-[450px] ">
                <div class="w-[100%] h-[40px]  flex justify-between items-center">
                    <div class="w-[70%] h-full flex items-center mb-1  ">
                        <h1 @click="toggle('non')"
                            class="w-[45%] px-4 py-2 text-white bg-gray-500 border-b-2 rounded-sm mx-1 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                            Non vérifier</h1>
                        <h1 @click="toggle('oui')"
                            class="w-[45%] px-4 py-2 bg-green-500 text-white border-b-2 rounded-sm mx-1 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                            Vérifié</h1>
                    </div>
                    <h1 class="w-[15%] p-2  ml-4">200/{{ listeElecteur.allElecteurDataDistrictlength }}</h1>
                </div>
                <div class="w-[100%] h-[459px] rounded-xl mt-4 bg-gray-600  ">
                    <div class="overflow-x-auto rounded-tl-lg rounded-tr-lg " v-if="noChecked">










                        <h1 class="m-4 text-white">Liste des électeurs non vérifié</h1>

                        <table class="min-w-full rounded-tl-lg divide-y-2  divide-gray-500 bg-gray-500 text-sm">

                            <thead class="border-b-4 rounded-tl-lg bg-gray-600 ">
                                <tr class="rounded-tl-lg ">

                                    <th class="px-4 py-2 font-medium whitespace-nowrap text-white text-left">
                                        Nom et
                                        Prénom</th>
                                    <th class="px-4 py-2 font-medium whitespace-nowrap text-white text-left">Numéro
                                        CIN
                                    </th>
                                    <th class="px-4 py-2 font-medium whitespace-nowrap text-white  text-left">
                                        Carte électeur</th>
                                    <th class="px-4 py-2 font-medium whitespace-nowrap text-white text-left">Action
                                    </th>


                                </tr>
                            </thead>

                            <tbody class="divide-y  divide-gray-800">
                                <tr v-for="electeur in nonlistVerifier" :key="electeur.id" @click="Voir(electeur)">

                                    <td class="px-4 py-2 font-medium whitespace-nowrap text-white">{{
                                        electeur.nomComplet
                                        }}</td>
                                    <td class="px-4 py-2 whitespace-nowrap text-white">{{ electeur.numeroCIN }}</td>
                                    <td class="px-4 py-2 whitespace-nowrap text-white">{{ electeur.carteElecteur }}</td>
                                    <td class="icon blue mt-0.5 ml-5 flex justify-center items-center "> <i
                                            class="pi pi-eye" style="font-size: 12px; color: white;"></i>
                                    </td>

                                </tr>

                                <tr v-for="fruit in listeFruits" :key="fruit.id">

                                    <td class="px-4 py-2 font-medium whitespace-nowrap text-white">{{
                                        fruit.name
                                        }}</td>
                                    <td class="px-4 py-2 font-medium whitespace-nowrap text-white">{{
                                        fruit.prix
                                        }}</td>

                                    <td @click="modifierFruit(fruit)"
                                        class="icon blue mt-0.5 ml-5 flex justify-center items-center "> <i
                                            class="pi pi-eye" style="font-size: 12px; color: white;"></i>
                                    </td>

                                </tr>





                            </tbody>
                        </table>
                    </div>
                    <div class="overflow-x-auto rounded-tl-lg rounded-tr-lg " v-if="checked">

                        <h1 class="m-4 text-white">Liste des électeurs vérifié</h1>
                        <table class="min-w-full rounded-tl-lg divide-y-2  divide-gray-500 bg-gray-500 text-sm">

                            <thead class="border-b-4 rounded-tl-lg bg-gray-600 ">
                                <tr class="rounded-tl-lg ">




                                    <th class="px-4 py-2 font-medium whitespace-nowrap text-white text-left">
                                        Nom et
                                        Prénom</th>
                                    <th class="px-4 py-2 font-medium whitespace-nowrap text-white text-left">Numéro
                                        CIN
                                    </th>
                                    <th class="px-4 py-2 font-medium whitespace-nowrap text-white  text-left">
                                        Carte électeur</th>
                                    <th class="px-4 py-2 font-medium whitespace-nowrap text-white text-left">Action
                                    </th>


                                </tr>
                            </thead>

                            <tbody class="divide-y  divide-gray-800">
                                <tr v-for="electeur in listVerifier" :key="electeur.id" @click="Voir(electeur)">

                                    <td class="px-4 py-2 font-medium whitespace-nowrap text-white">{{
                                        electeur.nomComplet
                                    }}</td>
                                    <td class="px-4 py-2 whitespace-nowrap text-white">{{ electeur.numeroCIN }}</td>
                                    <td class="px-4 py-2 whitespace-nowrap text-white">{{ electeur.carteElecteur }}</td>
                                    <td class="icon blue mt-0.5 ml-5 flex justify-center items-center "> <i
                                            class="pi pi-eye" style="font-size: 12px; color: white;"></i>
                                    </td>

                                </tr>



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<script setup>
import { ref, computed, onMounted, watch } from "vue";

import { useShow } from "@/stores/show";
import { useUtilisateur } from "@/stores/utilisateur";
import { uselisteElecteur } from "@/stores/listeElecteur";
import { useListeFokontanyDistrictStore } from "@/stores/jsonData/liste_fokontany_par_district";


const show = useShow();
const utilisateur = useUtilisateur();
const listeFokontanyDistrictStore = useListeFokontanyDistrictStore();
const listeElecteur = uselisteElecteur();
const noChecked = ref(true)
const checked = ref(false)

console.log('listeElecteur', listeElecteur.value);

const listeFokontany = ref([])



// >Fianarana 

let listeFruits = [
    {
        "name": "tomate",
        "prix": 200
    },
    {
        "name": "Ananas",
        "prix": 300
    },
    {
        "name": "mangue",
        "prix": 500
    }
]


function modifierFruit(fruit) {
    console.log('fruit selectionner : ', fruit);

}






















function toggle(option) {

    noChecked.value = false
    checked.value = false
    if (option == 'non') {
        noChecked.value = true
    }
    if (option == 'oui') {
        checked.value = true
    }
}


function Voir(electeur) {
    console.log('electeur selectionne : ', electeur);
    show.electeurDistrict = true
    show.electeurDistrictData = electeur

}










function getElecteurDistrict() {
    let params = {
        annee_electorale_id: utilisateur.controlleurAnneeElectorale.id,
        region: utilisateur.controlleurRegion,
        district: utilisateur.controlleurDistrict,

    }

    listeElecteur.params = params
    listeElecteur.paramsId = utilisateur.controlleurAnneeElectorale.id

    console.log('param', params);
    listeElecteur.getElecteurDistrict(params, utilisateur.controlleurAnneeElectorale.id)
}


const listVerifier = ref([])
const nonlistVerifier = ref([])

watch(() => listeElecteur.allElecteurDataDistrict, () => {
    nonlistVerifier.value = []
    listVerifier.value = []
    listeFokontany.value = []
    console.log('electeur 1', typeof listeElecteur.allElecteurDataDistrict);
    const fokontanySet = new Set();

    for (let index = 0; index < listeElecteur.allElecteurDataDistrictlength; index++) {
        const element = listeElecteur.allElecteurDataDistrict[index];

        if (element.fokontany && !fokontanySet.has(element.fokontany)) {
            // Ajouter seulement si ce n'est pas déjà dans le Set
            fokontanySet.add(element.fokontany);
            listeFokontany.value.push(element.fokontany);
        }


        console.log('verifier ', typeof element.verifier);


        if (element.verifier === 0) {
            nonlistVerifier.value.push(element)
        } else {
            listVerifier.value.push(element)
        }
    }

    console.log(listeFokontany.value);
    console.log('listverifier ', listVerifier.value);
    console.log('nonlistverifier ', nonlistVerifier.value);

})

watch(() => listeElecteur.nonlistVerifierNumber, () => {
    nonlistVerifier.value = []
    listVerifier.value = []
    listeFokontany.value = []

    console.log('electeur 1', typeof listeElecteur.allElecteurDataDistrict);
    const fokontanySet = new Set();

    for (let index = 0; index < listeElecteur.allElecteurDataDistrictlength; index++) {
        const element = listeElecteur.allElecteurDataDistrict[index];

        if (element.fokontany && !fokontanySet.has(element.fokontany)) {
            // Ajouter seulement si ce n'est pas déjà dans le Set
            fokontanySet.add(element.fokontany);
            listeFokontany.value.push(element.fokontany);
        }


        console.log('verifier ', typeof element.verifier);


        if (element.verifier === 0) {
            nonlistVerifier.value.push(element)
        } else {
            listVerifier.value.push(element)
        }
    }

    console.log(listeFokontany.value);
    console.log('listverifier ', listVerifier.value);
    console.log('nonlistverifier ', nonlistVerifier.value);

})
onMounted(() => {
    getElecteurDistrict()





})

// Recherche
</script>

<style scoped>
.icon {
    background-color: rgb(0, 2, 128);
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
}

.icon:hover {
    background-color: rgb(101, 103, 197);

}

.blue {
    background-color: rgb(74, 74, 241)
}
</style>
