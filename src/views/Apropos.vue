<template>
  <div class="bg-gray-100 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0 bg-white p-8 rounded-lg shadow-lg">
        <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">À propos</h2>
        <p class="mt-2 text-lg text-gray-600">
          Découvrez qui nous sommes, notre mission, nos valeurs et notre engagement envers les élections.
        </p>
      </div>

      <!-- Section sur l'organisation -->
      <div class="mt-16">
        <h3 class="text-2xl font-semibold text-gray-900">Notre Organisation</h3>
        <p class="mt-2 text-gray-600">
          Nous sommes une organisation dédiée à la promotion de la démocratie et à l'organisation d'élections libres et
          équitables.
        </p>
      </div>

      <!-- Section sur la mission -->
      <div class="mt-16">
        <h3 class="text-2xl font-semibold text-gray-900">Notre Mission</h3>
        <p class="mt-2 text-gray-600">
          Notre mission est de garantir des élections transparentes et inclusives, où chaque voix compte.
        </p>
      </div>

      <!-- Section sur les valeurs -->
      <div class="mt-16">
        <h3 class="text-2xl font-semibold text-gray-900">Nos Valeurs</h3>
        <p class="mt-2 text-gray-600">
          Nous croyons en l'intégrité, la transparence, l'inclusion et l'égalité des chances pour tous les citoyens.
        </p>
      </div>

      <!-- Section sur l'équipe -->
      <div class="mt-16">
        <h3 class="text-2xl font-semibold text-gray-900">Notre Équipe</h3>
        <p class="mt-2 text-gray-600">
          Notre équipe est composée de professionnels dévoués et expérimentés, travaillant ensemble pour assurer le bon
          déroulement des élections.
        </p>
        <div class="mt-8 grid gap-8 lg:grid-cols-3 lg:gap-x-16">
          <div v-for="member in teamMembers" :key="member.id" class="bg-white p-8 rounded-lg shadow-lg">
            <img :src="member.imageUrl" alt="" class="h-24 w-24 rounded-full bg-gray-50" />
            <h4 class="mt-4 text-lg font-semibold text-gray-900">{{ member.name }}</h4>
            <p class="mt-2 text-gray-600">{{ member.role }}</p>
          </div>
        </div>
      </div>

      <!-- Section sur le contact -->
      <div class="mt-16">
        <h3 class="text-2xl font-semibold text-gray-900">Contactez-nous</h3>
        <p class="mt-2 text-gray-600">
          Pour toute question ou demande d'information, n'hésitez pas à nous contacter.
        </p>
        <div class="mt-4">
          <p class="text-gray-600">Adresse : 123 Rue de l'Élection, Antananarivo, Madagascar</p>
          <p class="text-gray-600">Téléphone : +261 20 22 123 456</p>
          <p class="text-gray-600">Email : contact@election.mg</p>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Footer from "@/components/Footer.vue";

const teamMembers = [
  {
    id: 1,
    name: 'Alice Smith',
    role: 'Directrice Exécutive',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Bob Johnson',
    role: 'Directeur des Opérations',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Charlie Brown',
    role: 'Responsable de la Communication',
    imageUrl: 'https://via.placeholder.com/150'
  }
  // Ajoutez plus de membres si nécessaire
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
