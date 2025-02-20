<template>
  <div>
    <iframe :src="pdfUrl" width="100%" height="800px" frameborder="0"></iframe>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const pdfUrl = ref('/listeElectorale.pdf'); // Remplacez par le chemin de votre fichier PDF

</script>

<style scoped>
/* Vous pouvez ajouter des styles personnalisés ici */
</style>
