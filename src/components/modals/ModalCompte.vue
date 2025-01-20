<template>
  <Transition>
    <div class="showModal" v-if="show.showModalCompte">

      <div class="modal">
        <div class="closeForm" @click="show.showModalCompte = !show.showModalCompte">
          <i class="pi pi-times" style="font-size: 18px; color: #2d4051"></i>
        </div>
        <div class="contenaireModal">
          <section class=" py-8 antialiased dark:bg-gray-900 md:py-8 sectionscroll">
            <div class="mx-auto max-w-screen-lg px-4 2xl:px-0">
              <h2 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl ">{{ !isEditing ?
                "Moncompte" : "Modifier mon compte" }}
              </h2>

              <div class="py-4 md:py-8">
                <div class="mb-4 grid gap-4 sm:grid-cols-2 sm:gap-8 lg:gap-16">


                  <div class="space-y-2">
                    <div class="flex space-x-4">
                      <img class="h-16 w-16 rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                        alt="Helene avatar" />

                      <div>
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
                    <dl class="">
                      <dt class="font-semibold text-gray-900 dark:text-white">Email Address</dt>
                      <template v-if="!isEditing">

                        <div class="info">
                          <h2>{{ utilisateur.user.email }}</h2>
                        </div>
                      </template>
                      <template v-else>
                        <input type="text" placeholder="Votre pseudo" v-model="utilisateur.user.email" class="input" />
                      </template>
                    </dl>


                    <dl>
                      <dt class="font-semibold text-gray-900 dark:text-white">Nom et Prénom</dt>
                      <template v-if="!isEditing">
                        <div class="info">
                          <h2>{{ utilisateur.nomComplet }}</h2>
                        </div>

                      </template>
                      <template v-else>
                        <input type="text" placeholder="Votre pseudo"
                          :value="utilisateur.nomComplet === '' ? 'Aucun donnée' : utilisateur.nomComplet"
                          @input="utilisateur.nomComplet = $event.target.value" class="input" />
                      </template>
                    </dl>






                    <dl>
                      <dt class="font-semibold text-gray-900 dark:text-white">Date et lieu de naissance</dt>
                      <template v-if="!isEditing">
                        <div class="info">
                          <h2 style="margin-bottom: 10px; display: block;">{{ utilisateur.dateNaissance }}</h2>
                          <br>
                          <h2 style="margin-bottom: 10px;">{{ utilisateur.lieuNaissance }}</h2>

                        </div>

                      </template>
                      <template v-else>
                        <input type="text" placeholder="Votre pseudo" style="margin-bottom: 10px;"
                          :value="utilisateur.dateNaissance === '' ? 'Aucun donnée' : utilisateur.dateNaissance"
                          @input="utilisateur.dateNaissance = $event.target.value" class="input" />
                        <input type="text" placeholder="Votre pseudo"
                          :value="utilisateur.lieuNaissance === '' ? 'Aucun donnée' : utilisateur.lieuNaissance"
                          @input="utilisateur.lieuNaissance = $event.target.value" class="input" />
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
                        <input type="text" placeholder="Votre pseudo"
                          :value="utilisateur.sexe === '' ? 'Aucun donnée' : utilisateur.sexe"
                          @input="utilisateur.sexe = $event.target.value" class="input" />
                      </template>

                    </dl>
                  </div>


                  <div class="space-y-2">
                    <dl>
                      <dt class="font-semibold text-gray-900 dark:text-white">Téléphone</dt>

                      <template v-if="!isEditing">
                        <div class="info">
                          <h2>{{ utilisateur.telephone }}</h2>
                        </div>

                      </template>
                      <template v-else>
                        <input type="text" placeholder="Votre pseudo"
                          :value="utilisateur.telephone === '' ? 'Aucun donnée' : utilisateur.telephone"
                          @input="utilisateur.telephone = $event.target.value" class="input" />
                      </template>
                    </dl>


                    <dl>
                      <dt class="font-semibold text-gray-900 dark:text-white">Numero Carte d'identité</dt>

                      <template v-if="!isEditing">
                        <div class="info">
                          <h2>{{ utilisateur.numeroCIN }}</h2>
                        </div>

                      </template>
                      <template v-else>
                        <input type="text" placeholder="Votre pseudo"
                          :value="utilisateur.numeroCIN === '' ? 'Aucun donnée' : utilisateur.numeroCIN"
                          @input="utilisateur.numeroCIN = $event.target.value" class="input" />
                      </template>
                    </dl>


                    <dl>
                      <dt class="font-semibold text-gray-900 dark:text-white">Date de délivrance</dt>

                      <template v-if="!isEditing">
                        <div class="info">
                          <h2>{{ utilisateur.dateDelivreCIN }}</h2>
                        </div>

                      </template>
                      <template v-else>
                        <input type="text" placeholder="Votre pseudo"
                          :value="utilisateur.dateDelivreCIN === '' ? 'Aucun donnée' : utilisateur.dateDelivreCIN"
                          @input="utilisateur.dateDelivreCIN = $event.target.value" class="input" />
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
                        <input type="text" placeholder="Votre pseudo"
                          :value="utilisateur.lieuDelivreCIN === '' ? 'Aucun donnée' : utilisateur.lieuDelivreCIN"
                          @input="utilisateur.lieuDelivreCIN = $event.target.value" class="input" />
                      </template>

                    </dl>


                    <dl>
                      <dt class="font-semibold text-gray-900 dark:text-white">Adresse</dt>
                      <template v-if="!isEditing">
                        <div class="info">
                          <h2>{{ utilisateur.adresse }}</h2>
                        </div>

                      </template>
                      <template v-else>
                        <input type="text" placeholder="Votre pseudo"
                          :value="utilisateur.adresse === '' ? 'Aucun donnée' : utilisateur.adresse"
                          @input="utilisateur.adresse = $event.target.value" class="input" />
                      </template>
                    </dl>




                  </div>


                </div>


                <button @click="modifier()" type="button" data-modal-target="accountInformationModal2"
                  data-modal-toggle="accountInformationModal2"
                  class="inline-flex w-full items-center justify-center rounded-lg  px-5 py-2.5 text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-primary-300  "
                  :classs="!isEditing ? '' : 'enregistrer'">

                  <svg class="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z">
                    </path>
                  </svg>
                  {{ !isEditing ? "modifier" : "enregistrer" }}
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
import { useShow } from "@/stores/show";
import { useUtilisateur } from "@/stores/utilisateur";
import { useAuth } from "@/stores/auth";
import { ref, onMounted } from "vue";

