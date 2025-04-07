<template>
  <div class="flex flex-col h-[86.5vh] items-center pt-3 w-full" @click="hideAllSections">
    <div class="text-gray-500 font-bold z-10 text-lg w-full bg-blue-100 px-6 flex justify-between items-center">
      <div class="w-[20%]">
        <h1 class="text-xl font-bold">
          {{ show.provinceSelectUser }}
        </h1>
      </div>
      <div class="w-[80%] flex items-center">
        <!-- First Input: Region -->
        <div class="w-[25%] relative mt-2 mx-2" @click.stop>
          <input v-model="searchQuery" @click="sectionVue = !sectionVue"
            class="w-full px-4 py-2 text-sm mb-2 rounded-sm focus:outline-none" type="text"
            placeholder="Recherche Région" />
          <div v-if="sectionVue"
            class="bg-gray-100 w-full px-4 py-2 h-[200px] absolute mt-1 rounded-sm shadow-sm overflow-auto">
            <h1 v-for="item in filteredRegions" :key="item"
              class="font-semibold text-sm hover:bg-blue-200 p-2 hover:rounded-sm" @click="selectRegion(item)">
              {{ item }}
            </h1>
          </div>
        </div>

        <!-- Second Input: District -->
        <div v-if="searchQuery" class="w-[25%] relative mt-2 mx-2" @click.stop>
          <input v-model="searchQueryDistrict" @click="sectionVueDistrict = !sectionVueDistrict"
            class="w-full px-4 py-2 text-sm mb-2 rounded-sm focus:outline-none" type="text"
            placeholder="Recherche District" />
          <div v-if="sectionVueDistrict"
            class="bg-gray-100 w-full px-4 py-2 h-[200px] absolute mt-1 rounded-sm shadow-sm overflow-auto">
            <h1 v-for="item in filteredDistrict" :key="item"
              class="font-semibold text-sm hover:bg-blue-200 p-2 hover:rounded-sm" @click="selectDistrict(item)">
              {{ item }}
            </h1>
          </div>
        </div>

        <!-- Third Input: Commune -->
        <div v-if="searchQueryDistrict" class="w-[25%] relative mt-2 mx-2" @click.stop>
          <input v-model="searchQueryCommune" @click="sectionVueCommune = !sectionVueCommune"
            class="w-full px-4 py-2 text-sm mb-2 rounded-sm focus:outline-none" type="text"
            placeholder="Recherche Commune" />
          <div v-if="sectionVueCommune"
            class="bg-gray-100 w-full px-4 py-2 h-[200px] absolute mt-1 rounded-sm shadow-sm overflow-auto">
            <h1 v-for="item in filteredCommune" :key="item"
              class="font-semibold text-sm hover:bg-blue-200 p-2 hover:rounded-sm" @click="selectCommune(item)">
              {{ item }}
            </h1>
          </div>
        </div>

        <!-- Fourth Input: Year -->
        <div v-if="searchQueryCommune" class="w-[25%] relative mt-2 mx-2" @click.stop>
          <input v-model="searchQueryYear" @click="sectionVueYear = !sectionVueYear"
            class="w-full px-4 py-2 text-sm mb-2 rounded-sm focus:outline-none" type="text"
            placeholder="Recherche Année" />
          <div v-if="sectionVueYear"
            class="bg-gray-100 w-full px-4 py-2 h-[200px] absolute mt-1 rounded-sm shadow-sm overflow-auto">
            <div v-for="item in filteredYear" :key="item.id"
              class="font-semibold text-sm hover:bg-blue-200 p-2 hover:rounded-sm cursor-pointer"
              @click="selectYear(`${item.annee} - ${item.descriptionAnnee}`, item)">
              {{ item.annee }} - {{ item.descriptionAnnee }}
            </div>
          </div>
        </div>

      </div>
    </div>


    <div v-if="viewLists"
      class="relative flex flex-col z-5 w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
      <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
        <div class="flex items-center justify-between gap-8 mb-8">
          <div>
            <h5
              class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Liste des électeurs </h5>
            <p class="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              Voir les informations sur tous les électeurs inscrits. </p>
          </div>
          <div class="flex flex-col gap-2 shrink-0 sm:flex-row">
            <!-- <button
              class="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button">
              view all
            </button>
            <button
              class="flex select-none items-center gap-3 rounded-lg bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button" @click="addMember">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                stroke-width="2" class="w-4 h-4">
                <path
                  d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z">
                </path>
              </svg>
              Imprimer
            </button> -->
          </div>
        </div>
        <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div class="block w-full overflow-hidden md:w-max">
           
          </div>
          <div class="w-full md:w-72">
            <div class="relative h-10 w-full min-w-[200px]">
              <div class="absolute grid w-5 h-5 top-2/4 right-3 -translate-y-2/4 place-items-center text-blue-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" aria-hidden="true" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                </svg>
              </div>
              <input
                class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" " v-model="searchQuery" />
              <label
                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Search
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="p-6 px-0 overflow-scroll">
        <table class="w-full mt-4 text-left table-auto min-w-max">
          <thead>
            <tr>
              <th
                class="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50"
                @click="sortBy('member')">
                <p
                  class="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Electeurs
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" aria-hidden="true" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                  </svg>
                </p>
              </th>
              <th
                class="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50"
                @click="sortBy('function')">
                <p
                  class="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Numéro de la CIN
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" aria-hidden="true" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                  </svg>
                </p>
              </th>
              <th
                class="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50"
                @click="sortBy('status')">
                <p
                  class="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Date de délivrance
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" aria-hidden="true" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                  </svg>
                </p>
              </th>
              <th
                class="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50"
                @click="sortBy('employed')">
                <p
                  class="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Sexe
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" aria-hidden="true" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                  </svg>
                </p>
              </th>
              <th
                class="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                <p
                  class="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="member in membersl" :key="member.id">
              <td class="p-4 border-b border-blue-gray-50">
                <div class="flex items-center gap-3">
                  <img :src="member.image" :alt="member.name"
                    class="relative inline-block h-9 w-9 !rounded-full object-cover object-center" />
                  <div class="flex flex-col">
                    <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {{ member.name }}
                    </p>
                    <p
                      class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                      {{ member.email }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <div class="flex flex-col">
                  <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {{ member.function }}
                  </p>
                  <p
                    class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                    {{ member.role }}
                  </p>
                </div>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <div class="w-max">
                  <div
                    class="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-md select-none whitespace-nowrap"
                    :class="{ 'bg-green-500/20 text-green-900': member.status === '22/01/1989', 'bg-blue-gray-500/20 text-blue-gray-900': member.status === '22/02/2000' }">
                    <span>{{ member.status }}</span>
                  </div>
                </div>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  {{ member.employed }}
                </p>
              </td>
              <!-- <td class="p-4 border-b border-blue-gray-50">
                <button
                  class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button" @click="editMember(member.id)">
                  <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                      class="w-4 h-4">
                      <path
                        d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z">
                      </path>
                    </svg>
                  </span>
                </button>
              </td> -->
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex items-center justify-between p-4 border-t border-blue-gray-50">
        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
          Page {{ currentPage }} of {{ totalPages }}
        </p>
        <div class="flex gap-2">
          <!-- <button
            class="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button" @click="previousPage" :disabled="currentPage === 1">
            Previous
          </button>
          <button
            class="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button" @click="nextPage" :disabled="currentPage === totalPages">
            Next
          </button> -->
        </div>
      </div>
    </div>


    <footer class="bg-blue-800 text-white text-center p-4 w-full fixed bottom-0">
      <h1>Commission Électorale Nationale – Palais Faritany – Lazaret Nord, Antsiranana (201)</h1>
    </footer>
  </div>
</template>
<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useShow } from '@/stores/show';
import { getDistricts, getCommunes } from '@/stores/region';
import { useAnneeElectorale } from '@/stores/anneeElectorale';
import { uselisteElecteur } from "@/stores/listeElecteur";

