<template>
  <div class="login" v-if="show.showLogin">
    <button @click="goToAcceuil()" class="bg-[#6261CC] text-white absolute top-2 right-5 px-5 rounded py-2">
      Acceuil
      <i class="pi pi-arrow-right mr-[2px]"
        style="font-size: 14px; color: white; cursor: pointer; transition: transform 0.3s ease;"></i>
    </button>
    <div class="bg-gray-700 rounded-lg text-white py-20 px-10">
      <h3 class="bienvenu text-center">Se connecter</h3>
      <h4 class="subtitle text-center">Entrez vos informations</h4>
      <div class="inputForm">
        <div class="itemContainer relative">
          <input type="text" placeholder="Votre email" class="input !w-80 pl-10" v-model="auth.email" />
          <i class="pi pi-envelope absolute right-10  top-1/2 transform -translate-y-1/2"
            style="font-size: 16px; color: gray;"></i>
        </div>
        <div class="itemContainer relative">
          <input :type="showPassword ? 'text' : 'password'" placeholder="Votre Mot de passe"
            class="input !w-80 pl-10 pr-10" v-model="auth.mdp" />

          <i class="pi pi-eye absolute right-10 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-400"
            style="font-size: 16px; " @mousedown="showPassword = true" @mouseup="showPassword = false"
            @touchstart="showPassword = true" @touchend="showPassword = false"></i>
        </div>
      </div>
      <div class="btnlogin" @click="connecte()">
        <h3>Se connecter
          <i class="pi pi-sign-out mr-[2px]"
            style="font-size: 14px; color: white; cursor: pointer; transition: transform 0.3s ease;"></i>
        </h3>
      </div>
      <h5>
        <span @click="show.showSingUpFunc()" class="forgotPass">Cette page est réservée aux utilisateurs
          autorisés.</span>
      </h5>
      <p class="mt-2 text-xs text-gray-400 text-center">
        Vous n'avez pas de compte ?
        <b @click="goToAcceuil()" class="text-blue-500 cursor-pointer">Retour à l'accueil
          <i class="pi pi-arrow-right text-blue-500 mr-[2px]"
            style="font-size: 8px; cursor: pointer; transition: transform 0.3s ease;"></i>
        </b>
      </p>
    </div>
  </div>
</template>





<script setup>
import { ref } from 'vue';
import { useShow } from '@/stores/show';
import { useAuth } from '@/stores/auth';
import { useRouter } from 'vue-router';

const showPassword = ref(false);
const show = useShow();
const auth = useAuth();
const router = useRouter();

function connecte() {
  auth.login();
}

function goToAcceuil() {
  show.showUser = true;
  router.push('/');
  show.showDashboard = false;
  show.showLogin = false;
}
</script>

<style scoped>
.login {
  background-color: #2A303D;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/effect.png');

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
  border-radius: 10px 0px 0px 10px;
  box-shadow: 0px 0px 5px #9d9ea041;
  padding: 5%;
  justify-content: center;
  align-items: center;
}

.formulaire1 {
  width: 50%;
  height: 100%;
  background-color: #6261CC;
  border-radius: 0px 10px 10px 0px;
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
