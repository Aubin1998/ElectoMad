<template>
    <div>
        <div class="flex" v-if="show.showListeElecteurs || show.showListe || show.showAjoutUtilisateur || show.showListeUtilisateurs || show.showElecteurInscrit || show.showNombreTotalVotes">
            <div class="nav button">


                <h4 class="btn" v-if="show.isOptionProvince" @click="show.showOption('province')">Région</h4>
                <h4 class="btn" v-if="show.isOptionDistrict" @click="show.showOption('district')">District</h4>
                <h4 class="btn" v-if="show.isOptionCommune" @click="show.showOption('commune')">Commune</h4>
                <h4 class="btn" v-if="show.isOptionFokontany" @click="show.showOption('fokontany')">Fokontany</h4>



            </div>

            <div class="navListe">


                <h4 v-if="show.isProvince"> {{ show.selectedProvince }}</h4>
                <h4 v-if="show.isDistrict"> {{ show.selectedProvince }}/{{ show.selectedDistrict }}</h4>
                <h4 v-if="show.isCommune"> {{ show.selectedProvince }}/{{ show.selectedDistrict }}/{{
                    show.selectedCommune}}</h4>
                <h4 v-if="show.isFokontany"> {{ show.selectedProvince }}/{{ show.selectedDistrict }}/{{
                    show.selectedCommune}}/{{ show.selectedFokontany }}</h4>

            </div>
        </div>

        <div class="card">
        <WorkspaceAcceuil v-if="show.acceuil" />

            <WorkspaceAnneeElectorale v-if="show.showAnneElectoral" />
            <WorkspaceGenreElection v-if="show.showGenreElection" />
            <WorkspaceListeElecteurs v-if="show.showListeElecteurs || show.showListe" />
            <WorkspaceFiltrageRecherche v-if="show.showFiltrageRecherche" />
            <WorkspaceActionsGestion v-if="show.showActionsGestion" />
            <WorkspaceSurveillance v-if="show.showSurveillance" />
            <WorkspaceCreation v-if="show.showCreation" />
         <!--   <WorkspaceListe v-if="show.showListe" /> -->
            <WorkspaceAjoutUtilisateur v-if="show.showAjoutUtilisateur" />
            <WorkspaceListeUtilisateurs v-if="show.showListeUtilisateurs" />
            <WorkspaceChanger v-if="show.showChanger" />
            <WorkspaceVerificationElecteur v-if="show.showElecteurInscrit" />
            <WorkspaceBureauActifs v-if="show.showBureauActifs" />
            <WorkspaceTauxParticipationGlobal v-if="show.showTauxParticipation" />
            <WorkspaceBulletinVotes v-if="show.showNombreTotalVotes" />
            <WorkspaceMesTaches v-if="show.showMesTaches" />
            <WorkspaceAutres v-if="show.showAutres" />
            <WorkspaceListeCandidat v-if="show.showListeCandidat" />
            <WorkspaceAjoutCandidat v-if="show.showAjoutCandidat" />



        </div>
    </div>
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
import WorkspaceAjoutUtilisateur from "@/components/gestionUtilisateur/WorkspaceAjoutUtilisateur.vue";
import WorkspaceListeUtilisateurs from "@/components/gestionUtilisateur/WorkspaceListeUtilisateurs.vue";
import WorkspaceChanger from "@/components/gestionUtilisateur/WorkspaceChanger.vue";
//statistiques
import WorkspaceVerificationElecteur from "@/components/Statistiques/WorkspaceVerificationElecteur.vue";
import WorkspaceBureauActifs from "@/components/Statistiques/WorkspaceBulletinVotes.vue";
import WorkspaceTauxParticipationGlobal from "@/components/Statistiques/WorkspaceTauxParticipationGlobal.vue";
import WorkspaceBulletinVotes from "@/components/Statistiques/WorkspaceBulletinVotes.vue";
//historiques
import WorkspaceMesTaches from "@/components/historiques/WorkspaceMesTaches.vue";
import WorkspaceAutres from "@/components/historiques/WorkspaceAutres.vue";
//Election En Cours
import WorkspaceAcceuil from "@/components/WorkspaceAcceuil.vue";




import { useShow } from "@/stores/show";
const show = useShow(); //call Show in show.js
</script>

<style scoped>
.card {
    background-color: #434955;
    width: 96%;
    height: 76vh;
    margin: 0 auto;
    align-content: center;
    border-radius: 10px;
    box-shadow: 0px 0px 2px rgb(134, 132, 132);

}

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

.flex {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
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