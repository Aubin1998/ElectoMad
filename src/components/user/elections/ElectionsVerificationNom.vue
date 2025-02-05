<template>
    <div class="bg-gray-100 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0 bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Vérification des noms</h2>
          <p class="mt-2 text-lg text-gray-600">
            Utilisez ce formulaire pour vérifier si votre nom est inscrit sur les listes électorales.
          </p>
        </div>
  
        <!-- Formulaire de vérification des noms -->
        <div class="mt-16">
          <form @submit.prevent="verifyName" class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
            <label for="name-search" class="mb-2 text-sm text-gray-900 sr-only dark:text-white">Recherche</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="name-search" v-model="searchQuery" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 focus:outline-none dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Entrez votre nom" required />
              <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Vérifier</button>
            </div>
          </form>
  
          <!-- Résultat de la vérification -->
          <div v-if="verificationResult" class="mt-10 max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div v-if="verificationResult.found" class="text-green-600">
              <p>Votre nom est inscrit sur les listes électorales.</p>
            </div>
            <div v-else class="text-red-600">
              <p>Votre nom n'est pas inscrit sur les listes électorales. Veuillez vérifier l'orthographe ou contacter les autorités électorales pour plus d'informations.</p>
            </div>
          </div>
        </div>
  
        <!-- Contenu supplémentaire -->
        <div class="mt-16 max-w-2xl mx-auto">
          <h3 class="text-2xl font-semibold text-gray-900">Informations supplémentaires</h3>
          <p class="mt-2 text-gray-600">
            Si vous avez des questions ou des préoccupations concernant votre inscription sur les listes électorales, veuillez contacter les autorités électorales locales.
          </p>
          <p class="mt-2 text-gray-600">
            Assurez-vous que votre nom est correctement orthographié et que vous êtes éligible pour voter.
          </p>
          <p class="mt-2 text-gray-600">
            Pour plus d'informations, visitez le site web officiel des élections à Madagascar.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Footer from "@/components/Footer.vue";
  
  const searchQuery = ref('');
  const verificationResult = ref(null);
  
  const verifyName = () => {
    // Simuler une vérification de nom
    const mockNames = ['Alice Smith', 'Bob Johnson', 'Charlie Brown'];
    const found = mockNames.includes(searchQuery.value);
    verificationResult.value = { found };
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #e0e0e0;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  
  .footer-left p {
    margin: 0;
    font-size: 14px;
    color: #333;
  }
  
  .footer-right {
    display: flex;
    align-items: center;
  }
  
  .scroll-top-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .scroll-top-button i {
    font-size: 16px;
  }
  
  .fond {
    background-color: white;
  }
  </style>
  