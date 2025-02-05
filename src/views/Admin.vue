<template>
    <WorkspaceLogin v-if="show.showLogin" />
    <WorkspaceSignUp v-if="show.showSingUp" />
    <WorkspaceDashboard v-if="show.showDashboard" />
    <!-- <Homepage v-if="true" /> -->


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

    <Teleport to="body">
        <ModalElecteurAjout />
    </Teleport>


    <Teleport to="body">
        <ModalUtilisateurAjout />
    </Teleport>
    
    <Teleport to="body">
        <ModalElecteurVoir />
    </Teleport>
    <Teleport to="body">
        <ModalElecteurModifier />
    </Teleport>
    <Teleport to="body">
        <ModalElecteurSupprimer />
    </Teleport>

    <Teleport to="body">
        <SupprimerElecteur />
    </Teleport>
</template>

<script setup>
import WorkspaceLogin from "../views/WorkspaceLogin.vue";
import WorkspaceSignUp from "../views/WorkspaceSignUp.vue";
import WorkspaceDashboard from "../views/WorkspaceDashboard.vue";
import SpinnerComponent from "../components/modals/SpinnerComponent.vue";
import AlertComponent from "../components/modals/AlertComponent.vue";
import ModalCompte from "../components/modals/ModalCompte.vue";
import ModalLogout from "../components/modals/ModalLogout.vue";
import VoirCandidat from "../components/modals/VoirCandidat.vue";
import ModifierCandidat from "../components/modals/ModifierCandidat.vue";
import SupprimerCandidat from "../components/modals/SupprimerCandidat.vue";
import SupprimerElecteur from "../components/modals/electeur/ModalElecteurSupprimer.vue";
import VoirAnnee from "../components/modals/VoirAnnee.vue";
import ModalAcceuil from "../components/modals/ModalAcceuil.vue";
import ModalElecteurAjout from "../components/modals/electeur/ModalElecteurAjout.vue";
import ModalElecteurVoir from "../components/modals/electeur/ModalElecteurVoir.vue";
import ModalElecteurModifier from "../components/modals/electeur/ModalElecteurModifier.vue";
import ModalElecteurSupprimer from "../components/modals/electeur/ModalElecteurSupprimer.vue";
import { Cookies } from "../plugins/cookies";
import { useShow } from "../stores/show";
import ModalUtilisateurAjout from "@/components/modals/utilisateur/ModalUtilisateurAjout.vue";

const show = useShow();
const cookies = new Cookies();
if (localStorage.getItem("user")) {
    show.showDashboard = true;
    show.showLogin = false;
} else {
    show.showDashboard = false;
    show.showLogin = false;
    show.showHomePage = true;

}
</script>

<style scoped></style>