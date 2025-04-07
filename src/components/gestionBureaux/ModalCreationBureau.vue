<template>
  <Transition>
    <div v-if="show.showCreationBureau" @click="show.showCreationBureau = !show.showCreationBureau"
      class="modal w-full h-screen bg-gray-400 bg-opacity-40 absolute inset-0 overflow-y-hidden flex items-center z-50 backdrop-blur-[2px]">
      <div class="contenaireModal" @click.stop>

        <h2 class="text-2xl font-bold mb-4">Créer un Nouveau Bureau</h2>
        <form @submit.prevent="createBureau" class="space-y-4">

          <div class="mb-3">
            <label for="nomBureau" class="block text-sm font-medium text-white">Nom Bureau:</label>
            <input type="text" v-model="nomBureau" id="nomBureau"
              class="mt-1 block w-full p-2 border-gray-500 bg-gray-500 focus:outline-none rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Nom du bureau" required>
          </div>

          <div class="mb-3">
            <label for="adresse" class="block text-sm font-medium text-white">Adresse:</label>
            <input type="text" v-model="adresse" id="adresse"
              class="mt-1 block w-full p-2 border-gray-500 bg-gray-500 focus:outline-none rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Adresse du bureau">
          </div>




          <button type="submit" class="bg-green-500 text-white font-bold py-2 px-4 rounded">Créer</button>
        </form>
      </div>
    </div>
  </Transition>
</template>



<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useShow } from "@/stores/show";
import { uselisteElecteur } from "@/stores/listeElecteur";

const show = useShow();
const nomBureau = ref('')
const adresse = ref('')
const listeElecteur = uselisteElecteur();


const createBureau = () => {
  let formData = {
    nomBureau: nomBureau.value,
    adresse: adresse.value,
    responsable: 'Chef quartier',
    region: show.showDataParamBureau.region,
    commune: show.showDataParamBureau.commune,
    district: show.showDataParamBureau.district,
    fokontany: show.showDataParamBureau.fokontany,
    electeur_id: show.showDataParamBureau.electeur_id,
  }


  listeElecteur.createBureau(formData)



}



onMounted(() => {

})

</script>

<style scoped>
.modal {
  @apply fixed inset-0 flex items-center justify-center bg-black bg-opacity-50;
}

.modal-content {
  @apply bg-white rounded-lg shadow-lg p-6 w-full max-w-md;
}

.close {
  @apply float-right text-gray-500 cursor-pointer;
}


.contenaireModal {
  width: 25%;
  background-color: #414752;
  border-radius: 10px;
  margin: 0 auto;
  padding: 20px;
}
</style>