const show = useShow();
const utilisateur = useUtilisateur();
const auth = useAuth();
const isEditing = ref(false)


function modifier() {
  isEditing.value = !isEditing.value

  console.log('userId', auth.userId);
  auth.utilisateurId = JSON.parse(localStorage.getItem("utilisateur"))[0].id
  const user = JSON.parse(localStorage.getItem("user"))

  auth.userId = user.id
  console.log('user', user);

  utilisateur.profession = 'administrateur'
  utilisateur.filiation = 'xxxxxx'
  utilisateur.carteElecteur = 'xxxxx',
    utilisateur.dateInscription = 'xxxxx'




  utilisateur.updateUserInfo(auth.utilisateurId)
}




















</script>

<style scoped>
.closeForm {
  background-color: rgb(231, 230, 230);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  position: absolute;
  right: 210px;
  top: 90px;
  align-items: center;
  display: flex;
  justify-content: center;
}

.showModal {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(216, 213, 213, 0.326);
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  background: rgba(43, 38, 38, 0.801);
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
  background-color: rgba(196, 190, 190, 0.452);
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: hidden;
  align-items: center;
  padding: 10vh;
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
  padding: 10px;


}

.tritreModal {
  color: #2c2b2b;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  padding-bottom: 10px;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 10px;
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