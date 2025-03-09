<template>
    <div class="contenaire" v-if="show.showTest">



        <table>
            <thead>
                <td>
                    liste
                </td>
            </thead>
            <tbody>
                <div v-for="apprend in test.testData" :key="apprend.id">
                    {{ apprend.nom }}

                    <button @click="showInfo(apprend)">ici</button>
                    <!-- <h1 @click="modifierbtn(apprend)">modifier</h1> -->
                </div>


            </tbody>
        </table>

        <!-- ity post -->
        <input v-model="nom" type="text" />5
        <input v-model="age" type="number" />6
        <input v-model="actif" type="checkbox" />7
        <input v-model="date_naissance" type="date" />8
        <button @click="enregistrer()">enregistrer</button>9
        {{ test.postData }}
        <!-- après avy mandeh @pinia agny -->


        <!-- 
        <input v-model="nomvar" type="text" />
        <input v-model="agevar" type="number" />
        <input v-model="actifvar" type="checkbox" />
        <input v-model="date_naissancevar" type="date" />
        <button @click="enregistrement()">enregistrement</button>
        {{ learn.postData }} -->



        <!-- ity modifier -->
        <!-- <input v-model="modifiernom" type="text" />5
        <input v-model="modifierage" type="number" />6
        <input v-model="modifieractif" type="checkbox" />7
        <input v-model="modifierdate_naissance" type="date" />8
        <button @click="modifierko()">ty le modifierko</button> -->
    </div>


</template>


<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useShow } from "@/stores/show";
import { useListeFokontanyDistrictStore } from "@/stores/jsonData/liste_fokontany_par_district";
import { useApprentissage } from "@/stores/apprentissage";
import { data } from "autoprefixer";

const show = useShow();
const listeFokontanyDistrictStore = useListeFokontanyDistrictStore();




const test = useApprentissage()

onMounted(() => {
    test.getlearn()
})

function showInfo(a) {
    console.log('apprend', a.id);

}




//ity post

const nom = ref() //1
const age = ref() //2
const actif = ref() //3
const date_naissance = ref() //4

// const nomvar = ref()
// const agevar = ref()
// const actifvar = ref()
// const date_naissancevar = ref()

// const nomvar = ref()

// // function enregistrer() { //10
// //     let dataPost = { //11
// //         nom: nom.value,
// //         age: age.value,
// //         actif: actif.value,
// //         date_naissance: date_naissance.value
// //     }

// //     console.log('dataPost', dataPost);//12
// //     learn.postlearn(dataPost) // 13 , d mandeh @pinia agny function postlearn(dataPost)

// // }

function enregistrer() {
    let dataPost = {
        nom: "nomvar.value",
        age: "agevar.value",
        actif: "actifvar.value",
        date_naissance: "date_naissancevar.value"
    }
    console.log('dataPost', dataPost);
    test.postlearn(dataPost)

}


// //ity modifier
// const modifiernom = ref()
// const modifierage = ref()
// const modifieractif = ref()
// const modifierdate_naissance = ref()

// function modifierko() {

// }
// function modifierbtn(apprend) {
//     console.log('modifier', apprend);

//     modifiernom.value = apprend.nom
//     modifierage.value = apprend.age
//     modifieractif.value = apprend.actif //actif ty tsy mety ampidirana valeur satria checkbox
//     modifierdate_naissance.value = apprend.date_naissance

// }



























</script>

<style scoped>
.contenaire {}
</style>