const membersl = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    name: 'John Doe',
    email: 'john.doe@example.com',
    function: 'Developer',
    role: 'Frontend Engineer',
    status: '22/01/1989',
    employed: 'Homme'
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    function: 'Designer',
    role: 'UI/UX Designer',
    status: '22/02/2000',
    employed: 'Femme'
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    function: 'Manager',
    role: 'Project Manager',
    status: '22/01/1989',
    employed: 'Homme'
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/150',
    name: 'Bob Brown',
    email: 'bob.brown@example.com',
    function: 'Tester',
    role: 'QA Engineer',
    status: '22/02/2000',
    employed: 'Homme'
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/150',
    name: 'Charlie Green',
    email: 'charlie.green@example.com',
    function: 'Analyst',
    role: 'Data Analyst',
    status: '22/01/1989',
    employed: 'Homme'
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/150',
    name: 'Eve White',
    email: 'eve.white@example.com',
    function: 'Support',
    role: 'Customer Support Specialist',
    status: '22/02/2000',
    employed: 'Femme'
  },
  {
    id: 7,
    image: 'https://via.placeholder.com/150',
    name: 'Frank Black',
    email: 'frank.black@example.com',
    function: 'HR',
    role: 'Human Resources Manager',
    status: '22/01/1989',
    employed: 'Homme'
  },
  {
    id: 8,
    image: 'https://via.placeholder.com/150',
    name: 'Grace Silver',
    email: 'grace.silver@example.com',
    function: 'Marketing',
    role: 'Marketing Specialist',
    status: '22/02/2000',
    employed: 'Homme'
  }
];

