<template>
  <div class="flex flex-col h-[86.5vh]">

    <main class="flex-1 flex flex-col items-center bg-white w-full justify-center foo">
      <h1 class="text-xl font-bold" style="color: #0A2753;">Identification des noms dans la liste électorale</h1>
      <p class="mt-2 font-semibold" style="color: #0A2753;">
        (*) Le nom, prénom et le numéro de la carte d'identité doivent être remplis
      </p>

      <!-- Recherche des électeurs -->
      <div class="mt-4 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
        <input style="color: #0A2753;" class="border border-gray-500 p-2 rounded" placeholder="Nom" type="text"
          v-model="nom" @input="formatNom" />
        <input style="color: #0A2753;" class="border border-gray-500 p-2 rounded" placeholder="Prénom" type="text"
          v-model="prenom" />
        <input style="color: #0A2753;" class="border border-gray-500 p-2 rounded" placeholder="CIN" type="text"
          v-model="cni" @input="formatCni" />
        <button class="bg-gray-500 text-white p-2 rounded hover:bg-gray-700 hover:shadow-lg transition-all duration-300"
          @click="verifyElectoralList">
          CHERCHER
        </button>
      </div>

      <!-- Lien vers le PDF -->
      <a @click="gotoPdf" class="mt-4 text-blue-600 flex w-50 rounded-lg" href="#">
        Consultation en ligne de la liste électorale provisoire 2025 en version PDF
        <!-- {{ listeElecteur.electeurFind.electeur }} -->
      </a>



      <div v-if="listeElecteur.electeurFind"
        class="w-full max-w-lg mx-auto bg-blue-100 mb-5 rounded-md shadow-sm overflow-hidden mt-8">
        <div class="card">
          <div class="card-header">


            <img :src="listeElecteur.electeurFind.file.titre" alt="Photo" class="photo duration-200 hover:scale-95"
              @click="show.showModalCIN = !show.showModalCIN" />
            <i class="pi pi-angle-down hover:scale-95" style="font-size: 18px; color: gray;"
              @click="show.showModalCIN = !show.showModalCIN">
            </i>

            <div class="admin-badge">Electeur</div>
            <div class="item-right">
              <label for="update_date">Dernière mise à jour</label>
              <input type="text" id="update_date" v-model="listeElecteur.electeurFind.electeur.updated_at" disabled />
            </div>
          </div>
          <div class="card-body">
            <!-- année et description -->
            <div class="year-description">
              <h2 class="text-lg font-semibold text-gray-800 mb-2">{{
                listeElecteur.electeurFind.electeur.annee_electorale.annee }}</h2>
              <h2 class="text-lg font-semibold text-gray-800 mb-2">{{
                listeElecteur.electeurFind.electeur.annee_electorale.descriptionAnnee }}</h2>
            </div>

            <div class="form-group">
              <label for="inscription_date">Date d'inscription</label>
              <input type="text" id="inscription_date" v-model="listeElecteur.electeurFind.electeur.dateInscription"
                disabled />
            </div>
            <div class="form-group">
              <label for="elector_card">Numéro de la carte</label>
              <input type="text" id="elector_card" v-model="listeElecteur.electeurFind.electeur.carteElecteur"
                disabled />
            </div>
            <div class="form-group">
              <label for="filiation">Filiation</label>
              <input type="text" id="filiation" v-model="listeElecteur.electeurFind.electeur.filiation" disabled />
            </div>
            <div class="form-group">
              <label for="region">Région</label>
              <input type="text" id="region" v-model="listeElecteur.electeurFind.electeur.region" disabled />
            </div>
            <div class="form-group">
              <label for="district">District</label>
              <input type="text" id="district" v-model="listeElecteur.electeurFind.electeur.district" disabled />
            </div>
            <div class="form-group">
              <label for="commune">Commune</label>
              <input type="text" id="commune" v-model="listeElecteur.electeurFind.electeur.commune" disabled />
            </div>
            <div class="form-group">
              <label for="fokontany">Fokontany</label>
              <input type="text" id="fokontany" v-model="listeElecteur.electeurFind.electeur.fokontany" disabled />
            </div>
            <div class="form-group">
              <label for="elector">Nom et prénom</label>
              <input type="text" id="elector" v-model="listeElecteur.electeurFind.electeur.nomComplet" disabled />
            </div>
            <div class="form-group">
              <label for="profession">Profession</label>
              <input type="text" id="profession" v-model="listeElecteur.electeurFind.electeur.profession" disabled />
            </div>
            <div class="form-group">
              <label for="address">Adresse</label>
              <input type="text" id="address" v-model="listeElecteur.electeurFind.electeur.adresse" disabled />
            </div>
            <div class="form-group">
              <label for="cin">CIN</label>
              <input type="text" id="cin" v-model="listeElecteur.electeurFind.electeur.numeroCIN" disabled />
            </div>
            <div class="form-group">
              <label for="issue_date">Date de délivrance</label>
              <input type="text" id="issue_date" v-model="listeElecteur.electeurFind.electeur.dateDelivreCIN"
                disabled />
            </div>
            <div class="form-group">
              <label for="birth_date">Date de naissance</label>
              <input type="text" id="birth_date" v-model="listeElecteur.electeurFind.electeur.dateNaissance" disabled />
            </div>
            <div class="form-group">
              <label for="birth_place">Lieu de naissance</label>
              <input type="text" id="birth_place" v-model="listeElecteur.electeurFind.electeur.lieuNaissance"
                disabled />
            </div>
            <div class="form-group">
              <label for="phone">Téléphone</label>
              <input type="text" id="phone" v-model="listeElecteur.electeurFind.electeur.telephone" disabled />
            </div>
            <div class="form-group">
              <label for="update_date">Email</label>
              <input type="text" id="update_date" v-model="listeElecteur.electeurFind.electeur.user.email" disabled />
            </div>
          </div>
        </div>
      </div>

    </main>
    <footer class="bg-blue-800 text-white text-center p-4 footer">
      Commission Électorale Nationale - Enceinte CUR - Lazaret nord Antsiranana (201)
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { uselisteElecteur } from "@/stores/listeElecteur";
import "primeicons/primeicons.css";
import { onMounted, ref } from "vue";
import { useShow } from "@/stores/show";
import { useUtilisateur } from "@/stores/utilisateur";
import { useAnneeElectorale } from "@/stores/anneeElectorale";

