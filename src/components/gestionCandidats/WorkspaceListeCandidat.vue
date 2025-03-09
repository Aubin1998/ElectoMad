<template>
    <div class=" w-full h-full">
        <div class="flex justify-around items-center">


            <h4 class="font-bold">
                Liste des candidats
            </h4>
            <h4 class="number">{{ }}</h4>
            <div class="itemContainer"> <i class="pi pi-search icon1"></i>
                <input type="text" v-model="searchTerm" placeholder="Recherche nom candidat" class="input" />
                <h3 class="btnAdd add" @click="adds()">
                    <i class="pi pi-plus" style="font-size: 16px; color: white;left: 0;"></i>
                </h3>
            </div>
        </div>


        <div class="overflow-y-auto h-[500px] ">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg down">
                <table class="w-full  text-sm  text-left rtl:text-right text-gray-500 dark:text-gray-400">

                    <thead class="text-xs   !z- text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Nom
                            </th>

                            <th scope="col" class="px-6 py-3">
                                Sexe
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Genre
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Année
                            </th>
                            <th scope="col" class="px-6 py-3">

                            </th>
                        </tr>
                    </thead>


                    <tbody>
                        <div v-if="filteredCandidats.length === 0" class="no-results">

                            <h4 class="message">Aucun candidat trouvé.</h4>
                        </div>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            v-for="(item, index) in filteredCandidats" :key="index">
                            <th scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ item.electeur.nomComplet }}
                            </th>
                            <td class="px-6 py-4">
                                {{ item.electeur.sexe }}
                            </td>
                            <td class="px-6 py-4">
                                {{ item.annee_electorale.descriptionAnnee }}
                            </td>
                            <td class="px-6 py-4">
                                {{ item.annee_electorale.annee }}
                            </td>
                            <td class="px-6 py-4">
                                <div class="btn">
                                    <div class="icon blue" @click="voir(item)"> <i class="pi pi-eye"
                                            style="font-size: 18px; color: white;"></i> </div>
                                    <div class="icon orange" @click="modifier(item)"> <i class="pi pi-pencil"
                                            style="font-size: 18px; color: white;"></i> </div>
                                    <div class="icon red" @click="supprimer(item)"> <i class="pi pi-trash"
                                            style="font-size: 18px; color: white;"></i> </div>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>


        <div class="showProfil" v-if="show.showChoixElection">
            <div class="sectionItem">
                <div class="closeForm" @click="show.showChoixElection = false">
                    <i class="pi pi-times text-gray-700 text-lg"></i>
                </div>
                <h4 class="textSection text-lg font-semibold">Choisir une élection</h4>
            </div>

            <div class="items flex flex-col gap-4 mt-4">
                <!-- Élection Présidentielle -->
                <div class="option bg-blue-500 text-white p-3 rounded-lg cursor-pointer hover:bg-blue-600 transition"
                    @click="show.showModalAjout = !show.showModalAjout">
                    <h5 class="text-center font-semibold" @click="presidentiel()">Élection Présidentielle</h5>
                </div>

                <!-- Élection Parlementaire (avec sous-options) -->
                <div class="option bg-green-500 text-white p-3 rounded-lg cursor-pointer hover:bg-green-600 transition"
                    @click="toggleParlementaire">
                    <h5 class="text-center font-semibold">Élection Parlementaire</h5>
                </div>

                <!-- Sous-options pour Parlementaire -->
                <div v-if="showParlementaire" class="ml-6 flex flex-col gap-2">
                    <div class="option bg-green-400 text-white p-2 rounded-lg cursor-pointer hover:bg-green-500 transition"
                        @click="show.showTypeElection('district')">
                        <h5 class="text-center font-semibold">Élection Député</h5>
                    </div>
                    <div class="option bg-green-400 text-white p-2 rounded-lg cursor-pointer hover:bg-green-500 transition"
                        @click="show.showTypeElection('province')">
                        <h5 class="text-center font-semibold">Élection Sénateur</h5>
                    </div>
                </div>

                <!-- Élection Municipale (avec sous-options) -->
                <div class="option bg-orange-500 text-white p-3 rounded-lg cursor-pointer hover:bg-orange-600 transition"
                    @click="toggleMunicipale">
                    <h5 class="text-center font-semibold">Élection Municipale</h5>
                </div>

                <!-- Sous-options pour Municipale -->
                <div v-if="showMunicipale" class="ml-6 flex flex-col gap-2">
                    <div class="option bg-orange-400 text-white p-2 rounded-lg cursor-pointer hover:bg-orange-500 transition"
                        @click="show.showTypeElection('commune')">
                        <h5 class="text-center font-semibold">Élection Conseiller Municipal</h5>
                    </div>
                    <div class="option bg-orange-400 text-white p-2 rounded-lg cursor-pointer hover:bg-orange-500 transition"
                        @click="choisirElection('commune')">
                        <h5 class="text-center font-semibold">Élection Maire</h5>
                    </div>
                </div>
            </div>
        </div>



        <div class="modal backdrop-blur" v-if="show.showModalAjout">

            <div class="contenaireModal ">
                <div class="flex justify-between items-center">
                    <h1 class="tritreModal">AJOUT NOUVEAU CANDIDAT {{
                        anneeElectorale?.anneeElectoraleChoisi.descriptionAnnee }} : {{
                            anneeElectorale?.anneeElectoraleChoisi.annee }} </h1>
                    <div class="flex w-[20%] mr-6 ">
                        <Cancel @toggle="show.showModalAjout = !show.showModalAjout" />
                        <Confirm @toggle="ajouter()" buttonText="Ajouter" />
                    </div>
                </div>

                <div class="flex flex-wrap  justify-around items-center ">



                    <MyInput label="Nom et prénom" placeholder="Ajoutez un nom" v-model="listeCandidat.nomComplet" />

                    <MyDateInput label="Date de naissance" placeholder="Insérez une date de naissance"
                        v-model="listeCandidat.dateNaissance" format="dd-MM-yyyy" />


                    <MyInput label="Lieu de naissance" placeholder="Insérez un lieu de naissance"
                        v-model="listeCandidat.lieuNaissance" />

                    <SelectInput label="Sexe" defaultOption="" :options="[
                        { text: 'Masculin', value: 'Masculin' },
                        { text: 'Femme', value: 'Femme' }
                    ]" v-model="listeCandidat.sexe" />







                    <MyInput label="Filiation" placeholder="Nom du père et de la mère"
                        v-model="listeCandidat.filiation" />

                    <MyInput label="Email" placeholder="Nom du père et de la mère" v-model="listeCandidat.email" />

                    <SelectInput label="Déclaration honneur des biens" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.declarationHonneurBiens" />

                    <SelectInput label="Certificat de nationalité" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.certificatNationalite" />

                    <SelectInput label="Déclaration honneur des impôts" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.declarationHonneurImpôts" />


                    <SelectInput label="Copie d'acte de naissance" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.copieActeNaissance" />




                    <SelectInput label="Certificat d'administration fiscale" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.certificatAdministrationFiscale" />


                    <SelectInput label=" Copie de carte électeur" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.copieCarteElecteur" />


                    <SelectInput label=" Déclaration de probite" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.declarationProbite" />

                    <SelectInput label="  Copie de récipissé patrimoine" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.copieRecipissePatrimoine" />



                    <MyInput label="Numéro de la CIN" placeholder="Insérez un numéro de la CIN"
                        v-model="listeCandidat.numeroCIN" />






                    <MyDateInput label="Date de délivrance CIN" placeholder="Insérez une date de naissance"
                        v-model="listeCandidat.dateDelivreCIN" format="dd-MM-yyyy" />

                    <MyInput label="Lieu de délivrance CIN" placeholder="Insérez un lieu de délivrance de la CIN"
                        v-model="listeCandidat.lieuDelivreCIN" />


                    <MyInput label="Adresse ou le lieu de résidence"
                        placeholder="Insérez une adresse ou le lieu de résidence" v-model="listeCandidat.adresse" />
                    <MyInput label="Profession" placeholder="Ajoutez un profession"
                        v-model="listeCandidat.profession" />

                    <SelectInput label=" Casier judiciaire" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.casierJudiciaire" />



                    <MyInput label="Carte d'électeur" placeholder="Ecrire le numéro de la Carte électeur"
                        v-model="listeCandidat.carteElecteur" />

                    <MyInput label="Téléphone" placeholder="Ecrire votre numéro de téléphone"
                        v-model="listeCandidat.telephone" />

                    <MyDateInput label="Date d'inscription" placeholder="Insérez une date d'inscription"
                        v-model="listeCandidat.dateInscription" format="dd-MM-yyyy" />
                    <!--                     

                    <SelectInput label=" Année électorale" defaultOption="" :options="anneeElectorale.allanneeData"
                        v-model="listeCandidat.annee_electorale_id" /> -->

                    <SelectInput label=" Matrice support électronique" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.matriceSupportElectronique" />


                    <SelectInput label="Quittance de contribution" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.quittanceContribution" />

                    <SelectInput label="Déclaration d'honneur de constitution" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.declarationHonneurConstitution" />

                    <SelectInput label="Attestation d'investiture " defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.attestationInvestiture" />

                    <SelectInput label="Certificat de résidence " defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.certificatResidence" />
                </div>

                <div class="mt-4 w-[400px]">
                    <ModalUploadFile />

                </div>
            </div>
        </div>


        <div class="modal backdrop-blur" v-if="show.showModalAjoutImage">
            <div class="contenaireModal">
                <div class="closeForm" @click="show.showModalAjoutImage = !show.showModalAjoutImage">
                    <i class="pi pi-times text-gray-700 text-lg"></i>
                </div>
                <div class="flex justify-between items-center">
                    <h1 class="tritreModal">Ajouter une Image de Candidat : {{
                        show.showCandidatDataImage.electeur.nomComplet }}
                    </h1>
                </div>
                <div class="flex flex-wrap justify-around items-center">
                    <div class="mt-4 w-[400px] justify-center items-center ml-0">
                        <ModalUploadFile :data="show.showCandidatDataImage" />
                    </div>
                </div>
            </div>
        </div>


    </div>


