<template>
    <div class="contenaire" v-if="show.showProvince">
        <!-- Barre de recherche -->
        <div class="recherche">
            <input v-model="searchQuery" class="input custom-input" type="text"
                placeholder="Rechercher par nom de région">

        </div>

        <div class="form">
            <div class="itemForm">
                <div class="formulaire" v-for="(item, index) in filteredData" :key="index">
                    <div class="cercle">

                        <h1>{{ item.listeDistrict.length }}</h1>
                    </div>
                    <h4>{{ item.region }}</h4>
                    <h3 class="btnAdd" @click="select(item)">Voir</h3> <!--//etape 1 -->
                </div>
            </div>
        </div>
    </div>


    <WorkspaceProvinceElecteur v-if="show.showProvinceElecteur" />

    <WorkspaceDistrictElecteur v-if="show.listeCommune" />
    <!-- <WorkspaceCommuneElecteur v-if="show.listeFokontany" /> -->
    <WorkspaceFokontanyElecteur v-if="fokontany" />
</template>


<script setup>
import { ref, computed, onMounted, watch } from "vue";
import WorkspaceProvinceElecteur from "@/components/gestionElecteurs/subComponentsListeElecteurs/WorkspaceProvinceElecteur.vue";
import WorkspaceDistrictElecteur from "@/components/gestionElecteurs/subComponentsListeElecteurs/WorkspaceDistrictElecteur.vue";
import WorkspaceCommuneElecteur from "@/components/gestionElecteurs/subComponentsListeElecteurs/WorkspaceCommuneElecteur.vue";
import WorkspaceFokontanyElecteur from "@/components/gestionElecteurs/subComponentsListeElecteurs/WorkspaceFokontanyElecteur.vue";
import { useShow } from "@/stores/show";
import { useListeFokontanyDistrictStore } from "@/stores/jsonData/liste_fokontany_par_district";

const show = useShow();
const listeFokontanyDistrictStore = useListeFokontanyDistrictStore();

const stopDepute = ref(false)
const fokontany = ref(false)
// const stop = ref(false)
// const stopDepute = ref(false)
// // Recherche
const searchQuery = ref('');
const region = ref(false)
onMounted(() => {
    region.value = true
})

//étape 2
function select(item) {
    show.showOptionProvince(item.region, item.listeDistrict)
    localStorage.setItem('selectRegion', JSON.stringify(item.region))
    // region.value= false
    // if (show.depute) {
    //     show.showModalAjout = true
    // }

}



// Transformation des données
const data = computed(() => {
    const rawData = listeFokontanyDistrictStore.listeFokontanyDistrict;
    if (rawData && typeof rawData === 'object') {
        const transformedData = Object.entries(rawData).map(([region, districts]) => {
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
    } return filtered.slice(1); // Ignorer le premier élément 
});

const dataJSON = computed(() => {
    return JSON.stringify(data.value, null, 2);
});

watch(dataJSON, (newDataJSON) => {
}, { immediate: true });


watch(data, (newData) => {
}, { immediate: true });

</script>

<style scoped>
.contenaire {
    padding-top: 20px;
}

/* Customisation de l'input */
.custom-input {
    border: 2px solid #4CAF50;
    /* Changer la couleur de la bordure */
    border-radius: 10px;

    /* Arrondir les coins */
    background-color: #f3f3f3;
    /* Changer la couleur de fond */
    color: #333;
    /* Changer la couleur du texte */
    padding: 15px;
    /* Ajouter du padding */
    font-size: 16px;
    /* Augmenter la taille de la police */
}

/* Styles pour l'input lorsqu'il est en focus */
.custom-input:focus {
    border-color: #3e8e41;
    /* Changer la couleur de la bordure lors du focus */
    box-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
    /* Ajouter une ombre lors du focus */
    outline: none;
    /* Enlever le contour par défaut */


}

.input {
    padding: 10px;

    width: 100px;
    border-radius: 5px;
    border: 1px solid #aaaac5;
    background-color: #3c4c6d09;
    color: #fff;
    margin-bottom: 20px;
}

.recherche {
    width: 30%;
    position: relative;
    right: -65%;
}

.form {
    width: 100%;
    margin-bottom: 20px;
}

/* Ajoutez d'autres styles ici comme nécessaire */

.contenaire {
    padding-top: 20px;
}

.form {
    width: 100%;
    margin-bottom: 20px;
    height: 60vh;
    overflow-y: scroll;
}

.form h4 {
    font-weight: 600;
    padding: 10px;
}

.itemForm {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
}

.list {
    width: 100%;
    height: 60vh;
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
}

.item {
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
    background-color: rgb(74, 74, 241);
}

.orange {
    background-color: rgb(241, 169, 74);
}

.red {
    background-color: rgb(241, 74, 74);
}

.input {
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #aaaac5;
    background-color: #3c4c6d09;
    color: #fff;
}

input-placeholder {
    color: red;
}

.formulaire {
    width: 25%;
    background-color: rgba(33, 192, 41, 0.13);
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
    font-size: 25px;
    font-weight: 500;
    color: rgba(112, 105, 105, 0.74);
}

.add {
    width: 100px !important;
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

.btnAdd:hover {
    background-color: rgb(101, 230, 140);
}
</style>
