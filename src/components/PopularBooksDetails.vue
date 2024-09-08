<template>
  <div>
    <Header />

    <div v-if="book" class="pageContainer">
      <div class="book">
        <div class="bookImg">
          <img :src="book.image" alt="Book Image" class="w-64 h-96 object-cover mt-4 mx-auto" />
        </div>
        <button class="button w-[250px] h-[40px] bg-primary-lime border-none rounded-[6px]">Читать</button>
      </div>
      <div class="bookDesk">
        <div class="bookName">
          <h1 class="text-[36px] text-white">{{ book.title }}</h1>
          <p class="text-[25px] text-white">Автор: {{ book.author }}</p>
        </div>
        <div class="addPlaylist">
          <button class="w-[25px] h-[25px] rounded-full border-[1px] border-primary-lime text-primary-lime bg-transperent button text-[20px]">+</button>
          <span class="text-white font-medium text-[20px]">Добавить в библиотеку</span>
        </div>
      </div>
      
      
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
  
  <style lang="scss">
    @import '../assets/bookDetail.scss'  
  
  </style>
  