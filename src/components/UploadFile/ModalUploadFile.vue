<template>
  <div>
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">
      Joindre une image
    </label>
    <input
      class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
      id="file_input" type="file" @change="upload" />
  </div>



</template>

<script setup>
import axios from "axios";
import { defineProps } from "vue";
import { useUrl } from "@/stores/url";
import { useShow } from "@/stores/show";
import { uselisteCandidat } from "@/stores/listeCandidat";
const URL = useUrl().url;
const show = useShow();


const listeCandidat = uselisteCandidat()
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const upload = (event) => {
  const file = event.target.files[0];
  if (file && props.data?.candidat?.id) {
    onFileChange(file, props.data.candidat.id);
  } else {
    console.error("Fichier ou ID du candidat manquant.");
  }
};

const onFileChange = async (file, id) => {
  const formData = new FormData();
  formData.append("file", file);
  try {
    const response = await axios.post(`${URL}/api/electeur/candidat/${id}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("response uploadImage", response.data);
    show.showModalAjoutImage = false
    listeCandidat.getCandidats();
  } catch (error) {
    console.error("Erreur lors de l'upload de l'image :", error);
  }
};
</script>

<style scoped>
/* Ajoutez ici les styles spécifiques au composant si nécessaire */




.closeForm:hover {
  background-color: rgb(186, 11, 11);
  transform: scale(1.1);
  /* Ajoute un effet de zoom au survol */
}
</style>
