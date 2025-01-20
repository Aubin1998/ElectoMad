<template>
    <div>
        <div class="titre">
            <i class="pi pi-arrow-left" style="font-size: 18px; color: white;" @click="show.showUtilisateurProvinceFunc()"></i>
            <h4 class="subtitle">
                Création utilisateur
            </h4>
        </div>

        <div class="formulaire">
            <div class="itemContainer">
                <input type="text" placeholder="Date d'élection" class="input" />
            </div>
            <div class="itemContainer">
                <input type="text" placeholder="Description" class="input" />
            </div>

            <div class="btnAdd" @click="show.showDashboardFunc">
                <h3>Créer</h3>
            </div>
        </div>
    </div>


    <div class="list">
        <div class="titre">
            <h4 class="subtitle">
                Liste des utilisateurs
            </h4>
            <div class="itemContainer">
                <input type="text" placeholder="Recherche ex:22/12/24" class="input" />
            </div>
            <h4 class="number">151</h4>
        </div>
        <div class="item">
            <h4>01</h4>
            <div class="subItem">
                <h4>Chef Fokontany</h4>
                <h5>Homme</h5>
            </div>
            <div class="btn">
                <div class="icon blue">
                    <i class="pi pi-eye" style="font-size: 18px; color: white;"></i>
                </div>
                <div class="icon orange">
                    <i class="pi pi-pencil" style="font-size: 18px; color: white;"></i>
                </div>
                <div class="icon red">
                    <i class="pi pi-trash" style="font-size: 18px; color: white;"></i>
                </div>
            </div>
        </div>

        <div class="item">
            <h4>02</h4>
            <div class="subItem">
                <h4>Vice Président</h4>
                <h5>Homme</h5>
            </div>
            <div class="btn">
                <div class="icon blue">
                    <i class="pi pi-eye" style="font-size: 18px; color: white;"></i>
                </div>
                <div class="icon orange">
                    <i class="pi pi-pencil" style="font-size: 18px; color: white;"></i>
                </div>
                <div class="icon red">
                    <i class="pi pi-trash" style="font-size: 18px; color: white;"></i>
                </div>
            </div>
        </div>

        <div class="item">
            <h4>03</h4>
            <div class="subItem">
                <h4>Sécrétaire</h4>
                <h5>Femme</h5>
            </div>
            <div class="btn">
                <div class="icon blue">
                    <i class="pi pi-eye" style="font-size: 18px; color: white;"></i>
                </div>
                <div class="icon orange">
                    <i class="pi pi-pencil" style="font-size: 18px; color: white;"></i>
                </div>
                <div class="icon red">
                    <i class="pi pi-trash" style="font-size: 18px; color: white;"></i>
                </div>
            </div>
        </div>

        <div class="item">
            <h4>04</h4>
            <div class="subItem">
                <h4>Acesseur1</h4>
                <h5>Femme</h5>
            </div>
            <div class="btn">
                <div class="icon blue">
                    <i class="pi pi-eye" style="font-size: 18px; color: white;"></i>
                </div>
                <div class="icon orange">
                    <i class="pi pi-pencil" style="font-size: 18px; color: white;"></i>
                </div>
                <div class="icon red">
                    <i class="pi pi-trash" style="font-size: 18px; color: white;"></i>
                </div>
            </div>
        </div>


        <div class="item">
            <h4>05</h4>
            <div class="subItem">
                <h4>Acesseur2</h4>
                <h5>Homme</h5>
            </div>
            <div class="btn">
                <div class="icon blue">
                    <i class="pi pi-eye" style="font-size: 18px; color: white;"></i>
                </div>
                <div class="icon orange">
                    <i class="pi pi-pencil" style="font-size: 18px; color: white;"></i>
                </div>
                <div class="icon red">
                    <i class="pi pi-trash" style="font-size: 18px; color: white;"></i>
                </div>
            </div>
        </div>

    </div>

</template>

<script setup>
import { useShow } from "@/stores/show";
const show = useShow(); //call Show in show.js
</script>

<style scoped>
.form {
    width: 100%;
    margin-bottom: 20px;
}

.form h4 {
    font-weight: 600;
    padding: 10px;
}

.list {
    /* background-color: green;*/
    width: 100%;
    height: 60vh;
}
.titre {
   display: flex;
   justify-content: space-around;
   padding: 5px;
   align-items: center;
}

.subtitle {
   width: 70%;
   padding-left:20px ;
   font-weight: 700;
}


.itemContainer {
    width: 30%;
    margin: 10px 2px;
}

.number {
    font-weight: 600;
    color: #d4d9e2;
}

.item {
    /*background-color: aqua;*/
    background-color: rgba(236, 247, 236, 0.089);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    margin-bottom: 5px;
    border-bottom: 2px solid rgba(231, 222, 222, 0.507);

}

.item h4 {
    font-weight: 600;

}

.item h5 {
    font-weight: 600;

}

.subItem {
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.btn {
    width: 25%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.icon {
    background-color: rgb(0, 2, 128);
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 100%;
}

.icon:hover {
    background-color: rgb(168, 169, 230);

}

.blue {
    background-color: rgb(74, 74, 241)
}

.orange {
    background-color: rgb(241, 169, 74)
}

.red {
    background-color: rgb(241, 74, 74)
}

.input {
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #aaaac5;
    background-color: #3c4c6d09;
    color: #fff;
}

input-placeholder {
    color: red;
}

.formulaire {
    display: flex;
    justify-content: space-around;
    background-color: rgba(213, 235, 235, 0.212);
    align-items: center;
}



.btnAdd h3 {
    color: #fff;
    font-weight: 600;

    background-color: rgb(34, 199, 83);
    padding: 5px 20px;
    border-radius: 5px;

}

.btnAdd h3:hover {
    background-color: rgb(101, 230, 140);
}
</style>