</template>


<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useShow } from "@/stores/show";
import { useAuth } from "@/stores/auth";
import { useUtilisateur } from "@/stores/utilisateur";
import { uselisteCandidat } from "@/stores/listeCandidat";
import { useAnneeElectorale } from "@/stores/anneeElectorale";
import Cancel from "@/components/btnComponents/Cancel.vue";
import Confirm from "@/components/btnComponents/Confirm.vue";
import ModalUploadFile from "@/components/UploadFile/ModalUploadFile.vue";

import MyInput from "../InputComponets/MyInput.vue";
import MyDateInput from "../date/MyDateInput.vue";
import SelectInput from "../selects/SelectInput.vue";

import Datepicker from "vue3-datepicker";

import ElectionPresidentiel from '@/views/ElectionPresidentiel.vue';

const show = useShow();
const auth = useAuth();
const utilisateur = useUtilisateur();
const listeCandidat = uselisteCandidat();
const anneeElectorale = useAnneeElectorale();

const searchTerm = ref('');
const anneeSelect = ref();
const listeCandidatVerifier = ref([]);

const anneeSelectData = ref()
const president = ref(false)

// const senateur = ref(false)
const maire = ref(false)




const anneeVerifier = computed(() => anneeSelect.value);

function adds() {
    const description = anneeSelectData.value.descriptionAnnee;

    // Mapping des descriptions aux actions
    const actions = {
        "Présidentielle": () => {
            console.log('Présidentielle');
            show.showModalAjout = !show.showModalAjout;
        },
        "Municipale : Conseillé municipaux": () => {
            console.log('conseillerMunicipaux');
            show.municipaux = true;
        },
        "Municipale": () => {
            console.log('conseillerMunicipaux');
            show.municipaux = true;
        },
        "Parlémentaire : Député": () => {
            show.deputes = true;
        },
        "Parlémentaire : Sénateur": () => {
            show.senateur = true;
        }
    };

    // Exécuter l'action correspondante si elle existe
    if (actions[description]) {
        actions[description]();
    }
}


