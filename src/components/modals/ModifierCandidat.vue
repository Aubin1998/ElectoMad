<template>
    <Transition>

        <div class="modal" v-if="show.showModalModifierCandidat">
            <div class="contenaireModal">
                <div class="flex justify-between">
                    <h1 class="tritreModal">MODIFIER INFORMATION PERSONNEL</h1>
                    <div class="flex w-[20%] mr-2 ">
                        <Cancel @toggle="show.showModalModifierCandidat = !show.showModalModifierCandidat" />
                        <Confirm @toggle="modifier()" buttonText="Modifier" />
                    </div>
                </div>
                <div class="flex w-full  justify-between">
                    <div class="w-[300px] h-[200px] bg-[#b2b0b030] flex items-center justify-center rounded-lg">
                        <img v-if="listeCandidat.modifierCandidatData.candidat?.file?.titre"
                            :src="listeCandidat.modifierCandidatData.candidat.file?.titre" alt=""
                            class="w-full h-full rounded-lg object-contain" />

                        <div class="relative w-[50px] h-[50px]" v-else>
                            <input type="file"
                                @change="(event) => onFileChange(event, listeCandidat.modifierCandidatData.candidat.id)"
                                id="file-upload" class="absolute inset-0 opacity-0 cursor-pointer" />
                            <label for="file-upload"
                                class="flex items-center justify-center w-full h-full bg-[#e1dada] rounded-full cursor-pointer text-[24px]">
                                <i class="pi pi-camera text-red-500"></i>
                            </label>
                        </div>
                        <div class="absolute w-[50px] h-[50px] t-0 position"
                            v-if="listeCandidat.modifierCandidatData.candidat?.file?.titre">
                            <input type="file"
                                @change="(event) => onFileChange(event, listeCandidat.modifierCandidatData.candidat.id)"
                                id="file-upload" class="absolute inset-0 opacity-0 cursor-pointer" />
                            <label for="file-upload"
                                class="flex items-center justify-center w-full h-full  rounded-full cursor-pointer text-[24px]">
                                <i class="pi pi-camera "></i>
                            </label>
                        </div>
                    </div>

                    <div class=" w-[74%] h-[200px] flex justify-between flex-wrap ">
                        <MyInput label="Nom et prénom" placeholder="Ajoutez un nom"
                            v-model="listeCandidat.ModifiernomComplet" />

                        <MyDateInput label="Date de naissance" placeholder="Insérez une date de naissance"
                            v-model="dateOfBirth" format="dd-MM-yyyy" />


                        <MyInput label="Lieu de naissance" placeholder="Insérez un lieu de naissance"
                            v-model="listeCandidat.ModifierlieuNaissance" />


                        <SelectInput label="Sexe" defaultOption="" :options="[
                            { text: 'Homme', value: 'Homme' },
                            { text: 'Femme', value: 'Femme' }
                        ]" v-model="listeCandidat.Modifiersexe" />

                        <MyInput label="Filiation" placeholder="Nom du père et de la mère"
                            v-model="listeCandidat.Modifierfiliation" />

                        <MyInput label="Email" placeholder="Ajouter un email" v-model="listeCandidat.Modifieremail" />

                        <SelectInput label="Déclaration honneur des biens" defaultOption="" :options="[
                            { text: 'Oui', value: 'oui' },
                            { text: 'Non', value: 'non' }
                        ]" v-model="listeCandidat.ModifierdeclarationHonneurBiens" />

                        <SelectInput label="Certificat de nationalité" defaultOption="" :options="[
                            { text: 'Oui', value: 'oui' },
                            { text: 'Non', value: 'non' }
                        ]" v-model="listeCandidat.ModifiercertificatNationalite" />


                        <SelectInput label="Déclaration honneur des impôts" defaultOption="" :options="[
                            { text: 'Oui', value: 'oui' },
                            { text: 'Non', value: 'non' }
                        ]" v-model="listeCandidat.ModifierdeclarationHonneurImpôts" />

                    </div>

                </div>






                <div class="w-full  my-2 flex justify-between flex-wrap">




                    <MyDateInput label="Date d'inscription" placeholder="Ecrire la date d'inscription"
                        v-model="dateOfBirth" format="dd-MM-yyyy" />
                    <SelectInput label="Copie d'acte de naissance" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.ModifiercopieActeNaissance" />

                    <SelectInput label="Certificat d'administration fiscale" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.ModifiercertificatAdministrationFiscale" />


                    <SelectInput label=" Copie de carte électeur" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.ModifiercopieCarteElecteur" />

                    <SelectInput label=" Déclaration de probite" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.ModifierdeclarationProbite" />
                    <SelectInput label=" Copie de récipissé patrimoine" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.ModifiercopieRecipissePatrimoine" />

                    <MyInput label="Numéro de la CIN" placeholder="Insérez un numéro de la CIN"
                        v-model="listeCandidat.ModifiernumeroCIN" />


                    <MyDateInput label="Date de délivrance" placeholder="Insérez une date de délivrance de la CIN"
                        v-model="dateOfBirth" format="dd-MM-yyyy" />


                    <MyInput label="Lieu de délivrance CIN" placeholder="Insérez un lieu de délivrance de la CIN"
                        v-model="listeCandidat.ModifierlieuDelivreCIN" />


                    <MyInput label="Adresse" placeholder="Insérez une adresse ou le lieu de résidence"
                        v-model="listeCandidat.Modifieradresse" />


                    <MyInput label="Profession" placeholder="Ajoutez un profession"
                        v-model="listeCandidat.Modifierprofession" />

                    <SelectInput label=" Casier judiciaire" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.ModifiercasierJudiciaire" />

                    <MyInput label="Carte d'électeur" placeholder="Ecrire le numéro de la Carte électeur"
                        v-model="listeCandidat.ModifiercarteElecteur" />

                    <MyInput label="Téléphone" placeholder="Ecrire le numéro de la Carte électeur"
                        v-model="listeCandidat.Modifiertelephone" />

                    <SelectInput label=" Année électorale" defaultOption="" :options="anneeElectorale.allanneeData"
                        v-model="listeCandidat.ModifiercasierJudiciaire" />


                    <SelectInput label=" Matrice support électronique" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.ModifiermatriceSupportElectronique" />



                    <SelectInput label=" Quittance de contribution" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.ModifierquittanceContribution" />


                    <SelectInput label=" Déclaration d'honneur de constitution" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.ModifierdeclarationHonneurConstitution" />


                    <SelectInput label=" Attestation d'investiture" defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.ModifierattestationInvestiture" />




                    <SelectInput label=" Certificat de résidence " defaultOption="" :options="[
                        { text: 'Oui', value: 'oui' },
                        { text: 'Non', value: 'non' }
                    ]" v-model="listeCandidat.ModifiercertificatResidence" />





                </div>



            </div>
        </div>

    </Transition>
