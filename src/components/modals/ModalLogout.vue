<template>
  <Transition>
    <div class="showModal backdrop-blur" v-if="show.showModalLogout">

      <div class="modal">
        <div class="formModal">
        <div class="profilContainer">
          <div class="containerProfil">
            <div class="descriptionProfil">
              <h3>Voulez vous vraiment se déconnecté ?</h3>
            </div>
          </div>
          <div class="containerBtn">
            <button class="btn fermer" @click="show.showModalLogout = !show.showModalLogout">
              Annuler
            </button>
            <button
              class="btn enregistrer"
              @click="logoutFunc()"
            >
              Confirmé
            </button>
          </div>
        </div>
      </div>
      </div>


    </div>
  </Transition>
</template>

<script setup>
import { useShow } from "@/stores/show";
import { useUtilisateur } from "@/stores/utilisateur";
import { useAuth } from "@/stores/auth";
import { ref, onMounted } from "vue";

const show = useShow();
const utilisateur = useUtilisateur();
const auth = useAuth();
const isEditing = ref(false);

function logoutFunc() {
  auth.logout()
}

function modifier() {
  isEditing.value = !isEditing.value

  auth.utilisateurId = JSON.parse(localStorage.getItem("utilisateur"))[0].id
  const user = JSON.parse(localStorage.getItem("user"))

  auth.userId = user.id

  utilisateur.profession = 'administrateur'
  utilisateur.filiation = 'xxxxxx'
  utilisateur.carteElecteur = 'xxxxx',
    utilisateur.dateInscription = 'xxxxx'




  utilisateur.updateUserInfo(auth.utilisateurId)
}




















</script>

<style scoped>
.showModal {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(92, 90, 90, 0);
  z-index: 1005;
  width: 100%;
  height: 100%;
  display: flex;
  background: rgba(43, 38, 38, 0.045);
  justify-content: center;
  align-items: center;
}

.formModal {
  width: 100%;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
}

.containerProfil {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}


.descriptionProfil h3{
  display: block;
  font-weight: 600;
  width: 100%;
  font-size: 16px;
  padding: 10px;
  color: #070707cc;
}


.containerDesc {
  padding: 10px;
}

.itemContainer {
  width: 100%;
  margin: 10px 0px;
}
.itemContainer h4 {
  background-color: #e9f0f6;
  padding: 10px;
  border-radius: 5px;
}
.itemContainer h5 {
  display: block;
  font-weight: 600;
  width: 100%;
}

.containerBtn {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.btn {
  border: none;
  width: 35%;
  padding: 10px;
  border-radius: 4px;
  font-weight: 600;
}
.fermer {
  color: rgb(34, 199, 83);
  border: 2px solid rgb(34, 199, 83);
  font-weight: 600;

  
}
.enregistrer {
  color: #fff;
  background-color: rgb(34, 199, 83);

}
.profilContainer{
  width: 100%;
  background-color: white;
}
</style>