<template>
    <Transition>
        <div class="modal" v-if="show.showModalModifierCandidat">
            <div class="contenaireModal">
                <h1 class="tritreModal">MODIFIER INFORMATION PERSONNEL</h1>
                <div class="flex">

                    <div class="section">
                        <div class="inputCard">
                            <h3 class="label">Nom et prénom</h3>
                            <input type="text" placeholder="Ajoutez un nom" 
                            class="input" v-model="listeCandidat.ModifiernomComplet" />
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
                            <select class="annee"
                                v-model="listeCandidat.ModifierdeclarationHonneurBiens" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>

                            </select>
                        </div>


                        <div class="inputCard">
                            <h3 class="label"> Certificat de nationalité</h3>
                            <select class="annee"
                                v-model="listeCandidat.ModifiercertificatNationalite" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>

                            </select>
                        </div>

                        <div class="inputCard">
                            <h3 class="label"> Déclaration honneur des impôts</h3>
                            <select class="annee"
                                v-model="listeCandidat.ModifierdeclarationHonneurImpôts" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>

                            </select>
                        </div>


                        <div class="inputCard">
                            <h3 class="label"> Copie d'acte de naissance</h3>
                            <select class="annee"
                                v-model="listeCandidat.ModifiercopieActeNaissance" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>
                            </select>
                        </div>
                    </div>


                    <div class="section">

                        <div class="inputCard">
                            <h3 class="label"> Certificat d'administration fiscale</h3>
                            <select class="annee"
                                v-model="listeCandidat.ModifiercertificatAdministrationFiscale"
                                id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>

                            </select>
                        </div>

                        <div class="inputCard">
                            <h3 class="label"> Copie de carte électeur</h3>
                            <select class="annee"
                                v-model="listeCandidat.ModifiercopieCarteElecteur" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>

                            </select>
                        </div>

                        <div class="inputCard">
                            <h3 class="label"> Déclaration de probite</h3>
                            <select class="annee"
                                v-model="listeCandidat.ModifierdeclarationProbite" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>

                            </select>
                        </div>

                        <div class="inputCard">
                            <h3 class="label"> Copie de récipissé patrimoine</h3>
                            <select class="annee"
                                v-model="listeCandidat.ModifiercopieRecipissePatrimoine" id="">
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
                            <select class="annee" v-model="listeCandidat.ModifiercasierJudiciaire"
                                id="">
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
                            <select class="annee"
                                v-model="listeCandidat.Modifierannee_electorale_id" id="">
                                <option disabled value="">Sélectionner une année</option>
                                <option v-for="annee in anneeElectorale.allanneeData" :key=annee.id :value="annee.id">
                                    {{ annee.annee }}
                                    {{ annee.descriptionAnnee }}</option>
                            </select>
                        </div>




                        <div class="inputCard">
                            <h3 class="label"> Matrice support électronique</h3>
                            <select class="annee"
                                v-model="listeCandidat.ModifiermatriceSupportElectronique" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>

                            </select>
                        </div>


                        <div class="inputCard">
                            <h3 class="label">Quittance de contribution</h3>
                            <select class="annee"
                                v-model="listeCandidat.ModifierquittanceContribution" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>

                            </select>
                        </div>

                        <div class="inputCard">
                            <h3 class="label">Déclaration d'honneur de constitution</h3>
                            <select class="annee"
                                v-model="listeCandidat.ModifierdeclarationHonneurConstitution"
                                id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>

                            </select>
                        </div>

                        <div class="inputCard">
                            <h3 class="label">Attestation d'investiture </h3>
                            <select class="annee"
                                v-model="listeCandidat.ModifierattestationInvestiture" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>

                            </select>
                        </div>


                        <div class="inputCard">
                            <h3 class="label">Certificat de résidence </h3>
                            <select class="annee"
                                v-model="listeCandidat.ModifiercertificatResidence" id="">
                                <option disabled value="">Obtention</option>
                                <option value="oui">Oui</option>
                                <option value="non">Non</option>

                            </select>
                        </div>








                    </div>

                </div>
                <div class="modalFooter">
                    <h3 class="btnAdd add" @click="modifier()">modifier</h3>
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
import { useAuth } from "@/stores/auth";
import { useUtilisateur } from "@/stores/utilisateur";
import { uselisteCandidat } from "@/stores/listeCandidat";
import { useAnneeElectorale } from "@/stores/anneeElectorale";



const auth = useAuth();
const utilisateur = useUtilisateur();
const listeCandidat = uselisteCandidat();
const anneeElectorale = useAnneeElectorale();




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
    background-color: white;
    border-radius: 10px;
    margin: 0 auto;
    padding: 10px;
}

.tritreModal {
    color: #2c2b2b;
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
    color: rgb(56, 55, 55);
    font-weight: bold;
    font-size: 15px;
    padding-left: 5px;
    display: block;
    align-self: first baseline;

}

.contenu {
    color: #57565680;
    font-weight: bold;
    background-color: #302f2f13;
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

.itemContainer {
    width: 30%;
    margin: 10px 2px;
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

.btn {
    width: 25%;
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

.input {
    padding: 5px 10px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #aaaac5;
    background-color: #3c4c6d09;
    color: #5a5959;
}

input-placeholder {
    color: red;
}

.formulaire {
    display: flex;
    justify-content: space-around;
    background-color: rgba(213, 235, 235, 0.212);
    align-items: center;
}



.btnAdd {
    color: #fff;
    font-weight: 600;
    width: 50%;
    display: block;
    margin: 0 auto;
    text-align: center;
    background-color: rgb(34, 199, 83);
    padding: 5px 20px;
    border-radius: 5px;

}

.cancel {
    width: 100px !important;
    background-color: #fff !important;
    border: 2px solid rgb(34, 199, 83);
    color: rgb(34, 199, 83) !important;
}

.add {
    width: 100px !important;

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
    color: #5a5959;



}
</style>
