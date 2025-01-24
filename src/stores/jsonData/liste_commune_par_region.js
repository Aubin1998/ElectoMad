import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import axios from "axios";

export const useListeCommuneRegionStore = defineStore('useListeCommuneRegionStore', () => {
    const listeCommuneRegion = ref({});

    const get = async () => {
        try {
            const response = await axios.get('/liste_commune_par_region.json');
            listeCommuneRegion.value = response.data;
        } catch (error) {
            console.error('Failed to load listeCommuneRegions:', error);
        }
    };

    onMounted(() => {
        get();
    });

    return {
        listeCommuneRegion,
          get ,
        };
});
