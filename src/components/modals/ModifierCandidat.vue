<template>
    <Transition>
        <div class="modal" v-if="show.showModalModifierCandidat">
            <div class="contenaireModal">
                <h1 class="tritreModal">MODIFIER INFORMATION PERSONNEL</h1>
                <div class="flex">



                    <div class="section">

                        <div class="w-full h-[40vh] bg-[#b2b0b030] flex items-center justify-center">
                            <img v-if="listeCandidat.modifierCandidatData.candidat?.file?.titre"
                                :src="listeCandidat.modifierCandidatData.candidat.file?.titre" alt=""
                                class="w-full h-full rounded-t-lg object-cover" />

                            <div class="relative w-[50px] h-[50px]" v-else>
                                <input type="file"
                                    @change="(event) => onFileChange(event, listeCandidat.modifierCandidatData.candidat.id)"
                                    id="file-upload" class="absolute inset-0 opacity-0 cursor-pointer" />
                                <label for="file-upload"
                                    class="flex items-center justify-center w-full h-full bg-[#e1dada] rounded-full cursor-pointer text-[24px]">
                                    <i class="pi pi-camera text-red-500"></i>
                                </label>
                            </div>
                            <div class="absolute w-[50px] h-[50px] t-0" v-if="listeCandidat.modifierCandidatData.candidat?.file?.titre">
                                <input type="file"
                                    @change="(event) => onFileChange(event, listeCandidat.modifierCandidatData.candidat.id)"
                                    id="file-upload" class="absolute inset-0 opacity-0 cursor-pointer" />
                                <label for="file-upload"
                                    class="flex items-center justify-center w-full h-full  rounded-full cursor-pointer text-[24px]">
                                    <i class="pi pi-camera "></i>
                                </label>
                            </div>
                        </div>

                        <div class="inputCard">
                            <h3 class="label">Nom et prénom</h3>
                            <input type="text" placeholder="Ajoutez un nom" class="input"
                                v-model="listeCandidat.ModifiernomComplet" />
                        </div>

                        <div class="flexCard">

                            <div class="inputCard">
                                <h3 class="label">Date </h3>
                                <input type="text" placeholder="Insérez une date de naissance" class="input"
                                    v-model="listeCandidat.ModifierdateNaissance" />

                            </div>
                            <div class="inputCard">
                                <h3 class="label">Lieu de naissance</h3>
                                <input type="text" placeholder="Insérez un lieu de naissance" class="input"
                                    v-model="listeCandidat.ModifierlieuNaissance" />

                            </div>
                        </div>
                        <div class="inputCard">
                            <h3 class="label">Sexe</h3>
                            <input type="text" placeholder="Ajoutez un sexe" class="input"
                                v-model="listeCandidat.Modifiersexe" />

                        </div>
                        <div class="inputCard">
                            <h3 class="label">Filiation</h3>
                            <input type="text" placeholder="Nom du père et de la mère" class="input"
                                v-model="listeCandidat.Modifierfiliation" />
                        </div>


                        <div class="inputCard">
                            <h3 class="label">Email</h3>
                            <input type="text" placeholder="Nom du père et de la mère" class="input"
                                v-model="listeCandidat.Modifieremail" />
                        </div>




                        <div class="inputCard">
                            <h3 class="label"> Déclaration honneur des biens</h3>
                            <select class="annee" v-model="listeCandidat.ModifierdeclarationHonneurBiens" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>

                            </select>
                        </div>


                        <div class="inputCard">
                            <h3 class="label"> Certificat de nationalité</h3>
                            <select class="annee" v-model="listeCandidat.ModifiercertificatNationalite" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>

                            </select>
                        </div>

                        <div class="inputCard">
                            <h3 class="label"> Déclaration honneur des impôts</h3>
                            <select class="annee" v-model="listeCandidat.ModifierdeclarationHonneurImpôts" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>

                            </select>
                        </div>


                        <div class="inputCard">
                            <h3 class="label"> Copie d'acte de naissance</h3>
                            <select class="annee" v-model="listeCandidat.ModifiercopieActeNaissance" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>
                            </select>
                        </div>
                    </div>


                    <div class="section">

                        <div class="inputCard">
                            <h3 class="label"> Certificat d'administration fiscale</h3>
                            <select class="annee" v-model="listeCandidat.ModifiercertificatAdministrationFiscale" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>

                            </select>
                        </div>

                        <div class="inputCard">
                            <h3 class="label"> Copie de carte électeur</h3>
                            <select class="annee" v-model="listeCandidat.ModifiercopieCarteElecteur" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>

                            </select>
                        </div>

                        <div class="inputCard">
                            <h3 class="label"> Déclaration de probite</h3>
                            <select class="annee" v-model="listeCandidat.ModifierdeclarationProbite" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>

                            </select>
                        </div>

                        <div class="inputCard">
                            <h3 class="label"> Copie de récipissé patrimoine</h3>
                            <select class="annee" v-model="listeCandidat.ModifiercopieRecipissePatrimoine" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>

                            </select>
                        </div>


                        <div class="inputCard">
                            <h3 class="label">Numéro de la CIN</h3>
                            <input type="text" placeholder="Insérez un numéro de la CIN" class="input"
                                v-model="listeCandidat.ModifiernumeroCIN" />
                        </div>

                        <div class="flexCard">
                            <div class="inputCard">
                                <h3 class="label">Date </h3>
                                <input type="text" placeholder="Insérez une date de délivrance de la CIN" class="input"
                                    v-model="listeCandidat.ModifierdateDelivreCIN" />
                            </div>
                            <div class="inputCard">
                                <h3 class="label">Lieu de délivrance CIN</h3>
                                <input type="text" placeholder="Insérez un lieu de délivrance de la CIN" class="input"
                                    v-model="listeCandidat.ModifierlieuDelivreCIN" />
                            </div>
                        </div>

                        <div class="inputCard">
                            <h3 class="label">Adresse ou le lieu de résidence</h3>
                            <input type="text" placeholder="Insérez une adresse ou le lieu de résidence" class="input"
                                v-model="listeCandidat.Modifieradresse" />
                        </div>
                        <div class="inputCard">
                            <h3 class="label">Profession</h3>
                            <input type="text" placeholder="Ajoutez un profession" class="input"
                                v-model="listeCandidat.Modifierprofession" />
                        </div>

                        <div class="inputCard">
                            <h3 class="label"> Casier judiciaire</h3>
                            <select class="annee" v-model="listeCandidat.ModifiercasierJudiciaire" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>

                            </select>
                        </div>



                    </div>


                    <div class="section">





                        <div class="inputCard">
                            <h3 class="label">Carte d'électeur</h3>
                            <input type="text" placeholder="Ecrire le numéro de la Carte électeur" class="input"
                                v-model="listeCandidat.ModifiercarteElecteur" />
                        </div>

                        <div class="inputCard">
                            <h3 class="label">Téléphone</h3>
                            <input type="text" placeholder="Ecrire votre numéro de téléphone" class="input"
                                v-model="listeCandidat.Modifiertelephone" />
                        </div>
                        <div class="inputCard">
                            <h3 class="label">Date d'inscription</h3>
                            <input type="text" placeholder="Ecrire la date d'inscription" class="input"
                                v-model="listeCandidat.ModifierdateInscription" />
                        </div>


                        <div class="inputCard">
                            <h3 class="label"> Année électorale</h3>
                            <select class="annee" v-model="listeCandidat.Modifierannee_electorale_id" id="">
                                <option disabled value="">Sélectionner une année</option>
                                <option v-for="annee in anneeElectorale.allanneeData" :key=annee.id :value="annee.id">
                                    {{ annee.annee }}
                                    {{ annee.descriptionAnnee }}</option>
                            </select>
                        </div>




                        <div class="inputCard">
                            <h3 class="label"> Matrice support électronique</h3>
                            <select class="annee" v-model="listeCandidat.ModifiermatriceSupportElectronique" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>

                            </select>
                        </div>


                        <div class="inputCard">
                            <h3 class="label">Quittance de contribution</h3>
                            <select class="annee" v-model="listeCandidat.ModifierquittanceContribution" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>

                            </select>
                        </div>

                        <div class="inputCard">
                            <h3 class="label">Déclaration d'honneur de constitution</h3>
                            <select class="annee" v-model="listeCandidat.ModifierdeclarationHonneurConstitution" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>

                            </select>
                        </div>

                        <div class="inputCard">
                            <h3 class="label">Attestation d'investiture </h3>
                            <select class="annee" v-model="listeCandidat.ModifierattestationInvestiture" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>

                            </select>
                        </div>


                        <div class="inputCard">
                            <h3 class="label">Certificat de résidence </h3>
                            <select class="annee" v-model="listeCandidat.ModifiercertificatResidence" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>

                            </select>
                        </div>








                    </div>

                </div>
                <div class="modalFooter">
                    <h3 class="btnAdd add1" @click="modifier()">modifier</h3>
                    <h3 class="btnAdd cancel" @click="show.showModalModifierCandidat = !show.showModalModifierCandidat">
                        Annuler</h3>
                </div>
            </div>
        </div>

    </Transition>
</template>

<script setup>
import { useShow } from "@/stores/show";
const show = useShow(); //call Show in show.js
import { ref } from "vue";
import axios from "axios";

import { useAuth } from "@/stores/auth";
import { useUtilisateur } from "@/stores/utilisateur";
import { uselisteCandidat } from "@/stores/listeCandidat";
import { useAnneeElectorale } from "@/stores/anneeElectorale";



const auth = useAuth();
const utilisateur = useUtilisateur();
const listeCandidat = uselisteCandidat();
const anneeElectorale = useAnneeElectorale();


const filer = ref()
const onFileChange = async (event, electeurId) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
        console.log('rrrrrrrrrrrrr',listeCandidat.modifierCandidatData.candidat?.file?.titre);
        
        
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

.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 10px;
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