const listeElecteur = uselisteElecteur();

// Instances des stores
const anneeElectorale = useAnneeElectorale();
const show = useShow();

// États réactifs pour les sections et recherches
const sectionVue = ref(false);
const sectionVueDistrict = ref(false);
const sectionVueCommune = ref(false);
const sectionVueYear = ref(false);
const searchQuery = ref(''); // Région
const searchQueryDistrict = ref(''); // District
const searchQueryCommune = ref(''); // Commune
const searchQueryYear = ref(''); // Année

// Dropdown
const dropdownOpen = ref(false);
const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

// Gestion des membres
const activeTab = ref('all');
const currentPage = ref(1);
const members = ref([
  {
    id: 1,
    name: 'John Michael',
    email: 'john@creative-tim.com',
    function: 'Manager',
    role: 'Organization',
    status: '22/01/1989',
    employed: '23/04/18',
    image: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg'
  },
  {
    id: 2,
    name: 'Alexa Liras',
    email: 'alexa@creative-tim.com',
    function: 'Programator',
    role: 'Developer',
    status: '22/02/2000',
    employed: '23/04/18',
    image: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg'
  },
  {
    id: 3,
    name: 'Laurent Perrier',
    email: 'laurent@creative-tim.com',
    function: 'Executive',
    role: 'Projects',
    status: '22/02/2000',
    employed: '19/09/17',
    image: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg'
  },
  {
    id: 4,
    name: 'Michael Levi',
    email: 'michael@creative-tim.com',
    function: 'Programator',
    role: 'Developer',
    status: '22/01/1989',
    employed: '24/12/08',
    image: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg'
  },
  {
    id: 5,
    name: 'Richard Gran',
    email: 'richard@creative-tim.com',
    function: 'Manager',
    role: 'Executive',
    status: '22/02/2000',
    employed: '04/10/21',
    image: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg'
  }
]);

