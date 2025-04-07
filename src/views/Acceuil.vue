  <template>

    <!-- ====== accueil ====== -->

    <section class="relative px-20 bg-white py-16 lg:pt-[100px]">
      <div class="mx-auto max-w-7xl px-8 md:px-6">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-5/12">

            <div class="relative text-gray-500">
              <i @click="remplirBienvenuP1" class="pi pi-pencil absolute text-white z-20 cursor-pointer"
                style="font-size: 18px; top: 0; right: 0;" title="Edit"></i>

              <h1 v-if="!bienvenuP1" id="partenaire"
                class="text-white mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                {{ valueBienvenuP1 }}
                <span id="association" class="text-blue-600 font-bold">{{ valueBienvenuP0 }}</span>
              </h1>

              <div v-if="bienvenuP1" class="flex items-center">
                <textarea class="w-[480px] h-40 p-2 border rounded mr-2" v-model="valueBienvenuP1"></textarea>
                <textarea class="w-[200px] h-40 p-2 border rounded text-blue-600 font-bold"
                  v-model="valueBienvenuP0"></textarea>
              </div>
            </div>




            <!-- mission dem -->
            <div class="relative">
              <p v-if="!bienvenuP" class="text-slate-500 mb-8 w-[480px] text-base">
                {{ valueBienvenuP }}
              </p>
              <textarea v-if="bienvenuP" class="w-[480px] mt-2 h-40 p-2 border rounded"
                v-model="valueBienvenuP"></textarea>
              <i @click="remplirBienvenuP" class="pi pi-pencil absolute text-white z-20 cursor-pointer"
                style="font-size: 18px; top: 0; right: 0;" title="Edit"></i>
            </div>

            <!-- mission dem -->




            <a href="#guide">

              <button id="actualite"
                class="w-full rounded-md bg-blue-500 px-8 py-2.5 font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-600 duration-200 sm:w-auto">
                Guide
              </button>
            </a>


            <button @click="gotoList"
              class="mt-4 box-border w-full rounded-md border border-blue-500/20 px-8 py-2.5 font-semibold text-blue-500 shadow-md shadow-blue-500/10 duration-200 sm:ml-4 sm:mt-0 sm:w-auto ">
              Vérifiez votre nom </button>



          </div>

          <div class="hidden px-4 lg:block lg:w-1/12"></div>

          <div class="w-full px-4 lg:w-6/12">
            <div class="lg:ml-auto lg:text-right">
              <div class="relative z-10  pt-11 lg:pt-0">

                <a href="#" class="">
                  <i class="pi pi-pencil text-white" style="font-size: 18px; "></i>

                  <img alt="Élection" src="/Vote-843x630.jpg"
                    class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72" />


                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ====== END accueil ====== -->

    <!-- ====== Actualité ====== -->

    <section class="py-16">
      <div class="mx-auto max-w-7xl px-8 md:px-6">
        <!-- heading text -->
        <div class="mb-5 sm:mb-10">
          <span class="font-medium text-blue-500">
            <!-- <BtnMenu label="À propos" @click="propos()" /> -->
            <div>eeeeeeeee</div>

            Actualités
          </span>
          <h1 class="text-2xl font-bold text-slate-700 sm:text-3xl">Dernières nouvelles </h1>
        </div>
        <!-- wrapper -->
        <div class="grid gap-6  sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
          <!-- single-blog -->
          <div @click="gotoPdf" class="w-full  duration-200 hover:scale-95 ">
            <i class="pi pi-pencil text-white" style="font-size: 18px; "></i>

            <div class="max-h-52 w-full overflow-hidden rounded-t-xl">
              <img src="/liste.jpg" alt="blog img" class="w-full " style="cursor:pointer   ">
            </div>
            <div class="rounded-b-xl px-5 pb-5 pt-3 shadow-md shadow-blue-500/10">
              <div class="">
                <a href="#" class="mr-2 rounded-md bg-blue-50 px-3 py-1 text-sm text-slate-600">Publication des Listes
                  Électorales Finales</a>
                <a href="#" class="block pt-4 font-medium capitalize text-white hover:text-blue-500">Les listes
                  électorales finales sont désormais disponibles.
                  Assurez-vous de vérifier votre inscription avant la date limite.</a>
              </div>
              <hr class="my-4 border-slate-100">
              <i class="pi pi-pencil absolute text-white z-20" style="font-size: 18px; "></i>

              <div class="flex">
                <img src="/admin01.png" alt="user img" class="mr-3 h-10 w-10 rounded-full object-cover">
                <p class="text-sm font-semibold capitalize text-slate-600">Commision électorale <span
                    class="block text-xs text-slate-400">Rédacteur électoral </span></p>
              </div>

            </div>
          </div>

          <!-- single-blog -->
          <div class="w-full duration-200 hover:scale-95">
            <i class="pi pi-pencil text-white" style="font-size: 18px; "></i>

            <div class="max-h-52 w-full overflow-hidden rounded-t-xl">

              <a
                href="https://www.youtube.com/results?search_query=D%C3%A9but+de+la+campagne+%C3%A9lectorale+Madagascar">
                <img src="/campagne.webp" alt="blog img" class="w-full">

              </a>
            </div>
            <div class="rounded-b-xl px-5 pb-5 pt-3 shadow-md shadow-blue-500/10">
              <div class="">
                <a href="https://www.youtube.com/results?search_query=D%C3%A9but+de+la+campagne+%C3%A9lectorale+Madagascar"
                  class="mr-2 rounded-md bg-blue-50 px-3 py-1 text-sm text-slate-600">Début de la Campagne
                  Électorale</a>
                <a href="https://www.youtube.com/results?search_query=D%C3%A9but+de+la+campagne+%C3%A9lectorale+Madagascar"
                  class="block pt-4 font-medium capitalize text-white hover:text-blue-500">La campagne
                  électorale a officiellement commencé.
                  Découvrez les programmes des candidats et participez activement.</a>
              </div>
              <hr class="my-4 border-slate-100">
              <div class="flex">
                <i class="pi pi-pencil absolute text-white z-20" style="font-size: 18px; "></i>

                <img src="/admin02.png" alt="user img" class="mr-3 h-10 w-10 rounded-full object-cover">
                <p class="text-sm font-semibold capitalize text-slate-600">Commission électorale <span
                    class="block text-xs text-slate-400"> Rédacteur Électoral</span></p>
              </div>
            </div>
          </div>

          <!-- single-blog -->
          <div class="w-full duration-200 hover:scale-95">
            <i class="pi pi-pencil text-white" style="font-size: 18px; "></i>

            <div class="max-h-52 w-full overflow-hidden rounded-t-xl">
              <a
                href="https://www.youtube.com/results?search_query=Annonce+pe%C3%A9liminaire+r%C3%A9sultat+%C3%A9lectorale+Madagacar">
                <img src="/resulat.jpg" alt="blog img" class="w-full">
              </a>

            </div>
            <div class="rounded-b-xl px-5 pb-5 pt-3 shadow-md shadow-blue-500/10">
              <div class="">
                <a href="https://www.youtube.com/results?search_query=Annonce+pe%C3%A9liminaire+r%C3%A9sultat+%C3%A9lectorale+Madagacar"
                  class="mr-2 rounded-md bg-blue-50 px-3 py-1 text-sm text-slate-600">Annonce des Résultats
                  Préliminaires</a>
                <a href="https://www.youtube.com/results?search_query=Annonce+pe%C3%A9liminaire+r%C3%A9sultat+%C3%A9lectorale+Madagacar"
                  class="block pt-4 font-medium capitalize text-white hover:text-blue-500">Les résultats
                  préliminaires des élections seront annoncés ce soir.
                  Restez connecté pour les mises à jour.</a>
              </div>
              <hr class="my-4 border-slate-100">
              <i class="pi pi-pencil absolute text-white z-20" style="font-size: 18px; "></i>
              <div class="flex">
                <img id="accueil" src="/admin03.webp" alt="user img" class="mr-3 h-10 w-10 rounded-full object-cover">

                <a id="guide">
                  <p id="education" class="text-sm font-semibold capitalize text-slate-600">Commission électorale <span
                      class="block text-xs text-slate-400">Rédacteur Électoral</span></p>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ====== END Actualité ====== -->


    <!-- ====== consigne ====== -->
    <section class="pb-16 px-20">
      <div class="mx-auto max-w-7xl  md:px-6">
        <!-- heading text -->
        <div class="mb-5 sm:mb-10">
          <span id="document" class="font-medium text-blue-500">Votre guide</span>
          <h1 class="text-2xl font-bold text-slate-700 sm:text-3xl">Découvrez les Consignes</h1>

        </div>
        <!-- features img -->
        <div class="md:flex relative  md:justify-between md:gap-6 xl:gap-10">
          <i class="pi pi-pencil absolute text-white z-20" style="font-size: 18px; "></i>

          <div class="mb-5 max-h-[600px] overflow-hidden rounded-lg md:mb-0 md:w-5/12">

            <img src="/consigne.png" alt="features img"
              class="h-full scale-125 sm:w-full sm:object-cover rounded-bl-3xl rounded-tr-3xl">

          </div>

          <div class="md:w-7/12">
            <div class="relative mb-16 flex flex-col">

              <div class="relative mb-3 text-slate-500">
                <i @click="remplirBienvenuP2" class="pi pi-pencil absolute text-white z-20 cursor-pointer"
                  style="font-size: 18px; top: 0; right: 0;" title="Edit"></i>
                <div v-if="!bienvenuP2">
                  <p>{{ valueBienvenuP2_1 }}</p>
                  <p class="mt-7">{{ valueBienvenuP2_2 }}</p>
                </div>
                <div v-if="bienvenuP2">
                  <textarea class="w-full h-30 p-2 border rounded mb-3" v-model="valueBienvenuP2_1"></textarea>
                  <textarea class="w-full h-30 p-2 border rounded" v-model="valueBienvenuP2_2"></textarea>
                </div>
              </div>


              <button @click="gotoList"
                class="w-full rounded-md bg-blue-500 px-8 py-2.5 font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-600 duration-200 md:w-max mt-4">
                Les étapes
              </button>
            </div>

            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <i class="pi pi-pencil absolute text-white z-20" style="font-size: 18px; "></i>

              <div class="flex flex-col items-center justify-center rounded-xl bg-white px-4 py-8 shadow-lg">
                <img class="mb-3 w-16" src="/verifier.svg" alt="">

                <a href="#inscription" class="text-sm text-blue-500">Etape 1</a>

                <h3 @click="gotoList" class="text-lg text-center font-bold text-s late-600"
                  style="color: #525F72; cursor: pointer;">
                  Vérification de
                  l'inscription</h3>
              </div>

              <div class="relative flex flex-col items-center justify-center rounded-xl bg-white px-4 py-8 shadow-lg">

                <!-- <img class="mb-3 w-16" src="/bureau.jpg" alt=""> -->
                <svg width="64px" height="64px" viewBox="0 0 1024 1024" class="icon" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" fill="#000000">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M899.984 19.873h-3.452c-26.123 0-47.296 21.172-47.296 47.296v888.508c0 26.127 21.173 47.298 47.296 47.298h3.452c26.119 0 47.297-21.171 47.297-47.298V67.169c0-26.124-21.177-47.296-47.297-47.296z"
                      fill="#4A5699"></path>
                    <path
                      d="M132.643 19.873h-3.449c-26.12 0-47.296 21.172-47.296 47.296v888.508c0 26.127 21.177 47.298 47.296 47.298h3.449c26.123 0 47.299-21.171 47.299-47.298V67.169c0-26.124-21.176-47.296-47.299-47.296z"
                      fill="#C45FA0"></path>
                    <path
                      d="M899.463 19.873H129.194c-26.12 0-47.296 21.172-47.296 47.296v3.377c0 26.12 21.177 47.299 47.296 47.299h770.269c26.123 0 47.296-21.179 47.296-47.299v-3.377c0-26.124-21.173-47.296-47.296-47.296z"
                      fill="#6277BA"></path>
                    <path
                      d="M899.463 905.006H129.194c-26.12 0-47.296 21.17-47.296 47.29v3.381c0 26.127 21.177 47.298 47.296 47.298h770.269c26.123 0 47.296-21.171 47.296-47.298v-3.381c0-26.12-21.173-47.29-47.296-47.29z"
                      fill="#C45FA0"></path>
                    <path
                      d="M717.962 543.153H542.047c-26.121 0-47.298 21.175-47.298 47.297v3.724c0 26.123 21.177 47.293 47.298 47.293h175.915c26.121 0 47.297-21.17 47.297-47.293v-3.724c0-26.122-21.176-47.297-47.297-47.297z"
                      fill="#E5594F"></path>
                    <path
                      d="M689.268 198.849H513.355c-26.122 0-47.298 21.175-47.298 47.297v3.722c0 26.12 21.176 47.297 47.298 47.297h175.912c26.122 0 47.298-21.177 47.298-47.297v-3.722c0-26.122-21.175-47.297-47.297-47.297z"
                      fill="#F0D043"></path>
                    <path
                      d="M757.789 353.081H261.17c-26.121 0-47.297 21.172-47.297 47.296v3.377c0 26.121 21.177 47.299 47.297 47.299h496.619c26.121 0 47.296-21.178 47.296-47.299v-3.377c0-26.125-21.175-47.296-47.296-47.296z"
                      fill="#E5594F"></path>
                    <path
                      d="M762.638 726.225h-496.62c-26.12 0-47.294 21.18-47.294 47.301v3.377c0 26.12 21.174 47.3 47.294 47.3h496.62c26.122 0 47.296-21.18 47.296-47.3v-3.377c0-26.122-21.174-47.301-47.296-47.301z"
                      fill="#6277BA"></path>
                    <path
                      d="M355.734 543.328H281.41c-26.122 0-47.297 21.17-47.297 47.293v3.378c0 26.118 21.175 47.297 47.297 47.297h74.324c26.123 0 47.296-21.179 47.296-47.297v-3.378c0-26.123-21.174-47.293-47.296-47.293z"
                      fill="#F39A2B"></path>
                    <path d="M334.85 248.006m-48.986 0a48.986 48.986 0 1 0 97.972 0 48.986 48.986 0 1 0-97.972 0Z"
                      fill="#F39A2B"></path>
                  </g>
                </svg>

                <a href="#inscription" class="text-sm text-blue-500">Etape 2</a>

                <a href="http://archive.ipu.org/parline-f/reports/1193_B.htm">
                  <h3 class="text-lg font-bold text-center text-slate-600">Documents nécessaires</h3>

                </a>

              </div>

              <div class="flex flex-col items-center justify-center rounded-xl bg-white px-4 py-8 shadow-lg">
                <!-- <img class="mb-3 w-16" src="/bureau.jpg" alt=""> -->
                <svg width="89px" height="89px" viewBox="-4.8 -4.8 57.60 57.60" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0">
                    <path transform="translate(-4.8, -4.8), scale(1.7999999999999998)"
                      d="M16,29.4958704598248C18.499105768515083,29.720528795724356,20.651373497856376,27.876557121904472,22.718978392041315,26.45493445338198C24.729911014794848,25.07227792678058,26.618185292960842,23.52456468085279,27.79446580320188,21.386352052269064C29.030706209187343,19.139145858652938,29.839171661104164,16.60049736234907,29.5415614852056,14.053017391629103C29.24001886695709,11.471876548621205,27.875436979719442,9.147893230384382,26.138850473756992,7.214636054172997C24.423089474371817,5.304562900122627,22.333373862916478,3.0995552054076545,19.766845540831667,3.1713022107227165C17.170128607904882,3.2438931351965494,15.713713261562258,6.169764171945209,13.523931372566913,7.567284672937104C12.069374594466527,8.495583937565982,10.209916001066727,8.69969524244499,9.071938265365144,9.996800333976047C7.930538289589117,11.297806209226978,7.320907124310253,13.010889136152349,7.231755856827769,14.73931681576328C7.1469405949761535,16.383679822341787,8.168564081253978,17.792775595644283,8.587696109705458,19.385085762908506C9.115743656514217,21.391173154246708,8.788469606993626,23.639898333897964,10.014962138403792,25.31290069605169C11.483785926271018,27.316456040872346,13.525691490127272,29.27344128562446,16,29.4958704598248"
                      fill="#7ed0ec" strokewidth="0"></path>
                  </g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <rect width="48" height="48" fill="white" fill-opacity="0.01"></rect>
                    <path
                      d="M24 44C24 44 39 32 39 19C39 10.7157 32.2843 4 24 4C15.7157 4 9 10.7157 9 19C9 32 24 44 24 44Z"
                      fill="#2F88FF" stroke="#13dcf6" stroke-width="4" stroke-linejoin="round"></path>
                    <path
                      d="M24 25C27.3137 25 30 22.3137 30 19C30 15.6863 27.3137 13 24 13C20.6863 13 18 15.6863 18 19C18 22.3137 20.6863 25 24 25Z"
                      fill="#43CCF8" stroke="white" stroke-width="4" stroke-linejoin="round"></path>
                  </g>
                </svg>
                <a href="#inscription" class="text-sm text-blue-500">Etape 3</a>

                <a id="contact"
                  href="https://www.google.com/maps/@-12.2847613,49.3062532,396m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D">
                  <h3 class="text-lg font-bold text-slate-600">Lieux de vote</h3>
                </a>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ====== END consigne ====== -->



    <!-- ====== Contact ====== -->
    <section class="overflow-hidden px-20 py-16 bg-contact-grayscale relative">
      <img src="/effect.png" alt="effect" class="absolute bottom-[-400px] -z-10 w-full opacity-[0.2]">

      <div class="mx-auto max-w-7xl px-8 md:px-6">
        <div class="-mx-4 flex flex-wrap lg:justify-between">

          <!-- left info-->
          <div class="w-full px-4 md:w-1/2 xl:w-6/12">
            <div class="mb-12 max-w-[570px] lg:mb-0">
              <span class="font-medium text-blue-500">Contact</span>
              <h1 class="mb-3 text-2xl font-bold text-slate-700 sm:text-3xl">CONTACTEZ-NOUS</h1>

              <div class="relative mb-8">
                <i @click="remplirBienvenuP3" class="pi pi-pencil absolute text-white cursor-pointer"
                  style="font-size: 18px; top: 0; right: 0;" title="Edit"></i>
                <p v-if="!bienvenuP3" class="text-slate-500">
                  {{ valueBienvenuP3 }}
                </p>
                <textarea v-if="bienvenuP3" class="w-full h-40 p-2 border rounded z-0"
                  v-model="valueBienvenuP3"></textarea>
              </div>

              <!-- address -->
              <div
                class="mb-8 flex w-full max-w-[420px] items-center rounded-lg bg-white p-4 shadow-md shadow-blue-500/10">
                <div
                  class="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-500 bg-opacity-5 text-blue-500 sm:h-[70px] sm:max-w-[70px]">
                  <ion-icon name="location-outline" class="text-3xl"></ion-icon>
                  <svg fill="#4673ce" height="64px" width="64px" version="1.1" id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="-225.27 -225.27 962.53 962.53" xml:space="preserve" stroke="#4673ce"
                    stroke-width="0.0051198500000000004">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <g>
                          <g>
                            <path
                              d="M222,3.277C153.477,16.59,99.111,72.751,87.702,141.764c-6.79,41.231,1.13,81.857,21.702,116.271 c2.35,3.928,4.199,7.011,8.39,14l0.967,1.613c41.753,69.614,59.977,101.895,79.073,142.806l38.825,83.218 c7.659,16.416,31.001,16.419,38.664,0.004l34.965-74.901c19.287-41.357,37.562-74.11,79.19-144.553l1.062-1.797 c6.181-10.459,9.139-15.472,12.673-21.482c15.271-25.943,23.445-55.54,23.445-86.29C426.659,63.541,329.368-17.545,222,3.277z M366.44,235.307c-3.518,5.984-6.466,10.977-12.631,21.41l-1.062,1.797c-42.326,71.624-61.063,105.204-81.123,148.219 l-15.625,33.472l-19.5-41.795c-19.925-42.687-38.643-75.842-81.147-146.709l-0.967-1.613c-4.187-6.981-6.027-10.051-8.363-13.954 c-15.428-25.808-21.358-56.232-16.222-87.425c8.504-51.443,49.357-93.645,100.331-103.549 c80.922-15.693,153.862,45.096,153.862,125.49C383.993,193.74,377.88,215.872,366.44,235.307z">
                            </path>
                            <path
                              d="M255.993,106.652c-35.355,0-64,28.645-64,64s28.645,64,64,64s64-28.645,64-64S291.348,106.652,255.993,106.652z M255.993,191.985c-11.791,0-21.333-9.542-21.333-21.333s9.542-21.333,21.333-21.333c11.791,0,21.333,9.542,21.333,21.333 S267.784,191.985,255.993,191.985z">
                            </path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="w-full">
                  <h4 class="mb-1 text-xl font-bold text-slate-700">Localisation</h4>
                  <div class="relative">
                    <p v-if="!bienvenuP4" class="text-base text-slate-400">
                      {{ valueBienvenuP4 }}
                    </p>
                    <textarea v-if="bienvenuP4" class="w-full h-20 p-2 border rounded z-0"
                      v-model="valueBienvenuP4"></textarea>
                    <i @click="remplirBienvenuP4" class="pi pi-pencil absolute text-white cursor-pointer"
                      style="font-size: 18px; top: 0; right: 0;" title="Edit"></i>
                  </div>
                </div>
              </div>

              <!-- phone -->
              <div
                class="mb-8 flex w-full max-w-[420px] items-center rounded-lg bg-white p-4 shadow-md shadow-blue-500/10">
                <div
                  class="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-500 bg-opacity-5 text-blue-500 sm:h-[70px] sm:max-w-[70px]">
                  <ion-icon name="call-outline" class="text-3xl"></ion-icon>
                  <svg width="64px" height="64px" viewBox="-11.28 -11.28 46.56 46.56" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M21 9V3M17 9V3M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
                        stroke="#4673ce" stroke-width="1.6320000000000001" stroke-linecap="round"
                        stroke-linejoin="round">
                      </path>
                    </g>
                  </svg>
                </div>
                <div class="w-full">
                  <h4 class="mb-1 text-xl font-bold text-slate-700">Numéro de téléphone</h4>
                  <div class="relative">
                    <p v-if="!bienvenuP5" class="text-base text-slate-400">
                      {{ valueBienvenuP5 }}
                    </p>
                    <textarea v-if="bienvenuP5" class="w-full h-20 p-2 border rounded z-0"
                      v-model="valueBienvenuP5"></textarea>
                    <i @click="remplirBienvenuP5" class="pi pi-pencil absolute text-white cursor-pointer"
                      style="font-size: 18px; top: 0; right: 0;" title="Edit"></i>
                  </div>
                </div>
              </div>

              <!-- mail -->
              <div
                class="mb-8 flex w-full max-w-[420px] items-center rounded-lg bg-white p-4 shadow-md shadow-blue-500/10">
                <div
                  class="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-500 bg-opacity-5 text-blue-500 sm:h-[70px] sm:max-w-[70px]">
                  <svg width="64px" height="64px" viewBox="-9.4 -9.4 38.80 38.80" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#4673ce">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <title>email [#4673ce]</title>
                      <desc>Created with Sketch.</desc>
                      <defs> </defs>
                      <g id="Page-1" stroke-width="0.0002" fill="none" fill-rule="evenodd">
                        <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -922.000000)" fill="#4673ce">
                          <g id="icons" transform="translate(56.000000, 160.000000)">
                            <path
                              d="M262,764.291 L254,771.318 L246,764.281 L246,764 L262,764 L262,764.291 Z M246,775 L246,766.945 L254,773.98 L262,766.953 L262,775 L246,775 Z M244,777 L264,777 L264,762 L244,762 L244,777 Z"
                              id="email-[#4673ce]"> </path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="w-full">
                  <h4 class="mb-1 text-xl font-bold text-slate-700">Adresse email</h4>
                  <div class="relative">
                    <p v-if="!bienvenuP6" class="text-base text-slate-400">
                      {{ valueBienvenuP6 }}
                    </p>
                    <textarea v-if="bienvenuP6" class="w-full h-20 p-2 border rounded z-0"
                      v-model="valueBienvenuP6"></textarea>
                    <i @click="remplirBienvenuP6" class="pi pi-pencil absolute text-white cursor-pointer"
                      style="font-size: 18px; top: 0; right: 0;" title="Edit"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- about img -->
          <div class="mt-8 flex relative flex-col justify-center md:mt-0 md:w-5/12">
            <i class="pi pi-pencil absolute text-white z-20" style="font-size: 18px;" title="Edit"></i>
            <!-- Première image alignée à droite -->
            <img src="/contact06.png" alt="about img" class="max-h-[500px] md:max-h-max ml-auto">
          </div>
        </div>
      </div>
    </section>
    <!-- ====== END Contact ====== -->


    <!-- ====== footer ====== -->
    <footer class="bg-slate-50/80 px-0 pt-16">
      <div class="mx-auto max-w-7xl px-8 md:px-6">

        <!-- footer top -->
        <div class="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">

          <div class="md:max-w-md lg:col-span-2">


            <div class="flex items-center w-[20rem] max-w-full relative">
              <img src="/logo.svg" alt="logo" class="w-1/5">
              <span v-if="!bienvenuP7" class="ml-1 text-4xl font-bold" style="color: #0A2753;">
                {{ valueBienvenuP7 }}
              </span>
              <input v-if="bienvenuP7" class="ml-1 text-4xl font-bold w-[300px] border-b focus:outline-none"
                style="color: #0A2753;" v-model="valueBienvenuP7" />
              <i @click="remplirBienvenuP7" class="pi pi-pencil absolute text-white z-20 cursor-pointer"
                style="font-size: 18px;" title="Edit"></i>
            </div>


            <div class="relative mt-4 lg:max-w-sm">
              <div v-if="!bienvenuP8" class="text-sm text-slate-500">
                <p>{{ valueBienvenuP8_1 }}</p>
                <p class="mt-2">{{ valueBienvenuP8_2 }}</p>
              </div>
              <textarea v-if="bienvenuP8" class="w-full h-40 p-2 border rounded mb-2"
                v-model="valueBienvenuP8_1"></textarea>
              <textarea v-if="bienvenuP8" class="w-full h-40 p-2 border rounded" v-model="valueBienvenuP8_2"></textarea>
              <i @click="remplirBienvenuP8" class="pi pi-pencil absolute text-white z-20 cursor-pointer"
                style="font-size: 18px;" title="Edit"></i>
            </div>
          </div>

          <div class="grid row-gap-8 grid-cols-2 gap-5 md:grid-cols-4 lg:col-span-4">

            <div class="">

              <!-- head -->
              <div class="relative">


                <!-- head -->
                <p v-if="!bienvenuP10" class="font-semibold text-slate-700">
                  {{ valueBienvenuP10_title }}
                </p>
                <input v-if="bienvenuP10" class="font-semibold text-slate-700 border-b focus:outline-none"
                  v-model="valueBienvenuP10_title" />

                <ul class="mt-2 space-y-2">
                  <li v-for="(item2, index) in item2" :key="index">
                    <input v-if="bienvenuP10"
                      class="text-slate-500 transition-colors duration-300 hover:text-slate-700 border-b focus:outline-none"
                      v-model="item2.name" />
                    <a v-else :href="item2.link"
                      class="text-slate-500 transition-colors duration-300 hover:text-slate-700">
                      {{ item2.name }}
                    </a>
                  </li>
                </ul>
                <i @click="remplirBienvenuP10" class="pi pi-pencil absolute text-white z-20 cursor-pointer"
                  style="font-size: 18px;" title="Edit"></i>
              </div>

            </div>

            <div class="relative">


              <!-- head -->
              <p v-if="!bienvenuP11" class="font-semibold text-slate-700">
                {{ valueBienvenuP11_title }}
              </p>
              <input v-if="bienvenuP11" class="font-semibold text-slate-700 border-b focus:outline-none"
                v-model="valueBienvenuP11_title" />

              <ul class="mt-2 space-y-2">
                <li v-for="(item, index) in items" :key="index">
                  <input v-if="bienvenuP11"
                    class="text-slate-500 transition-colors duration-300 hover:text-slate-700 border-b focus:outline-none"
                    v-model="item.name" />
                  <a v-else :href="item.link"
                    class="text-slate-500 transition-colors duration-300 hover:text-slate-700">
                    {{ item.name }}
                  </a>
                </li>
              </ul>
              <i @click="remplirBienvenuP11" class="pi pi-pencil absolute text-white z-20 cursor-pointer"
                style="font-size: 18px;" title="Edit"></i>
            </div>

            <div class="relative">


              <!-- head -->
              <p v-if="!bienvenuP12" class="font-semibold text-slate-700">
                {{ valueBienvenuP12_title }}
              </p>
              <input v-if="bienvenuP12" class="font-semibold text-slate-700 border-b focus:outline-none"
                v-model="valueBienvenuP12_title" />

              <ul class="mt-2 space-y-2">
                <li v-for="(items1, index) in items1" :key="index">
                  <input v-if="bienvenuP12"
                    class="text-slate-500 transition-colors duration-300 hover:text-slate-700 border-b focus:outline-none"
                    v-model="items1.name" />
                  <a v-else :href="items1.link"
                    class="text-slate-500 transition-colors duration-300 hover:text-slate-700">
                    {{ items1.name }}
                  </a>
                </li>
              </ul>
              <i @click="remplirBienvenuP12" class="pi pi-pencil absolute text-white z-20 cursor-pointer"
                style="font-size: 18px;" title="Edit"></i>
            </div>
            <div class="relative">
              <!-- head -->
              <p v-if="!bienvenuP13" class="font-semibold text-slate-700">
                {{ valueBienvenuP13_title }}
              </p>
              <input v-if="bienvenuP13" class="font-semibold text-slate-700 border-b focus:outline-none"
                v-model="valueBienvenuP13_title" />

              <ul class="mt-2 space-y-2">
                <li v-for="(item3, index) in item3" :key="index">
                  <input v-if="bienvenuP13"
                    class="text-slate-500 transition-colors duration-300 hover:text-slate-700 border-b focus:outline-none"
                    v-model="item3.name" />
                  <a v-else :href="item3.link"
                    class="text-slate-500 transition-colors duration-300 hover:text-slate-700">
                    {{ item3.name }}
                  </a>
                </li>
              </ul>
              <i @click="remplirBienvenuP13" class="pi pi-pencil absolute text-white z-20 cursor-pointer"
                style="font-size: 18px;" title="Edit"></i>
            </div>
          </div>
        </div>
        <!-- End footer top -->

        <!-- footer bottom -->
        <div class="flex flex-col justify-between items-center  border-t mt-4 py-2 sm:flex-row">

          <div class="relative">
            <p class="text-sm items-center justify-content-center text-slate-500">
              ©
              <span v-if="!bienvenuP14">{{ valueBienvenuP14_year }}</span>
              <input v-else v-model="valueBienvenuP14_year"
                class="text-slate-500 border-b bg-gray-300 mr-10 focus:outline-none w-12" />
              <a v-if="!bienvenuP14" class="text-slate-700 hover:text-blue-500" rel="noopener noreferrer">
                {{ valueBienvenuP14_siteName }}
              </a>
              <input v-else v-model="valueBienvenuP14_siteName"
                class="text-slate-700 hover:text-blue-500 bg-gray-300 border-b focus:outline-none" />
              Tous droits réservés.
            </p>
            <i @click="remplirBienvenuP14" class="pi pi-pencil absolute text-white z-20 cursor-pointer"
              style="font-size: 18px;" title="Edit"></i>
          </div>

          <div class="relative mt-4 flex items-center space-x-4 sm:mt-0">
            <i @click="remplirBienvenuP15" class="pi pi-pencil absolute text-white z-20 cursor-pointer"
              style="font-size: 18px;" title="Edit"></i>

            <a v-if="!bienvenuP15" href="https://www.facebook.com/profile.php?id=100069808050865" aria-label="Facebook"
              rel="noopener noreferrer">
              <svg fill="#64748B" width="64px" height="64px" viewBox="-12.24 -12.24 48.48 48.48"
                xmlns="http://www.w3.org/2000/svg" stroke="#64748B" stroke-width="0.72">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z">
                  </path>
                </g>
              </svg>
            </a>
            <input v-else v-model="valueBienvenuP15_facebook"
              class="border-b bg-gray-300 focus:outline-none text-slate-700" />

            <a v-if="!bienvenuP15" href="https://www.whatsapp.com/?lang=fr_FR" aria-label="WhatsApp"
              rel="noopener noreferrer">
              <svg width="64px" height="64px" viewBox="-13.8 -13.8 47.60 47.60" version="1.1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <title>whatsapp [#128]</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7599.000000)" fill="#64748B">
                      <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path
                          d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439"
                          id="whatsapp-[#128]"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
            <input v-else v-model="valueBienvenuP15_whatsapp"
              class="border-b bg-gray-300 focus:outline-none text-slate-700" />

            <a v-if="!bienvenuP15" href="https://www.youtube.com/results?search_query=%C3%A9lection+Madagascar"
              aria-label="YouTube" rel="noopener noreferrer">
              <svg width="64px" height="64px" viewBox="-11.6 -11.6 43.20 43.20" version="1.1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#64748B">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <title>youtube [#168]</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)" fill="#64748B">
                      <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path
                          d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"
                          id="youtube-[#168]"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
            <input v-else v-model="valueBienvenuP15_youtube"
              class="border-b bg-gray-300 focus:outline-none text-slate-700" />
          </div>
        </div>
        <!-- End footer bottom -->

      </div>
    </footer>
  </template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import KeenSlider from 'https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm';
// import BtnMenu from './drop/BtnMenu.vue';





onMounted(() => {
  console.log('marche');

})








const openAccordion = ref(null);
const router = useRouter();

let keenSlider;

const toggleAccordion = (index) => {
  openAccordion.value = openAccordion.value === index ? null : index;
};



const isOpen = (index) => {
  return openAccordion.value === index;
};

const gotoList = () => {
  router.push("/elections/listeElectorale");
};

const gotoPdf = () => {
  router.push("/elections/Pdf");
};

const gotoTypeElection = () => {
  router.push("/elections/typeElection");
};



// mission dem
function remplirBienvenuP() {
  bienvenuP.value = !bienvenuP.value
}

const bienvenuP = ref(false)
const valueBienvenuP = ref("Bienvenue sur Votiflow, la fournit toutes les informations essentielles sur les élections. Restez informé des dernières actualités,des dates importantes et des consignes de vote. ")
// mission dem

const bienvenuP1 = ref(false);
const valueBienvenuP1 = ref("Bienvenue sur Votiflow, votre source d'information");

function remplirBienvenuP1() {
  bienvenuP1.value = !bienvenuP1.value;
}
const bienvenuP0 = ref(false);
const valueBienvenuP0 = ref("électorale");

function remplirBienvenuP0() {
  bienvenuP0.value = !bienvenuP0.value;
}

const bienvenuP2 = ref(false);
const valueBienvenuP2_1 = ref("Assurez-vous de vérifier votre inscription sur les listes électorales avant le jour du scrutin. Votre participation est essentielle pour garantir une élection juste et transparente.");
const valueBienvenuP2_2 = ref("Le jour de l'élection, munissez-vous de votre pièce d'identité et respectez les horaires d'ouverture des bureaux de vote. Votre voix compte, faites-la entendre.");

function remplirBienvenuP2() {
  bienvenuP2.value = !bienvenuP2.value;
}

const bienvenuP3 = ref(false);
const valueBienvenuP3 = ref("Ensemble, construisons un avenir meilleur pour notre pays. Contactez-nous pour partager vos idées et soutenir notre vision.");

function remplirBienvenuP3() {
  bienvenuP3.value = !bienvenuP3.value;
}

const bienvenuP4 = ref(false);
const valueBienvenuP4 = ref("Lazaret Nord, Antsiranana, Madagascar");

function remplirBienvenuP4() {
  bienvenuP4.value = !bienvenuP4.value;
}

const bienvenuP5 = ref(false);
const valueBienvenuP5 = ref("(+261)32 69 748 01");

function remplirBienvenuP5() {
  bienvenuP5.value = !bienvenuP5.value;
}

const bienvenuP6 = ref(false);
const valueBienvenuP6 = ref("commissionelectorale@gmail.mg");

function remplirBienvenuP6() {
  bienvenuP6.value = !bienvenuP6.value;
}

const bienvenuP7 = ref(false);
const valueBienvenuP7 = ref("votiflow");

function remplirBienvenuP7() {
  bienvenuP7.value = !bienvenuP7.value;
}

const bienvenuP8 = ref(false);
const valueBienvenuP8_1 = ref("Ensemble, construisons l'avenir de Madagascar. Notre plateforme électorale est dédiée à la promotion de la justice sociale, de l'éducation pour tous, et du développement durable.");
const valueBienvenuP8_2 = ref("Rejoignez-nous pour bâtir une nation prospère et unie, où chaque voix compte et chaque citoyen a les moyens de réussir. Ensemble, faisons de Madagascar un modèle de démocratie et de progrès.");

function remplirBienvenuP8() {
  bienvenuP8.value = !bienvenuP8.value;
}

const bienvenuP10 = ref(false);
const valueBienvenuP10_title = ref("categories");
const item2 = ref([
  { name: "Actualités", link: "#actualite" },
  { name: "Programme", link: "#programme" }
]);

function remplirBienvenuP10() {
  bienvenuP10.value = !bienvenuP10.value;
}

const bienvenuP11 = ref(false);
const valueBienvenuP11_title = ref("Business");
const items = ref([
  { name: "Équipe", link: "#apropos" },
  { name: "Événements", link: "#actualite" },
  { name: "Partenaires", link: "#partenaire" },
  { name: "Médias", link: "https://www.youtube.com/results?search_query=tvm+madagascar+vaovao+fifidianana", ariaLabel: "YouTube" }
]);

function remplirBienvenuP11() {
  bienvenuP11.value = !bienvenuP11.value;
}

const bienvenuP12 = ref(false);
const valueBienvenuP12_title = ref("Ressources");
const items1 = ref([
  { name: "Communiqués", link: "https://www.youtube.com/results?search_query=communiqu%C3%A9+de+presse+%C3%A9lection+Madagascar", ariaLabel: "YouTube" },
  { name: "Documents", link: "#document" },
  { name: "Associations", link: "#association" },
  { name: "Éducation", link: "#education" }
]);

function remplirBienvenuP12() {
  bienvenuP12.value = !bienvenuP12.value;
}

const bienvenuP13 = ref(false);
const valueBienvenuP13_title = ref("Engagement");
const item3 = ref([
  { name: "Localisation", link: "#contact" },
  { name: "Contact", link: "#contact" }
]);

const bienvenuP14 = ref(false);
const valueBienvenuP14_year = ref('2025');
const valueBienvenuP14_siteName = ref('Votiflow');

function remplirBienvenuP14() {
  bienvenuP14.value = !bienvenuP14.value;
}

const bienvenuP15 = ref(false);
const valueBienvenuP15_facebook = ref('https://www.facebook.com/profile.php?id=100069808050865');
const valueBienvenuP15_whatsapp = ref('https://www.whatsapp.com/?lang=fr_FR');
const valueBienvenuP15_youtube = ref('https://www.youtube.com/results?search_query=%C3%A9lection+Madagascar');

function remplirBienvenuP15() {
  bienvenuP15.value = !bienvenuP15.value;
}



const gotoPresidentiel = () => {
  router.push('/elections/electionPresidentiel');
};
const gotoParlementaire = () => {
  router.push('/elections/electionParlementaire');
};
const gotoConseilleMunicipaux = () => {
  router.push("/elections/electionMunicipale");
};


import { ref } from 'vue';

const showMore = ref(false);

const toggleContent = () => {
  showMore.value = !showMore.value;
};

onMounted(() => {
  keenSlider = new KeenSlider('#keen-slider', {
    loop: true,
    slides: {
      origin: 'center',
      perView: 1.25,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 1024px)': {
        slides: {
          origin: 'auto',
          perView: 1.5,
          spacing: 32,
        },
      },
    },
  });

  const keenSliderPrevious = document.getElementById('keen-slider-previous');
  const keenSliderNext = document.getElementById('keen-slider-next');
  const keenSliderPreviousDesktop = document.getElementById('keen-slider-previous-desktop');
  const keenSliderNextDesktop = document.getElementById('keen-slider-next-desktop');

  if (keenSliderPrevious) {
    keenSliderPrevious.addEventListener('click', () => keenSlider.prev());
  }

  if (keenSliderNext) {
    keenSliderNext.addEventListener('click', () => keenSlider.next());
  }

  if (keenSliderPreviousDesktop) {
    keenSliderPreviousDesktop.addEventListener('click', () => keenSlider.prev());
  }

  if (keenSliderNextDesktop) {
    keenSliderNextDesktop.addEventListener('click', () => keenSlider.next());
  }
});
</script>



<style scoped>
.bg-contact-grayscale {
  background-image: url('/effect.png');
  /* Remplacez par le chemin de votre image */
  background-size: cover;
  /* L'image couvre toute la section */
  background-position: center;
  /* Centre l'image */
  background-repeat: no-repeat;
  /* Empêche la répétition de l'image */
  position: relative;
  /* Permet d'utiliser un pseudo-élément pour le filtre */
}

.bg-contact-grayscale::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  /* Hérite de l'image de fond */
  filter: grayscale(100%) blur(10px);
  /* Applique un filtre niveaux de gris et flou */
  z-index: 1;
  /* Assure que le filtre est derrière le contenu */
}

.bg-contact-grayscale>.content {
  position: relative;
  z-index: 2;
  /* Assure que le contenu est au-dessus du filtre */
}

.hhhh {
  z-index: 100;
}

.more-content {}

.see-more {
  color: #007BFF;
  cursor: pointer;
  margin-top: 8px;
  display: inline-block;
}
</style>
