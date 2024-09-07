<template>
  <div>
    <Header />
    <section class="mx-10 lg:mx-40 mt-32">
      <div class="flex items-center p-10 rounded-2xl text-white mt-10 space-x-10">
        <img src="/public/profilexample.png" alt="Профиль" class="w-60 h-60 object-cover" />
        <div class="space-y-4">
          <div>
            <div class="flex justify-between gap-5">
              <p class="font-medium text-3xl">dani_bek</p>
              <p class="text-xl">0 книг прочитано</p>
            </div>
            <p class="text-xl mt-10">о себе...</p>
          </div>
        </div>
      </div>
    </section> 

    <div class="border-b border-primary-lime"></div>

    <section class="mx-10 lg:mx-40 mt-10 border rounded-2xl p-10 border-primary-lime">
      <h1 class="text-xl font-extrabold text-white">Редактирование</h1>
      <div class="mt-6 text-xl ">
        <form @submit.prevent="onSubmit" class="flexspace-y-4 text-white gap-4">
            <div class="flex gap-4">
               <p class="text-white">Пол:</p>
              <label class="flex items-center">
                <input type="radio" value="male" v-model="selectedGender" class="">
                Мужской
              </label>
              <label class="flex items-center">
                <input type="radio" value="female" v-model="selectedGender" class="bg-primary-lime text-white">
                Женский
              </label>
            </div>
            <div class="flex gap-2 text-white items-center mt-4">
              <p>Дата рождения:</p>
              <input type="text" placeholder="Укажите дату рождения..." class="w-60 rounded-2xl bg-inherit text-primary-text">
            </div>

            <div class="flex gap-4 text-white mt-4">
              <p>Email:</p>
              <input type="text" placeholder="Укажите Email..." class="w-60 rounded-2xl bg-inherit text-primary-text">
            </div>

            <div class="flex gap-4 text-white mt-4">
              <p>Адрес:</p>
              <input type="text" placeholder="Укажите адрес..." class="w-60 rounded-2xl bg-inherit text-white">
            </div>    
        </form>
      </div>
    </section>

    <section class="mx-10 lg:mx-40 mt-10 border rounded-2xl p-10 border-primary-lime">
      <h1 class="text-xl font-extrabold text-white">Изменить пароль</h1>
      <div class="mt-6 text-xl ">
        <form @submit.prevent="onSubmit" class="flexspace-y-4 text-white gap-4">
            <div class="flex gap-2 text-white items-center mt-4">
              <p>Дата рождения:</p>
              <input type="text" placeholder="укажите старый пароль" class="w-60 rounded-2xl bg-inherit text-primary-text">
            </div>

            <div class="flex gap-4 text-white mt-4">
              <p>Новый пароль:</p>
              <input type="text" placeholder="Укажите новый пароль" class="w-60 rounded-2xl bg-inherit text-primary-text">
            </div>

            <div class="flex gap-4 text-white mt-4">
              <p>Повторить пароль:</p>
              <input type="text" placeholder="Повторите новый пароль" class="w-60 rounded-2xl bg-inherit text-white">
            </div>    
        </form>
      </div>
    </section>
    <Footer class="mt-10"/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      selectedGender: ''
    };
  },
  methods: {
    onSubmit() {
      console.log('Выбранный пол:', this.selectedGender);
      alert('Выбранный пол: ' + this.selectedGender);
    }
  }
}
</script>

<style>
body {
  background: #191919;
}
</style>
