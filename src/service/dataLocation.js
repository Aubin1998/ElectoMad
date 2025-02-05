// dataRegion.js
import { computed, onMounted ,ref} from 'vue';
import { useListeFokontanyDistrictStore } from '@/stores/jsonData/liste_fokontany_par_district';

export function useDataRegion() {
  const listeFokontanyDistrictStore = useListeFokontanyDistrictStore();

  // Propriété calculée pour transformer les données
  const data = computed(() => {
    const rawData = listeFokontanyDistrictStore.listeFokontanyDistrict;
    
    if (rawData && typeof rawData === 'object') {
        const transformedData = Object.entries(rawData).map(([region, districts]) => {
            return {
                region,
                listeDistrict: Object.entries(districts)
            };
        });
        return transformedData;
    }
    return [];

});

// Transformation des données
const data1 = computed(() => {
    const rawData = listeFokontanyDistrictStore.listeFokontanyDistrict;
    if (rawData && typeof rawData === 'object') {
        const transformedData1 = Object.entries(rawData).map(([region, districts]) => {
            return {
                region,
                listeDistrict: Object.entries(districts).map(([district, communes]) => {
                    return {
                        district,
                        listeCommune: Object.entries(communes).map(([commune, fokontanyList]) => {
                            return {
                                commune,
                                listeFokontany: fokontanyList.map(fokontany => fokontany.fokontany),
                            };
                        }),
                    };
                }),
            };
        });
        return transformedData1;
    }
    return [];

});

const transformedData = ref([])
const regionData = ref([])
const districtData =  ref([])
function transform() {
    // Accéder à la valeur de la propriété calculée
    transformedData.value = data.value;
    regionData.value = data.value; // Assurez-vous que data1 est correctement défini
    districtData.value = data.value; // Assurez-vous que data1 est correctement défini


    let region = regionData.value;
    let district = districtData.value;

    let listeRegion = []; // Initialiser listeDistrict

    let listeDistrict = []; // Initialiser listeDistrict
    

    for (let i = 0; i < region.length; i++) {
        if (i!=0 && i!= 24) {
            listeRegion.push(region[i].region);
            listeDistrict.push(region[i].listeDistrict.map((district, index)=> district[0]));
        }
     
    }
    

    

    
  }


onMounted(async () => {
  await listeFokontanyDistrictStore.get(); // Assurez-vous que cette méthode est correctement définie dans votre store
  transform();
});



  return {
    data,
    transform,
    transformedData,
    regionData,
    districtData,

  };
}
