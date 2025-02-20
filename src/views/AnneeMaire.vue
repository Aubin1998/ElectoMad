

<template>
  <div class="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
    <h1 class="text-2xl font-bold text-center text-gray-800"> Années électorales des députés</h1>

    <!-- Sélecteur d'année -->
    <div class="mt-4">
      <label for="yearSelect" class="block font-medium text-gray-700">Sélectionnez une année :</label>
      <select
        id="yearSelect"
        v-model="selectedYear"
        class="mt-2 p-2 border rounded w-full text-gray-800 border-gray-400"
      >
        <option v-for="year in electionYears" :key="year" :value="year">
          {{ year }}
        </option>
      </select>
    </div>

    <!-- Timeline des années électorales -->
    <div class="mt-6 border-l-4 border-blue-800 pl-4">
      <div
        v-for="year in electionYears"
        :key="year"
        class="mb-4 p-4 rounded text-gray-900"
        :class="selectedYear === year ? 'bg-blue-500 text-white' : 'bg-gray-100'"
      >
        <strong>{{ year }}</strong> - Élection législative
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Définition des années électorales
const startYear = 2000; // Année de début
const currentYear = new Date().getFullYear(); // Année actuelle
const interval = 5; // Intervalle des élections (ex : tous les 5 ans)

// Générer la liste des années électorales
const electionYears = computed(() => {
  let years = [];
  for (let year = startYear; year <= currentYear; year += interval) {
    years.push(year);
  }
  return years;
});

// Année sélectionnée par l'utilisateur
const selectedYear = ref(null);
</script>