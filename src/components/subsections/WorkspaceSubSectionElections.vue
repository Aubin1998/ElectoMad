<template>
    <div class="subsection">
        <div class="closeForm" @click="show.showElection = !show.showElection">
            <i class="pi pi-times" style="font-size: 18px; color: #2d4051"></i>
        </div>
        <div class="subItem" @click="show.setOption('Année électorale')">
            <h4>Année électorale</h4>
        </div>
        <div class="subItem" @click="show.setOption('Genre élection')">
            <h4>Genre élection</h4>
        </div>
        <div class="subItem">
            <h4>AAAAAA</h4>
        </div>

    </div>
</template>

<script setup>

import { useShow } from "@/stores/show";
const show = useShow(); //call Show in show.js

</script>

<style scoped>
.subsection {
    background-color: #35383f;
    width: 200px;
    position: absolute;
    left: 280px;
    top: 120px;
    padding: 10px;
    z-index: 5555 !important;
    border-radius: 6px;
}

.closeForm {
    background-color: rgb(231, 230, 230);
    width: 15px;
    height: 15px;
    border-radius: 100%;
    position: absolute;
    right: 12px;
    /* Ajusté pour être à droite */
    top: 12px;
    /* Ajusté pour être en haut */
    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
    /* Ajoute un curseur pointeur pour indiquer qu'il est cliquable */
    transition: background-color 0.3s ease, transform 0.3s ease;
}
.closeForm:hover {
    background-color: rgb(163, 87, 87); /* Change la couleur d'arrière-plan au survol */
    transform: scale(1.1); /* Agrandit légèrement l'élément au survol */
}


.subItem {
    border-bottom: 1px solid #fff;
    width: 100%;
    padding: 10px 20px 2px 10px;
    color: #fff;
    font-weight: 500;

}

.subItem:hover {
    background-color: #baaeae65;
    border-radius: 6px;



}

.subItem h4 {

    font-weight: 500;

}
</style>