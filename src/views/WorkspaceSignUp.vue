<template>
  <div class="login">

    <div class="container">
      <div class="formulaire1">
        <div class="contain">
          <h3 class="bienvenu">Se connecter</h3>

          <h5>
            Connectez-vous
          </h5>
          <div class="btnInscrit" @click="show.showLoginFunc">
            <h3>Se connecter</h3>
          </div>
        </div>
      </div>
      <div class="formulaire">
        <h3 class="bienvenu"> Inscription</h3>
        <h4 class="subtitle">Entrez votre information</h4>
        <div class="inputForm">
          <div class="itemContainer">
            <input type="text" placeholder="Nom" class="input" v-model="auth.name" />
          </div>
          <div class="itemContainer">
            <input type="email" placeholder=" Email" class="input" v-model="auth.email" />
          </div>
          <div class="itemContainer">
            <input type="password" placeholder=" Mot de passe" class="input" v-model="auth.mdp" />
          </div>

        </div>
        <div class="btnlogin" @click="connecte()">
          <h3>S'inscrire</h3>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useShow } from '@/stores/show';
import { useAuth } from "@/stores/auth";
const show = useShow()
const auth = useAuth()


function connecte() {

  auth.register()



}


</script>

<style scoped>
.login {
  background-color: #2A303D;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 60%;
  height: 60vh;
  display: flex;
  position: absolute;
  background-color: #2A303D;
  border-radius: 10px;
  /* box-shadow: 0px 0px 5px #a2b5cb; */
}

.logo {
  width: 50%;
  height: 100%;
  background-color: #e6f2ff;
  border-radius: 0px 20px 20px 0px;
  /* background-image: url("../../public/bg1.png");
  background-size: contain;
  background-repeat: no-repeat; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.formulaire {
  width: 50%;
  height: 100%;
  background-color: #212631;
  border-radius: 0px 10px 10px 0px;
  box-shadow: 0px 0px 5px #9d9ea041;
  padding: 5%;
  justify-content: center;
  align-items: center;
}

.formulaire1 {
  width: 50%;
  height: 100%;
  background-color: #6261CC;
  border-radius: 10px 0px 0px 10px;
  box-shadow: 0px 0px 5px #9d9ea041;
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contain {
  text-align: center;
  font-weight: 700;
  color: #fff;
}



.bienvenu {
  font-weight: 700;
  font-size: 30px;
}

.subtitle {
  font-weight: 700;

}

.inputForm {
  margin-top: 30px;
}

.itemContainer {
  width: 100%;
  margin: 10px 2px;
}

.input {
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #aaaac5;
  background-color: #212631;
  color: #fff;
}

.btnlogin {
  padding: 10px;
  margin: 30px auto;
  background-color: #6261CC;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  width: 80%;
  text-align: center;
}

.btnInscrit {
  padding: 10px;
  margin: 50px auto;
  background-color: #4E4EA3;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  width: 80%;
  text-align: center;
}

.btnlogin:hover,
.btnInscrit:hover {
  opacity: 0.7;
  transition: 0.5s;
}


.btnlogin h3,
.btnInscrit h3 {
  font-weight: 700;
}

.forgotPass {
  color: #e6f2ff;
  display: block;
  text-align: center;
  font-weight: 700;
  cursor: pointer;
}

label {
  display: block;
  font-weight: 600;
  width: 100%;
}
</style>