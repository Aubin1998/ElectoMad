<template>
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Texte pour les élections</h2>
          <p class="mt-2 text-lg/8 text-gray-600">
           Texte pour les élections .
          </p>
        </div>
  
        <!-- Contenu du texte pour les élections -->
        <div class="mt-16">
          <div class="space-y-10">
            <div>
              <h3 class="text-2xl font-semibold text-gray-900">Introduction</h3>
              <p class="mt-2 text-gray-600">
                Les élections à Madagascar sont un processus démocratique crucial pour le pays. Elles permettent aux citoyens de choisir leurs représentants et de participer activement à la gouvernance.
              </p>
            </div>
            <div>
              <h3 class="text-2xl font-semibold text-gray-900">Importance des élections</h3>
              <p class="mt-2 text-gray-600">
                Les élections jouent un rôle essentiel dans la démocratie en permettant aux citoyens de faire entendre leur voix et de choisir leurs dirigeants. Elles assurent la légitimité du gouvernement et la représentation du peuple.
              </p>
            </div>
            <div>
              <h3 class="text-2xl font-semibold text-gray-900">Processus électoral</h3>
              <p class="mt-2 text-gray-600">
                Le processus électoral à Madagascar comprend plusieurs étapes, de l'inscription des électeurs à la proclamation des résultats. Chaque étape est cruciale pour garantir des élections libres et équitables.
              </p>
            </div>
            <div>
              <h3 class="text-2xl font-semibold text-gray-900">Participation des citoyens</h3>
              <p class="mt-2 text-gray-600">
                La participation des citoyens est essentielle pour le succès des élections. Chaque citoyen a le droit et le devoir de voter pour contribuer à la démocratie et au développement du pays.
              </p>
            </div>
            <div>
              <h3 class="text-2xl font-semibold text-gray-900">Rôle des institutions électorales</h3>
              <p class="mt-2 text-gray-600">
                Les institutions électorales jouent un rôle clé dans l'organisation et la supervision des élections. Elles veillent à ce que le processus soit transparent, équitable et conforme aux lois en vigueur.
              </p>
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
  