<script setup>

import { useShow } from "./stores/show";

import { Cookies } from "./plugins/cookies";

import User from "./views/User.vue";
import Admin from "./views/Admin.vue";

const show = useShow();
const cookies = new Cookies();
if (localStorage.getItem("user")) {
  show.showDashboard = true;
  show.showAdmin = true;
  show.showLogin = false;
  show.showUser = false;

} else {
  show.showAdmin = true;
  show.showDashboard = false;
  show.showLogin = false;
  show.showHomePage = true;
  show.showUser = true;
}

import { useRoute } from 'vue-router';
import { watch } from 'vue';

const route = useRoute();

watch(
  () => route.path,
  (newPath, oldPath) => {
    console.log('Nouvelle route:', newPath);
    console.log('Ancienne route:', oldPath);
    // Vous pouvez ajouter votre logique ici
    if (newPath != "/admin") {
      show.showUser = true;
    } else {
      show.showUser = false;
      show.showAdmin = true
    }

  }
);
</script>

<template>
  <div class="app">
    <User v-if="show.showUser" />
    <Admin v-if="show.showAdmin" />
  </div>
</template>

<style scoped></style>
