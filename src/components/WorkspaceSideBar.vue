<template>
    <div class="sideBar">
        <div class="logo">
            <img src="/logo.svg" alt="Logo" class="logo-image" />
            <div class="logo-name">Votiflow</div>
        </div>
        <div class="container">
            <!-- sections -->
            <div class="section">
                <div class="sectionTitle">
                    <h4>ELECTION</h4>
                </div>


                <div class="sectionContainer">
                    <!-- For election -->
                    <!-- <div class="itemSection" :class="{ active: show.showElectionActive }">
                        <i class="pi pi-id-card" style="font-size: 18px; color: white;"></i>
                        <h4 class="text" @click="show.setSelectSideBar('Création élection')">Création</h4>
                        <WorkspaceSubSectionElections v-if="show.showElection" />
                    </div> -->

                    <div class="itemSection" @click="show.setOption('Année électorale')" v-if="show.user == 'admin'">
                        <i class="pi pi-id-card" style="font-size: 18px; color: white;"></i>
                        <h4>Création</h4>
                    </div>

                    <!-- For candidates -->
                    <!-- <div class="itemSection" :class="{ active: show.showCandidatActive }">
                        <i class="pi pi-user" style="font-size: 18px; color: white;"></i>
                        <h4 class="text" @click="show.setSelectSideBar('Gestion des candidats')">Gestion des candidats
                        </h4>
                        <WorkspaceSubSectionCandidats v-if="show.showCandidat" />
                    </div> -->
                    <div class="itemSection" @click="show.setOption('Liste des utilisateurs')"
                        v-if="show.user == 'admin'">
                        <i class="pi pi-sitemap" style="font-size: 18px; color: white;"></i>

                        <h4 class="text">Utilisateurs</h4>
                    </div>




                    <div class="itemSection" @click="show.setOption('Président des bureaux')"
                        v-if="show.user == 'admin'">
                        <!-- v-if="show.user !== 'Contrôleur'"> -->
                        <i class="pi pi-users" style="font-size: 18px; color: white;"></i>
                        <h4>Président des bureaux </h4>
                    </div>
                    <div class="itemSection" @click="show.setOption('Enregistrer les délégués')"
                        v-if="show.user == 'admin'">
                        <!-- v-if="show.user !== 'Contrôleur'"> -->
                        <i class="pi pi-users" style="font-size: 18px; color: white;"></i>
                        <h4>Enregistrer les délégués </h4>
                    </div>
                    <div class="itemSection" @click="show.setOption('Liste complète des électeurs')"
                        v-if="show.user == 'admin'">
                        <!-- v-if="show.user !== 'Contrôleur'"> -->
                        <i class="pi pi-users" style="font-size: 18px; color: white;"></i>
                        <h4>Suivi des électeurs</h4>
                    </div>


















                    <div class="itemSection" @click="show.setOption('Liste complète des électeurs')"
                        v-if="show.user == 'Opérateur de saisie'">
                        <!-- v-if="show.user !== 'Contrôleur'"> -->
                        <i class="pi pi-users" style="font-size: 18px; color: white;"></i>
                        <h4>Président des bureaux </h4>
                    </div>

                    <div class="itemSection" @click="show.setOption('Liste totale des candidats')"
                        v-if="show.user == 'admin'">
                        <i class="pi pi-user" style="font-size: 18px; color: white;"></i>
                        <h4>Gérer les candidats</h4>
                    </div>
                    <div class="itemSection" @click="show.setOption('Liste totale des candidats')"
                        v-if="show.user == 'Opérateur de saisie'">
                        <i class="pi pi-user" style="font-size: 18px; color: white;"></i>
                        <h4>Gérer les candidats</h4>
                    </div>
                    <div class="itemSection" @click="show.setOption('Liste complète des électeurs')"
                        v-if="show.user == 'Opérateur de saisie'">
                        <!-- v-if="show.user !== 'Contrôleur'"> -->
                        <i class="pi pi-users" style="font-size: 18px; color: white;"></i>
                        <h4>Enregistrer les délégués </h4>
                    </div>
                    <!-- For electors -->
                    <!-- <div class="itemSection" :class="{ active: show.showElecteursActive }">
                        <i class="pi pi-users" style="font-size: 18px; color: white;"></i>
                        <h4 class="text" @click="show.setSelectSideBar('Gestion des électeurs')">Suivi des Électeurs
                        </h4>
                        <WorkspaceSubSectionElecteurs v-if="show.showElecteur" />
                    </div> -->


                    <div class="itemSection" @click="show.setOption('Liste complète des électeurs')"
                        v-if="show.user == 'Opérateur de saisie'">
                        <!-- v-if="show.user !== 'Contrôleur'"> -->
                        <i class="pi pi-users" style="font-size: 18px; color: white;"></i>
                        <h4>Saisir les électeurs </h4>
                    </div>
                    <div class="itemSection" @click="show.setOption('Contrôle des électeurs')"
                        v-if="show.user === 'Contrôleur'">
                        <i class="pi pi-users" style="font-size: 18px; color: white;"></i>
                        <h4>Vérification des Présidents </h4>
                    </div>

                    <div class="itemSection" @click="show.setOption('Contrôle des électeurs')"
                        v-if="show.user === 'Contrôleur'">
                        <i class="pi pi-users" style="font-size: 18px; color: white;"></i>
                        <h4>Délégués de vote </h4>
                    </div>
                    <div class="itemSection" @click="show.setOption('Contrôle des électeurs')"
                        v-if="show.user === 'Contrôleur'">
                        <i class="pi pi-users" style="font-size: 18px; color: white;"></i>
                        <h4> Candidats</h4>
                    </div>

                    <div class="itemSection" @click="show.setOption('Contrôle des électeurs')"
                        v-if="show.user === 'Contrôleur'">
                        <i class="pi pi-users" style="font-size: 18px; color: white;"></i>
                        <h4>Electeurs </h4>
                    </div>


                    <!-- <div class="itemSection" @click="show.setOption('Saisir les données')"
                        v-if="show.user == 'Opérateur de saisie'">
                        <i class="pi pi-users" style="font-size: 18px; color: white;"></i>
                        <h4>Saisie des données</h4>
                    </div> -->
                    <!-- <div class="itemSection" @click="show.setOption('test')">
                        <i class="pi pi-users" style="font-size: 18px; color: white;"></i>
                        <h4>Test</h4>
                    </div> -->


                    <!-- For offices -->
                    <!-- <div class="itemSection" :class="{ active: show.showBureauxActive }">
                        <i class="pi pi-building" style="font-size: 18px; color: white;"></i>
                        <h4 class="text" @click="show.setSelectSideBar('Gestion des bureaux')">Bureaux de vote</h4>
                        <WorkspaceSubSectionBureaux v-if="show.showBureau" />
                    </div> -->

                    <!-- <div class="itemSection" @click="show.setOption('Liste des bureaux de votes')">
                            <i class="pi pi-building" style="font-size: 18px; color: white;"></i>
                            <h4>Bureaux de votes</h4>
                        </div> -->



                    <!-- For users -->
                    <!-- <div class="itemSection" :class="{ active: show.showUtilisateurActive }">
                            <i class="pi pi-sitemap" style="font-size: 18px; color: white;"></i>
                            <h4 class="text"  @click="show.setSelectSideBar('Gestion des utilisateurs')">Utilisateurs</h4>
                            <WorkspaceSubSectionUtilisateurs v-if="show.showUtilisateur"/>  
                        </div> -->

                    <!-- For users -->


                    <!-- For statistics -->
                    <!-- <div class="itemSection" :class="{ active: show.showStatistiquesActive }"
                        v-if="show.user == 'admin'">
                        <i class="pi pi-clock" style="font-size: 18px; color: white;"></i>
                        <h4 class="text" @click="show.setSelectSideBar('Statistiques')">Statistiques</h4>
                        <WorkspaceSubSectionStatistiques v-if="show.showStatistique" />
                    </div> -->
                    <!-- <div class="itemSection" :class="{ active: show.showStatistiquesActive }"
                        v-if="show.user === 'Contrôleur'">
                        <i class="pi pi-clock" style="font-size: 18px; color: white;"></i>
                        <h4 class="text" @click="show.setSelectSideBar('Statistiques')">Statistiques</h4>
                        <WorkspaceSubSectionStatistiques v-if="show.showStatistique" />
                    </div> -->
                    <!-- For history -->
                    <!-- <div class="itemSection" :class="{ active: show.showHistoriqueActive }" v-if="show.user == 'admin'">
                        <i class="pi pi-history" style="font-size: 18px; color: white;"></i>
                        <h4 class="text" @click="show.setSelectSideBar('Historique')">Historique</h4>
                        <WorkspaceSubSectionHistoriques v-if="show.showHistorique" />
                    </div> -->


                    <!-- For current election -->
                    <!-- <div class="itemSection" :class="{ active: show.showElectionEnCoursActive }">
                        <i class="pi pi-clock" style="font-size: 18px; color: white;"></i>
                        <h4 @click="show.setSelectSideBar('Election en cours')">Election en cours</h4>
                        <WorkspaceSubSectionElectionEnCours v-if="show.showElectionEnCours" />
                    </div>-->

                    <div class="option " style="cursor: pointer;
    transition: transform 0.3s ease;" @click="show.showModalLogout = !show.showModalLogout">
                        <h5 class="item ml-[50px]  " style="cursor: pointer;
    transition: transform 0.3s ease;">Déconnexion</h5>
                        <i class="pi pi-sign-out mr-[50px]" style="font-size: 14px; color: white; cursor: pointer;
    transition: transform 0.3s ease;"></i>


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