// filtrage
watch(anneeVerifier, (newList, oldList) => {
    listeCandidatVerifier.value = []
    console.log("bbbbbbbbbb", newList);

    listeCandidat.allListeCandidat.map((candidat) => {
        if (candidat.candidat.annee_electorale.annee === newList) {
            listeCandidatVerifier.value.push(candidat);
        }
    });
});

watch(() => listeCandidat.randomVal, (newList, oldList) => {
    listeCandidatVerifier.value = []
    console.log("aaaaaaaaaaa", newList);

    listeCandidat.allListeCandidat.map((candidat) => {
        if (candidat.candidat.annee_electorale.annee === anneeSelect.value) {
            console.log('bonga', anneeSelect.value);

            listeCandidatVerifier.value.push(candidat);
        }
    });
    console.log('bonga2.0', listeCandidatVerifier.value);
});


watch(() => anneeSelectData.value, (newList, oldList) => {
    console.log('niova', newList);
    if ("Présidentielle" === newList.descriptionAnnee) {

    }



});

// watch(() => listeCandidat.allListeCandidat, (newList, oldList) => {

//     listeCandidatVerifier.value = newList

// });

const filteredCandidats = computed(() => {
    if (!searchTerm.value) {
        return listeCandidatVerifier.value;
    }
    return listeCandidatVerifier.value.filter(item => {
        return item.electeur.nomComplet.toLowerCase().includes(searchTerm.value.toLowerCase());
    });
});






