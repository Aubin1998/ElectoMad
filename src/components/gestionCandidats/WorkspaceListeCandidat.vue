<template>
    <div class="list">
        <div class="titre">
            <h4 class="subtitle">
                Liste des candidats
            </h4>
            <h4 class="number">{{ }}</h4>
            <div class="itemContainer"> <i class="pi pi-search icon1"></i>
                <input type="text" v-model="searchTerm" placeholder="Recherche nom candidat" class="input" />
                <h3 class="btnAdd add" @click="show.showModalAjoutFunc">
                    <i class="pi pi-plus" style="font-size: 16px; color: white;left: 0;"></i>

                </h3>

            </div>
        </div>
        <div class="scroll-container">




            <div class="relative overflow-x-auto shadow-md sm:rounded-lg down">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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







        <div class="modal" v-if="show.showModalAjout">
            <div class="contenaireModal">
                <h1 class="tritreModal">AJOUT NOUVEAU CANDIDAT</h1>
                <div class="flex">
                    <div class="section">
                        <div class="inputCard">
                            <h3 class="label">Nom et prénom</h3>
                            <input type="text" placeholder="Ajoutez un nom" class="input"
                                v-model="listeCandidat.nomComplet" />
                        </div>
                        <div class="flexCard">
                            <div class="inputCard">
                                <h3 class="label">Date </h3>
                                <input type="text" placeholder="Insérez une date de naissance" class="input"
                                    v-model="listeCandidat.dateNaissance" />
                            </div>
                            <div class="inputCard">
                                <h3 class="label">Lieu de naissance</h3>
                                <input type="text" placeholder="Insérez un lieu de naissance" class="input"
                                    v-model="listeCandidat.lieuNaissance" />
                            </div>
                        </div>
                        <div class="inputCard">
                            <h3 class="label">Sexe</h3>
                            <input type="text" placeholder="Ajoutez un sexe" class="input"
                                v-model="listeCandidat.sexe" />
                        </div>
                        <div class="inputCard">
                            <h3 class="label">Filiation</h3>
                            <input type="text" placeholder="Nom du père et de la mère" class="input"
                                v-model="listeCandidat.filiation" />
                        </div>
                        <div class="inputCard">
                            <h3 class="label">Email</h3>
                            <input type="text" placeholder="Entrez son email" class="input"
                                v-model="listeCandidat.email" />
                        </div>
                        <div class="inputCard">
                            <h3 class="label"> Déclaration honneur des biens</h3>
                            <select class="annee" v-model="listeCandidat.declarationHonneurBiens" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>

                            </select>
                        </div>
                        <div class="inputCard">
                            <h3 class="label"> Certificat de nationalité</h3>
                            <select class="annee" v-model="listeCandidat.certificatNationalite" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>
                            </select>
                        </div>
                        <div class="inputCard">
                            <h3 class="label"> Déclaration honneur des impôts</h3>
                            <select class="annee" v-model="listeCandidat.declarationHonneurImpôts" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>

                            </select>
                        </div>
                        <div class="inputCard">
                            <h3 class="label"> Copie d'acte de naissance</h3>
                            <select class="annee" v-model="listeCandidat.copieActeNaissance" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>
                            </select>
                        </div>
                    </div>
                    <div class="section">
                        <div class="inputCard">
                            <h3 class="label"> Certificat d'administration fiscale</h3>
                            <select class="annee" v-model="listeCandidat.certificatAdministrationFiscale" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>
                            </select>
                        </div>
                        <div class="inputCard">
                            <h3 class="label"> Copie de carte électeur</h3>
                            <select class="annee" v-model="listeCandidat.copieCarteElecteur" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>
                            </select>
                        </div>
                        <div class="inputCard">
                            <h3 class="label"> Déclaration de probite</h3>
                            <select class="annee" v-model="listeCandidat.declarationProbite" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>
                            </select>
                        </div>
                        <div class="inputCard">
                            <h3 class="label"> Copie de récipissé patrimoine</h3>
                            <select class="annee" v-model="listeCandidat.copieRecipissePatrimoine" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>
                            </select>
                        </div>
                        <div class="inputCard">
                            <h3 class="label">Numéro de la CIN</h3>
                            <input type="text" placeholder="Insérez un numéro de la CIN" class="input"
                                v-model="listeCandidat.numeroCIN" />
                        </div>
                        <div class="flexCard">
                            <div class="inputCard">
                                <h3 class="label">Date </h3>
                                <input type="text" placeholder="Insérez une date de délivrance de la CIN" class="input"
                                    v-model="listeCandidat.dateDelivreCIN" />
                            </div>
                            <div class="inputCard">
                                <h3 class="label">Lieu de délivrance CIN</h3>
                                <input type="text" placeholder="Insérez un lieu de délivrance de la CIN" class="input"
                                    v-model="listeCandidat.lieuDelivreCIN" />
                            </div>
                        </div>
                        <div class="inputCard">
                            <h3 class="label">Adresse ou le lieu de résidence</h3>
                            <input type="text" placeholder="Insérez une adresse ou le lieu de résidence" class="input"
                                v-model="listeCandidat.adresse" />
                        </div>
                        <div class="inputCard">
                            <h3 class="label">Profession</h3>
                            <input type="text" placeholder="Ajoutez un profession" class="input"
                                v-model="listeCandidat.profession" />
                        </div>
                        <div class="inputCard">
                            <h3 class="label"> Casier judiciaire</h3>
                            <select class="annee" v-model="listeCandidat.casierJudiciaire" id="">
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
                                v-model="listeCandidat.carteElecteur" />
                        </div>
                        <div class="inputCard">
                            <h3 class="label">Téléphone</h3>
                            <input type="text" placeholder="Ecrire votre numéro de téléphone" class="input"
                                v-model="listeCandidat.telephone" />
                        </div>
                        <div class="inputCard">
                            <h3 class="label">Date d'inscription</h3>
                            <input type="text" placeholder="Ecrire la date d'inscription" class="input"
                                v-model="listeCandidat.dateInscription" />
                        </div>
                        <div class="inputCard">
                            <h3 class="label"> Année électorale</h3>
                            <select class="annee" v-model="listeCandidat.annee_electorale_id" id="">
                                <option disabled value="">Sélectionner une année</option>
                                <option v-for="annee in anneeElectorale.allanneeData" :key=annee.id :value="annee.id">
                                    {{ annee.annee }}
                                    {{ annee.descriptionAnnee }}</option>
                            </select>
                        </div>
                        <div class="inputCard">
                            <h3 class="label"> Matrice support électronique</h3>
                            <select class="annee" v-model="listeCandidat.matriceSupportElectronique" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>
                            </select>
                        </div>
                        <div class="inputCard">
                            <h3 class="label">Quittance de contribution</h3>
                            <select class="annee" v-model="listeCandidat.quittanceContribution" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>
                            </select>
                        </div>
                        <div class="inputCard">
                            <h3 class="label">Déclaration d'honneur de constitution</h3>
                            <select class="annee" v-model="listeCandidat.declarationHonneurConstitution" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>
                            </select>
                        </div>
                        <div class="inputCard">
                            <h3 class="label">Attestation d'investiture </h3>
                            <select class="annee" v-model="listeCandidat.attestationInvestiture" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>
                            </select>
                        </div>
                        <div class="inputCard">
                            <h3 class="label">Certificat de résidence </h3>
                            <select class="annee" v-model="listeCandidat.certificatResidence" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modalFooter">
                    <h3 class="btnAdd add1" @click="ajouter()">Ajouter</h3>
                    <h3 class="btnAdd cancel" @click="show.showModalAjoutFunc">Fermer</h3>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, computed } from 'vue'
