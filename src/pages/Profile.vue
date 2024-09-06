<template>
    <div>
      <Header />
      <section class="mx-10 lg:mx-40 mt-32">
        <h1 class="text-4xl font-extrabold text-center text-white">Профиль</h1>
        
        <div class="flex items-center p-10 rounded-2xl text-white bg-primary-bg-blackgray mt-10 space-x-10">
          <img src="/icons/profile.svg" alt="Профиль" class="w-60 h-60 object-cover" />
          <div class="space-y-4">
            <p><span class="font-semibold">Фамилия:</span> Алдияров</p>
            <p><span class="font-semibold">Ник:</span> Shpaldik</p>
            <p><span class="font-semibold">Электронная почта:</span> 6I2kS@example.com</p>
            <p><span class="font-semibold">Пол:</span> Мужской</p>
            <p><span class="font-semibold">Возраст:</span> 21</p>
          </div>
        </div>

        <div class="text-center text-white mt-20">
            <h1 class="text-4xl font-extrabold">Избранное</h1>
            <p class="mt-5">Здесь будет список избранных книг</p>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue'
  
  export default {
    components: {
      Header
    }
  }
  </script>