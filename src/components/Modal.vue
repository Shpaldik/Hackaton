<template>
  <div v-if="isVisible" class="fixed inset-x-0 bottom-0 bg-white p-6 shadow-lg max-w-full mx-4 z-100000 rounded-xl">
    <h2 class="text-lg font-semibold mb-4 text-white">Похожие книги</h2>
    <button @click="closeModal" class="absolute top-2 right-2 text-xl bg-white text-white p-2 bg-transparent">&times;</button>
    <div v-if="books.length > 0">
      <div v-for="book in books" :key="book.id" class="mb-4 flex items-center">
        <img :src="book.image" alt="" class="w-20 h-30 mr-4">
        <div>
          <h3 class="font-medium text-lg text-white">{{ book.title }}</h3>
          <p class="text-white">{{ book.author }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="text-white">Нет похожих книг</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
    books: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
/* Additional styling for modal */
</style>
