<template>
  <section class="mx-4 lg:mx-40">
    <h1 class="text-4xl font-extrabold text-center text-white">Актуально</h1>
    <div v-if="!isMobile" class="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
      <div v-for="item in actuallyBooks" :key="item.id" class="flex">
        <div class="w-full h-full bg-white rounded-2xl border border-primary-lime border-4">
          <img :src="item.image" width="500" alt="Book Image" class="w-full h-full object-cover rounded-md"/>
        </div>
        <div>
          <h2 class="text-center font-extrabold text-3xl text-white">{{ item.title }}</h2>
          <p class="text-white mt-2 text-xl text-center ml-5">{{ item.author }}</p>
          <p class="text-white mt-2 text-xl text-center ml-5">{{ item.description }}</p>
        </div>
      </div>
    </div>

    <div v-else class="relative w-full mt-10">
      <button
        class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 z-10"
        @click="scrollLeft"
      >
        <img src="/public/arrow-left.svg" width="30" alt="Left Arrow">
      </button>

      <Carousel ref="carousel" :items-to-show="1" :wrap-around="true">
        <Slide v-for="item in actuallyBooks" :key="item.id">
          <div class="w-72 h-96 bg-white rounded-2xl border border-primary-lime border-4 flex flex-col items-center justify-center">
            <img :src="item.image" alt="Book Image" class="w-full h-48 object-cover rounded-md"/>
            <h2 class="text-center font-extrabold text-2xl text-white mt-4">{{ item.title }}</h2>
            <p class="text-white mt-2 text-xl">{{ item.author }}</p>
            <p class="text-white mt-2 text-xl">{{ item.description }}</p>
          </div>
        </Slide>
      </Carousel>

      <button
        class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 z-10"
        @click="scrollRight"
      >
        <img src="/public/arrow-right.svg" width="30" alt="Right Arrow">
      </button>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import axios from 'axios'

export default defineComponent({
  name: 'Actually',
  components: {
    Carousel,
    Slide,
  },
  setup() {
    const carousel = ref(null);
    const actuallyBooks = ref([]);
    const isMobile = ref(false);

    const scrollLeft = () => {
      carousel.value.prev();
    };

    const scrollRight = () => {
      carousel.value.next();
    };

    const checkIsMobile = () => {
      isMobile.value = window.innerWidth <= 768; 
    };

    // Загрузка данных с API
    const fetchActuallyBooks = async () => {
      try {
        const response = await axios.get('https://aa3e0bee4149d45b.mokky.dev/Actually');
        actuallyBooks.value = response.data;
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    onMounted(() => {
      fetchActuallyBooks();
      checkIsMobile();
      window.addEventListener('resize', checkIsMobile);
    });

    return {
      carousel,
      actuallyBooks,
      isMobile,
      scrollLeft,
      scrollRight,
    };
  },
})
</script>