import { ref, onMounted } from 'vue';

onMounted(() => {
    show.user = JSON.parse(localStorage.getItem('usersRole'))

    console.log('aaaaaaaaaaaaa', show.user);

})

// Gérez l'état de la section active
const activeSection = ref(null);

// Fonction pour définir la section active
function setActiveSection(section) {
    activeSection.value = section;
}
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
    text-align: center;
}

.sectionTitle h4 {
    color: #eaedf4;
    font-weight: 700;
}

.sectionContainer {
    background-color: #2d405193;
    padding: 0px;
    border-radius: 10px;
    height: 480px;
}

.itemSection {
    display: flex;
    align-items: start;
    padding: 5px 10px;
    margin-bottom: 5px;
    border-radius: 8px;
    margin-top: 5px;
    transition: background-color 0.3s ease, transform 0.3s ease;
    cursor: pointer;


}

.option {
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 10px 10px;
    margin: 200px 0px 0px 0px;
    border-radius: 8px 8px 0px 0px;
}

.option:hover {
    background-color: #21629f;

}

.item {
    color: #fff;
    font-weight: 600;
}


.pi {
    transition: transform 0.2s ease-in-out;
}

.pi:hover {
    transform: scale(1.2);
    /* Agrandit l'icône de 20% au survol */
}


.text {
    font-size: 15px !important;
}



.itemSection i {
    margin-right: 10px;
    transition: transform 0.3s ease;
}

.itemSection h4 {
    display: flex;
    align-items: center;
    /* Centre verticalement le contenu */
    color: white;
    font-size: 16px;
    margin: 0;
    padding-left: 1px;
    /* Ajoute un léger espacement à gauche du texte */
    position: relative;
    white-space: nowrap;
    /* Empêche les titres de se couper à la ligne */
    justify-content: flex-start;
    /* Aligne le contenu à gauche */
}



.itemSection:hover {
    background-color: #21629f;
    transform: translate3d(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.logo-name {
    color: #FFFFFF;
    font-size: 24px;
    font-weight: bold;
    max-height: 100%;
    max-width: 100%;
    margin-left: 10px;
    /* Ajout d'espace pour éviter que le texte ne touche l'image */
}
</style>
