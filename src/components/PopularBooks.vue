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

      <div
        class="flex overflow-hidden scrollbar-hidden"
        ref="carousel"
      >
        <div class="flex space-x-4">
          <div class="w-48 h-60 bg-white rounded-2xl border border-primary-lime border-4 sm:w-60 sm:h-72"></div>
          <div class="w-48 h-60 bg-white rounded-2xl border border-primary-lime border-4 sm:w-60 sm:h-72"></div>
          <div class="w-48 h-60 bg-white rounded-2xl border border-primary-lime border-4 sm:w-60 sm:h-72"></div>
          <div class="w-48 h-60 bg-white rounded-2xl border border-primary-lime border-4 sm:w-60 sm:h-72"></div>
          <div class="w-48 h-60 bg-white rounded-2xl border border-primary-lime border-4 sm:w-60 sm:h-72"></div>
          <div class="w-48 h-60 bg-white rounded-2xl border border-primary-lime border-4 hidden sm:block sm:w-60 sm:h-72"></div>
          <div class="w-48 h-60 bg-white rounded-2xl border border-primary-lime border-4 hidden sm:block sm:w-60 sm:h-72"></div>
          <div class="w-48 h-60 bg-white rounded-2xl border border-primary-lime border-4 hidden md:block sm:w-60 sm:h-72"></div>
          <div class="w-48 h-60 bg-white rounded-2xl border border-primary-lime border-4 hidden lg:block sm:w-60 sm:h-72"></div>
        </div>
      </div>

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
export default {
  methods: {
    scrollLeft() {
      const carousel = this.$refs.carousel;
      const scrollAmount = 200; 
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    },
    scrollRight() {
      const carousel = this.$refs.carousel;
      const scrollAmount = 200;
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

.scrollbar-hidden {
  scrollbar-width: none;
}

.scrollbar-hidden {
  -ms-overflow-style: none;
}
</style>
