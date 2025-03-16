<template>
  <div class="flex flex-col h-[86.5vh]  items-center pt-3">
    <div class="text-gray-500 font-bold text-lg w-full px-6 flex">
      <h1 v-if="isRegion">
        {{ ListProvinceFiltrer[0]?.name.toUpperCase() }}
      </h1>
      <h1 v-if="isCommune">
        {{ ListProvinceFiltrer[0]?.name.toUpperCase() }} > {{ show.provinceSelectUser }}
      </h1>
      <h1 v-if="isDistrict">
        {{ ListProvinceFiltrer[0]?.name.toUpperCase() }} > {{ show.provinceSelectUser }} > {{ show.communeSelectUser }}
      </h1>
    </div>
    <div class="w-full px-20 h-[70vh] mt-2 border-t-2 flex items-center justify-center flex-wrap overflow-y-scroll">
      <CardItem v-for="item in filteredList" :key="item" :title="item" @click="handleClick(item)" />
    </div>











    <footer class="bg-blue-800 text-white text-center p-4 w-full fixed bottom-0">
      <h1>Commission Électorale Nationale – Enceinte CUR – Lazaret Nord, Antsiranana (201)</h1>
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { uselisteElecteur } from "@/stores/listeElecteur";
import { onMounted, ref, computed } from "vue";
import { useShow } from "@/stores/show";
import { useUtilisateur } from "@/stores/utilisateur";
import { useAnneeElectorale } from "@/stores/anneeElectorale";
import { getDistricts, getCommunes } from '@/stores/region';
import CardItem from './CardItem.vue';

const show = useShow();
const utilisateur = useUtilisateur();
const anneeElectorale = useAnneeElectorale();
utilisateur.user = JSON.parse(localStorage.getItem("user"));
const listeElecteur = uselisteElecteur();
const router = useRouter();

const ListProvince = [
  { name: "Antananarivo", regions: ["Analamanga", "Itasy", "Bongolava", "Vakinankaratra"] },
  { name: "Antsiranana", regions: ["Diana", "Sava"] },
  { name: "Fianarantsoa", regions: ["Amoron'i Mania", "Haute Matsiatra", "Vatovavy", "Fitovinany", "Atsimo-Atsinanana", "Ihorombe"] },
  { name: "Mahajanga", regions: ["Betsiboka", "Boeny", "Melaky", "Sofia"] },
  { name: "Toamasina", regions: ["Alaotra-Mangoro", "Analanjirofo", "Atsinanana"] },
  { name: "Toliara", regions: ["Androy", "Anosy", "Atsimo-Andrefana", "Menabe"] }
];

const ListProvinceFiltrer = ref([]);
const ListCommuneFiltrer = ref([]);
const ListDistrictFiltrer = ref([]);
const isRegion = ref(true);
const isCommune = ref(false);
const isDistrict = ref(false);

const filteredList = computed(() => {
  if (isRegion.value) return ListProvinceFiltrer.value[0]?.regions || [];
  if (isCommune.value) return ListCommuneFiltrer.value;
  if (isDistrict.value) return ListDistrictFiltrer.value;
  return [];
});

onMounted(() => {
  const selectedProvince = localStorage.getItem('selectedProvince');
  const selectedCommune = localStorage.getItem('selectedCommune');

  if (selectedProvince) {
    show.provinceSelectUser = selectedProvince;
    ListProvinceFiltrer.value = ListProvince.filter((province) => province.name === selectedProvince);
    isRegion.value = ListProvinceFiltrer.value.length > 0;

    if (selectedCommune) {
      goToCommune(selectedCommune);
    }
  } else {
    router.push("/elections/ListProvince/region");
  }
});

function handleClick(item) {
  if (isRegion.value) {
    goToRegion(item);
  } else if (isCommune.value) {
    goToCommuneFirst(item);
  } else if (isDistrict.value) {
    goToDistrict(item);
  }
}

function goToRegion(region) {
  isRegion.value = false;
  show.provinceSelectUser = region.toUpperCase();
  localStorage.setItem('selectedProvince', region.toUpperCase());
  ListCommuneFiltrer.value = getDistricts(region.toUpperCase());
  isCommune.value = true;
}

function goToCommuneFirst(commune) {
  show.communeSelectUser = commune.toUpperCase();
  goToCommune(commune);
}

function goToCommune(commune) {
  localStorage.setItem('selectedCommune', commune);
  ListDistrictFiltrer.value = getCommunes(show.provinceSelectUser, commune);
  isDistrict.value = true;
  isCommune.value = false;
}

function goToDistrict(district) {
  // Implement the logic for navigating to the district
}
</script>

<style scoped>
.footer {
  margin: 0 auto;
  width: 100%;
}
</style>