const show = useShow(); //call Show in show.js
const utilisateur = useUtilisateur(); //call Show in show.js
const anneeElectorale = useAnneeElectorale();
utilisateur.user = JSON.parse(localStorage.getItem("user"));
const utilisateurrole = ref();

const listeElecteur = uselisteElecteur();

function voir(item) {
  show.showModalVoirElecteur = !show.showModalVoirElecteur;
  listeElecteur.voirElecteurData = item;
}

onMounted(() => {
  anneeElectorale.anneeElectoraleChoisi = JSON.parse(localStorage.getItem('anneeSelectionne'));
  if (show.user == 'admin') {
    utilisateurrole.value = 'Administrateur';
  } else {
    utilisateurrole.value = show.user;
  }
});

// fgnanovagna test show modale
// function test1() {
//   console.log('test1');
//   console.log('showModalCIN', show.showModalCIN);

// }
const photoUrl = ref('/profil.png');
const year = ref('2003');
const description = ref('Présidentiel');
const inscriptionDate = ref('huuh');
const electorCard = ref('dfdfg');
const filiation = ref('juh');
const region = ref('hi');
const district = ref('io');
const commune = ref('ho');
const fokontany = ref('hiu');
const elector = ref('AUBIN');
const profession = ref('dsfgfds');
const cin = ref('301071074079');
const birthDate = ref('huio');
const status = ref('');
const updateDate = ref('2024-09-11T09:57:52.000000Z');

const email = ref('admin@gmail.com');
const fullName = ref('xxxxxxxx');
const birthPlace = ref('xxxxxxxx');
const sex = ref('xxxxxxxx');
const phone = ref('xxxxxxxx');
const idNumber = ref('xxxxxxxx');
const issueDate = ref('xxxxxxxx');
const issuePlace = ref('xxxxxxxx');
const address = ref('xxxxxxxx');
const router = useRouter();

const nom = ref('RAFANOMEZANTSOA');

const prenom = ref('Latsaka Aubin');

const cni = ref(' 201071074079 ');


// Function to format the name (uppercase and only letters)
const formatNom = () => {
  nom.value = nom.value.replace(/[^a-zA-Z]/g, '').toUpperCase();
};

// Function to format the CNI (only digits, up to 12 characters)
const formatCni = () => {
  cni.value = cni.value.replace(/\D/g, '').slice(0, 12);
};

// Function to trigger the search
const verifyElectoralList = () => {
  console.log('Nom:', nom.value);
  console.log('Prénom:', prenom.value);
  console.log('CNI:', cni.value);

  let nomComplet = nom.value + ' ' + prenom.value;
  listeElecteur.searchElecteur(cni.value, nomComplet); // Ensure this correctly updates 'electeurFind'
};

// Navigate to the PDF page
function gotoPdf() {
  console.log("Navigating to PDF");
  router.push("/elections/ListProvince");
}
</script>

<style scoped>
.foo {
  height: 900px;
  margin: 0 auto;
}

.footer {
  margin: 0 auto;
  width: 100%;
}

.card {
  background-color: #DBEAFE;
  color: #748091;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 900px;
  width: 100%;
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.card-header img {
  width: 60px;
  height: 60px;
  border-radius: 4px;
}

.card-header .admin-badge {
  color: #0e0f10;
  padding: 5px 10px;
  border-radius: 4px;
  margin-left: 20px;
}

.year-description {
  text-align: center;
  margin-bottom: 20px;
}

.year-description .year {
  font-weight: bold;
  margin-bottom: 5px;
}

.year-description .description {
  font-size: 0.875rem;
}

.card-body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.form-group {
  margin-bottom: 10px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #151616;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #f0f2f5;
  border-radius: 4px;
  background-color: white;
  color: white;
  font-size: 0.875rem;
}

.form-group input:disabled {
  background-color: #cfe3fc;
  color: #2b2b2c;
}
</style>