</template>

<script setup>
import { useShow } from "@/stores/show";
const show = useShow(); //call Show in show.js
import { ref, computed } from "vue";
import axios from "axios";

import { useAuth } from "@/stores/auth";
import { useUtilisateur } from "@/stores/utilisateur";
import { uselisteCandidat } from "@/stores/listeCandidat";
import { useAnneeElectorale } from "@/stores/anneeElectorale";
import Cancel from "@/components/btnComponents/Cancel.vue";
import Confirm from "@/components/btnComponents/Confirm.vue";

import Datepicker from "vue3-datepicker";
import MyInput from "../InputComponets/MyInput.vue";
import MyDateInput from "../date/MyDateInput.vue";
import SelectInput from "../selects/SelectInput.vue";


const auth = useAuth();
const utilisateur = useUtilisateur();
const listeCandidat = uselisteCandidat();
const anneeElectorale = useAnneeElectorale();

const dateOfBirth = computed({
    get() {
        // Convert the string to a Date object
        return new Date(listeCandidat.ModifierdateNaissance);
    },
    set(value) {
        // Update the original data property with the new Date value
        listeCandidat.ModifierdateNaissance = value.toISOString().split('T')[0];
    }
});
const filer = ref()
const onFileChange = async (event, electeurId) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
        console.log('rrrrrrrrrrrrr', listeCandidat.modifierCandidatData.candidat?.file?.titre);


        const response = await axios.post(
            `http://localhost:8000/api/electeur/candidat/${electeurId}/upload`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );


        if (listeCandidat.modifierCandidatData.candidat?.file?.titre) {
            listeCandidat.modifierCandidatData.candidat.file.titre = response.data.url;
        } else {

            filer.value = {
                id: 1,
                titre: response.data.url,
                file_name: response.data.url,
            }


            listeCandidat.modifierCandidatData.candidat.file = filer.value
        }






    } catch (error) {
        console.error('Erreur lors de l\'upload de l\'image :', error);
    }
};

function modifier() {
    listeCandidat.updateCandidat(listeCandidat.modifierCandidatData.candidat.id, listeCandidat.modifierCandidatData)

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
    height: 60vh;
}

.position {
    background-color: rgba(40, 61, 250, 0.546);
    border-radius: 100%;
    position: absolute;
    top: 9%;
    left: 1%;
}

.titre {
    display: flex;
    justify-content: space-around;
    padding: 5px;
    align-items: center;
}

.scroll-container {
    max-height: 100%;
    /* Limite la hauteur */
    overflow-y: auto;
    /* Ajoute un défilement vertical si nécessaire */
    padding: 10px;
    height: 50vh;
    /* Espacement interne */
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

/* .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 10px;
} */

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

.subtitle {
    width: 60%;
    font-weight: 700;
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
    position: relative;
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
    background-color: #3c4c6d09;
    border-radius: 5px;
    border: 1px solid #aaaac5;
    color: #fafbfd;
}

option {
    background-color: rgba(67, 67, 79, 0.83);
    color: #f0f3f6;
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