// Define a reactive reference for anneeSelect


onMounted(() => {
    try {
        // Retrieve the item from localStorage
        const anneeSelectionne = localStorage.getItem('anneeSelectionne');

        if (anneeSelectionne) {
            // Parse the JSON string and assign the 'annee' property to anneeSelect
            const parsedData = JSON.parse(anneeSelectionne);
            anneeSelect.value = parsedData.annee;
            anneeSelectData.value = parsedData
        } else {
            console.log('No "anneeSelectionne" item found in localStorage.');
        }
    } catch (error) {
        // Handle potential JSON parsing errors
        console.error('Error parsing "anneeSelectionne" from localStorage:', error);
    }

    // Call the function to fill the form with random values
    remplirFormulaireAleatoires();
});


function depute() {
    show.setOption('Liste location élection')
    show.depute = true

}

function remplirFormulaireAleatoires() {
    listeCandidat.nomComplet = genererNomAleatoire();
    listeCandidat.dateNaissance = genererDateAleatoire();
    listeCandidat.lieuNaissance = genererLieuAleatoire();
    listeCandidat.sexe = genererSexeAleatoire();
    listeCandidat.filiation = genererFiliationAleatoire();
    listeCandidat.email = genererEmailAleatoire();
    listeCandidat.declarationHonneurBiens = genererObtentionAleatoire();
    listeCandidat.certificatNationalite = genererObtentionAleatoire();
    listeCandidat.declarationHonneurImpôts = genererObtentionAleatoire();
    listeCandidat.certificatAdministrationFiscale = genererObtentionAleatoire();
    listeCandidat.copieCarteElecteur = genererObtentionAleatoire();
    listeCandidat.declarationProbite = genererObtentionAleatoire();
    listeCandidat.copieRecipissePatrimoine = genererObtentionAleatoire();
    listeCandidat.numeroCIN = genererNumeroCINAleatoire();
    listeCandidat.dateDelivreCIN = genererDateAleatoire();
    listeCandidat.lieuDelivreCIN = genererLieuAleatoire();
    listeCandidat.adresse = genererAdresseAleatoire();
    listeCandidat.profession = genererProfessionAleatoire();
    listeCandidat.casierJudiciaire = genererObtentionAleatoire();
    listeCandidat.copieActeNaissance = genererObtentionAleatoire();
    listeCandidat.annee_electorale_id = genererAnneeElectoraleAleatoire();
    listeCandidat.carteElecteur = genererCarteElecteurAleatoire();
    listeCandidat.telephone = genererTelephoneAleatoire();
    listeCandidat.dateInscription = genererDateAleatoire();
    listeCandidat.matriceSupportElectronique = genererObtentionAleatoire();
    listeCandidat.quittanceContribution = genererObtentionAleatoire();
    listeCandidat.declarationHonneurConstitution = genererObtentionAleatoire();
    listeCandidat.attestationInvestiture = genererObtentionAleatoire();
    listeCandidat.certificatResidence = genererObtentionAleatoire();
}


// États réactifs
const showModalAjout = ref(false);
const showParlementaire = ref(false);
const showMunicipale = ref(false);

// Fonctions
const choisirElection = (type) => {
    console.log("Élection sélectionnée :", type);
    showModalAjout.value = false; // Fermer la modale après sélection
};

const toggleParlementaire = () => {
    showParlementaire.value = !showParlementaire.value;
};

const toggleMunicipale = () => {
    showMunicipale.value = !showMunicipale.value;
};

