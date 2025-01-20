<template>
    <div class="sideBar">
        <div class="logo">
            <img src="/vote.png" alt="Logo" class="logo-image" />
            <div class="logo-name">ElectoMad</div>
        </div>
        <div class="container">
            <!-- sections -->
            <div class="section">
                <div class="sectionTitle">
                    <h4>ELECTION</h4>
                </div>
                <div class="sectionContainer">
                    <!-- For election -->
                    <div class="itemSection" :class="{ active: show.showElectionActive }">
                        <i class="pi pi-id-card" style="font-size: 18px; color: white;"></i>
                        <h4 @click="show.setSelectSideBar('Création élection')">Création électorale</h4>
                        <WorkspaceSubSectionElections v-if="show.showElection" />
                    </div>
                    <!-- For candidates -->
                    <div class="itemSection" :class="{ active: show.showCandidatActive }">
                        <i class="pi pi-user" style="font-size: 18px; color: white;"></i>
                        <h4 @click="show.setSelectSideBar('Gestion des candidats')">Gestion des candidats</h4>
                        <WorkspaceSubSectionCandidats v-if="show.showCandidat" />
                    </div>
                    <!-- For electors -->
                    <div class="itemSection" :class="{ active: show.showElecteursActive }">
                        <i class="pi pi-users" style="font-size: 18px; color: white;"></i>
                        <h4 @click="show.setSelectSideBar('Gestion des électeurs')">Gestion des électeurs</h4>
                        <WorkspaceSubSectionElecteurs v-if="show.showElecteur" />
                    </div>
                    <!-- For offices -->
                    <div class="itemSection" :class="{ active: show.showBureauxActive }">
                        <i class="pi pi-building" style="font-size: 18px; color: white;"></i>
                        <h4 @click="show.setSelectSideBar('Gestion des bureaux')">Gestion des bureaux</h4>
                        <WorkspaceSubSectionBureaux v-if="show.showBureau" />
                    </div>
                    <!-- For users -->
                    <div class="itemSection" :class="{ active: show.showUtilisateurActive }">
                        <i class="pi pi-sitemap" style="font-size: 18px; color: white;"></i>
                        <h4 @click="show.setSelectSideBar('Gestion des utilisateurs')">Gestion des utilisateurs</h4>
                        <WorkspaceSubSectionUtilisateurs v-if="show.showUtilisateur" />
                    </div>
                    <!-- For statistics -->
                    <div class="itemSection" :class="{ active: show.showStatistiquesActive }">
                        <i class="pi pi-clock" style="font-size: 18px; color: white;"></i>
                        <h4 @click="show.setSelectSideBar('Statistiques')">Statistiques</h4>
                        <WorkspaceSubSectionStatistiques v-if="show.showStatistique" />
                    </div>
                    <!-- For history -->
                    <div class="itemSection" :class="{ active: show.showHistoriqueActive }">
                        <i class="pi pi-history" style="font-size: 18px; color: white;"></i>
                        <h4 @click="show.setSelectSideBar('Historique')">Historique</h4>
                        <WorkspaceSubSectionHistoriques v-if="show.showHistorique" />
                    </div>
                    <!-- For current election -->
                    <div class="itemSection" :class="{ active: show.showElectionEnCoursActive }">
                        <i class="pi pi-clock" style="font-size: 18px; color: white;"></i>
                        <h4 @click="show.setSelectSideBar('Election en cours')">Election en cours</h4>
                        <WorkspaceSubSectionElectionEnCours v-if="show.showElectionEnCours" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import WorkspaceSubSectionElections from "@/components/subsections/WorkspaceSubSectionElections.vue";
import WorkspaceSubSectionCandidats from "@/components/subsections/WorkspaceSubSectionCandidats.vue";
import WorkspaceSubSectionElecteurs from "@/components/subsections/WorkspaceSubSectionElecteurs.vue";
import WorkspaceSubSectionBureaux from "@/components/subsections/WorkspaceSubSectionBureaux.vue";
import WorkspaceSubSectionUtilisateurs from "@/components/subsections/WorkspaceSubSectionUtilisateurs.vue";
import WorkspaceSubSectionStatistiques from "@/components/subsections/WorkspaceSubSectionStatistiques.vue";
import WorkspaceSubSectionHistoriques from "@/components/subsections/WorkspaceSubSectionHistoriques.vue";

import { useShow } from "@/stores/show";
const show = useShow(); // call Show in show.js
</script>

<style scoped>
.sideBar {
    width: 20%;
    background-color: #434955;
    padding: 0px 20px 20px 20px;
    border-right: 1px solid rgba(134, 132, 132, 0.514);
}

.logo {
    height: 15vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo-image {
    max-height: 100%;
    max-width: 100%;
    margin-right: 20px;
    /* Ajout d'espace entre l'image et le nom */
}

.container {
    width: 100%;
    height: 82vh;
    margin-top: 22px;
    color: #434955;
}

.sectionTitle {
    background-color: #72767e;
    padding: 10px 20px;
    color: #eaedf4;
    font-weight: 700;
    border-radius: 5px 5px 0px 0px;
}

.sectionTitle h4 {
    color: #eaedf4;
    font-weight: 700;
}

.itemSection {
    display: flex;
    padding: 10px 20px;
    align-items: center;
    z-index: 10;
}

.itemSection h4 {
    padding-left: 20px;
    color: #fff;
    font-weight: 500;
}

.active {
    background-color: rgb(102, 116, 111);
}

.logo-name {
    color: white;
    font-size: 24px;
    font-weight: bold;
    max-height: 100%;
    max-width: 100%;
    margin-left: 10px;
    /* Ajout d'espace pour éviter que le texte ne touche l'image */
}
</style>
