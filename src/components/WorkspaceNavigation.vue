<template>

    <div class="navBar">
        <div class="link ">
            <h3 class="liking" @click="show.showacceuilFunc">Accueil</h3>

            <h3 class="liking" @click="show.setOption('Liste des utilisateurs')" v-if="show.user == 'admin'">
                Utilisateurs</h3>

        </div>


        <div class=" w-[30%] h-10 flex justify-around items-center  ">
            <h1 class="text-xl font-bold"> {{ utilisateur.controlleurAnneeElectorale.annee }}</h1>
            <h1 class="text-xl font-bold"> {{ utilisateur.controlleurAnneeElectorale.descriptionAnnee }}</h1>
        </div>



        <div class="selected-year w-[40%]  ">
            <span class="annee">{{ anneeElectorale?.anneeElectoraleChoisi?.annee }}</span> <span class="description">{{
                anneeElectorale?.anneeElectoraleChoisi?.descriptionAnnee }}</span>
        </div>

        <div class="profil ">
            <div class="notif">

            </div>
            <div class="profile-container">
                <span class="admin-title">{{ utilisateurrole }}</span>
                <div class="photo flex justify-center items-center cursor-pointer" @click="show.showDescFunc()">
                    <template v-if="!utilisateur.user.file?.titre">
                        <img src="/profileVoid.jpg" alt="Photo de profil" class="w-10 h-10 object-cover rounded-full" />

                    </template>
                    <template v-else>
                        <img :src="utilisateur.user.file?.titre" alt="Photo de profil"
                            class="w-10 h-10 object-cover rounded-full" />
                    </template>
                </div>
            </div>





            <div class="showProfil  " v-if="show.showDesc">
                <div class="sectionItem ">
                    <div class="closeForm" @click="show.showDesc = !show.showDesc">
                        <i class="pi pi-times" style="font-size: 18px; color: #2d4051"></i>
                    </div>
                    <h4 class="textSection">Compte</h4>
                </div>

                <div class="container">
                    <div class="imageProfil">


                        <template v-if="!utilisateur.user.file?.titre">

                            <img src="/profileVoid.jpg" class="size-full object-cover rounded-full cursor-pointer"
                                alt="Photo de profil" @click="show.showModalCompteFunc">
                        </template>
                        <template v-else>
                            <img :src="utilisateur.user.file?.titre" alt="Photo de profil"
                                class="size-full object-cover rounded-full cursor-pointer"
                                @click="show.showModalCompteFunc">
                        </template>



















                    </div>
                    <div class="info">
                        <h4>{{ utilisateur.user.username }}</h4>
                        <h5>{{ utilisateur.user.email }}</h5>
                    </div>
                </div>
                <div class="items">

                    <div class="option" style="cursor: pointer;
    transition: transform 0.3s ease;" @click="show.showModalCompteFunc">
                        <h5 class="item " style="cursor: pointer;
    transition: transform 0.3s ease;">Gérer mon compte</h5>
                        <i class="pi pi-user-edit" style="font-size: 16px; color: white; cursor: pointer;
    transition: transform 0.3s ease;"></i>
                    </div>

                    <div class="option" style="cursor: pointer;
    transition: transform 0.3s ease;" @click="show.showModalLogout = !show.showModalLogout">
                        <h5 class="item" style="cursor: pointer;
    transition: transform 0.3s ease;">Déconnexion</h5>
                        <i class="pi pi-sign-out" style="font-size: 14px; color: white; cursor: pointer;
    transition: transform 0.3s ease;"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<script setup>
import "primeicons/primeicons.css"
import { onMounted, ref } from "vue";


import { useShow } from "@/stores/show";
import { useUtilisateur } from "@/stores/utilisateur";
import { useAnneeElectorale } from "@/stores/anneeElectorale";
const show = useShow(); //call Show in show.js
const utilisateur = useUtilisateur(); //call Show in show.js


const anneeElectorale = useAnneeElectorale();
utilisateur.user = JSON.parse(localStorage.getItem("user"));
const utilisateurrole = ref()
import Datepicker from "vue3-datepicker";
onMounted(() => {
    anneeElectorale.anneeElectoraleChoisi = JSON.parse(localStorage.getItem('anneeSelectionne'))
    if (show.user == 'admin') {
        show.utilisateurrole = 'Administrateur'

    } else {
        show.utilisateurrole = show.user

    }


})


</script>

<style scoped>
.navBar {
    height: 8vh;
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
    z-index: 99;

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
    margin-right: 70px;
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

.admin-title {
    position: relative;
    left: -20px;
    /* Ajustez cette valeur selon vos besoins */
    font-size: 16px;
    /* Ajustez la taille de la police selon vos besoins */
    font-weight: bold;
    /* Pour rendre le texte en gras */
    white-space: nowrap;
    /* Empêche le texte de se mettre à la ligne */
}


.profile-container {
    display: flex;
    align-items: center;
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