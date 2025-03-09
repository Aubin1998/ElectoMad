import {defineStore} from "pinia";
import {ref, onMounted} from "vue";
import {useShow} from "@/stores/show";
import {useAuth} from "@/stores/auth";
import {useUrl} from "@/stores/url";
import {useAnneeElectorale} from "@/stores/anneeElectorale";
import axios from "axios";

export const useApprentissage = defineStore('Apprentissage', () => {
	const show = useShow();
	const auth = useAuth();
	const anneeElectorale = useAnneeElectorale();
	const URL = useUrl().url;
	const apprentissageData = ref() // 4

	function getApprent() { // 1
		show.showSpinner = true;
		// facultatif ilay true sy false @spinner @farany ambany.


		// axios.get(`${URL}/api/apprentissage/${param}`,data ,{
		// headers: {
		// "Content-Type": "application/json"
		// }
		// })


		axios.get(`${URL}/api/apprentissage`, { // 2
			headers: {
				"Content-Type": "application/json"
			}

		}).then((response) => {
			console.log('response apprend', response.data); // 3
			apprentissageData.value = response.data // 5

		}).catch((err) => {
			console.log(err); // 6

		}). finally(() => {
			show.showSpinner = false; // facultatif
		});
	}


	return {apprentissageData, getApprent}; // 7 et //8
});
