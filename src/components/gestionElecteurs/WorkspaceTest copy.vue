<template>
    <div class="contenaire" v-if="show.showTest">


        <h1>test</h1>
        <h1>{{ apprentissage.apprentissageData }}</h1>
        <!-- <h1>{{ apprentissageData2 }}</h1> 7  au choix -->
        <!-- <h1>acces de données</h1> -->
        <!-- <h1>{{ apprentissageData2[0]?.nom }}</h1> 7 -->

        <!-- <input v-model="nom" type="text" /> 10 -->


    </div>


</template>


<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useShow } from "@/stores/show";
import { useListeFokontanyDistrictStore } from "@/stores/jsonData/liste_fokontany_par_district";
import { useApprentissage } from "@/stores/apprentissage"; //1
const show = useShow();
const listeFokontanyDistrictStore = useListeFokontanyDistrictStore();




const nom = ref('') // 8



const apprentissage = useApprentissage() //2

apprentissage.apprentissageData
const apprentissageData2 = ref([])
// apprentissageData2.value = apprentissage.apprentissageData 

// onMounted(() => {//3
//     apprentissage.getApprent() //4
//     // apprentissageData2.value = apprentissage.apprentissageData
// })

// watch(() => apprentissage.apprentissageData, () => { //5
//     apprentissageData2.value = apprentissage.apprentissageData //6
//     nom.value = apprentissageData2.value[0]?.nom //9

// })





















</script>

<style scoped>
.contenaire {}
</style>