const filteredMembers = computed(() => {
  let filtered = [...members.value];
  if (activeTab.value === 'monitored') {
    filtered = filtered.filter(member => member.status === '22/01/1989');
  } else if (activeTab.value === 'unmonitored') {
    filtered = filtered.filter(member => member.status === '22/02/2000');
  }
  if (searchQuery.value) {
    filtered = filtered.filter(member =>
      member.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }
  return filtered;
});

const totalPages = computed(() => Math.ceil(filteredMembers.value.length / 5));

const viewAllMembers = () => {
};

const addMember = () => {
};

const editMember = (id) => {
};

const sortBy = (field) => {
  members.value.sort((a, b) => (a[field] > b[field] ? 1 : -1));
};

const previousPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

// Données des utilisateurs (exemple supplémentaire)
const users = ref([
  { id: 1, name: 'Neil Sims', email: 'neil.sims@flowbite.com', position: 'React Developer', status: '22/01/1989', image: '/docs/images/people/profile-picture-1.jpg' },
  { id: 2, name: 'Bonnie Green', email: 'bonnie@flowbite.com', position: 'Designer', status: '22/01/1989', image: '/docs/images/people/profile-picture-3.jpg' },
]);

// Liste des provinces et régions
const ListProvince = ref([
  { name: 'ANTANANARIVO', regions: ['ANALAMANGA', 'ITASY', 'BONGOLAVA', 'VAKINANKARATRA'] },
  { name: 'ANTSIRANANA', regions: ['DIANA', 'SAVA'] },
  { name: 'FIANARATSOA', regions: ['AMORON\'I MANIA', 'HAUTE MATSIATRA', 'VATOVAVY', 'FITOVINANY', 'ATSIMO-ATSINANANA', 'IHOROMBE'] },
  { name: 'MAHAJANGA', regions: ['BETSIBOKA', 'BOENY', 'MELAKY', 'SOFIA'] },
  { name: 'TOAMASINA', regions: ['ALAOTRA-MANGORO', 'ANALANJIROFO', 'ATSINANANA'] },
  { name: 'TOLIARA', regions: ['ANDROY', 'ANOSY', 'ATSIMO-ANDREFANA', 'MENABE'] }
]);

// Computed properties pour les filtres
const filteredRegions = computed(() => {
  const selectedProvince = ListProvince.value.find(province => province.name === show.provinceSelectUser);
  return selectedProvince
    ? selectedProvince.regions.filter(region =>
      region.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
    : [];
});

const filteredDistrict = computed(() => {
  const districts = getDistricts(searchQuery.value);
  return districts
    ? districts.filter(district =>
      district.toLowerCase().includes(searchQueryDistrict.value.toLowerCase())
    )
    : [];
});

const filteredCommune = computed(() => {
  const communes = getCommunes(searchQuery.value, searchQueryDistrict.value);
  return communes
    ? communes.filter(commune =>
      commune.toLowerCase().includes(searchQueryCommune.value.toLowerCase())
    )
    : [];
});

const filteredYear = computed(() => {
  const years = anneeElectorale.allanneeData;
  return years
    ? years.filter(year =>
      year.annee.toString().includes(searchQueryYear.value)
    )
    : [];
});

// Fonctions de sélection
const selectRegion = (item) => {
  searchQuery.value = item;
  sectionVue.value = false;
};

const selectDistrict = (item) => {
  searchQueryDistrict.value = item;
  sectionVueDistrict.value = false;
};

const selectCommune = (item) => {
  searchQueryCommune.value = item;
  sectionVueCommune.value = false;
};
const viewLists = ref(false)
const selectYear = async (item, data) => {
  if (searchQueryDistrict.value || searchQueryCommune.value || searchQueryYear.value) {
    viewLists.value = true;

    let params = {
      annee_electorale_id: data.id,
      region: searchQuery.value,
      district: searchQueryDistrict.value,
    };


    let dataList = await listeElecteur.getElecteurDistrictAll(params, data.id); // Utilisation correcte d'une fonction async

    let filterdata = dataList.filter((data) => data.commune === searchQueryCommune.value)


  }

  searchQueryYear.value = item;
  sectionVueYear.value = false;
};


function getElecteurDistrict() {


}

















const hideAllSections = () => {
  sectionVue.value = false;
  sectionVueDistrict.value = false;
  sectionVueCommune.value = false;
  sectionVueYear.value = false;
};

// Watchers pour réinitialiser les champs dépendants
watch(searchQuery, () => {
  searchQueryDistrict.value = '';
  searchQueryCommune.value = '';
  searchQueryYear.value = '';
});

watch(searchQueryDistrict, () => {
  searchQueryCommune.value = '';
  searchQueryYear.value = '';
});

watch(searchQueryCommune, () => {
  searchQueryYear.value = '';
});

// Chargement initial
onMounted(() => {
  anneeElectorale.getAnnees();
});

// Watcher pour provinceSelectUser (inutilisé dans le code original)
watch(() => show.provinceSelectUser, (newValue) => {
  const ListRegionFiltrer = ListProvince.value.find(province => province.name === newValue);
  if (ListRegionFiltrer) {
  }
});
</script>


<style scoped>
.footer {
  margin: 0 auto;
  width: 100%;
}
</style>
