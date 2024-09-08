<template>
  <div>
    <Header />

    <div v-if="book" class="pageContainer">
      <div class="book">
        <div class="bookImg">
          <img :src="book.image" alt="Book Image" class="w-64 h-96 object-cover mt-4 mx-auto" />
        </div>
        <button class="button w-[250px] h-[40px] bg-primary-lime border-none rounded-[6px]">Заказать</button>
      </div>
      <div class="bookDesk">
        <div class="bookName">
          <h1 class="text-[36px] text-white font-bold text-4xl mt-10">{{ book.title }}</h1>
          <p class="text-[25px] text-white">Автор: {{ book.author }}</p>
          <p class="text-[25px] text-white text-medium">Описание: </p>
          <span class="text-white text-[20px]">{{ book.description }}</span>
        </div>
        <div class="addPlaylist">
          <button class="w-[25px] h-[25px] rounded-full border-[1px] border-primary-lime text-primary-lime bg-transperent button text-[20px]">+</button>
          <span class="text-white font-medium text-[20px]">Добавить в библиотеку</span>
        </div>
        <div>
          <h1 class="text-4xl text-white font-bold mt-10">Комментарий:</h1>
          <div class="relative mt-4">
            <input v-model="newComment" @keyup.enter="addComment" type="text" placeholder="Оставить комментарий" class="outline-none bg-primary-gray rounded-xl p-2 w-full pl-4 text-[20px] h-[60px] border-none text-white">
            <img src="/public/icons/comment.svg" alt="" class="absolute top-[15px] right-[15px] w-[30px] cursor-pointer" @click="addComment">
          </div>
          <div v-for="(comment, index) in comments" :key="index" class="comment mb-4 mt-10">
            <img src="/public/profilexample.png" alt="Logo" class="w-[100px] h-[100px] inline mr-3">
            <span class="text-white text-[20px] bg-primary-gray rounded-xl w-full p-5">{{ comment }}</span>
          </div>
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
    name: 'NoveltiesBookDetail',
    data() {
      return {
        book: null,
      };
    },
    async created() {
      const bookId = this.$route.params.id; // Получаем параметр id из маршрута
      try {
        const response = await axios.get('https://aa3e0bee4149d45b.mokky.dev/Actually');
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
  