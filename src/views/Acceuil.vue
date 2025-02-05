<template>
  <div class="fond">
    <main class="relative flex justify-center items-center h-[500px]">
      <div class="relative w-full h-full">
        <img alt="Centre Electoral Bosolo event" class="w-full h-full object-cover rounded"
          src="https://storage.googleapis.com/a1aa/image/zE1MPgLapoOHFGtw3BGmNDl85eicNaTrFfZtbszTkgQ.jpg" />
        <div
          class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white p-6 text-center">
          <div>
            <h2 class="text-3xl font-bold">La CENI rend publics les résultats provisoires des élections
              législatives à Masi-Manimba et Yakoma au Centre électoral Bosolo.</h2>
            <p class="mt-2">Samedi 21 décembre 2024 | Dépêches</p>
          </div>
        </div>
      </div>
    </main>

    <div class="carousel-container my-10">
      <div class="relative w-full max-w-6xl mx-auto overflow-hidden">
        <div class="flex transition-transform duration-500 ease-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div v-for="(item, index) in carouselItems" :key="index"
            class="flex-shrink-0 w-full h-96 flex items-center justify-center bg-gray-100 rounded-xl shadow-lg p-6 relative overflow-hidden">
            <img :src="item.image" alt="Carousel image" class="absolute inset-0 w-full h-full object-cover z-0" />
            <div
              class="relative z-10 text-2xl font-semibold text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg opacity-0 translate-y-8 transition-all duration-700"
              :class="{ 'opacity-100 translate-y-0': currentIndex === index }">
              {{ item.text }}
            </div>
          </div>
        </div>

        <button @click="prevSlide"
          class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900">&lt;</button>
        <button @click="nextSlide"
          class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900">&gt;</button>
        <div class="flex justify-center space-x-2 mt-4">
          <span v-for="(item, index) in carouselItems" :key="index" class="w-3 h-3 rounded-full cursor-pointer"
            :class="{ 'bg-gray-700': currentIndex === index, 'bg-gray-300': currentIndex !== index }"
            @click="goToSlide(index)"></span>
        </div>
      </div>
    </div>

    <div class="prerap-section my-10 px-5">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="w-full md:w-1/2 p-4">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">VoteVision  : comment ça marche ?</h2>
         
            <div class="video-wrapper">
              <h2 class="text-2xl font-bold text-gray-800 mb-4">L'application VoteVision </h2>
          <p class="text-gray-700">Découvrez dans cette vidéo le fonctionnement de VoteVision, 
            l'application de pré-enrôlement qui vous fait gagner du temps. 
            Utilisez l'application web de notre État dans votre bureau de
             vote le jour de l'élection pour finaliser votre enrôlement et voter en toute simplicité !</p>
          </div>
        </div>
        <div class="w-full md:w-1/2 p-4">
          <div class="video-wrapper">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" frameborder="0"
              allowfullscreen></iframe>
          </div>
    
        </div>
      </div>
    </div>


    <div class="calendrier-section my-10 px-5">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Calendrier électoral</h2>
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="w-full md:w-1/2 p-4">
          <img src="/calendrier-evenement.jpg" alt="Calendrier Électoral"
            class="w-full h-auto rounded-lg shadow-lg mb-4" />
        </div>
        <div class="w-full md:w-1/2 p-4">
          <h3 class="text-xl font-bold text-gray-800 mb-2">DE OCTOBRE 2021 À JUIN 2023</h3>
          <h3 class="text-xl font-bold text-gray-800 mb-2">IDENTIFICATION ET ENRÔLEMENT DES ÉLECTEURS</h3>
          <p class="text-gray-700 mb-2">Identification et enrôlement des électeurs:</p>
          <ul class="list-disc list-inside text-gray-700 mb-4">
            <li>Acquisition, production et déploiement du matériel, des documents et des outils;</li>
            <li>Collecte des données des électeurs</li>
          </ul>
          <div class="timeline-wrapper">
            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <h4 class="text-gray-800 font-semibold">Identification et enrôlement des électeurs
                  </h4>
                  <p class="text-gray-600">30 SEPT - 30 OCT</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="actualites-section my-10 px-5">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Actualités</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white shadow-lg rounded-lg p-6">
          <img src="/communiquePresse1.jpg" alt="CENI Communiqué" class="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 class="text-lg font-bold text-gray-800">COMMUNIQUÉ DE PRESSE I</h3>
          <p class="text-gray-600">N°002/CENI/2025 La CENI condamne avec la plus grande fermeté la prise en
            otage de ses agents ainsi que le pillage de son démembrement et de ses entrepôts situés à Goma,
            perpétrés par les éléments...</p>
        </div>
        <div class="bg-white shadow-lg rounded-lg p-6">
          <img src="/communiquePresse.webp" alt="CENI Communiqué" class="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 class="text-lg font-bold text-gray-800">COMMUNIQUÉ DE PRESSE I</h3>
          <p class="text-gray-600">N°001/CENI/2025. La CENI fait une mise au point sur le prétendu
            détournement des arrérages des salaires et indemnités de sortie de ses anciens membres. Vendredi
            24 janvier 2025 | Communiqué de presse</p>
        </div>
        <div class="bg-white shadow-lg rounded-lg p-6">
          <img src="/communiquePresse2.webp" alt="CENI Communiqué" class="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 class="text-lg font-bold text-gray-800">COMMUNIQUÉ DE PRESSE I</h3>
          <p class="text-gray-600">N°060/CENI/2024. Mise au point concernant l’organisation de l’élection des
            membres des bureaux définitifs des organes délibérants des provinces du Nord-Ubangi et du Kwilu.
          </p>
        </div>
      </div>
    </div>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-left">
          <p>&copy; 2021 CENI Madagascar</p>
        </div>
        <div class="footer-right">
          <button class="scroll-top-button" @click="scrollToTop()">
            <!-- <i class="fas fa-chevron-up"></i> -->
            <i class="pi pi-arrow-up " style="font-size: 18px; color: white;"></i>
          </button>
        </div>
      </div>
    </footer>

  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useShow } from "@/stores/show";

