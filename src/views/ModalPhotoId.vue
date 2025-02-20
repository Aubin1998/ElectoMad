<template>
  <div class="fullscreen-image">
    <img :src="leftImageUrl" alt="Fullscreen Image" class="large-image" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
const leftImageUrl = ref('/profil.png');
</script>

<style scoped>
.fullscreen-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black; /* Couleur de fond pour contraster avec l'image */
  overflow: hidden; /* Empêche le débordement */
}

.large-image {
  width: auto;
  height: 70%; /* Ajustez cette valeur pour augmenter la taille de l'image */
  max-width: 90%; /* Limite la largeur pour éviter le débordement */
  object-fit: contain; /* Assure que l'image est contenue dans la fenêtre sans déformation */
  border-radius: 20px;
}
</style>
