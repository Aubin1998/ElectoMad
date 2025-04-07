<template>
    <div class="sideBar">
        <div class="logo">
            <img src="/logo.svg" alt="Logo" class="logo-image" />
            <div class="logo-name text-sm font-semibold">Votiflow</div>
        </div>
        <div class="container">
            <div class="section">
                <div class="sectionTitle">
                    <h4 class="text-sm font-semibold">ELECTION</h4>
                </div>
                <div class="sectionContainer">
                    <div class="itemSection text-sm font-semibold"
                        :class="{ active: activeSection === 'Année électorale' }"
                        @click="setActiveSection('Année électorale'); show.setOption('Année électorale')"
                        v-if="show.user == 'admin'">
                        <i class="pi pi-id-card" style="font-size: 18px; color: white;"></i>
                        <h4>Création</h4>
                    </div>
                    <div class="itemSection text-sm font-semibold"
                        :class="{ active: activeSection === 'Liste des utilisateurs' }"
                        @click="setActiveSection('Liste des utilisateurs'); show.setOption('Liste des utilisateurs')"
                        v-if="show.user == 'admin'">
                        <i class="pi pi-sitemap" style="font-size: 18px; color: white;"></i>
                        <h4>Utilisateurs</h4>
                    </div>
                    <div class="itemSection text-sm font-semibold"
                        :class="{ active: activeSection === 'Président des bureaux' }"
                        @click="setActiveSection('Président des bureaux'); show.setOption('Président des bureaux')"
                        v-if="show.user == 'admin'">
                        <i class="pi pi-users" style="font-size: 18px; color: white;"></i>
                        <h4>Président des bureaux</h4>
                    </div>
                    <div class="itemSection text-sm font-semibold"
                        :class="{ active: activeSection === 'Enregistrer les délégués' }"
                        @click="setActiveSection('Enregistrer les délégués'); show.setOption('Enregistrer les délégués')"
                        v-if="show.user == 'admin'">
                        <i class="pi pi-users" style="font-size: 18px; color: white;"></i>
                        <h4>Enregistrer les délégués</h4>
                    </div>
                    <div class="itemSection text-sm font-semibold"
                        :class="{ active: activeSection === 'Liste complète des électeurs' }"
                        @click="setActiveSection('Liste complète des électeurs'); show.setOption('Liste complète des électeurs')"
                        v-if="show.user == 'admin'">
                        <i class="pi pi-users" style="font-size: 18px; color: white;"></i>
                        <h4>Suivi des électeurs</h4>
                    </div>
                    <div class="itemSection text-sm font-semibold"
                        :class="{ active: activeSection === 'Président des bureaux' }"
                        @click="setActiveSection('Président des bureaux'); show.setOption('Président des bureaux')"
                        v-if="show.user == 'Opérateur de saisie'">
                        <i class="pi pi-users" style="font-size: 18px; color: white;"></i>
                        <h4>Président des bureaux</h4>
                    </div>
                    <div class="itemSection text-sm font-semibold"
                        :class="{ active: activeSection === 'Liste totale des candidats' }"
                        @click="setActiveSection('Liste totale des candidats'); show.setOption('Liste totale des candidats')"
                        v-if="show.user == 'admin'">
                        <i class="pi pi-user" style="font-size: 18px; color: white;"></i>
                        <h4>Gérer les candidats</h4>
                    </div>
                    <!-- <div class="itemSection text-sm font-semibold"
                        :class="{ active: activeSection === 'Liste totale des candidats' }"
                        @click="setActiveSection('Liste totale des candidats'); show.setOption('Liste totale des candidats')"
                        v-if="show.user == 'Opérateur de saisie'">
                        <i class="pi pi-user" style="font-size: 18px; color: white;"></i>
                        <h4>Gérer les candidats</h4>
                    </div> -->
                    <div class="itemSection text-sm font-semibold"
                        :class="{ active: activeSection === 'Enregistrer les délégués' }"
                        @click="setActiveSection('Enregistrer les délégués'); show.setOption('Enregistrer les délégués')"
                        v-if="show.user == 'Opérateur de saisie'">
                        <i class="pi pi-users" style="font-size: 18px; color: white;"></i>
                        <h4>Enregistrer les délégués</h4>
                    </div>
                    <div class="itemSection text-sm font-semibold"
                        :class="{ active: activeSection === 'Saisir les électeurs' }"
                        @click="show.setOption('Saisir les électeurs'); setActiveSection('Saisir les électeurs');"
                        v-if="show.user == 'Opérateur de saisie'">
                        <i class="pi pi-users" style="font-size: 18px; color: white;"></i>
                        <h4>Saisir les électeurs</h4>
                    </div>
                   
                    <div class="itemSection text-sm font-semibold"
                        :class="{ active: activeSection === 'Délégués de vote' }"
                        @click="setActiveSection('Délégués de vote'); show.setOption('Contrôle des électeurs')"
                        v-if="show.user === 'Contrôleur'">
                        <i class="pi pi-users" style="font-size: 18px; color: white;"></i>
                        <h4>Electeurs</h4>
                    </div>
                    <div class="itemSection text-sm font-semibold" :class="{ active: activeSection === 'Candidats' }"
                        @click="setActiveSection('Candidats'); show.setOption('Contrôle des électeurs')"
                        v-if="show.user === 'Contrôleur'">
                        <i class="pi pi-users" style="font-size: 18px; color: white;"></i>
                        <h4>Candidats</h4>
                    </div>
                    <!-- <div class="itemSection text-sm font-semibold" :class="{ active: activeSection === 'Electeurs' }"
                        @click="setActiveSection('Electeurs'); show.setOption('Contrôle des électeurs')"
                        v-if="show.user === 'Contrôleur'">
                        <i class="pi pi-users" style="font-size: 18px; color: white;"></i>
                        <h4>Electeurs</h4>
                    </div> -->
                    <div class="option text-sm font-semibold" style="cursor: pointer; transition: transform 0.3s ease;"
                        @click="show.showModalLogout = !show.showModalLogout">
                        <h5 class="item ml-[50px]" style="cursor: pointer; transition: transform 0.3s ease;">Déconnexion
                        </h5>
                        <i class="pi pi-sign-out mr-[50px]"
                            style="font-size: 14px; color: white; cursor: pointer; transition: transform 0.3s ease;"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useShow } from "@/stores/show";
const show = useShow();

import { ref, onMounted } from 'vue';

onMounted(() => {
    show.user = JSON.parse(localStorage.getItem('usersRole'));
});

const activeSection = ref(null);

function setActiveSection(section) {
    activeSection.value = section;
    console.log('mandea');

}
</script>

<style scoped>
.sideBar {
    width: 20%;
    background-color: #434955;
    padding: 0px 20px 20px 20px;
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
}

.container {
    width: 100%;
    height: 65vh;
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
    padding: 10px;
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

.itemSection.active {
    background-color: rgb(116, 116, 244);
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
    color: white;
    font-size: 16px;
    margin: 0;
    padding-left: 1px;
    position: relative;
    white-space: nowrap;
    justify-content: flex-start;
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
}
</style>
