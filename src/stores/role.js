import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import { useShow } from "@/stores/show";
import { useUrl } from "@/stores/url";
import axios from "axios";
import { useAuth } from "./auth";
import { useUtilisateur } from "./utilisateur";

export const useRole = defineStore('Role', () => {
    const show = useShow();
    const URL = useUrl().url;
    const auth = useAuth();
    const utilisateur = useUtilisateur();

    const roleChoisi = ref(null);
    const nomRole = ref('');
    const description = ref('');
    const allRolesData = ref([]);
    const voirData = ref(null);
    const modifierData = ref(null);
    const enregistrerData = ref(null);
    const supprimerData = ref(null);
    const filteredRoles = ref([]);
    const allRoles = ref([]);
    const mdpGenerate = ref('')

    function getRoles() {
        show.showSpinner = true;
        axios.get(`${URL}/api/roles`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if (response.status === 200) {
                allRolesData.value = response.data;
                show.showAlert = true;
                show.showAlertType = 'success';
                show.showAlertMessage = 'Rôles récupérés avec succès';
            } else {
                show.showAlert = true;
                show.showAlertType = 'warning';
                show.showAlertMessage = 'Échec de la récupération des rôles';
            }

            setTimeout(() => {
                show.showAlert = false;
                show.showAlertType = '';
                show.showAlertMessage = '';
            }, 3000);
        }).catch((err) => {
            show.showAlertType = 'danger';
            show.showAlertMessage = 'Erreur lors de la récupération des rôles';
            console.error(err);

            setTimeout(() => {
                show.showAlert = false;
                show.showAlertType = '';
                show.showAlertMessage = '';
            }, 3000);
        }).finally(() => {
            show.showSpinner = false;
        });
    }

    function createRole(roleName) {
        let formData = {
            nomRole: roleName,
            description: 'new'
        };

        show.showSpinner = true;
        axios.post(`${URL}/api/roles`, formData, {
            headers: {
                Authorization: `Bearer ${auth.token}`
            }
        }).then((response) => {
            if (response.status === 201) {
                getRoles();
                show.showAlert = true;
                show.showAlertType = 'success';
                show.showAlertMessage = 'Rôle créé avec succès';
                getRoles()
            } else {
                show.showAlert = true;
                show.showAlertType = 'warning';
                show.showAlertMessage = 'Échec de la création du rôle';
            }

            setTimeout(() => {
                show.showAlert = false;
                show.showAlertType = '';
                show.showAlertMessage = '';
            }, 3000);
        }).catch((err) => {
            show.showAlertType = 'danger';
            show.showAlertMessage = 'Erreur lors de la création du rôle';
            console.error(err);

            setTimeout(() => {
                show.showAlert = false;
                show.showAlertType = '';
                show.showAlertMessage = '';
            }, 3000);
        }).finally(() => {
            show.showSpinner = false;
        });
    }

    function updateRole(id) {
        let updatedRole = {
            nomRole: nomRole.value,
            description: description.value
        };

        show.showSpinner = true;
        axios.put(`${URL}/api/roles/${id}`, updatedRole, {
            headers: {
                Authorization: `Bearer ${auth.token}`
            }
        }).then((response) => {
            if (response.status === 200) {
                getRoles();
                show.showAlert = true;
                show.showAlertType = 'success';
                show.showAlertMessage = 'Rôle mis à jour avec succès';
            } else {
                show.showAlert = true;
                show.showAlertType = 'warning';
                show.showAlertMessage = 'Échec de la mise à jour du rôle';
            }

            setTimeout(() => {
                show.showAlert = false;
                show.showAlertType = '';
                show.showAlertMessage = '';
            }, 3000);
        }).catch((err) => {
            show.showAlertType = 'danger';
            show.showAlertMessage = 'Erreur lors de la mise à jour du rôle';
            console.error(err);

            setTimeout(() => {
                show.showAlert = false;
                show.showAlertType = '';
                show.showAlertMessage = '';
            }, 3000);
        }).finally(() => {
            show.showSpinner = false;
        });
    }

    function deleteRole(id) {
        show.showSpinner = true;
        axios.delete(`${URL}/api/roles/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if (response.status === 204) {
                show.showModalAnneSupprimer = false;
                getRoles();
                show.showAlert = true;
                show.showAlertType = 'success';
                show.showAlertMessage = 'Rôle supprimé avec succès';
            } else {
                show.showAlert = true;
                show.showAlertType = 'warning';
                show.showAlertMessage = 'Échec de la suppression du rôle';
            }

            setTimeout(() => {
                show.showAlert = false;
                show.showAlertType = '';
                show.showAlertMessage = '';
            }, 3000);
        }).catch((err) => {
            show.showAlertType = 'danger';
            show.showAlertMessage = 'Erreur lors de la suppression du rôle';
            console.error(err);

            setTimeout(() => {
                show.showAlert = false;
                show.showAlertType = '';
                show.showAlertMessage = '';
            }, 3000);
        }).finally(() => {
            show.showSpinner = false;
        });
    }

    onMounted(() => {
        getRoles();
    });

    return {
        mdpGenerate,
        allRoles,
        filteredRoles,
        roleChoisi,
        supprimerData,
        enregistrerData,
        modifierData,
        voirData,
        allRolesData,
        description,
        nomRole,
        getRoles,
        createRole,
        updateRole,
        deleteRole
    };
});