const show = useShow()
const menuItems = [
  { tag: 'a', href: '#', text: 'Communales ' },
  { tag: 'a', href: '#', text: 'Législative ' },
  { tag: 'a', href: '#', text: 'Présidentiel ' },
  { tag: 'a', href: '#', text: 'Les étapes suivies dans le processus électoral' },
  { tag: 'a', href: '#', text: 'Texts pour les élections ' },
  { tag: 'a', href: '#', text: 'Vérification des noms' },
  { tag: 'a', href: '#', text: "Pièces à fournir pour demande d'agrément" },
  { tag: 'button', type: 'submit', text: 'alex' }
]

const menuItems1 = [
  { tag: 'a', href: '#', text: 'Communales ' },
  { tag: 'a', href: '#', text: 'Législatives ' },
  { tag: 'a', href: '#', text: 'Présidentielles' },
  { tag: 'a', href: '#', text: 'Archives élections 2018-2019-2020' },
  { tag: 'button', type: 'submit', text: 'alex' }
]


const menuItems2 = [
  { tag: 'a', href: '#', text: 'Voir les noms dans la liste électorale' },
  { tag: 'a', href: '#', text: 'Législatives ' },
  { tag: 'a', href: '#', text: 'Présidentielles' },
  { tag: 'a', href: '#', text: 'Archives élections 2018-2019-2020' },
  { tag: 'button', type: 'submit', text: 'alex' }
]

const menuItems3 = [
  { tag: 'a', href: '#', text: 'A la une' },
  { tag: 'a', href: '#', text: 'Dépêches' },
  { tag: 'a', href: '#', text: 'Communiqué de presse' },
  { tag: 'a', href: '#', text: 'Décisions' },
  { tag: 'a', href: '#', text: 'Genre et inclusion' },
  { tag: 'button', type: 'submit', text: 'alex' }
]
const menuItems4 = [
  { tag: 'a', href: '#', text: 'Mot du président de la CENI' },
  { tag: 'a', href: '#', text: 'Organisation et fonctionnement' },
  { tag: 'a', href: '#', text: 'Composition bureau et plénière' },
  { tag: 'button', type: 'submit', text: 'alex' }
]

const carouselItems = ref([
  { text: "Rencontre CENI/Réseau Justice et Paix de la CENCO", image: "/lisiPifidianana.jpg" },
  { text: "ÉvénemesXwXWXWnt 2", image: "/bureau.jpg" },
  { text: "Événement 3", image: "/fokontany.jpg" },
]);



const currentIndex = ref(0);
let autoSlideInterval;

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + carouselItems.value.length) % carouselItems.value.length;
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % carouselItems.value.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

const startAutoSlide = () => {
  autoSlideInterval = setInterval(nextSlide, 3000);
};

const stopAutoSlide = () => {
  clearInterval(autoSlideInterval);
};

function goToLogin() {
  show.showLogin = true;
  show.showHomePage = false;
  console.log("Go to login");
};
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Pour un défilement fluide
  });
};

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  stopAutoSlide();
});
</script>

<style scoped>
body {
  font-family: 'Roboto', sans-serif;
}

.prerap-section,
.calendrier-section,
.actualites-section {
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 100px;
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  /* 16:9 */
  height: 0;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.timeline-wrapper {
  position: relative;
  max-width: 100%;
  margin: 20px auto;
  overflow-x: auto;
}

.timeline {
  position: relative;
  display: flex;
  align-items: center;
}

.timeline-item {
  position: relative;
  flex: 1;
  padding: 10px;
  text-align: center;
}

.timeline-dot {
  width: 15px;
  height: 15px;
  background-color: #007bff;
  border-radius: 50%;
  margin: 0 auto 10px;
}

.timeline-content {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.footer {
  background-color: #e0e0e0;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* position: fixed;
  bottom: 0; */
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
