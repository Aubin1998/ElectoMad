<template>
     <div class="subsection">
<div class="subItem" @click="show.setOption('Liste complète des électeurs')"> 
    <h4>Liste complète des électeurs</h4>
</div>
<div class="subItem" @click="show.setOption('Filtrage et recherche')">
    <h4>Filtrage et recherche</h4>
</div>
<div class="subItem" @click="show.setOption('Actions de gestion')">
    <h4>Actions de gestion</h4>
</div>
<div class="subItem" @click="show.setOption('Surveillance')">
    <h4>Surveillance</h4>
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
    top: 240px;
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