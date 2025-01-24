import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import axios from "axios";

export const useListeDistrictRegionStore = defineStore('ListeDistrictRegionStore', () => {
    const listeDistrictRegion = ref({});

    const get = async () => {
        try {
            const response = await axios.get('/liste_district_par_region.json');
            listeCommuneDistrict.value = response.data;
        } catch (error) {
            console.error('Failed to load listeDistrictRegions:', error);
        }
    };

    onMounted(() => {
        get();
    });

    return {
        listeDistrictRegion,
          get ,
        };
});
