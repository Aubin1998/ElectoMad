<template>


    <div  v-if="!seeList" class="p-4" id="app">
      <div class="text-center mb-4">
        <h1 class="text-2xl font-bold">SELECTIONNEZ UN RESULTAT</h1>
      </div>
      <div class="flex flex-col md:flex-row items-center rounded-lg justify-between p-3 space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">

  
        <div class="relative space-y-4 forme">
          <!-- Dropdown 1: Année -->
          <div class="droper">
            <button @click="toggleDropdown('year')" class="inline-flex items-center justify-between text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-full" type="button">
              <span class="sr-only">Action button</span>
              {{ selectedAnnee ? selectedAnnee.annee  : 'Année et' }}
              {{ selectedAnnee ? selectedAnnee.descriptionAnnee  : 'type' }}
              <svg class="w-2.5 h-2.5 ml-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>
            <div v-if="isYearDropdownOpen" class="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-full dark:bg-gray-700 dark:divide-gray-600 mt-2">
              <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
                <li v-for="annee in anneeElectorale.allanneeData" :key="annee.id" @click="selectAnnee(annee)">
                 
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full">
                    {{ annee.annee }} {{ annee.descriptionAnnee }}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          
         
  
          <!-- Dropdown 3: Region -->
          <div class="droper" v-if="seeRegion">
            <button @click="toggleDropdown('region')" class="inline-flex items-center justify-between text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-full" type="button">
              <span class="sr-only">Action button</span>
              {{ selectedRegion ? selectedRegion : 'Region' }}
              <svg class="w-2.5 h-2.5 ml-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>
            <div v-if="isRegionDropdownOpen" class="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-full dark:bg-gray-700 dark:divide-gray-600 mt-2 droperlist">
              <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
                <li v-for="region in transformedData" :key="region.id" @click="selectRegion(region.region)">
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full">
                    {{ region.region }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          <!-- Dropdown 3: District -->
          <div class="droper" v-if="seeDistrict">
            <button @click="toggleDropdown('district')" class="inline-flex items-center justify-between text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-full" type="button">
              <span class="sr-only">Action button</span>
              {{ selectedDistrict ? selectedDistrict : 'District' }}
              <svg class="w-2.5 h-2.5 ml-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>
            <div v-if="isDistrictDropdownOpen" class="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-full dark:bg-gray-700 dark:divide-gray-600 mt-2 droperlist">
              <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
                <li v-for="district in districtData" :key="district.id" @click="selectDistrict(district)">
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full">
                    {{ district }}
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
  

      </div>
    </div> 


      <div  v-if="seeList" class="p-4" id="app">
      <div class="text-center mb-4">

        <div class="modalFooter" >
              <h3 class="btnAdd add" @click="seeList=!seeList">Sélectionner à nouveau</h3>
            </div>

        <h1 class="text-2xl font-bold">ELECTIONS {{selectedAnnee.descriptionAnnee}} {{selectedAnnee.annee}}</h1>
      </div>
      <div class="flex justify-between items-center mb-4">
        <div>
          <h2 class="text-xl font-bold">{{selectedRegion}} </h2>
        </div>
        <div>
          <h2 class="text-xl font-bold">{{selectedDistrict}} </h2>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-4 mb-4">
        <div class="col-span-1">
          <div class="bg-gray-800 p-2 rounded">
            <p>BV</p>
            <p class="font-bold">n 8</p>
          </div>
        </div>
        <div class="col-span-1">
          <div class="bg-gray-800 p-2 rounded">
            <p>Inscrits</p>
            <p class="font-bold">917</p>
          </div>
        </div>
        <div class="col-span-1">
          <div class="bg-gray-800 p-2 rounded">
            <p>Votants</p>
            <p class="font-bold">296</p>
          </div>
        </div>
        <div class="col-span-1">
          <div class="bg-gray-800 p-2 rounded">
            <p>Taux de participation</p>
            <p class="font-bold">32.27 %</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-4 scroll">
        <CandidateCard
          v-for="candidate in candidates"
          :key="candidate.id"
          :number="candidate.number"
          :name="candidate.name"
          :percentage="candidate.percentage"
          :votes="candidate.votes"
          :image="candidate.image"
        />
      </div>
    </div>   
   
  </template>
  
  <script setup>
  import { ref, onMounted, computed, watch } from 'vue';
  import { useShow } from "@/stores/show";
  import InputComposant from '@/components/InputComposant.vue';
  import { useAnneeElectorale } from "@/stores/anneeElectorale";
  import { useRole } from "@/stores/role";
  import { useListeCommuneDistrictStore } from "@/stores/jsonData/liste_commune_par_district";
  import { useListeFokontanyDistrictStore } from "@/stores/jsonData/liste_fokontany_par_district";
  import { useUtilisateur } from "@/stores/utilisateur";
  import { useDataRegion } from "@/service/dataLocation";
  import CandidateCard from '@/components/Statistiques/candidatCard/CandidateCard.vue';
  
  const utilisateur = useUtilisateur();
  const listeFokontanyDistrictStore = useListeFokontanyDistrictStore();
  const anneeElectorale = useAnneeElectorale();
  const listeCommuneDistrictStore = useListeCommuneDistrictStore();
  const role = useRole();
  const show = useShow();
  const { data, transform, transformedData, regionData } = useDataRegion();
  
  const candidates = [
    { id: 1, number: 1, name: 'NORMA RAZANAMASY', percentage: '0.70 %', votes: 2, image: '/candidat01.jpg' },
    { id: 2, number: 2, name: 'TAHINA RAZAFINJOELINA', percentage: '9.21 %', votes: 26, image: '/candidat02.jpg' },
    { id: 3, number: 3, name: 'JOSEPH MARTIN RANDRIAMAMPIONONA', percentage: '1.77 %', votes: 5, image: '/candidat03.jpg' },
    { id: 4, number: 4, name: 'TOTO RAVALOMANANA', percentage: '18.43 %', votes: 52, image: '/candidat04.jpg' },
    { id: 5, number: 5, name: 'ROINDEFO MONJA', percentage: '0.35 %', votes: 1, image: '/candidat05.jpg' },
    { id: 6, number: 6, name: 'GASCAR FENOJOSA MANDRINDRABIVONY', percentage: '6.38 %', votes: 18, image: '/candidat06.jpg' },
    { id: 7, number: 7, name: 'HARILALA RAMANANTSOA', percentage: '63.12 %', votes: 178, image: '/candidat07.jpg' },
  ];
  
  const isYearDropdownOpen = ref(false);
  const isElectionTypeDropdownOpen = ref(false);
  const isDistrictDropdownOpen = ref(false);
  const isRegionDropdownOpen = ref(false);
  const isDropdownOpenRole = ref(false);
  const isDropdownOpen = ref(false);
  const showDropdown = ref(false);
  const currentUserId = ref(null);
  const dropdownBottomPosition = ref('auto');
  const isInput = ref(false);
  const nomRole = ref('');
  const selectedAnnee = ref(null);
  const selectedDistrict = ref(null);
  const selectedRegion = ref(null);
  const listUtilisateur = ref([]);
  const seeRegion = ref(false);
  const seeDistrict = ref(false);
  const seeAjout = ref(false);
  const districtData = ref([]);
  
  const toggleDropdown = (dropdown, userId = null) => {
    isElectionTypeDropdownOpen.value = false;
    isDistrictDropdownOpen.value = false;
    isDropdownOpen.value = false;
    isRegionDropdownOpen.value = false;
    isYearDropdownOpen.value = false;
    showDropdown.value = false;
  
    switch (dropdown) {
      case 'year':
        isYearDropdownOpen.value = !isYearDropdownOpen.value;
        break;
      case 'electionType':
        isElectionTypeDropdownOpen.value = !isElectionTypeDropdownOpen.value;
        break;
      case 'district':
        isDistrictDropdownOpen.value = !isDistrictDropdownOpen.value;
        break;
      case 'users':
        isDropdownOpenRole.value = !isDropdownOpenRole.value;
        isDropdownOpen.value = !isDropdownOpen.value;
        break;
      case 'dots':
        showDropdown.value = !showDropdown.value;
        currentUserId.value = userId;
        break;
      case 'region':
        isRegionDropdownOpen.value = !isRegionDropdownOpen.value;
        break;
      default:
        console.warn(`Unknown dropdown type: ${dropdown}`);
    }
  
    adjustDropdownPosition();
  };
  
  const adjustDropdownPosition = () => {
    const dropdownButton = document.querySelector(`button[data-user-id="${currentUserId.value}"]`);
    if (dropdownButton) {
      const rect = dropdownButton.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      if (rect.bottom + 150 > viewportHeight) {
        dropdownBottomPosition.value = `${viewportHeight - rect.bottom}px`;
      } else {
        dropdownBottomPosition.value = 'auto';
      }
    }
  };
  
  const voir = () => {
    show.showModalOeil = !show.showModalOeil;
  };
  
  const modifier = () => {
    show.showModalModifier = !show.showModalModifier;
  };
  
  const supprimer = () => {
    const anneeElectoraleData = {};
    const item = {};
    anneeElectoraleData.supprimerData = item;
    show.showModalAnneSupprimer = true;
  };
  
  const ajoutRole = () => {
    isInput.value = !isInput.value;
  };
  
  const Confirmer = () => {
    isInput.value = !isInput.value;
    role.createRole(nomRole.value);
  };
  
  const selectAnnee = async (annee) => {
    seeRegion.value = true;
    selectedAnnee.value = annee;
    isYearDropdownOpen.value = false;
    utilisateur.anneeSelected = annee.id;
    await utilisateur.getElecteur(annee.id);
  
    for (let i = 0; i < utilisateur.allElecteurs?.length; i++) {
      const electeur = utilisateur.allElecteurs[i];
      if (utilisateur.allElecteurs[i].user.roles.length !== 0) {
        if (utilisateur.allElecteurs[i].user.roles[0].nomRole !== 'admin') {
          listUtilisateur.value.push(electeur);
        }
      }
    }
  };

  const seeList  = ref(false)

  
  const selectDistrict = (district) => {
    selectedDistrict.value = district;
    utilisateur.districtSelected = district;
    isDistrictDropdownOpen.value = false;
    seeAjout.value = true;
    seeList.value = true

  };
  
  const selectRegion = (region) => {
    selectedDistrict.value = '';
    seeDistrict.value = true;
    selectedRegion.value = region;
    utilisateur.regionSelected = region;
    isRegionDropdownOpen.value = false;
  
    let data = transformedData.value;
    for (let i = 0; i < data.length; i++) {
      if (data[i].region == region) {
        districtData.value = data[i].listeDistrict.map(e => e[0]);
      }
    }
  };
  
  const ajout = () => {
    show.showModalAjoutUtilisateur = !show.showModalAjoutUtilisateur;
    const password = generatePassword(12);
    role.mdpGenerate = password;
  };
  
  function generatePassword(length = 12) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }
  
  onMounted(async () => {
    await listeFokontanyDistrictStore.get();
    transform();
    anneeElectorale.getAnnees();
    listeCommuneDistrictStore.get;
  });
  
  const filteredData = computed(() => {
    let filtered = data.value;
    if (searchQuery.value) {
      filtered = data.value.filter(item => item.region.toLowerCase().includes(searchQuery.value.toLowerCase()));
    }
    return filtered.slice(1);
  });
  
  const dataJSON = computed(() => {
    return JSON.stringify(data.value, null, 2);
  });
  
  watch(dataJSON, (newDataJSON) => {
  }, { immediate: true });
  
  watch(data, (newData) => {
  }, { immediate: true });
  </script>
  
  <style scoped>
  .subtitle {
    width: 100%;
    font-weight: 700;
    padding-right: 60px;
    text-align: center;
    box-sizing: border-box;
  }
  
  .droper {
    width: 200px;
  }
  
  .forme {
    height: 50vh;
    width: 20%;
    /* display: flex; */
    justify-content: center;
    align-items: center;
    margin:  0 auto;
  }
  
  .droperlist {
    height: 200px;
    overflow-y: scroll;
  }
  
  .btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    background-color: rgb(74, 74, 241);
  }
  
  .orange {
    background-color: rgb(241, 169, 74);
  }
  
  .red {
    background-color: rgb(241, 74, 74);
  }
  
  .custom-padding {
    padding: 5px 10px;
    margin: 5px;
    width: 90%;
    margin: 5px auto;
  }
  
  .col-span-1 p {
    font-size: 14px;
  }
  
  .scroll {
    overflow-y: scroll;
    height: 330px;
    background-color: #ababb02a;
    padding: 10px;
    border-radius: 10px;
  }
  
  body {
    font-family: Arial, sans-serif;
    background-color: #0a0a23;
    color: white;
  }
  .modalFooter {
  background-color: rgb(34, 199, 83);
  width: 190px;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  margin: 0 auto;
  color: white;
  
}
.modalFooter:hover {
  background-color: rgb(47, 165, 82);
  width: 190px;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  margin: 0 auto;
  color: white;
  
}
  
  .candidate-card {
    background-color: #1a1a3d;
    border-radius: 8px;
    padding: 10px;
    text-align: center;
    position: relative;
    width: 80%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .candidate-card img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  
  .candidate-card .percentage {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .candidate-card .votes {
    font-size: 1rem;
  }
  
  .candidate-card .number {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: white;
    color: black;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
  </style>
  