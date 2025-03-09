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
	const learnData = ref()
	const postData = ref()
	const testData = ref()
	// function getlearn() { // 1
	// show.showSpinner = true;


	// axios.get(`${URL}/api/learning`, { // 2
	// headers: {
	// "Content-Type": "application/json"
	// }

	// }).then((response) => {
	// console.log('response learn', response.data);
	// learnData.value = response.data
	// }).catch((err) => {
	// console.log(err); // 6

	// }). finally(() => {
	// show.showSpinner = false; // facultatif
	// });
	// }
	function getlearn() { // 1
		show.showSpinner = true;


		axios.get(`${URL}/api/learning`, { // 2
			headers: {
				"Content-Type": "application/json"
			}

		}).then((response) => {
			console.log('response test fo', response.data);
			testData.value = response.data
		}).catch((err) => {
			console.log(err); // 6

		}). finally(() => {
			show.showSpinner = false; // facultatif
		});
	}

	function postlearn(dataPost) { // 1
		show.showSpinner = true;


		axios.post(`${URL}/api/learning`, dataPost, { // 2
			headers: {
				"Content-Type": "application/json"
			}

		}).then((response) => {
			console.log('response learn', response.data);
			postData.value = response.data
		}).catch((err) => {
			console.log(err); // 6

		}). finally(() => {
			show.showSpinner = false; // facultatif
		});
	}
	return {
		learnData,
		getlearn,
		postData,
		postlearn,
		testData
	}; // 7 et //8
});
