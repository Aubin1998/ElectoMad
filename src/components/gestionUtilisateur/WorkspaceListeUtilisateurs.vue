<template>
    <div class="contenaire" v-if="show.showProvince">
        <div class="form">
            <div class="itemForm">

                <div class="formulaire" v-for="(item, index) in data.slice(0, 3)" :key="index">
                    <div class="cercle">
                        <h1>{{ item.nombrePopulation }}</h1>
                    </div>
                    <h4>{{ item.province }}</h4>

                    <h3 class="btnAdd" @click="show.showOptionProvince(item.province, item.district)">Voir</h3>
                </div>
            </div>

            <div class="itemForm">

                <div class="formulaire" v-for="(item, index) in data.slice(3, 6)" :key="index">
                    <div class="cercle">
                        <h1>{{ item.nombrePopulation }}</h1>
                    </div>
                    <h4>{{ item.province }}</h4>

                    <h3 class="btnAdd" @click="show.showOptionProvince(item.province, item.district)">Voir</h3>
                </div>
            </div>
        </div>
    </div>
    <WorkspaceProvinceElecteur v-if="show.showProvinceElecteur" />
    <WorkspaceDistrictElecteur v-if="show.listeCommune" />
    <WorkspaceCommuneElecteur v-if="show.listeFokontany" />
    <WorkspaceListeUtilisateursListe v-if="show.listePersonne" />





</template>

<script setup>
import WorkspaceProvinceElecteur from "@/components/gestionElecteurs/subComponentsListeElecteurs/WorkspaceProvinceElecteur.vue";
import WorkspaceDistrictElecteur from "@/components/gestionElecteurs/subComponentsListeElecteurs/WorkspaceDistrictElecteur.vue";
import WorkspaceCommuneElecteur from "@/components/gestionElecteurs/subComponentsListeElecteurs/WorkspaceCommuneElecteur.vue";
import WorkspaceListeUtilisateursListe from "@/components/gestionUtilisateur/WorkspaceListeUtilisateursListe.vue";


