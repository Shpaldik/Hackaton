<template>
    <Header />
    <div v-if="book" class="book-detail">
      <h1 class="text-4xl font-bold mt-20">{{ book.title }}</h1>
      <p class="text-xl text-gray-600">Автор: {{ book.author }}</p>
      <img :src="book.image" alt="Book Image" class="w-64 h-96 object-cover mt-4" />
    </div>
    <div v-else>
      <p>Загрузка книги...</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Header from './Header.vue';
  
  export default {
    components: {
      Header,
    },
    name: 'NoveltiesBookDetail',
    data() {
      return {
        book: null,
      };
    },
    async created() {
      const bookId = this.$route.params.id; // Получаем параметр id из маршрута
      try {
        const response = await axios.get('https://3b8f3267e91fdf6a.mokky.dev/Novelties');
        this.book = response.data.find((b) => b.id === parseInt(bookId)); // Находим книгу по id
      } catch (error) {
        console.error('Ошибка при получении данных книги:', error);
      }
    },
  };
  </script>
  
  <style scoped>
  .book-detail {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  </style>
  