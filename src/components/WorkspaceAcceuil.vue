<template>
  <div class="w-full h-full ">
    <div class="acceuil" v-if="show.user == 'admin'">
    <div class="content">
     
      <h1 class="title">Bienvenue sur VoteVision</h1>
      <p class="message"> Votre plateforme électorale moderne.</p>
      <button class="cta-button" @click="voirelection()">Voir les années électorales</button>
    </div>
  </div>

  <div class="acceuil1" v-if="show.user == 'Controlleur'">
    <div class="content">
      <h1 class="title">Bienvenue sur la plateforme du Contrôleur</h1>
      <p class="message"> Votre plateforme électorale moderne.</p>
      <button class="cta-button" @click="voirelection()">Voir les années électorales</button>
    </div>
  </div>

  <div class="acceuil2" v-if="show.user == 'Opérateur de saisie'">
    <div class="content">
      <h1 class="title">Bienvenue pour la saisie des données</h1>
      <p class="message"> Votre plateforme électorale moderne.</p>
      <button class="cta-button" @click="voirelection()">Voir les années électorales</button>
    </div>
  </div>
  </div>

</template>

<script setup>
import { useShow } from "@/stores/show";
const show = useShow();

function voirelection() {
  show.showAcceuilModala = !show.showAcceuilModala;

}
</script>

<style scoped>
.acceuil {
  background-color: rgb(182, 190, 190);
  min-height: 100%;
  border-radius: 10px;
  background-image: url('../fokontany.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.acceuil1 {
  background-color: rgb(182, 190, 190);
  min-height: 80vh;
  border-radius: 10px;
  background-image: url('../controleur.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.acceuil2 {
  background-color: rgb(182, 190, 190);
  min-height: 80vh;
  border-radius: 10px;
  background-image: url('../opérateur-de-saisie.jpg');
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
