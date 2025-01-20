import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import axios from "axios";

export const useListeRegionStore = defineStore('useListeRegionStore', () => {
    const listeRegion = ref({});

    const get = async () => {
        try {
            const response = await axios.get('/liste_region.json');
            listeRegion.value = response.data;
            console.log('ListeRegions loaded:', response.data);
        } catch (error) {
            console.error('Failed to load listeRegions:', error);
        }
    };

    onMounted(() => {
        get();
    });

    return {
        listeRegion,
          get ,
        };
});
