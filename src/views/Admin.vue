<template>
    <WorkspaceLogin v-if="show.showLogin" />
    <WorkspaceSignUp v-if="show.showSignUp" />
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
    <Teleport to="body">
        <ModaleCIN />
    </Teleport>
    <Teleport to="body">
        <ModalAreas />
    </Teleport>
    <Teleport to="body">
        <ModalAreasCommune />
    </Teleport>
    <Teleport to="body">
        <ModalAreasDeputes />
    </Teleport>
    <Teleport to="body">
        <ModalAreasSenateur />
    </Teleport>
    <Teleport to="body">
        <ModalVoirElecteur />
    </Teleport>
    <Teleport to="body">
        <ModalCreationBureau />
    </Teleport>
    <Teleport to="body">
        <ModalAssignerDeleguer />
    </Teleport>
    <Teleport to="body">
        <ModalVoirDetailDeleguer />
    </Teleport>
    <Teleport to="body">
        <ModalAddNewElecteur />
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
import { onMounted } from "vue";
import ModaleCIN from "./ModaleCIN.vue";
import ModalAreas from "@/components/gestionCandidats/ModalAreas.vue";
import ModalAreasCommune from "@/components/gestionCandidats/ModalAreasCommune.vue";
import ModalAreasDeputes from "@/components/gestionCandidats/ModalAreasDeputes.vue";
import ModalAreasSenateur from "@/components/gestionCandidats/ModalAreasSenateur.vue";
import ModalVoirElecteur from "@/components/gestionCandidats/ModalVoirElecteur.vue";
import ModalCreationBureau from "@/components/gestionBureaux/ModalCreationBureau.vue";
import ModalAssignerDeleguer from "@/components/modals/electeur/ModalAssignerDeleguer.vue";
import ModalVoirDetailDeleguer from "@/components/modals/electeur/ModalVoirDetailDeleguer.vue";
import ModalAddNewElecteur from "@/components/modals/electeur/ModalAddNewElecteur.vue";

const show = useShow();
const cookies = new Cookies();

// Utility function to check for authentication
function isAuthenticated() {
    const token = document.cookie.split('; ').find(row => row.startsWith('access_token='))?.split('=')[1];
    return !!token;
}

// Check authentication status on component setup
if (isAuthenticated() || localStorage.getItem("user")) {
    show.showDashboard = true;
    show.showLogin = false;
} else {
    show.showDashboard = false;
    show.showLogin = false;
}
</script>

<style scoped></style>
