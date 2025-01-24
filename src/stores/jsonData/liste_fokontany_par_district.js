import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import axios from "axios";

export const useListeFokontanyDistrictStore = defineStore('ListeFokontanyDistrictStore', () => {
    const listeFokontanyDistrict = ref({});

    const get = async () => {
        try {
            const response = await axios.get('/liste_fokontany_par_district.json');
            listeFokontanyDistrict.value = response.data;
        } catch (error) {
            console.error('Failed to load listeFokontanyDistricts:', error);
        }
    };

    onMounted(() => {
        get();
    });

    return {
        listeFokontanyDistrict,
        get,
    };
});
