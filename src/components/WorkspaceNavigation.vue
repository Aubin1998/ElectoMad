<template>

    <div class="navBar">
        <div class="link">
            <h3 class="liking" @click="show.showacceuilFunc">Acceuil</h3>
            <h3 class="liking">Utilisateur</h3>
            <h3 class="liking">Paramètre</h3>
        </div>

        <div class="selected-year">
            <span class="annee">{{ anneeElectorale?.anneeElectoraleChoisi?.annee }}</span> <span class="description">{{
                anneeElectorale?.anneeElectoraleChoisi?.descriptionAnnee }}</span>
        </div>

        <div class="profil">
            <div class="notif">
                <div class="notification show">
                    <i class="pi pi-bell " style="font-size: 18px; color: white;"></i>
                    <h4 class="text">Notification</h4>
                </div>
                <div class="Mail show">
                    <i class="pi pi-envelope" style="font-size: 18px; color: white;"></i>
                    <h4 class="text">Mail</h4>
                </div>
            </div>

            <div class="photo" @click="show.showDescFunc()">
                <img src="/profil.png" alt="Photo de profil" class="photo-profile">
            </div>
            <div class="showProfil" v-if="show.showDesc">
                <div class="sectionItem">
                    <div class="closeForm" @click="show.showDesc = !show.showDesc">
                        <i class="pi pi-times" style="font-size: 18px; color: #2d4051"></i>
                    </div>
                    <h4 class="textSection">Compte</h4>
                </div>

                <div class="container">
                    <div class="imageProfil">
                        <img src="/profil.png" alt="Photo de profil"
                            style="width: 50px; height: 50px; border-radius: 100%;">
                    </div>
                    <div class="info">
                        <h4>{{ utilisateur.user.username }}</h4>
                        <h5>{{ utilisateur.user.email }}</h5>
                    </div>
                </div>
                <div class="items">

                    <div class="option">
                        <h5 class="item" @click="show.showModalCompteFunc">Gérer le compte</h5>
                        <i class="pi pi-user-edit" style="font-size: 16px; color: white;"></i>
                    </div>

                    <div class="option">
                        <h5 class="item" @click="show.showModalLogout = !show.showModalLogout">Déconnexion</h5>
                        <i class="pi pi-sign-out" style="font-size: 14px; color: white;"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<script setup>
import "primeicons/primeicons.css"
import { ref } from "vue";


import { useShow } from "@/stores/show";
import { useUtilisateur } from "@/stores/utilisateur";
import { useAnneeElectorale } from "@/stores/anneeElectorale";
const show = useShow(); //call Show in show.js
const utilisateur = useUtilisateur(); //call Show in show.js
const anneeElectorale = useAnneeElectorale();
utilisateur.user = JSON.parse(localStorage.getItem("user"))
</script>

<style scoped>
.navBar {
    height: 10vh;
    background-color: #434955;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.link {
    width: 60%;
    display: flex;
    margin: 20px;
}

.liking {
    padding: 0px 10px;
    color: #d4d2d2;
    font-weight: 500;

    display: inline-block;
    transition: transform 0.2s ease-in-out;
}



.liking:hover {
    background-color: #3a4f63;
    border-radius: 8px;
    transform: translateX(2px);
    /* Déplace l'élément de 10 pixels vers la droite au survol */
}

.profil {

    width: 20%;
    text-align: right;
    display: flex;
    justify-content: space-between;
}

.photo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-align: center;
    margin-right: 10px;
}

.showProfil {
    position: absolute;
    background-color: #545C6B;
    color: rgb(221, 214, 214);
    width: 20%;
    top: 70px;
    right: 12px;
    border-radius: 5px;
    text-align: left;

}

.sectionItem {
    background-color: #4e525b;
    border-radius: 5px 5px 0px 0px;
    padding: 5px 20px;

}

.closeForm {
    background-color: rgb(232, 226, 226);
    width: 17px;
    height: 17px;
    border-radius: 100%;
    position: absolute;
    right: 8px;
    /* Ajusté pour être à droite */
    top: 6px;
    /* Ajusté pour être en haut */
    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
    /* Ajoute un curseur pointeur pour indiquer qu'il est cliquable */
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.closeForm:hover {
    background-color: rgb(163, 87, 87);
    /* Change la couleur d'arrière-plan au survol */
    transform: scale(1.1);
    /* Agrandit légèrement l'élément au survol */
}

.textSection {
    font-weight: 700;
}

.container {
    padding: 5px 5px;
    display: flex;
    overflow: hidden;
    justify-content: space-around;
}

.imageProfil {
    width: 50px;
    height: 50px;
    border-radius: 100%;
}

.info {
    width: 70%;
    overflow: hidden;
}

.item {
    color: #fff;
    padding: 4px 10px;
    font-weight: 600;
}

.item:hover {
    background-color: #97999e;
}

.option {
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 0px 10px;
    margin: 5px 0px;
}

.option:hover {
    background-color: #97999e;
}

.notif {

    width: 70%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.text {
    color: #fff;
    position: absolute;
    display: none;
    padding: 2px 5px;
    border-radius: 2px;
    background-color: rgb(158, 157, 157);
}

.show:hover .text {

    display: block;
}

.pi {
    transition: transform 0.2s ease-in-out;
}

.pi:hover {
    transform: scale(1.2);
    /* Agrandit l'icône de 20% au survol */
}

.selected-year {
    display: flex;
    align-items: center;
    color: #d4d2d2;
}

.selected-year .annee {
    font-weight: bold;
    font-size: 18px;
    margin-right: 10px;
}

.photo-profile {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.photo-profile:hover {
    transform: scale(1.2);
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-15px);
    }
}

.photo-profile.active {
    animation: bounce 1s infinite;
}
</style>