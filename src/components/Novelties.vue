<template>
  <section class="mx-4 sm:mx-10 lg:mx-40">
    <h1 class="text-4xl font-extrabold text-center text-white">Новинки</h1>

    <div v-if="!isMobile" class="grid gap-4 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <div v-for="book in noveltiesBooks" :key="book.id" class="relative w-full h-full bg-white rounded-2xl border border-primary-lime border-4 flex flex-col justify-center items-center">
        <img :src="book.image" alt="Book Image" class="w-full h-64 object-cover rounded-md" />
        <button class="absolute bottom-5 left-1/2 transform -translate-x-1/2 mt-4 px-4 py-2 bg-primary-lime text-white rounded-full">Прочитать</button>
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
        <Slide v-for="book in noveltiesBooks" :key="book.id">

          <div class="w-72 h-96 bg-white rounded-2xl border border-primary-lime border-4 flex flex-col items-center justify-center">
            <img :src="book.image" alt="Book Image" class="w-full h-full object-cover rounded-md" />
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
  name: 'Novelties',
  components: {
    Carousel,
    Slide,
  },
  setup() {
    const carousel = ref(null);
    const noveltiesBooks = ref([]);
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

    const fetchNoveltiesBooks = async () => {
      try {
        const response = await axios.get('https://3b8f3267e91fdf6a.mokky.dev/Novelties');
        noveltiesBooks.value = response.data;
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    onMounted(() => {
      fetchNoveltiesBooks();
      checkIsMobile();
      window.addEventListener('resize', checkIsMobile);
    });

    return {
      carousel,
      noveltiesBooks,
      isMobile,
      scrollLeft,
      scrollRight,
    };
  },
})
</script>
