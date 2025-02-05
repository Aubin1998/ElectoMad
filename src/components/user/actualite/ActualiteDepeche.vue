<template>
    <div class="bg-gray-100 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0 bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Dépêche</h2>
          <p class="mt-2 text-lg text-gray-600">
            Découvrez les dernières nouvelles et mises à jour urgentes concernant les élections.
          </p>
        </div>
  
        <!-- Articles de dépêche -->
        <div class="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-x-16">
          <article v-for="article in articles" :key="article.id" class="bg-white p-8 rounded-lg shadow-lg">
            <div class="flex items-center gap-x-4 text-xs">
              <time :datetime="article.date" class="text-gray-500">{{ article.date }}</time>
            </div>
            <div class="group relative mt-3">
              <h3 class="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                <a :href="article.href" class="absolute inset-0"></a>
                {{ article.title }}
              </h3>
              <p class="mt-5 line-clamp-3 text-sm text-gray-600">{{ article.description }}</p>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              <img :src="article.author.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
              <div class="text-sm leading-6">
                <p class="font-semibold text-gray-900">
                  <a :href="article.author.href" class="hover:text-gray-600">
                    {{ article.author.name }}
                  </a>
                </p>
                <p class="text-gray-600">{{ article.author.role }}</p>
              </div>
            </div>
          </article>
        </div>
  
        <!-- Contenu supplémentaire -->
        <div class="mt-16 max-w-2xl mx-auto">
          <h3 class="text-2xl font-semibold text-gray-900">Informations supplémentaires</h3>
          <p class="mt-2 text-gray-600">
            Pour plus d'informations, veuillez consulter les sections spécifiques de notre site ou contacter les autorités électorales.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </template>
  
  <script setup>
  import Footer from "@/components/Footer.vue";
  
  const articles = [
    {
      id: 1,
      title: 'Dernières mises à jour sur les élections présidentielles',
      href: '#',
      description: 'Les dernières mises à jour concernant les élections présidentielles sont disponibles. Restez informés.',
      date: '2023-10-01',
      author: {
        name: 'Alice Smith',
        role: 'Journaliste',
        href: '#',
        imageUrl: 'https://via.placeholder.com/150'
      }
    },
    {
      id: 2,
      title: 'Alertes électorales importantes',
      href: '#',
      description: 'Des alertes importantes concernant les élections ont été publiées. Assurez-vous de les lire.',
      date: '2023-09-25',
      author: {
        name: 'Bob Johnson',
        role: 'Rédacteur',
        href: '#',
        imageUrl: 'https://via.placeholder.com/150'
      }
    },
    {
      id: 3,
      title: 'Nouvelles règles pour les élections législatives',
      href: '#',
      description: 'De nouvelles règles pour les élections législatives ont été annoncées. Découvrez les détails.',
      date: '2023-09-15',
      author: {
        name: 'Charlie Brown',
        role: 'Correspondant',
        href: '#',
        imageUrl: 'https://via.placeholder.com/150'
      }
    }
    // Ajoutez plus d'articles si nécessaire
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
  