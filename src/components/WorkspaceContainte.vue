<template>
    <!-- <div  class="flex  justify-center items-center w-full h-full bg-red-500 " > -->
    <div class="flex justify-center items-center h-[60px]   "
        v-if="show.showListeElecteurs || show.showListe || show.showAjoutUtilisateur || show.showListeUtilisateurs || show.showElecteurInscrit || show.showNombreTotalVotes">
        <div class="nav button">


            <h4 class="btn" v-if="show.isOptionProvince" @click="show.showOption('province')">Région</h4>
            <h4 class="btn" v-if="show.isOptionDistrict" @click="show.showOption('district')">District</h4>
            <h4 class="btn" v-if="show.isOptionCommune" @click="show.showOption('commune')">Commune</h4>
            <h4 class="btn" v-if="show.isOptionFokontany" @click="show.showOption('fokontany')">Fokontany</h4>



        </div>

        <div class="navListe">


            <h4 class="text-sm font-semibold" v-if="show.isProvince"> {{ show.selectedProvince }}</h4>
            <h4 class="text-sm font-semibold" v-if="show.isDistrict"> {{ show.selectedProvince }}/{{
                show.selectedDistrict }}</h4>
            <h4 class="text-sm font-semibold" v-if="show.isCommune"> {{ show.selectedProvince }}/{{
                show.selectedDistrict }}/{{
                    show.selectedCommune }}</h4>
            <h4 class="text-sm font-semibold" v-if="show.isFokontany"> {{ show.selectedProvince }}/{{
                show.selectedDistrict }}/{{
                    show.selectedCommune }}/{{ show.selectedFokontany }}</h4>

        </div>
    </div>

    <div>
        <!-- class="bg-[#434955]  flex justify-center items-center rounded-xl shadow-md p-4  " -->
        <WorkspaceAcceuil v-if="show.acceuil" />


        <WorkspaceAnneeElectorale v-if="show.showAnneElectoral" />
        <WorkspaceGenreElection v-if="show.showGenreElection" />
        <!-- <WorkspaceListeElecteurs v-if="show.showListeElecteurs || show.showListe" /> -->
        <WorkspaceListeElecteurs v-if="show.showListeElecteurs" />
        <WorkspaceLocalisationElection v-if="show.showLocalisationElection" />

        <WorkspaceFiltrageRecherche v-if="show.showFiltrageRecherche" />
        <WorkspaceActionsGestion v-if="show.showActionsGestion" />
        <WorkspaceSurveillance v-if="show.showSurveillance" />
        <WorkspaceCreation v-if="show.showCreation" />
        <!--   <WorkspaceListe v-if="show.showListe" /> -->
        <WorkspaceAjoutUtilisateurListe v-if="show.showAjoutUtilisateur" />
        <WorkspaceListeUtilisateursListe v-if="show.showListeUtilisateurs" />
        <WorkspaceChanger v-if="show.showChanger" />
        <WorkspaceVerificationElecteurListe v-if="show.showElecteurInscrit" />
        <!-- <WorkspaceBureauActifs v-if="show.showBureauActifs" /> -->
        <WorkspaceTauxParticipationGlobal v-if="show.showTauxParticipation" />
        <WorkspaceBulletinVotesListe v-if="show.showNombreTotalVotes" />
        <WorkspaceMesTaches v-if="show.showMesTaches" />
        <WorkspaceAutres v-if="show.showAutres" />
        <WorkspaceListeCandidat v-if="show.showListeCandidat" />
        <WorkspaceAjoutCandidat v-if="show.showAjoutCandidat" />

        <!-- Controlleur -->
        <WorkspaceControleElecteur v-if="show.showControleElecteur" />
        <WorkspaceSaisirElecteur v-if="show.showSaisirElecteur" />
        <WorkspaceTest v-if="show.showTest" />



    </div>
    <!-- </div> -->
</template>

<script setup>
//creationElectorale
import WorkspaceAnneeElectorale from "@/components/creationElectorale/WorkspaceAnneeElectorale.vue";
import WorkspaceGenreElection from "@/components/creationElectorale/WorkspaceGenreElection.vue";
//gestion candidat
import WorkspaceListeCandidat from "@/components/gestionCandidats/WorkspaceListeCandidat.vue";
import WorkspaceAjoutCandidat from "@/components/gestionCandidats/WorkspaceAjoutCandidat.vue";
//gestionElecteurs
import WorkspaceListeElecteurs from "@/components/gestionElecteurs/WorkspaceListeElecteurs.vue";
import WorkspaceFiltrageRecherche from "@/components/gestionElecteurs/WorkspaceFiltrageRecherche.vue";
import WorkspaceActionsGestion from "@/components/gestionElecteurs/WorkspaceActionsGestion.vue";
import WorkspaceSurveillance from "@/components/gestionElecteurs/WorkspaceSurveillance.vue";
//gestion bureaux
import WorkspaceCreation from "@/components/gestionBureaux/WorkspaceCreation.vue";
import WorkspaceListe from "@/components/gestionBureaux/WorkspaceListe.vue";
//gestion utilisateur
import WorkspaceAjoutUtilisateurListe from "@/components/gestionUtilisateur/WorkspaceAjoutUtilisateurListe.vue";
import WorkspaceListeUtilisateursListe from "@/components/gestionUtilisateur/WorkspaceListeUtilisateursListe.vue";
import WorkspaceChanger from "@/components/gestionUtilisateur/WorkspaceChanger.vue";
//statistiques
import WorkspaceVerificationElecteurListe from "@/components/Statistiques/WorkspaceVerificationElecteurListe.vue";
import WorkspaceTauxParticipationGlobal from "@/components/Statistiques/WorkspaceTauxParticipationGlobal.vue";
import WorkspaceBulletinVotesListe from "@/components/Statistiques/WorkspaceBulletinVotesListe.vue";
//historiques
import WorkspaceMesTaches from "@/components/historiques/WorkspaceMesTaches.vue";
import WorkspaceAutres from "@/components/historiques/WorkspaceAutres.vue";
//Election En Cours
import WorkspaceAcceuil from "@/components/WorkspaceAcceuil.vue";
import WorkspaceLocalisationElection from "@/components/gestionElecteurs/WorkspaceLocalisationElection.vue";




import { useShow } from "@/stores/show";
import WorkspaceControleElecteur from "./gestionElecteurs/WorkspaceControleElecteur.vue";
import WorkspaceSaisirElecteur from "./gestionElecteurs/WorkspaceSaisirElecteur.vue";
import WorkspaceTest from "./gestionElecteurs/WorkspaceTest.vue";
const show = useShow(); //call Show in show.js
</script>

<style scoped>
.nav {
    background-color: #4349553a;
    width: 40%;
    color: #d4d2d2;
    margin-bottom: 20px;
    padding-left: 20px;
}

.navListe {
    background-color: #4349553a;
    width: 60%;
    color: #d4d2d2;
    margin-bottom: 20px;
    padding: 10px 20px;
}


.button {
    display: flex;

}

.btn {
    padding: 10px;
    border-radius: 5px;
    color: rgb(92, 92, 228);

}

.btn:hover {
    background-color: rgb(226, 114, 132);

}

.active {
    background-color: rgb(226, 114, 132);

}

.nav h4 {
    font-weight: 700;
}
</style>