<template>
    <div class="bg-gray-100 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0 bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Pièces à fournir pour demande d'agrément</h2>
          <p class="mt-2 text-lg text-gray-600">
            Voici la liste des pièces nécessaires pour soumettre une demande d'agrément.
          </p>
        </div>
  
        <!-- Liste des pièces à fournir -->
        <div class="mt-16">
          <div class="space-y-10">
            <div class="bg-white p-8 rounded-lg shadow-lg">
              <h3 class="text-2xl font-semibold text-gray-900">Pièce d'identité</h3>
              <p class="mt-2 text-gray-600">
                Une copie de votre pièce d'identité (carte d'identité nationale, passeport, etc.).
              </p>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-lg">
              <h3 class="text-2xl font-semibold text-gray-900">Certificat de résidence</h3>
              <p class="mt-2 text-gray-600">
                Un certificat de résidence délivré par les autorités locales.
              </p>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-lg">
              <h3 class="text-2xl font-semibold text-gray-900">Extrait de casier judiciaire</h3>
              <p class="mt-2 text-gray-600">
                Un extrait de casier judiciaire récent.
              </p>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-lg">
              <h3 class="text-2xl font-semibold text-gray-900">Certificat de non-faillite</h3>
              <p class="mt-2 text-gray-600">
                Un certificat de non-faillite délivré par le tribunal compétent.
              </p>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-lg">
              <h3 class="text-2xl font-semibold text-gray-900">Attestation de paiement</h3>
              <p class="mt-2 text-gray-600">
                Une attestation de paiement des frais de dossier.
              </p>
            </div>
          </div>
        </div>
  
        <!-- Contenu supplémentaire -->
        <div class="mt-16 max-w-2xl mx-auto">
          <h3 class="text-2xl font-semibold text-gray-900">Informations supplémentaires</h3>
          <p class="mt-2 text-gray-600">
            Assurez-vous que tous les documents sont complets et à jour avant de soumettre votre demande.
          </p>
          <p class="mt-2 text-gray-600">
            Pour plus d'informations, veuillez contacter les autorités compétentes.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </template>
  
  <script setup>
  import Footer from "@/components/Footer.vue";
  </script>
  
  <style scoped>
  .footer {
    background-color: #e0e0e0;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  
  .footer-left p {
    margin: 0;
    font-size: 14px;
    color: #333;
  }
  
  .footer-right {
    display: flex;
    align-items: center;
  }
  
  .scroll-top-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .scroll-top-button i {
    font-size: 16px;
  }
  
  .fond {
    background-color: white;
  }
  </style>
  