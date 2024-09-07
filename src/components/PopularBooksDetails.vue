<template>
  <div>
    <Header />
    <router-link
      class="text-2xl font-bold text-primary-lime mt-20 p-3 rounded absolute top-4 left-4 z-10"
      to="/"
    >
      < Назад
    </router-link>
    <div v-if="book" class="book-detail mt-16 text-white">
      <h1 class="text-4xl font-bold mt-36 ">{{ book.title }}</h1>
      <p class="text-xl text-white">Автор: {{ book.author }}</p>
      <img :src="book.image" alt="Book Image" class="w-64 h-96 object-cover mt-4 mx-auto" />
    </div>
    <div v-else>
      <p>Загрузка книги...</p>
    </div>
  </div>
</template>
  <script>
  import axios from 'axios';
  import Header from './Header.vue';
  
  export default {
    components: {
      Header,
    },
    name: 'BookDetail',
    data() {
      return {
        book: null,
      };
    },
    async created() {
      const bookId = this.$route.params.id; // Получаем параметр id из маршрута
      try {
        const response = await axios.get('https://92668c1f511f5d8f.mokky.dev/PopularBooks');
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
  