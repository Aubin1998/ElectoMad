<script setup>
import WorkspaceLogin from "./views/WorkspaceLogin.vue";
import WorkspaceSignUp from "./views/WorkspaceSignUp.vue";
import WorkspaceDashboard from "./views/WorkspaceDashboard.vue";
import { useShow } from "./stores/show";
import SpinnerComponent from "./components/modals/SpinnerComponent.vue";
import AlertComponent from "./components/modals/AlertComponent.vue";
import { Cookies } from "./plugins/cookies";
import ModalCompte from "./components/modals/ModalCompte.vue";
import ModalLogout from "./components/modals/ModalLogout.vue";
import VoirCandidat from "./components/modals/VoirCandidat.vue";
import ModifierCandidat from "./components/modals/ModifierCandidat.vue";
import SupprimerCandidat from "./components/modals/SupprimerCandidat.vue";
import VoirAnnee from "./components/modals/VoirAnnee.vue";
import ModalAcceuil from "./components/modals/ModalAcceuil.vue";

const show = useShow(); // call Show in show.js

const cookies = new Cookies();
if (document.cookie.includes("access_token") && localStorage.getItem("user") && localStorage.getItem("user") !== "") {
  show.showDashboard = true;
  show.showLogin = false;
} else {
  show.showDashboard = false;
  show.showLogin = true;
}
</script>

<template>
  <div class="app">
    <WorkspaceLogin v-if="show.showLogin" />
    <WorkspaceSignUp v-if="show.showSignUp" />
    <WorkspaceDashboard v-if="show.showDashboard" />
    <Teleport to="body">
      <SpinnerComponent />
    </Teleport>
    <Teleport to="body">
      <AlertComponent />
    </Teleport>
    <Teleport to="body">
      <ModalCompte />
    </Teleport>
    <Teleport to="body">
      <ModalLogout />
    </Teleport>
    <Teleport to="body">
      <VoirCandidat />
    </Teleport>
    <Teleport to="body">
      <ModifierCandidat />
    </Teleport>
    <Teleport to="body">
      <ModalAcceuil />
    </Teleport>
    <Teleport to="body">
      <SupprimerCandidat />
    </Teleport>
    <Teleport to="body">
      <VoirAnnee />
    </Teleport>
  </div>
</template>

<style scoped></style>
