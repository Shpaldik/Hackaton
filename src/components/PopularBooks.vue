<template>
  <section class="mx-4 sm:mx-10 lg:mx-0">
    <h1 class="text-4xl font-extrabold text-center text-white">Популярные книги</h1>

    <div class="relative w-full mt-10">
      <button
        class="absolute top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 z-10"
        @click="scrollLeft"
      >
        <img src="/public/arrow-left.svg" width="40" alt="Left Arrow">
      </button>

      <Carousel ref="carousel" :items-to-show="isMobile ? 1 : 5" :wrap-around="true">
        <Slide v-for="book in popularBooks.slice(0, 12)" :key="book.id">
          <div class="relative w-72 h-96 bg-white rounded-2xl border border-primary-lime border-4 flex flex-col items-center justify-center gap-10">
            <img :src="book.image" alt="Book Image" class="w-full h-full object-cover rounded-md" />
            <router-link :to="`/book/${book.id}`">
              <button class="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-primary-lime text-white px-4 py-2 rounded-lg">
                Прочитать
              </button>
            </router-link>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>

      <button
        class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 z-10"
        @click="scrollRight"
      >
        <img src="/public/arrow-right.svg" width="40" alt="Right Arrow">
      </button>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import axios from 'axios'

export default defineComponent({
  name: 'PopularBooks',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup() {
    const carousel = ref(null);
    const popularBooks = ref([]);
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

    const fetchPopularBooks = async () => {
      try {
        const response = await axios.get('https://92668c1f511f5d8f.mokky.dev/PopularBooks');
        popularBooks.value = response.data;
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    onMounted(() => {
      fetchPopularBooks();
      checkIsMobile();
      window.addEventListener('resize', checkIsMobile);
    });

    return {
      carousel,
      popularBooks,
      scrollLeft,
      scrollRight,
      isMobile,
    };
  },
})
</script>