import { useShow } from "@/stores/show";
const show = useShow(); //call Show in show.js
const data = [
    //PROVINCE ANTANANARIVO
    {
        "province": "Antananarivo",
        "nombrePopulation": "1235",
        "district": [
            {
                "nomDistrict": "Ambohidratrimo",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Ambatolampy",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ankadikely",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Antanetibe",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Mahavelona",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Manjakarivo",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "AmbohidratrimoTanana",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanàna",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AntanetibeAntehiroka",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Mahitsy",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Manjakavahoaka",
                                "nombrePopulation": "6666",

                            }]
                    },
                    {
                        "nomCommune": "Anosiala",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambatomaro",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambodifasina",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohidroa",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ampangabe",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Andohanilakaka",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AnosialaTanàna",
                                "nombrePopulation": "6666",

                            }]
                    },
                    {
                        "nomCommune": "Fenoarivo",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohitrakely",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohitrambo",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Andakana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AnosizatoAmbony",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "FenoarivoTanàna",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Soamanandrariny",
                                "nombrePopulation": "6666",

                            }]
                    },
                    {
                        "nomCommune": "Ivato",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "AlakamisyFenoarivo",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambatolampy",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambodifasina",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohibaoAntehiroka",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "IvatoTanàna",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Soamanandrariny",
                                "nombrePopulation": "6666",

                            }]
                    },
                    {
                        "nomCommune": "Tanjombato",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "AmbatolampyAtsimo",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambatoroka",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambolokandrina",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Andoharanofotsy",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ankadindratombo",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanjombatoTanàna",
                                "nombrePopulation": "6666",

                            }]
                    }]
            },
            {
                "nomDistrict": "AntananarivoAvaradrano",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Ambohimangakely",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            }]
                    },
                    {
                        "nomCommune": "Andranonahoatra",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            }]
                    },
                    {
                        "nomCommune": "Ankadifotsy",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            }]
                    },
                    {
                        "nomCommune": "AnosizatoNord",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            }]
                    },
                    {
                        "nomCommune": "Mantasoa",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            }]
                    },
                    {
                        "nomCommune": "Tanjombato1",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            }]
                    },
                ]
            },
            {
                "nomDistrict": "AntananarivoRenivohitra",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Ambatomirahavavy",
                        "fokontany": [
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                        ]
                    },
                    {
                        "nomCommune": "Ambohijatovo",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                        ]
                    },
                    {
                        "nomCommune": "Andohan'Analamahitsy",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                        ]
                    },
                    {
                        "nomCommune": "Antananarivo",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                        ]
                    }]
            },
            {
                "nomDistrict": "Fenoarivo",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Ambodivona",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            }
                        ]
                    },
                    {
                        "nomCommune": "Ambohimiadana",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            }]
                    },
                    {
                        "nomCommune": "Ambohitralanana",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            }]
                    },
                    {
                        "nomCommune": "Ampitatafika",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            }]
                    },
                    {
                        "nomCommune": "Fenoarivo",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            }]
                    },
                    {
                        "nomCommune": "Manjakandriana",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            }]
                    },
                ]
            },
            {
                "nomDistrict": "Manjakandriana",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Ambatolampy1",
                        "fokontany": [
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            }]
                    },
                    {
                        "nomCommune": "Ampitatafika1",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            }, {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            }]
                    },
                    {
                        "nomCommune": "Andranomanelatra",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            }, {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            }]
                    },
                    {
                        "nomCommune": "Ankazobe",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            }, {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            }]
                    }, {
                        "nomCommune": "Fivoarana",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            }, {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            }]
                    }, {
                        "nomCommune": "Manjakandriana",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            }, {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            }]
                    }]
            },
            {
                "nomDistrict": "TananariveRural",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Ambohidratrimo1",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            }]
                    },
                    {
                        "nomCommune": "Andranonahoatra",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            }]
                    },
                    {
                        "nomCommune": "Anosizato",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            }]
                    },
                    {
                        "nomCommune": "Ivato1",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            }]
                    },
                    {
                        "nomCommune": "Manjakandriana2",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            }]
                    },
                    {
                        "nomCommune": "Mantasoa1",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",

                            }]
                    },
                ]
            },

        ]
    },

    //PROVINCE ANTSIRANANA
    {
        "province": "Antsiranana",
        "nombrePopulation": "1235",
        "district": [
            {
                //District AMBANJA
                "nomDistrict": "Ambanja",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Ambodimanga",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Ambohimarina",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Ankatafa",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Ankingameloko",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Anorotsangana",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Antafiambotry",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            }]
                    }]
            },

            //District AMBILOBE
            {
                "nomDistrict": "Ambilobe",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Ampondralava",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "AnamboranoIfasy",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "AnjiabeAmbony",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Beramanja",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Betsihaka",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Mantaly",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            }]
                    },]
            },
            //District ANTSIARANANA I
            {
                "nomDistrict": "AntsirananaI",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Commune AntsirananaI",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },]
            },
            //District ANTSIRANANA II
            {
                "nomDistrict": "AntsirananaII",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Andranovondronina",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "AnivoranoNord",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Joffreville",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Mahavanona",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Ramena",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Sajoavato",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },]
            },

            //District NOSY-BE
            {
                "nomDistrict": "Nosy Be",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Ambatoloaka",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Ampangorinana",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Andilana",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Dzamandzar",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Hell-Ville",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Madirovalo",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },]
            },

        ]

    },

    //PROVINCE FIANARANTSOA
    {
        "province": "Fianarantsoa",
        "nombrePopulation": "1235",
        "district": [
            {
                //District AMBALAVAO
                "nomDistrict": "Ambalavao",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Ambalavao",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Andrainjato",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Anjoma",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Besoa",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Miarinarivo",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Namoly",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            }]
                    }]
            },

            //District AMBOHIMAHASOA
            {
                "nomDistrict": "Ambohimahasoa",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Ankerana",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Isaka",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Sahatona",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Sahave",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Tsarafidy",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Vohiposy",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            }]
                    },]
            },
            //District FIANARANTSOA
            {
                "nomDistrict": "Fianarantsoa",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        //Arrondissement FIANARANTSOA
                        "nomCommune": "AndrainjatoAtsimo",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambatoharanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambatomainty",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambodikavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Igaga",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Soatsihadino",
                                "nombrePopulation": "6666",

                            },
                        ]
                    },
                    {
                        "nomCommune": "AndrainjatoAvaratra",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalabe",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolahyV",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Anjaninoro",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AntanifotsyV",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Beravina",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Idanda",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Lalazana",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambatofolaka",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolahyII",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambodiharana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Amontana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Mahazengy",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Mandriandalana",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Manolafaka",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambahisamotra",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambalavato",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambany",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Andremboasary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ankofafa",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Maromby",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "TanànaAmbany",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambatomena",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AnkofafaAmbony",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Antarandolo",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Antsororokavo",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Bateravola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Isada",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "TanànaAmbony",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalandapa",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambalapaiso",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambatolahikosoa",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambatovory",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambodiharana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ampitakely",
                                "nombrePopulation": "6666",
                            }]
                    },]
            },
            //District IKALAMAVONY 
            {
                "nomDistrict": "Ikalamavony",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Ambatomainty",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Bekisopa",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Fitampito",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Ikalamavony",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Mangidy",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Solila",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },]
            },

            //District ISANDRA
            {
                "nomDistrict": "Isandra",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Ambondrona",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Fanjakana",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Isorana",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Mahazoarivo",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Nasandratrony",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Soatanana",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },]
            },

            //District LALANGINA
            {
                "nomDistrict": "Lalangina",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Ambalakely",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Ampangabe",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Ampatsy",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Fandrandava",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Safata",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Taindambo",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },]
            },

        ]

    },

    //PROVINCE MAHAJANGA
    {
        "province": "Mahajanga",
        "nombrePopulation": "1235",
        "district": [
            {
                //District AMBATO-BOENY
                "nomDistrict": "Ambato-Boeny",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Ambato-Boeny",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Ambesisika",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Ambondromamy",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Andranofasika",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Andranomamy",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Anjiajia",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            }]
                    }]
            },

            //District MAHAJANGAI
            {
                "nomDistrict": "MahajangaI",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "MahajangaI",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambondrona",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ampandrianjaka",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Antsanitia",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Belo",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Besalampy",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "MahajangaKely",
                                "nombrePopulation": "6666",
                            }]
                    },
                ]
            },
            //District MAHAJANGA II
            {
                "nomDistrict": "MahajangaII",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        //Commune MAHAJANGA II
                        "nomCommune": "Ambalakida",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambatoharanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambatomainty",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambodikavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Igaga",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Soatsihadino",
                                "nombrePopulation": "6666",

                            },
                        ]
                    },
                    {
                        "nomCommune": "Bekobay",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalabe",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolahyV",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Anjaninoro",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AntanifotsyV",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Beravina",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Idanda",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Belobaka",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambatofolaka",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolahyII",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambodiharana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Amontana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Mahazengy",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Mandriandalana",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Betsako",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambahisamotra",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambalavato",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambany",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Andremboasary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ankofafa",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Maromby",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Boanamary",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambatomena",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AnkofafaAmbony",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Antarandolo",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Antsororokavo",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Bateravola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Isada",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Mariarano",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalandapa",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambalapaiso",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambatolahikosoa",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambatovory",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambodiharana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ampitakely",
                                "nombrePopulation": "6666",
                            }]
                    },]
            },
            //District MAROVOAY 
            {
                "nomDistrict": "Marovoay",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Ambolomoty",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Ankaraobato",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Ankazomborona",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Antanimasaka",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Lazaret Nord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Place Kabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Bemaharivo",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Tsararano",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },]
            },

            //District MITSINJO
            {
                "nomDistrict": "Mitsinjo",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Ambarimaninga",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Antseza",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Bekipay",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Katsepy",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Matsakabanja",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Mitsinjo",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },]
            },

            //District SOALALA
            {
                "nomDistrict": "Soalala",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Ambohipaky",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Andranomavo",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Soalala",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                ]
            },

        ]

    },


    //PROVINCE TOAMASINA
    {
        "province": "Toamasina",
        "nombrePopulation": "1235",
        "district": [
            {
                //District TOAMASINA
                "nomDistrict": "Fenoarivo Atsinanana",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Ambatoharanana",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Ampasina Maningory",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Fenoarivo Atsinanana",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Mahambo",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Vohilengo",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Vohipeno",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            }]
                    }]
            },

            //District SAINTE MARIE
            {
                "nomDistrict": "Sainte Marie",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Sainte Marie",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambodiforaha",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambodifotatra",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Aniribe",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ankirihiry",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Mangalomaso",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "FokontanyVohilava",
                                "nombrePopulation": "6666",
                            }]
                    },
                ]
            },
            //District SOANIERANA IVONGO
            {
                "nomDistrict": "Soanierana Ivongo",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        //Commune SOANIERANA IVONGO
                        "nomCommune": "Ambahoabe",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambatoharanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambatomainty",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambodikavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Igaga",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Soatsihadino",
                                "nombrePopulation": "6666",

                            },
                        ]
                    },
                    {
                        "nomCommune": "Ambodiampana",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalabe",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolahyV",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Anjaninoro",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AntanifotsyV",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Beravina",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Idanda",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Andapafito",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambatofolaka",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolahyII",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambodiharana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Amontana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Mahazengy",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Mandriandalana",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Antanifotsy",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambahisamotra",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambalavato",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambany",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Andremboasary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ankofafa",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Maromby",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Antenina",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambatomena",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AnkofafaAmbony",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Antarandolo",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Antsororokavo",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Bateravola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Isada",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Fotsialanana",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalandapa",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambalapaiso",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambatolahikosoa",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambatovory",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambodiharana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ampitakely",
                                "nombrePopulation": "6666",
                            }]
                    },]
            },
            //District TAMATAVE I 
            {
                "nomDistrict": "TamataveI",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Ambodimanga",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Ankirihiry",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Firaisana Anjoma",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Morarano",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "TanambaoV",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                ]
            },

            //District TAMATAVE II
            {
                "nomDistrict": "TamataveII",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Ambodiriana",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Ampasimbe Onibe",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Andondabe",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Antetezambaro",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Foulpointe",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Ifito",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },]
            },

            //District VAVATENINA
            {
                "nomDistrict": "Vavatenina",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Ambodimangavalo",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Ambohibe",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Ampasimazava",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Andasibe",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Anjahambe",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Maromitety",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                ]
            },

        ]

    },


    //PROVINCE TOLIARA 
    {
        "province": "Toliara",
        "nombrePopulation": "1235",
        "district": [
            {
                //District TOLIARA
                "nomDistrict": "Ampanihy",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Amboropotsy",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Ampanihy",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Androka",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Ankilizato",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Beahitse",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Vohitany",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "Ambohibao",
                                "nombrePopulation": "6666",
                            },
                            {
                                "nomFokontany": "AmbohidratrimoTanana",
                                "nombrePopulation": "6666",
                            }]
                    }]
            },

            //District ANKAZOABO
            {
                "nomDistrict": "Ankazoabo",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Andranomafana",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Ankazoabo",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Berenty",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Tandrano",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolampyGara",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambohipanja",
                                "nombrePopulation": "6666",
                            }]
                    },
                ]
            },
            //District MOROMBE
            {
                "nomDistrict": "Morombe",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        //Commune MOROMBE
                        "nomCommune": "Ambahikily",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambatoharanana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambatomainty",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambodikavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Igaga",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Soatsihadino",
                                "nombrePopulation": "6666",

                            },
                        ]
                    },
                    {
                        "nomCommune": "Antanimeva",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalabe",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolahyV",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Anjaninoro",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AntanifotsyV",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Beravina",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Idanda",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Antongo Vaovao",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambatofolaka",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AmbatolahyII",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambodiharana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Amontana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Mahazengy",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Mandriandalana",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Basibasy",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambahisamotra",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambalavato",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambany",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Andremboasary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ankofafa",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Maromby",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Befandefa",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambatomena",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "AnkofafaAmbony",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Antarandolo",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Antsororokavo",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Bateravola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Isada",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Morombe",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalandapa",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambalapaiso",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambatolahikosoa",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambatovory",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ambodiharana",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ampitakely",
                                "nombrePopulation": "6666",
                            }]
                    },]
            },
            //District SAKARAHA 
            {
                "nomDistrict": "Sakaraha",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Ambinany",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Amboronabo",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Andranolava",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Bereketa",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Mahaboboka",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Miary",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },]
            },

            //District TOLIARA
            {
                "nomDistrict": "ToliaraI",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "ToliaraI",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Amborovy",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Ankilibe",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Belalanda",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Betafo",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Mahaiza",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Mahavatse",
                                "nombrePopulation": "6666",
                            }]
                    },
                ]
            },

            //District TOLIARA II
            {
                "nomDistrict": "ToliaraII",
                "nombrePopulation": "6666",
                "commune": [
                    {
                        "nomCommune": "Ambolofoty",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Andranovory",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Ankililoake",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Beheloke",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Behompy",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },
                    {
                        "nomCommune": "Mandrofify",
                        "nombrePopulation": "6666",
                        "fokontany": [
                            {
                                "nomFokontany": "Ambalavola",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "LazaretNord",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Morafeno",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "PlaceKabary",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "Scama",
                                "nombrePopulation": "6666",

                            },
                            {
                                "nomFokontany": "TanambaoV",
                                "nombrePopulation": "6666",
                            }]
                    },]
            },

        ]

    },

]
console.log(typeof (data[0].district));

/*data.map((item) => {
    console.log(item);
})*/
</script>

<style scoped>
.contenaire {
    padding-top: 20px;
}

.form {
    width: 100%;
    margin-bottom: 20px;
}

.form h4 {
    font-weight: 600;
    padding: 10px;
}

.itemForm {
    display: flex;
    justify-content: space-around;
    align-items: center;
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

.subtitle {
    width: 70%;
    padding-left: 20px;
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
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #aaaac5;
    background-color: #3c4c6d09;
    color: #fff;
}

input-placeholder {
    color: red;
}

.formulaire {
    width: 25%;

    background-color: rgba(128, 221, 133, 0.13);
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 10px 5px;
    border-radius: 5px;
    padding: 10px 0px;
}

.cercle {
    width: 120px;
    height: 120px;
    background-color: rgb(180, 245, 180);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 100%;
}

.cercle h1 {
    font-weight: 600;
    color: rgba(112, 105, 105, 0.74);
}

.add {
    width: 100px !important;
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

.btnAdd h3:hover {
    background-color: rgb(101, 230, 140);
}
</style>