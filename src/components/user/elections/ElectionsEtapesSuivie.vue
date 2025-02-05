<template>
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Les étapes suivies dans le processus électoral à Madagascar</h2>
          <p class="mt-2 text-lg/8 text-gray-600">
            Voici les étapes suivies dans le processus électoral à Madagascar pour assurer une élection transparente et équitable.
          </p>
        </div>
  
        <!-- Contenu des étapes du processus électoral -->
        <div class="mt-16">
          <div class="space-y-10">
            <div>
              <h3 class="text-2xl font-semibold text-gray-900">Étape 1: Inscription des électeurs</h3>
              <p class="mt-2 text-gray-600">Les citoyens s'inscrivent pour voter. Cette étape inclut la vérification de l'identité et l'enregistrement des électeurs.</p>
            </div>
            <div>
              <h3 class="text-2xl font-semibold text-gray-900">Étape 2: Préparation des listes électorales</h3>
              <p class="mt-2 text-gray-600">Les listes des électeurs inscrits sont préparées et vérifiées pour s'assurer que tous les électeurs éligibles sont inclus.</p>
            </div>
            <div>
              <h3 class="text-2xl font-semibold text-gray-900">Étape 3: Campagne électorale</h3>
              <p class="mt-2 text-gray-600">Les candidats et les partis politiques mènent des campagnes pour obtenir des votes. Cette étape inclut des rassemblements, des débats et des publicités.</p>
            </div>
            <div>
              <h3 class="text-2xl font-semibold text-gray-900">Étape 4: Jour du vote</h3>
              <p class="mt-2 text-gray-600">Les électeurs se rendent aux bureaux de vote pour élire leurs représentants. Cette étape inclut la vérification de l'identité des électeurs et le vote.</p>
            </div>
            <div>
              <h3 class="text-2xl font-semibold text-gray-900">Étape 5: Dépouillement et annonce des résultats</h3>
              <p class="mt-2 text-gray-600">Les votes sont comptés et les résultats sont annoncés. Cette étape inclut la vérification des votes et la publication des résultats.</p>
            </div>
            <div>
              <h3 class="text-2xl font-semibold text-gray-900">Étape 6: Contestations et recours</h3>
              <p class="mt-2 text-gray-600">Les résultats peuvent être contestés et des recours peuvent être déposés. Cette étape inclut la résolution des litiges électoraux.</p>
            </div>
            <div>
              <h3 class="text-2xl font-semibold text-gray-900">Étape 7: Investiture des élus</h3>
              <p class="mt-2 text-gray-600">Les élus prennent leurs fonctions. Cette étape inclut la cérémonie d'investiture et la prise de fonction des nouveaux représentants.</p>
            </div>
          </div>
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
  