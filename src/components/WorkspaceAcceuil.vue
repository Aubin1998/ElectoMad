<template>
  <div class="acceuil">
    <div class="content">
      <h1 class="title">Bienvenue aux Élections</h1>
      <p class="message">Préparez-vous pour les élections à venir.</p>
      <button class="cta-button" @click="voirelection()">Voir les années électorales</button>
    </div>
  </div>
</template>

<script setup>
import { useShow } from "@/stores/show";
const show = useShow();

function voirelection() {
  console.log('btn');
  show.showAcceuilModala = !show.showAcceuilModala;
  console.log("show.showAcceuilModala", show.showAcceuilModala);

}
</script>

<style scoped>
.acceuil {
  background-color: rgb(182, 190, 190);
  min-height: 80vh;
  border-radius: 10px;
  background-image: url('../image.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.content {
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 30px;
  border-radius: 10px;
}

.title {
  font-size: 48px;
  margin-bottom: 30px;
}

.message {
  font-size: 24px;
  margin-bottom: 30px;
}

.cta-button {
  padding: 15px 30px;
  font-size: 20px;
  color: white;
  background-color: rgb(15, 117, 15);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.cta-button:hover {
  background-color: rgb(19, 161, 19);
}
</style>