function genererNomAleatoire() {
    const prenoms = ['Jean', 'Marie', 'Paul', 'Sophie', 'Pierre', 'Julie'];
    const noms = ['Dupont', 'Martin', 'Bernard', 'Thomas', 'Petit', 'Robert'];
    return `${prenoms[Math.floor(Math.random() * prenoms.length)]} ${noms[Math.floor(Math.random() * noms.length)]}`;
}

function genererDateAleatoire() {
    const start = new Date(1950, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function genererLieuAleatoire() {
    const lieux = ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice', 'Nantes'];
    return lieux[Math.floor(Math.random() * lieux.length)];
}

function genererSexeAleatoire() {
    return Math.random() < 0.5 ? 'Homme' : 'Femme';
}

function genererFiliationAleatoire() {
    const filiations = ['Fils de X et Y', 'Fille de X et Y', 'Fils de A et B', 'Fille de A et B'];
    return filiations[Math.floor(Math.random() * filiations.length)];
}

function genererEmailAleatoire() {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let email = '';
    for (let i = 0; i < 7; i++) {
        email += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `${email}@gmail.com`;
}

function genererObtentionAleatoire() {
    return Math.random() < 0.5 ? 'oui' : 'non';
}

function genererNumeroCINAleatoire() {
    return Math.floor(10000000 + Math.random() * 90000000).toString();
}

function genererAdresseAleatoire() {
    const adresses = ['1 rue de la Paix', '2 avenue des Champs-Élysées', '3 boulevard Saint-Germain'];
    return adresses[Math.floor(Math.random() * adresses.length)];
}

function genererProfessionAleatoire() {
    const professions = ['Ingénieur', 'Médecin', 'Avocat', 'Enseignant', 'Artiste'];
    return professions[Math.floor(Math.random() * professions.length)];
}

function genererCarteElecteurAleatoire() {
    return Math.floor(1000000 + Math.random() * 9000000).toString();
}

function genererTelephoneAleatoire() {
    return '06' + Math.floor(10000000 + Math.random() * 90000000).toString();
}

function genererAnneeElectoraleAleatoire() {
    const annees = anneeElectorale.allanneeData.map(annee => annee.id);
    return annees[Math.floor(Math.random() * annees.length)];
}

function voir(item) {
    listeCandidat.voirCandidatData = item;
    console.log('232323232', listeCandidat.voirCandidatData);

    show.showModalOeilCandidat = !show.showModalOeilCandidat;
}


function ajouter() {
    console.log('lllllllllllll', anneeElectorale?.anneeElectoraleChoisi);


    listeCandidat.annee_electorale_id = anneeElectorale?.anneeElectoraleChoisi.id
    listeCandidat.createCandidat();
}

function supprimer(item) {
    show.showModalSupprimer = true;
    listeCandidat.supprimerData = item;
}

function modifier(item) {
    listeCandidat.modifierCandidatData = item;
    show.showModalModifierCandidat = !show.showModalModifierCandidat;
    listeCandidat.ModifierIdCandidat = item.candidat.id;
    listeCandidat.ModifierdeclarationHonneurBiens = item.candidat.declarationHonneurBiens;
    listeCandidat.ModifiercertificatNationalite = item.candidat.certificatNationalite;
    listeCandidat.ModifierdeclarationHonneurImpôts = item.candidat.declarationHonneurImpôts;
    listeCandidat.ModifiercertificatAdministrationFiscale = item.candidat.certificatAdministrationFiscale;
    listeCandidat.ModifiercopieCarteElecteur = item.candidat.copieCarteElecteur;
    listeCandidat.ModifierdeclarationProbite = item.candidat.declarationProbite;
    listeCandidat.ModifiercopieRecipissePatrimoine = item.candidat.copieRecipissePatrimoine;
    listeCandidat.ModifiermatriceSupportElectronique = item.candidat.matriceSupportElectronique;
    listeCandidat.ModifierquittanceContribution = item.candidat.quittanceContribution;
    listeCandidat.ModifierdeclarationHonneurConstitution = item.candidat.declarationHonneurConstitution;
    listeCandidat.ModifierattestationInvestiture = item.candidat.attestationInvestiture;
    listeCandidat.ModifiercertificatResidence = item.candidat.certificatResidence;
    listeCandidat.ModifiercasierJudiciaire = item.candidat.casierJudiciaire;
    listeCandidat.ModifiercopieActeNaissance = item.candidat.copieActeNaissance;
    listeCandidat.Modifierannee_electorale_id = item.candidat.annee_electorale_id;
    listeCandidat.Modifierelecteur_id = item.candidat.electeur_id;
    listeCandidat.ModifiernomComplet = item.electeur.nomComplet;
    listeCandidat.Modifierprofession = item.electeur.profession;
    listeCandidat.Modifieradresse = item.electeur.adresse;
    listeCandidat.ModifiernumeroCIN = item.electeur.numeroCIN;
    listeCandidat.ModifierdateDelivreCIN = item.electeur.dateDelivreCIN;
    listeCandidat.ModifierlieuDelivreCIN = item.electeur.lieuDelivreCIN;
    listeCandidat.ModifiercarteElecteur = item.electeur.carteElecteur;
    listeCandidat.Modifiersexe = item.electeur.sexe;
    listeCandidat.ModifierlieuNaissance = item.electeur.lieuNaissance;
    listeCandidat.Modifierfiliation = item.electeur.filiation;
    listeCandidat.ModifierdateNaissance = item.electeur.dateNaissance;
    listeCandidat.Modifiertelephone = item.electeur.telephone;
    listeCandidat.ModifierdateInscription = item.electeur.dateInscription;
    listeCandidat.Modifieremail = item.user.email;
    listeCandidat.Modifieruser_id = item.user.id;
}
</script>


<style scoped>
.form {
    width: 100%;
    margin-bottom: 0px;
}

.form h4 {
    font-weight: 600;
    padding: 10px;
}

.list {
    /* background-color: green;*/
    width: 100%;
    height: 100vh;
}


option {
    background-color: rgba(67, 67, 79, 0.83);
    color: #f0f3f6;
}



.down {
    z-index: 0 !important;
}

.modal {
    width: 100%;
    height: 100vh;
    background-color: rgba(196, 190, 190, 0.452);
    position: absolute;
    top: 0;
    left: 0;
    overflow-y: hidden;
    align-items: center;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
}

.contenaireModalSupp {
    width: 25%;
    height: 25vh;
    background-color: white;
    border-radius: 10px;
    margin: 0 auto;
    padding: 10px;
}

.supp {
    color: #2c2b2b;
    padding: 0px 10px 20px 10px;
}

.suppNom {
    color: #2c2b2b;
    padding: 0px 10px;
    font-weight: bold;
    margin-bottom: 20px;
}

.contenaireModal {
    width: 100%;
    height: 100vh;
    background-color: #414752;
    border-radius: 10px;
    margin: 0 auto;
    padding: 10px;
}


.tritreModal {
    color: white;
    font-weight: 600;
    font-size: 20px;
    padding-bottom: 10px;
    padding-left: 5%;
}



.section {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;



}

.inputCard {
    padding: 4px 0;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.label {
    color: rgb(174, 168, 168);
    font-weight: 600;
    font-size: 15px;
    padding-left: 5px;
    display: block;
    align-self: first baseline;

}

.contenu {
    color: #d4cdcd80;
    font-weight: bold;
    background-color: #807c7c13;
    padding: 10px 5px 5px 20px;
    border-radius: 5px;
    margin: 0;
}

.modalFooter {
    width: 20%;
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
    align-items: center;
    position: absolute;

    right: 70px;
    bottom: 2px;


}



.textSection {
    font-weight: 700;
}

.pi {
    transition: transform 0.2s ease-in-out;
}

.closeForm {
    background-color: rgb(231, 230, 230);
    width: 40px;
    height: 40px;
    border-radius: 100%;
    position: absolute;
    right: 390px;
    top: 39%;
    align-items: center;
    display: flex;
    justify-content: center;
}

.closeForm:hover {
    background-color: rgb(186, 11, 11);
    transform: scale(1.1);
    /* Ajoute un effet de zoom au survol */
}


.showProfil {
    position: absolute;
    background-color: #545C6B;
    color: rgb(221, 214, 214);
    width: 20%;
    top: 150px;
    right: 60px;
    border-radius: 5px;
    text-align: left;
    z-index: 99;

}

.container {
    padding: 5px 5px;
    display: flex;
    overflow: hidden;
    justify-content: space-around;
}

.imageProfil {
    width: 50px;
    height: 50px;
    border-radius: 100%;
}

.sectionItem {
    background-color: #4e525b;
    border-radius: 5px 5px 0px 0px;
    padding: 5px 20px;

}

.icon {
    margin-right: 10px;
    /* Espace entre l'icône et le champ de saisie */
    font-size: 18px;
    color: grey;
}

.icon1 {
    margin-right: 10px;
    /* Espace entre l'icône et le champ de saisie */
    font-size: 18px;
    color: rgb(212, 206, 206);
}

.input {
    padding: 5px 10px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #aaaac5;
    background-color: #3c4c6d09;
    color: #fafbfd;
}

.input:focus {
    border-color: #1b65b4;
    /* Couleur de bordure bleue quand l'input est actif */
    box-shadow: 0 2px 10px rgba(0, 123, 255, 0.3);
    /* Ombre bleue plus marquée */
    outline: none;
    /* Enlever le contour par défaut */
    color: rgb(219, 213, 213);
    /* Couleur du texte quand l'input est actif */
}

.itemContainer {
    display: flex;
    align-items: center;
    /* Aligne verticalement les éléments */
}

.number {
    font-weight: 600;
    color: #d4d9e2;
}

.item {
    /*background-color: aqua;*/
    background-color: rgba(236, 247, 236, 0.089);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    margin-bottom: 5px;
    border-bottom: 2px solid rgba(231, 222, 222, 0.507);

}

.item h4 {
    font-weight: 600;

}

.item h5 {
    font-weight: 600;

}

.subItem {
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.name h4 {
    word-wrap: break-word;
    /* Permet de couper les mots et de les mettre à la ligne */
    white-space: normal;
    /* Assure que le texte peut revenir à la ligne */
    overflow-wrap: break-word;
    /* Permet le retour à la ligne même pour les mots longs */
    width: 50%;
    /* Prend toute la largeur disponible */
    background-color: red;
}


.btn {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.icon {
    background-color: rgb(0, 2, 128);
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 100%;
}

.icon:hover {
    background-color: rgb(168, 169, 230);

}

.blue {
    background-color: rgb(74, 74, 241)
}

.orange {
    background-color: rgb(241, 169, 74)
}

.red {
    background-color: rgb(241, 74, 74)
}



input-placeholder {
    color: red;
}

.input::placeholder {
    color: #8b8787;
    /* Couleur initiale du placeholder */
    font-style: italic;
    /* Optionnel: pour ajouter un style en italique */
    transition: color 0.3s ease;
    /* Transition fluide quand la couleur change */
}

.input:focus::placeholder {
    color: #bebaba;
    /* Couleur du placeholder quand l'input est focusé */
}


.formulaire {
    display: flex;
    justify-content: space-around;
    background-color: rgba(213, 235, 235, 0.212);
    align-items: center;
}



.btnAdd {
    color: #fff;
    font-weight: 900;
    width: 50%;
    text-align: center;
    background-color: rgb(34, 199, 83);
    padding: 5px 20px;
    border-radius: 5px;

    display: inline-block;
    /* position: relative; */
    margin-left: 0;
    /* Positionne l'élément à gauche */

}

.cancel {
    width: 100px !important;
    background-color: rgb(192, 190, 190);
    border: 2px solid rgb(34, 199, 83);
    color: rgb(7, 185, 60) !important;
}

.add {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px !important;
    height: 30px;
    border-radius: 100%;
    padding: 5px;
    margin-left: 20px;

}

.add1 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    border-radius: 5px;
    margin-left: 20px;
    padding: 5px 20px;

    border: 2px solid rgb(34, 199, 83);


}


.btnAdd h3:hover {
    background-color: rgb(101, 230, 140);
}

.flexCard input {
    display: flex;
    justify-content: space-between;
    width: 90%;

}

.flexCard {
    display: flex;
    justify-content: space-between;
    width: 90%;


}

.annee {
    width: 100%;
    padding: 5px;
    background-color: #eceef209;
    border-radius: 5px;
    border: 1px solid #aaaac5;
    color: #fafbfd;
}


.message {
    display: flex;
    justify-content: center;
    /* Centre horizontalement */
    align-items: center;
    /* Centre verticalement */
    height: 100%;
    /* Assure que le conteneur prend toute la hauteur disponible */
    text-align: center;
    /* Centre le texte à l'intérieur de l'élément */
    margin: 20px 0;
    /* Ajoute un espacement au-dessus et en dessous */
    color: rgb(231, 216, 216);
    /* Couleur du texte pour le message */
    font-size: 18px;
    /* Taille de la police */
}
</style>