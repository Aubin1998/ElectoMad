<template>
  <Transition>
    <div class="showModal backdrop-blur p-2px" v-if="show.showModalCompte">

      <div class="modal  backdrop-blur p-2px">
        <div class="closeForm" @click="show.showModalCompte = !show.showModalCompte">
          <i class="pi pi-times" style="font-size: 18px; color: #2d4051"></i>
        </div>
        <div class="contenaireModal">
          <section class=" py-8 antialiased dark:bg-gray-900 md:py-8 sectionscroll">
            <div class="mx-auto max-w-screen-lg px-4 2xl:px-0">
              <h2 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl ">{{ !isEditing ?
                "Mon compte" : "Modifier mon compte" }}
              </h2>

              <div class="py-4 md:py-8  flex1  flex-col justify-center  ">
                <div class="mb-4 grid gap-4 sm:grid-cols-2 sm:gap-8 lg:gap-16  justify-items-center w-[100%]">


                  <div class="space-y-2">

                    <div class="flex1  h-[148px]">
                      <!-- <img class="h-16 w-16 rounded-lg object-cover" src="/profil.png" alt="Helene avatar" /> -->



                      <div class=" w-[50%] h-[90%] flex1 justify-center items-center  ">
                        <img v-if="utilisateur.user.file?.titre" :src="utilisateur.user.file?.titre" alt=""
                          class="size-full rounded-tl-xl rounded-tr-xl  object-cover" />

                        <div class="file-input-container" v-else>
                          <input type="file" @change="(event) => onFileChange(event, utilisateur.user.id)"
                            id="file-upload" class="file-input-label" />
                          <label for="file-upload"
                            class="flex1 items-center justify-center w-full h-full bg-[#130e0e] rounded-full cursor-pointer text-[24px]">
                            <i class="pi pi-camera cursor-pointer text-gray-500 pointer-events-auto"></i>
                          </label>
                        </div>



                        <div class="absolute w-[50px] h-[50px] t-0">
                          <input type="file" @change="(event) => onFileChange(event, utilisateur.user.id)"
                            id="file-upload" class="absolute inset-0 opacity-0 cursor-pointer" />
                          <label for="file-upload"
                            class="flex1 items-center justify-center w-full h-full  rounded-full cursor-pointer text-[24px]">
                            <i class="pi pi-camera cursor-pointer text-gray-500 pointer-events-auto"></i>
                          </label>
                        </div>
                      </div>





                      <div class="w-[50%]">
                        <span
                          class="inline-block rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                          Compte administrateur</span>


                        <template v-if="!isEditing">
                          <div class="info">
                            <h2>{{ utilisateur.user.username }}</h2>
                          </div>
                        </template>

                        <template v-else>
                          <input type="text" placeholder="Votre pseudo" v-model="utilisateur.user.username"
                            class="input" />
                        </template>
                      </div>





                    </div>



                    <div class="w-[100%] ">
                      <dl class="mb-3">
                        <dt class="font-semibold text-gray-900 dark:text-white pb-1">Adresse e-mail</dt>
                        <template v-if="!isEditing">

                          <div class="info ">
                            <h2>{{ utilisateur.user.email }}</h2>
                          </div>
                        </template>
                        <template v-else>
                          <input type=" text" placeholder="Votre pseudo" v-model="utilisateur.user.email"
                            class="input" />
                        </template>
                      </dl>


                      <dl class="mb-2 ">

                        <dt class="font-semibold text-gray-900 dark:text-white pb-1">Nom et prénom</dt>
                        <template v-if="!isEditing">
                          <div class="info">
                            <h2>{{ utilisateur.nomComplet }}</h2>
                          </div>

                        </template>
                        <template v-else>
                          <input type="text" placeholder="Votre pseudo" v-model="utilisateur.nomComplet"
                            class="input" />
                        </template>
                      </dl>
                      <dl class="mb-2 ">
                        <dt class="font-semibold text-gray-900 dark:text-white pb-1">Date de naissance</dt>
                        <template v-if="!isEditing">
                          <div class="info">
                            <h2 style="margin-bottom: 10px; display: block;">{{ utilisateur.dateNaissance }}</h2>


                          </div>

                        </template>
                        <template v-else>
                          <MyDateInput width="100%" label="" placeholder="Insérez une date de naissance"
                            v-model="dateOfBirth" format="dd-MM-yyyy" />


                        </template>
                      </dl>


                      <dl>
                        <dt class="font-semibold text-gray-900 dark:text-white pb-1">Lieu de naissance</dt>
                        <template v-if="!isEditing">
                          <div class="info">

                            <h2 style="margin-bottom: 10px;">{{ utilisateur.lieuNaissance }}</h2>

                          </div>

                        </template>
                        <template v-else>
                          <input type="text" placeholder="Votre pseudo" v-model="utilisateur.lieuNaissance"
                            class="input" />
                        </template>
                      </dl>

                    </div>



                  </div>


                  <div class="space-y-2 w-[80%]">
                    <dl>
                      <dt class="font-semibold text-gray-900 dark:text-white pb-1">Téléphone</dt>

                      <template v-if="!isEditing">
                        <div class="info">
                          <h2>{{ utilisateur.telephone }}</h2>
                        </div>



                      </template>
                      <template v-else>

                        <MyInput label="" placeholder="Ecrire votre numéro de téléphone"
                          v-model="utilisateur.telephone" />
                      </template>
                    </dl>


                    <dl>
                      <dt class="font-semibold text-gray-900 dark:text-white pb-1">Numéro de carte d'identité</dt>

                      <template v-if="!isEditing">
                        <div class="info">
                          <h2>{{ utilisateur.numeroCIN }}</h2>
                        </div>

                      </template>
                      <template v-else>

                        <MyInput label="" placeholder="Ecrire votre numéro de téléphone"
                          v-model="utilisateur.numeroCIN" />
                      </template>
                    </dl>


                    <dl>
                      <dt class="font-semibold text-gray-900 dark:text-white pb-1">Date de délivrance</dt>

                      <template v-if="!isEditing">
                        <div class="info">
                          <h2>{{ utilisateur.dateDelivreCIN }}</h2>
                        </div>

                      </template>
                      <template v-else>

                        <MyDateInput label="" placeholder="Insérez une date de naissance" v-model="dateOfDelivercy"
                          format="dd-MM-yyyy" />

                      </template>
                    </dl>



                    <dl>
                      <dt class="mb-1 font-semibold text-gray-900 dark:text-white">Lieu de délivrance</dt>

                      <template v-if="!isEditing">
                        <div class="info">
                          <h2>{{ utilisateur.lieuDelivreCIN }}</h2>
                        </div>
                      </template>

                      <template v-else>
                        <MyInput label="" placeholder="Ecrire votre numéro de téléphone"
                          v-model="utilisateur.lieuDelivreCIN" />
                      </template>
                    </dl>

                    <dl>
                      <dt class="mb-1 font-semibold text-gray-900 dark:text-white">Sexe</dt>

                      <template v-if="!isEditing">
                        <div class="info">
                          <h2>{{ utilisateur.sexe }}</h2>
                        </div>

                      </template>
                      <template v-else>
                        <SelectInput label="" defaultOption="" :options="[
                          { text: 'Homme', value: 'Homme' },
                          { text: 'Femme', value: 'Femme' }
                        ]" v-model="utilisateur.sexe" />
                      </template>

                    </dl>

                    <dl>
                      <dt class="font-semibold text-gray-900 dark:text-white pb-1">Adresse</dt>
                      <template v-if="!isEditing">
                        <div class="info">
                          <h2>{{ utilisateur.adresse }}</h2>
                        </div>

                      </template>
                      <template v-else>
                        <MyInput label="" placeholder="Ecrire votre numéro de téléphone"
                          v-model="utilisateur.adresse" />
                      </template>
                    </dl>




                  </div>


                </div>


                <button @click="modifier()" type="button" data-modal-target="accountInformationModal2"
                  data-modal-toggle="accountInformationModal2"
                  class="    inline-flex w-full items-center justify-center   rounded-lg  px-5 py-2.5 text-sm font-medium text-white hover:text-blue-500  focus:outline-none focus:ring-4 focus:ring-primary-300  "
                  :classs="!isEditing ? '' : 'enregistrer'">

                  <svg class="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z">
                    </path>
                  </svg>
                  {{ !isEditing ? "Modifier" : "Enregistrer" }}
                </button>



              </div>
            </div>
            <!-- Account Information Modal -->



          </section>

        </div>
      </div>


    </div>
  </Transition>
