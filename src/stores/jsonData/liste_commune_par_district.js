import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import axios from "axios";

export const useListeCommuneDistrictStore = defineStore('ListeCommuneDistrictStore', () => {
    const listeCommuneDistrict = ref({});

    const get = async () => {
        try {
            const response = await axios.get('/liste_commune_par_district.json');
            listeCommuneDistrict.value = response.data;
            console.log('ListeCommuneDistricts loaded:', response.data);
        } catch (error) {
            console.error('Failed to load listeCommuneDistricts:', error);
        }
    };

    onMounted(() => {
        get();
    });

    return {
         listeCommuneDistrict,
          get ,
        };
});
