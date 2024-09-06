<script>
import Header from '../components/Header.vue';
export default {
    components: {
        Header
    }
}
</script>

<template>
    <section class="mx-10 lg:mx-40">
        <Header />
        <h1 class="text-4xl font-extrabold text-center text-white mt-32">Логин</h1>

        <div class="max-w-md flex items-center justify-center px-4 py-4 mx-auto mt-8 rounded-3xl">
          <div class="max-w-md p-10 rounded-3xl shadow-md" style="background-color: rgba(39, 39, 39, 1);">
            <h2 class="text-2xl font-bold text-white mb-6 text-center">Авторизация</h2>
            <form @submit.prevent="onSubmit" class="space-y-4">
              <div>
                <label for="email" class="text-white block">Email:</label>
                <input type="email" id="email" v-model="email" required class="w-full px-4 py-2 rounded border border-gray-300 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
              </div>
              <div>
                <label for="password" class="text-white block">Пароль:</label>
                <input type="password" id="password" v-model="password" required class="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none mt-2 focus:ring-2 focus:ring-blue-400">
              </div>
              <div>
                <button type="submit" class="w-full bg-primary-lime text-white py-2 px-4 rounded hover:bg-green-700 transition duration-200">Войти</button>
              </div>
            </form>
           </div>
          </div>
    </section>
</template>