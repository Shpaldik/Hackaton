<template>
    <Header />
    <section class="mt-20">
        <h1 class="text-4xl font-extrabold text-center text-white">Избранное</h1>
      <div v-if="favoriteBooks.length > 0">
        <div v-for="book in favoriteBooks" :key="book.id" class="favoriteBook">
          <img :src="book.image" alt="Book Image" class="w-64 h-96 object-cover mt-4 mx-auto" />
        </div>
      </div>
      <div v-else>
        <p>Нет книг в избранном.</p>
      </div>
    </section>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  
  export default {
    components: {
      Header,
    },
    data() {
      return {
        favoriteBooks: [],
      };
    },
    mounted() {
      this.favoriteBooks = JSON.parse(localStorage.getItem('favoriteBooks')) || [];
    }
  };
  </script>
  
  <style lang="scss">
  .favoriteBook {
    margin-bottom: 20px;
  }
  </style>
  