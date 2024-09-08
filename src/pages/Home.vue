<template>
    <div>
      <Header @search="handleSearch" />
      <PopularBooks class="mt-10" />
      <Novelties class="mt-10" />
      <Genres class="mt-10" />
      <Actually class="mt-10" />
      <Footer class="mt-10" />
  
      <AuthPage v-if="!user" @onAuth="handleAuth" />
      <ChatsPage v-else v-bind:username="user.username" v-bind:secret="user.secret" />
  
      <!-- Модальное окно для похожих книг -->
      <Modal :isVisible="isModalVisible" :books="similarBooks" @close="closeModal" />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import PopularBooks from '../components/PopularBooks.vue';
  import Novelties from '../components/Novelties.vue';
  import Genres from '../components/Genres.vue';
  import Actually from '../components/Actually.vue';
  import Footer from '../components/Footer.vue';
  import Modal from '../components/Modal.vue';
  import axios from 'axios';
  
  export default {
    components: {
      Header,
      PopularBooks,
      Novelties,
      Genres,
      Actually,
      Footer,
      Modal
    },
    data() {
      return {
        user: undefined,
        similarBooks: [],
        isModalVisible: false
      };
    },
    methods: {
      handleAuth(user) {
        this.user = user;
      },
      async handleSearch(query) {
        try {
          const response = await axios.get(`https://93d1e12435ab55e6.mokky.dev/Search?title=*${query}`);
          this.similarBooks = response.data;
          this.isModalVisible = true;
        } catch (error) {
          console.error("Ошибка при поиске книг:", error);
        }
      },
      closeModal() {
        this.isModalVisible = false;
      }
    }
  }
  </script>
  