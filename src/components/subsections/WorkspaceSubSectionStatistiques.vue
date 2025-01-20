<template>
    <div class="subsection">
<div class="subItem" @click="show.setOption('Nombre total inscrit des électeurs')">
    <h4>Vérification des électeurs</h4>
</div>
<div class="subItem" @click="show.setOption('Nombre de bureaux de vote actifs')">
    <h4>Nombre de bureaux de vote actifs</h4>
</div>
<div class="subItem" @click="show.setOption('Taux de participation global')">
    <h4>Taux de participation global</h4>
</div>
<div class="subItem" @click="show.setOption('Nombre total de votes enregistrés')">
    <h4>Nombre total de votes enregistrés</h4>
</div>

</div>
</template>

<script setup>
import { useShow } from "@/stores/show";
const show = useShow(); //call Show in show.js
</script>

<style scoped>
.subsection{
    background-color: #545c6b;
    width: 200px;
    position: absolute;
    left: 280px;
    top: 400px;
    padding: 10px;
    z-index: 5555!important;

}
.subItem{
border-bottom: 1px solid #fff;
    width: 100%;
    padding: 10px 20px 2px 10px;
    color: #fff;
    font-weight: 500;

}
.subItem:hover{
background-color: #baaeae65;
    

}
.subItem h4{
   
    font-weight: 500;

}
</style>