<template>
    <div v-if="isVisible" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-4">
        <h2 class="text-lg font-semibold mb-4">Похожие книги</h2>
        <button @click="closeModal" class="absolute top-2 right-2 text-xl">&times;</button>
        <div v-if="books.length > 0">
          <div v-for="book in books" :key="book.id" class="mb-4 flex items-center">
            <img :src="book.image" alt="" class="w-20 h-30 mr-4">
            <div>
              <h3 class="font-medium">{{ book.title }}</h3>
              <p class="text-gray-600">{{ book.author }}</p>
            </div>
          </div>
        </div>
        <div v-else>
          <p>Нет похожих книг</p>
        </div>
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
  /* Добавьте стили для модального окна при необходимости */
  </style>
  