</template>

<script setup>
import axios from "axios";

import { useShow } from "@/stores/show";
import { useUtilisateur } from "@/stores/utilisateur";
import { useAuth } from "@/stores/auth";
import { ref, onMounted, computed } from "vue";
import MyDateInput from "../date/MyDateInput.vue";
import SelectInput from "../selects/SelectInput.vue";
import MyInput from "../InputComponets/MyInput.vue";

const show = useShow();
const utilisateur = useUtilisateur();
const auth = useAuth();
const isEditing = ref(false)



const filer = ref()
const onFileChange = async (event, userId) => {
  const file = event.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append('file', file);

  try {


    const response = await axios.post(
      `http://localhost:8000/api/user/${userId}/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );


    if (utilisateur.user.file?.titre) {
      utilisateur.user.file.titre = response.data.url;
    } else {

      filer.value = {
        id: 1,
        titre: response.data.url,
        file_name: response.data.url,
      }


      utilisateur.user.file = filer.value
    }






  } catch (error) {
    console.error('Erreur lors de l\'upload de l\'image :', error);
  }
};
const dateOfBirth = computed({
  get() {
    // Convert the string to a Date object
    return new Date(utilisateur.dateNaissance);
  },
  set(value) {
    // Update the original data property with the new Date value
    utilisateur.dateNaissance = value.toISOString().split('T')[0];
  }
});

const dateOfDelivercy = computed({
  get() {
    // Convert the string to a Date object
    return new Date(utilisateur.dateDelivreCIN);
  },
  set(value) {
    // Update the original data property with the new Date value
    utilisateur.dateDelivreCIN = value.toISOString().split('T')[0];
  }
});
function modifier() {


  if (isEditing.value) {
    auth.utilisateurId = JSON.parse(localStorage.getItem("user")).id

    auth.userId = auth.utilisateurId

    utilisateur.profession = 'administrateur'
    utilisateur.filiation = 'xxxxxx'
    utilisateur.carteElecteur = 'xxxxx',
      utilisateur.dateInscription = new Date()

    utilisateur.usernameAdmin = utilisateur.user.username
    utilisateur.emailAdmin = utilisateur.user.email




    utilisateur.updateUserInfo(auth.utilisateurId)

  }

  isEditing.value = !isEditing.value


}




















</script>

<style scoped>
.button {
  background-color: white;
}

.button:hover {
  background-color: white;
}

.closeForm {
  background-color: rgb(231, 230, 230);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  position: absolute;
  right: 190px;
  top: 50px;
  align-items: center;
  display: flex;
  justify-content: center;
}

.closeForm:hover {
  background-color: red;
  cursor: pointer;
}

.showModal {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(216, 213, 213, 0.052);
  z-index: 100;
  width: 100%;
  height: 100%;
  display: flex;
  background: rgba(43, 38, 38, 0.053) !important;
  justify-content: center;
  align-items: center;
}


.form {
  width: 100%;
  margin-bottom: 0px;
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

.scroll-container {
  max-height: 100%;
  /* Limite la hauteur */
  /* Ajoute un défilement vertical si nécessaire */
  padding: 10px;
  height: 50vh;
  /* Espacement interne */
}

.modal {
  width: 100%;
  height: 100vh;

  align-items: center;
  padding: 5vh;
}

.contenaireModalSupp {
  width: 25%;
  height: 25vh;
  background-color: white;
  border-radius: 10px;
  margin: 0 auto;
  padding: 10px;
}

.supp {
  color: #2c2b2b;
  padding: 0px 10px 20px 10px;
}

.suppNom {
  color: #2c2b2b;
  padding: 0px 10px;
  font-weight: bold;
  margin-bottom: 20px;
}

.contenaireModal {
  width: 80%;
  border-radius: 10px;
  margin: 0 auto;


}

.tritreModal {
  color: #2c2b2b;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  padding-bottom: 10px;
}

.flex1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.section {
  width: 45%;

}

.inputCard {
  padding: 4px 0;
}

.label {
  color: rgb(56, 55, 55);
  font-weight: bold;
  font-size: 15px;
  padding-left: 5px;

}

.contenu {
  color: #57565680;
  font-weight: bold;
  background-color: #302f2f13;
  padding: 10px 5px 5px 20px;
  border-radius: 5px;
  margin: 0;
}

.modalFooter {
  width: 20%;
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
  align-items: center;
  position: absolute;
  right: 320px;
  bottom: 80px;

}

.subtitle {
  width: 60%;
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

.info {
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  background-color: #8a8e9769;
  color: #fff;
}

.info h2 {
  margin-bottom: 2px !important;

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



.btnAdd {
  color: #fff;
  font-weight: 600;
  width: 50%;
  display: block;
  margin: 0 auto;
  text-align: center;
  background-color: rgb(34, 199, 83);
  padding: 5px 20px;
  border-radius: 5px;

}

.cancel {
  width: 100px !important;
  background-color: #fff !important;
  border: 2px solid rgb(34, 199, 83);
  color: rgb(34, 199, 83) !important;
}

.add {
  width: 100px !important;

}


.btnAdd h3:hover {
  background-color: rgb(101, 230, 140);
}

section {
  border-radius: 20px;
  padding: 20px;
}

.enregistrer {
  background-color: red !important;
}

.sectionscroll {
  height: 90vh;
}
</style>