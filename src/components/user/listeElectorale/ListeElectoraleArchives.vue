<template>
    <div class="bg-gray-100 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0 bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Archives électorales</h2>
          <p class="mt-2 text-lg text-gray-600">
            Consultez les archives des élections passées pour obtenir des informations détaillées sur les résultats, les candidats et les événements électoraux.
          </p>
        </div>
  
        <!-- Liste des archives électorales -->
        <div class="mt-16">
          <div class="space-y-10">
            <div v-for="election in elections" :key="election.id" class="bg-white p-8 rounded-lg shadow-lg">
              <h3 class="text-2xl font-semibold text-gray-900">{{ election.title }}</h3>
              <p class="mt-2 text-gray-600">{{ election.description }}</p>
              <p class="mt-2 text-gray-600"><strong>Date:</strong> {{ election.date }}</p>
              <p class="mt-2 text-gray-600"><strong>Résultats:</strong> {{ election.results }}</p>
              <p class="mt-2 text-gray-600"><strong>Candidats:</strong> {{ election.candidates.join(', ') }}</p>
            </div>
          </div>
        </div>
  
        <!-- Contenu supplémentaire -->
        <div class="mt-16 max-w-2xl mx-auto">
          <h3 class="text-2xl font-semibold text-gray-900">Informations supplémentaires</h3>
          <p class="mt-2 text-gray-600">
            Pour plus d'informations sur les archives électorales, veuillez contacter les autorités compétentes.
          </p>
        </div>
      </div>
    </div>

    <Footer/>

  </template>
  
  <script setup>
  import Footer from "@/components/Footer.vue";
  
  const elections = [
    {
      id: 1,
      title: "Élection présidentielle 2020",
      description: "Résultats et détails de l'élection présidentielle de 2020.",
      date: "Novembre 2020",
      results: "Candidat A: 55%, Candidat B: 45%",
      candidates: ["Candidat A", "Candidat B"]
    },
    {
      id: 2,
      title: "Élection législative 2018",
      description: "Résultats et détails de l'élection législative de 2018.",
      date: "Juin 2018",
      results: "Parti X: 40%, Parti Y: 35%, Parti Z: 25%",
      candidates: ["Parti X", "Parti Y", "Parti Z"]
    },
    {
      id: 3,
      title: "Élection municipale 2016",
      description: "Résultats et détails de l'élection municipale de 2016.",
      date: "Mars 2016",
      results: "Candidat C: 60%, Candidat D: 40%",
      candidates: ["Candidat C", "Candidat D"]
    }
    // Ajoutez plus d'élections si nécessaire
  ];
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
  