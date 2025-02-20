<template>
  <div class=" flex flex-col bg-white overflow-hidden"   style="background-image: url('/effect.png'); height: 86.5vh;background-size: cover; background-position: center;  width: 100vw; ">
    <main class="flex-1 container mx-auto p-6">
      <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

     
          <!-- Première carte -->
          <article
            class="rounded-lg border border-gray-300 bg-white p-6 shadow-sm transition hover:shadow-lg " style="box-shadow: 40px !important;color: gray;">
            <span class="inline-block rounded bg-blue-600 p-2 text-white dark:bg-blue-700">
              <svg fill="#ffffff" height="80px" width="80px" version="1.1" id="Capa_1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 488.3 488.3"
                xml:space="preserve">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <path
                        d="M386.3,51.5c-48.9,0-88.5,39.6-88.5,88.5c0,22.9,8.7,43.8,23,59.5c-3.4,7.1-9,15.9-18,20.3c-3,1.5-2.3,6,1,6.5 c9.9,1.6,24.1-0.2,37.4-10.2c13.2,7.8,28.6,12.3,45,12.3c24.4,0,46.5-9.9,62.5-25.9L386.2,140V51.5H386.3z">
                      </path>
                      <path d="M418.3,152l69.4-28.2c-0.4-3.3-0.9-6.5-1.6-9.7L411,144.7L418.3,152z"></path>
                      <path d="M483.5,104.8c-1-3-2.2-6-3.6-8.9l-79.8,32.4v5.2l3.6,3.6L483.5,104.8z"></path>
                      <path d="M469.6,79.4l-69.4,28.2V118l75.1-30.6C473.5,84.6,471.6,81.9,469.6,79.4z"></path>
                      <path d="M455,64.6l-54.7,22.3v10.4L463,71.8C460.5,69.2,457.8,66.8,455,64.6z"></path>
                      <path d="M434.4,52.3l-34,13.8v10.4l45.2-18.4C442,55.9,438.3,53.9,434.4,52.3z"></path>
                      <path d="M400.5,45.4v10.4l19.8-8C413.9,46.2,407.3,45.4,400.5,45.4z"></path>
                      <path d="M462.1,196.3c4.7-4.6,8.8-9.8,12.4-15.4l-19.7,8L462.1,196.3z"></path>
                      <path d="M447.5,181.5l33.9-13.8c1.6-3.9,3-7.9,4.1-12l-45.3,18.4L447.5,181.5z"></path>
                      <path
                        d="M488.3,133.9l-62.7,25.5l7.3,7.4l54.7-22.2c0.4-3.4,0.7-6.9,0.7-10.5C488.3,134,488.3,133.9,488.3,133.9z">
                      </path>
                      <path
                        d="M295.9,317.9c-41.6-15.9-66.5-32.1-66.5-32.1l-32,101.3l-4.4,13.7l-14.3-40.7c33-46-2.5-48.2-8.6-48.2l0,0H170h-0.1h-0.1 h-0.1l0,0c-6.1,0-41.6,2.2-8.6,48.2l-14.3,40.7l-4.4-13.7l-32-101.3c0,0-24.9,16.2-66.5,32.1C-1.9,334.5,1,372.2,0,442.9h169.7 h0.4h169.7C338.9,372.2,341.7,334.5,295.9,317.9z">
                      </path>
                      <path
                        d="M97.8,221.5c3.7,23.8,22,54.1,52.2,64.7c12.4,4.4,26,4.4,38.3-0.1c29.7-10.7,48.7-40.9,52.3-64.6c4-0.3,9.3-5.9,14.9-25.9 c7.7-27.4-0.5-31.4-7.4-30.8c1.3-3.8,2.3-7.5,3-11.3C262.9,82.6,228,80.1,228,80.1s-5.8-11.1-21-19.5c-10.2-6-24.4-10.7-43.2-9.1 c-6.1,0.3-11.8,1.5-17.2,3.3l0,0c-6.9,2.3-13.2,5.7-18.9,9.7c-7,4.4-13.6,9.9-19.5,16.1c-9.2,9.4-17.5,21.7-21,36.9 c-3,11.4-2.3,23.3,0.2,36.1l0,0c0.7,3.7,1.7,7.5,3,11.3c-7-0.7-15.2,3.4-7.4,30.8C88.6,215.5,93.8,221.2,97.8,221.5z">
                      </path>
                    </g>
                  </g>
                </g>
              </svg>
            </span>

            <a href="#">
              <h3 class="mt-2 text-lg font-semibold text-gray-900 dark:text-gray">
                Députés
              </h3>
            </a>

            <p class="mt-2 text-sm text-gray-800 dark:text-gray-600">
              Cet article présente une description détaillée des élections législatives,
              mettant en avant les candidats, leurs programmes et les enjeux du scrutin.
              Il retrace également les différentes élections précédentes,
              en rappelant les députés élus et les évolutions politiques au fil des années électorales successives
            </p>

            <a @click="gotoAnnee" class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              style="cursor: pointer;">
              Années électorales
              <span aria-hidden="true" class="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                &rarr;
              </span>
            </a>
          </article>

          <!-- Deuxième carte -->
          <article
          class="rounded-lg border border-gray-300 bg-white p-6 shadow-sm transition hover:shadow-lg " style="box-shadow: 40px !important;color: gray;">
          <span class="inline-block rounded bg-blue-600 p-2 text-white dark:bg-blue-700">
              <svg fill="#ffffff" height="107px" width="107px" version="1.1" id="Capa_1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 52 52"
                xml:space="preserve">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <circle cx="19" cy="31.5" r="2"></circle>
                    <circle cx="34" cy="31.5" r="2"></circle>
                    <path
                      d="M34.223,35.909c-2.371-0.859-4.923-0.785-7.24,0.177c-2.317-0.964-4.87-1.037-7.241-0.177 c-2.51,0.91-4.516,2.746-5.647,5.167c-0.234,0.501-0.018,1.096,0.482,1.33c1.349,0.63,2.789,0.947,4.233,0.947 c1.149,0,2.302-0.2,3.414-0.604c1.951-0.708,3.591-1.98,4.759-3.647c1.168,1.666,2.808,2.938,4.759,3.647 c1.112,0.403,2.264,0.604,3.414,0.604c1.445,0,2.885-0.317,4.233-0.947c0.5-0.234,0.716-0.829,0.482-1.33 C38.739,38.655,36.733,36.819,34.223,35.909z M21.541,40.869c-1.668,0.606-3.451,0.641-5.118,0.114 c0.942-1.473,2.332-2.589,4.001-3.194c1.668-0.605,3.45-0.641,5.118-0.113C24.6,39.147,23.209,40.264,21.541,40.869z M32.424,40.869c-1.668-0.605-3.059-1.722-4.001-3.193c1.667-0.526,3.45-0.491,5.118,0.113c1.669,0.605,3.059,1.722,4.001,3.194 C35.875,41.51,34.093,41.476,32.424,40.869z">
                    </path>
                    <path
                      d="M51,22.122h-4.13l-2.218-15.91C44.208,2.955,41.394,0.5,38.108,0.5H14.892c-3.286,0-6.1,2.455-6.543,5.709L6.13,22.122H1 c-0.552,0-1,0.447-1,1s0.448,1,1,1h4.338c-0.076,0.211-0.15,0.434-0.212,0.684C3.312,25.781,2,27.916,2,30 c0,2.153,1.268,4.089,3.208,4.979C7.704,44.733,16.385,51.5,26.5,51.5s18.796-6.767,21.292-16.521C49.732,34.089,51,32.153,51,30 c0-2.084-1.313-4.219-3.126-5.194c-0.063-0.25-0.136-0.473-0.212-0.684H51c0.552,0,1-0.447,1-1S51.552,22.122,51,22.122z M44.293,18.122H8.707l0.279-2h35.029L44.293,18.122z M8.428,20.122h36.144l0.279,2H8.149L8.428,20.122z M10.33,6.481 c0.31-2.27,2.271-3.981,4.563-3.981h23.216c2.291,0,4.252,1.712,4.563,3.984l1.065,7.638H9.264L10.33,6.481z M49,30 c0,1.486-0.957,2.812-2.38,3.296c-0.328,0.111-0.574,0.384-0.652,0.721C43.86,43.133,35.854,49.5,26.5,49.5 S9.14,43.133,7.032,34.017c-0.078-0.337-0.324-0.609-0.652-0.721C4.957,32.812,4,31.486,4,30c0-1.449,1.063-3.051,2.37-3.57 c0.322-0.129,0.555-0.414,0.615-0.756c0.127-0.719,0.366-1.241,0.542-1.552h37.946c0.178,0.313,0.416,0.835,0.542,1.552 c0.061,0.342,0.293,0.627,0.615,0.756C47.937,26.949,49,28.551,49,30z">
                    </path>
                  </g>
                </g>
              </svg>
            </span>

            <a href="#">
              <h3 class="mt-2 text-lg font-semibold text-gray-900 dark:text-gray">
                Sénateurs
              </h3>
            </a>

            <p class="mt-2 text-sm text-gray-600 dark:text-gray-600">
              Cet article offre une description détaillée des élections sénatoriales, mettant en avant les candidats,
              leurs programmes et les enjeux du scrutin. Il retrace également les élections précédentes,
              en rappelant les sénateurs élus et les évolutions politiques au fil des années électorales successives.
            </p>

            <a @click="gotoSenateur" class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              style="cursor: pointer;">

              <span aria-hidden="true" class="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                &rarr;
              </span>
            </a>
          </article>


      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-blue-800 text-white text-center py-4">
      Commission Électorale Nationale - Enceinte CUR - Lazaret Nord, Antsiranana (201)
    </footer>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();


const gotoAnnee = () => {
  console.log("HERE");
  router.push("/elections/anneeDepute");
};
const gotoSenateur = () => {
  console.log("HERE");
  router.push("/elections/anneeSenateur");
};

</script>


<style scoped>
.footer {
  margin: 0 auto;
  width: 100%;
  background-color: #1d4ed8;
  /* Couleur de fond bleue pour le pied de page */
}
</style>
