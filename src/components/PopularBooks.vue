<template>
  <section>
    <h1 class="text-4xl font-extrabold text-center text-white">Популярные книги</h1>

    <div class="relative w-full mt-10">
      <button
        class="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 z-10"
        @click="scrollLeft"
      >
        <img src="/public/arrow-left.svg" width="40" alt="Left Arrow">
      </button>

      <Carousel ref="carousel" :items-to-show="6" :wrap-around="true">
        <Slide v-for="slide in 10" :key="slide">
          <div class="w-48 h-60 bg-white rounded-2xl border border-primary-lime border-4 sm:w-60 sm:h-72">
           
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
import { defineComponent, ref } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup() {
    const carousel = ref(null);

    const scrollLeft = () => {
      carousel.value.prev(); // Прокрутка влево
    };

    const scrollRight = () => {
      carousel.value.next(); // Прокрутка вправо
    };

    return {
      carousel,
      scrollLeft,
      scrollRight,
    };
  },
})
</script>
