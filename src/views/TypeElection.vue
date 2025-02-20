<template>
  <div class="flex flex-col h-[86.5vh]">
    <main class="flex-1 flex flex-col items-center justify-center foo">
      <h1 class="text-xl font-bold" style="color: #0A2753;">Définition des différentes élections</h1>




      <div id="accordion-color" class=" justify-cente pt-5 max-auto md:w-6/12" style="width: 100%;">
        <h2 id="accordion-color-heading-1">
          <button type="button"
            class="flex items-center bg-[#EFF6FF] shadow-xl justify-between w-full p-5 font-medium rounded-t-xl dark:border-gray-700 mb-8 text-blue-500 gap-3"
            @click="toggleAccordion(1)" :aria-expanded="isOpen(1)" aria-controls="accordion-color-body-1">
            <span>Élection Présidentielle 🏛️</span>
            <svg class="w-3 h-3 shrink-0 transition-transform duration-200" :class="{ 'rotate-180': isOpen(1) }"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        <div id="accordion-color-body-1" :class="{ hidden: !isOpen(1) }" aria-labelledby="accordion-color-heading-1">
          <div class="p-5 border border-t-0">
            <p class="mb-2 text-gray-900 dark:text-gray-700">
              L'élection présidentielle est le processus par lequel les citoyens élisent le  <span class="text-blue-800">Président de la République</span>  .
              Ce
              dernier est le chef de l'État et détient des pouvoirs exécutifs importants. Le mandat présidentiel dure
              <span class="text-blue-800">cinq
                ans</span>  et est renouvelable une fois.
            </p>
            <p class="mb-2 text-gray-900 dark:text-gray-700">
              Le mode de scrutin pour l'élection présidentielle est uninominal majoritaire à deux tours. Cela signifie
              que
              si aucun candidat n'obtient la majorité absolue des suffrages au premier tour, un second tour est organisé
              entre les deux candidats ayant obtenu le          <span class="text-blue-800">plus de voix</span> .
            </p>
            <p class="mb-2 text-gray-900 dark:text-gray-700">
              Pour se présenter, un candidat doit être parrainé par    <span class="text-blue-800">au moins 500 élus</span>  , répartis sur au moins 30
              départements. Ce système vise à éviter les candidatures fantaisistes et à
              garantir un certain niveau de représentativité.
            </p>
          </div>
        </div>

        <h2 id="accordion-color-heading-2">
          <button type="button"
            class="flex items-center bg-[#EFF6FF] shadow-xl mb-8 justify-between w-full p-5 font-medium text-blue-500 gap-3"
            @click="toggleAccordion(2)" :aria-expanded="isOpen(2)" aria-controls="accordion-color-body-2">
            <span>Élections parlementaires 🏛️</span>
            <svg class="w-3 h-3 shrink-0 transition-transform duration-200" :class="{ 'rotate-180': isOpen(2) }"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        <div id="accordion-color-body-2" :class="{ hidden: !isOpen(2) }" aria-labelledby="accordion-color-heading-2">
          <div class="p-5 border border-t-0">
            <h3 class="text-md font-semibold" style="color: #0A2753;">Députés</h3>
            <p class="mb-2 text-gray-900 dark:text-gray-700">
              Les députés sont élus pour représenter les citoyens à l'Assemblée nationale. Leur mandat est de   
               <span class="text-blue-800"> cinq ans</span> ,
              renouvelable. Ils sont élus au scrutin majoritaire   <span class="text-blue-800"> à deux tours </span>  par circonscription.
            </p>
            <p class="mb-2 text-gray-900 dark:text-gray-700">
              Au premier tour, un candidat doit obtenir la majorité absolue des suffrages exprimés et un nombre de voix
              équivalent à  <span class="text-blue-800">  au moins 25%  </span> des électeurs inscrits pour être élu. Si aucun candidat ne remplit ces
              conditions, un  <span class="text-blue-800">  second tour est organisé </span> .
            </p>
            <p class="mb-2 text-gray-900 dark:text-gray-700">
              Au second tour, la majorité relative suffit pour être élu. Seuls les candidats ayant obtenu au moins  <span class="text-blue-800"> 12,5%
                des voix </span>  des électeurs inscrits au premier tour peuvent se présenter au  <span class="text-blue-800">  second tour</span> .
            </p>

            <h3 class="text-md font-semibold mt-4" style="color: #0A2753;">Sénateurs</h3>
            <p class="mb-2 text-gray-900 dark:text-gray-700">
              Les sénateurs sont élus pour représenter les collectivités territoriales au Sénat. Leur mandat est de <span class="text-blue-800">  six
                ans</span>, renouvelable par moitié tous les trois ans. Ils sont   <span class="text-blue-800">  élus par un collège électoral</span>   composé de
              représentants locaux.
            </p>
            <p class="mb-2 text-gray-900 dark:text-gray-700">
              Le mode de scrutin varie selon le nombre de sièges à pourvoir dans chaque département. Pour les
              départements avec un ou deux sièges, le scrutin est majoritaire à deux tours. Pour ceux avec trois sièges
              ou plus, le scrutin est proportionnel.
            </p>
            <p class="mb-2 text-gray-900 dark:text-gray-700">
              Le vote est  <span class="text-blue-800">  obligatoire  </span> pour les membres du collège électoral, garantissant ainsi une participation
              maximale.
            </p>
          </div>
        </div>

        <h2 id="accordion-color-heading-3">
          <button type="button"
            class="flex items-center bg-[#EFF6FF] mb-8 shadow-xl justify-between w-full p-5 font-medium text-blue-500 gap-3"
            @click="toggleAccordion(3)" :aria-expanded="isOpen(3)" aria-controls="accordion-color-body-3">
            <span>Élections municipales 🏛️</span>
            <svg class="w-3 h-3 shrink-0 transition-transform duration-200" :class="{ 'rotate-180': isOpen(3) }"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        <div id="accordion-color-body-3" :class="{ hidden: !isOpen(3) }" aria-labelledby="accordion-color-heading-3">
          <div class="p-5 border border-t-0">
            <h3 class="text-md font-semibold" style="color: #0A2753;">Maires</h3>
            <p class="mb-2 text-gray-900 dark:text-gray-700">
              Le maire est  <span class="text-blue-800">   élu par le conseil municipal  </span>  parmi ses membres. Il est le représentant de l'État dans la
              commune et exerce des fonctions exécutives. Le mandat du maire est de  <span class="text-blue-800">    six ans</span>, renouvelable.
            </p>
            <p class="mb-2 text-gray-900 dark:text-gray-700">
              L'élection du maire se fait à la majorité absolue des membres du conseil municipal lors des deux premiers
              tours. Si aucun candidat n'obtient cette majorité, un  <span class="text-blue-800">  troisième tour  </span>   est organisé à la majorité relative.
            </p>

            <h3 class="text-md font-semibold mt-4" style="color: #0A2753;">Conseillers municipaux</h3>
            <p class="mb-2 text-gray-900 dark:text-gray-700">
              Les conseillers municipaux sont élus au <span class="text-blue-800">   suffrage universel direct </span>  pour un mandat de six ans. Ils gèrent
              les affaires de la commune et votent le budget municipal.
            </p>
            <p class="mb-2 text-gray-900 dark:text-gray-700">
              Dans les communes de moins de 1 000 habitants, le scrutin est majoritaire plurinominal à deux tours. Les
              candidats peuvent se présenter individuellement ou en groupe.
            </p>
            <p class="mb-2 text-gray-900 dark:text-gray-700">
              Dans les communes de 1 000 habitants et plus, le scrutin est de liste à deux tours avec des listes
              paritaires. Si une liste obtient la majorité absolue au premier tour, elle reçoit la moitié des sièges, le
              reste étant réparti proportionnellement.
            </p>
          </div>
        </div>
      </div>


      <a @click="gotoPdf" class="mt-4 text-blue-600 w-50 pl-3 rounded-lg" href="#">
        Consulter la liste électorale provisoire 2025 en version PDF
      </a>
    </main>
    <footer class="bg-blue-800 text-white text-center p-4 footer">
      Commission Électorale Nationale - Enceinte CUR - Lazaret nord Antsiranana (201)
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import { useRouter } from 'vue-router';

const router = useRouter();

const gotoPdf = () => {
  console.log("HERE");
  router.push("/elections/Pdf");
};


// État réactif
const openAccordion = ref(null);

const toggleAccordion = (index) => {
  openAccordion.value = openAccordion.value === index ? null : index;
};

const isOpen = (index) => {
  return openAccordion.value === index;
};
</script>

<style scoped>
.accordion-item {
  border-bottom: 1px solid #ddd;
}

.accordion-header {
  background-color: #f7f7f7;
  border: none;
  outline: none;
  padding: 15px;
  width: 100%;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.3s;
}

.accordion-header:hover {
  background-color: #e0e0e0;
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: 0 15px;
}

.accordion-content p {
  margin: 10px 0;
}

.foo {
  height: auto;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  /* Assure un fond blanc pour la section principale */
}

.footer {
  margin: 0 auto;
  width: 100%;
  background-color: #1d4ed8;
  /* Couleur de fond bleue pour le pied de page */
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-10px);
  }

  60% {
    transform: translateY(-5px);
  }
}

.bounce {
  animation: bounce 2s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
  padding: 25px;
  border-radius: 8px;
  width: 85%;
  margin: auto;
  background-color: #ffffff;
}
</style> 

