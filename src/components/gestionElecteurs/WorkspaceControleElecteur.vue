<template>
    <div class=" w-full h-full   " v-if="show.showControleElecteur">
        <div class=" w-full flex  items-center  p-4">

            <h1 class="w-[20%] font-bold ">{{ utilisateur.controlleurRegion }}</h1>
            <h1 class="w-[20%]   ">{{ utilisateur.controlleurDistrict }}</h1>
        </div>
        <div class=" w-full h-[90%] flex justify-between">

            <div class="w-full h-[450px] ">
                <div class="w-[100%] h-[62px]  flex justify-between items-center">
                    <div class="w-[70%] h-full flex items-center mb-1  ">
                        <h1 @click="toggle('non')"
                            class="w-[45%] px-4 py-2 text-white bg-gray-500 border-b-2 rounded-sm mx-1 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                            Non vérifier</h1>
                        <h1 @click="toggle('oui')"
                            class="w-[45%] px-4 py-2 bg-green-500 text-white border-b-2 rounded-sm mx-1 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                            Vérifié</h1>
                    </div>
                  
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

                            <tbody class="divide-y  divide-gray-800 h-[50vh] overflow-scroll">
                                <tr v-for="electeur in listeElecteur.nolistVerifier" :key="electeur.id"
                                    @click="Voir(electeur)">

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

                            <tbody class="divide-y  divide-gray-800  h-[50vh] overflow-scroll">
                                <tr v-for="electeur in listeElecteur.listVerifier" :key="electeur.id"
                                    @click="Voir(electeur)">

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
    show.electeurDistrict = true
    show.electeurDistrictData = electeur
    console.log('voir', electeur);


}


function getElecteurDistrict() {
    let params = {
        annee_electorale_id: utilisateur.controlleurAnneeElectorale.id,
        region: utilisateur.controlleurRegion,
        district: utilisateur.controlleurDistrict,

    }

    listeElecteur.params = params
    listeElecteur.paramsId = utilisateur.controlleurAnneeElectorale.id

    listeElecteur.getElecteurDistrict()
}


const listVerifier = ref([])
const nonlistVerifier = ref([])

// watch(() => listeElecteur.allElecteurDataDistrict, () => {
//     nonlistVerifier.value = []
//     listVerifier.value = []
//     listeFokontany.value = []
//     const fokontanySet = new Set();

//     for (let index = 0; index < listeElecteur.allElecteurDataDistrictlength; index++) {
//         const element = listeElecteur.allElecteurDataDistrict[index];

//         if (element.fokontany && !fokontanySet.has(element.fokontany)) {
//             // Ajouter seulement si ce n'est pas déjà dans le Set
//             fokontanySet.add(element.fokontany);
//             listeFokontany.value.push(element.fokontany);
//         }




//         if (element.verifier === 0) {
//             nonlistVerifier.value.push(element)
//         } else {
//             listVerifier.value.push(element)
//         }
//     }


// })

// watch(() => listeElecteur.nonlistVerifierNumber, () => {
//     nonlistVerifier.value = []
//     listVerifier.value = []
//     listeFokontany.value = []

//     const fokontanySet = new Set();

//     for (let index = 0; index < listeElecteur.allElecteurDataDistrictlength; index++) {
//         const element = listeElecteur.allElecteurDataDistrict[index];

//         if (element.fokontany && !fokontanySet.has(element.fokontany)) {
//             // Ajouter seulement si ce n'est pas déjà dans le Set
//             fokontanySet.add(element.fokontany);
//             listeFokontany.value.push(element.fokontany);
//         }




//         if (element.verifier === 0) {
//             nonlistVerifier.value.push(element)
//         } else {
//             listVerifier.value.push(element)
//         }
//     }


// })

watch(() => listeElecteur.nolistVerifier, listeElecteur.nolistVerifier);
watch(() => listeElecteur.listVerifier, listeElecteur.listVerifier);

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
