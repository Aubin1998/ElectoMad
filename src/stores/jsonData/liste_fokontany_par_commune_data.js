import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import axios from "axios";

export const useListeFokontanyCommuneDataStore = defineStore('ListeFokontanyCommuneDataStore', () => {
    const listeFokontanyCommuneData = ref({});

    const get = async () => {
        try {
            const response = await axios.get('/liste_fokontany_par_commune_data.json');
            listeFokontanyCommuneData.value = response.data;
            console.log('ListeFokontanyCommuneDatas loaded:', response.data);
        } catch (error) {
            console.error('Failed to load listeFokontanyCommuneDatas:', error);
        }
    };

    onMounted(() => {
        get();
    });

    return {
        listeFokontanyCommuneData,
          get ,
        };
});
