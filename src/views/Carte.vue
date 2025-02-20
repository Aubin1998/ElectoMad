<template>
  <div>
    <iframe :src="localisation" width="100%" height="600px" frameborder="0"></iframe>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const localisation = ref('/localisation.PNG'); // Remplacez par le chemin de votre fichier PDF

</script>

<style scoped>
/* Vous pouvez ajouter des styles personnalisés ici */
</style>