import { useShow } from "@/stores/show";
import { useAuth } from "@/stores/auth";
import { useUtilisateur } from "@/stores/utilisateur";
import { uselisteCandidat } from "@/stores/listeCandidat";
import { useAnneeElectorale } from "@/stores/anneeElectorale";

const show = useShow(); //call Show in show.js
const auth = useAuth();
const utilisateur = useUtilisateur();
const listeCandidat = uselisteCandidat();
const anneeElectorale = useAnneeElectorale();

function voir(item) {
    listeCandidat.voirCandidatData = item
    show.showModalOeilCandidat = !show.showModalOeilCandidat
}
function ajouter() {
    listeCandidat.createCandidat()
}
function supprimer(item) {
    show.showModalSupprimer = true
    listeCandidat.supprimerData = item
}
function modifier(item) {
    console.log('azertyuiop', item);
    listeCandidat.modifierCandidatData = item
    show.showModalModifierCandidat = !show.showModalModifierCandidat
    listeCandidat.ModifierIdCandidat = item.candidat.id
    listeCandidat.ModifierdeclarationHonneurBiens = item.candidat.declarationHonneurBiens
    listeCandidat.ModifiercertificatNationalite = item.candidat.certificatNationalite
    listeCandidat.ModifierdeclarationHonneurImpôts = item.candidat.declarationHonneurImpôts
    listeCandidat.ModifiercertificatAdministrationFiscale = item.candidat.certificatAdministrationFiscale
    listeCandidat.ModifiercopieCarteElecteur = item.candidat.copieCarteElecteur
    listeCandidat.ModifierdeclarationProbite = item.candidat.declarationProbite
    listeCandidat.ModifiercopieRecipissePatrimoine = item.candidat.copieRecipissePatrimoine
    listeCandidat.ModifiermatriceSupportElectronique = item.candidat.matriceSupportElectronique
    listeCandidat.ModifierquittanceContribution = item.candidat.quittanceContribution
    listeCandidat.ModifierdeclarationHonneurConstitution = item.candidat.declarationHonneurConstitution
    listeCandidat.ModifierattestationInvestiture = item.candidat.attestationInvestiture
    listeCandidat.ModifiercertificatResidence = item.candidat.certificatResidence
    listeCandidat.ModifiercasierJudiciaire = item.candidat.casierJudiciaire
    listeCandidat.ModifiercopieActeNaissance = item.candidat.copieActeNaissance
    listeCandidat.Modifierannee_electorale_id = item.candidat.annee_electorale_id

    listeCandidat.Modifierelecteur_id = item.candidat.electeur_id
    listeCandidat.ModifiernomComplet = item.electeur.nomComplet
    listeCandidat.Modifierprofession = item.electeur.profession
    listeCandidat.Modifieradresse = item.electeur.adresse
    listeCandidat.ModifiernumeroCIN = item.electeur.numeroCIN
    listeCandidat.ModifierdateDelivreCIN = item.electeur.dateDelivreCIN
    listeCandidat.ModifierlieuDelivreCIN = item.electeur.lieuDelivreCIN
    listeCandidat.ModifiercarteElecteur = item.electeur.carteElecteur
    listeCandidat.Modifiersexe = item.electeur.sexe
    listeCandidat.ModifierlieuNaissance = item.electeur.lieuNaissance
    listeCandidat.Modifierfiliation = item.electeur.filiation
    listeCandidat.ModifierdateNaissance = item.electeur.dateNaissance
    listeCandidat.Modifiertelephone = item.electeur.telephone
    listeCandidat.ModifierdateInscription = item.electeur.dateInscription
    listeCandidat.Modifieremail = item.user.email
    listeCandidat.Modifieruser_id = item.user.id
}

const searchTerm = ref('');
const filteredCandidats = computed(() => {
    if (!searchTerm.value) {
        return listeCandidat.allListeCandidat;
    } return listeCandidat.allListeCandidat.filter(item => {
        return item.electeur.nomComplet.toLowerCase().includes(searchTerm.value.toLowerCase());
    });
});
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
    color: #8b8787;  /* Couleur initiale du placeholder */
    font-style: italic;  /* Optionnel: pour ajouter un style en italique */
    transition: color 0.3s ease;  /* Transition fluide quand la couleur change */
}

.input:focus::placeholder {
    color: #bebaba;  /* Couleur du placeholder quand l'input est focusé */
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