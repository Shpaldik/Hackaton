<template>
    <header class="fixed top-0 left-0 z-50 bg-primary-gray w-full">
        <div class="flex justify-between items-center p-4 xl:mr-32 xl:ml-32 lg:mr-20 lg:ml-20 text-white">
            <router-link to="/"><img src="/public/logo.png" alt="" width="70" class="hidden md:block"></router-link>
            <div class="md:flex items-center xl:gap-20 sm:gap-10 gap-5 hidden">
                <a class="font-semibold" href="">Каталог</a>         
                <div class="flex items-center gap-1">
                    <router-link to="/Profile"><a class="font-semibold" href="">Чаты</a></router-link>
                    <img class="hover:rotate-180" src="/public/vector.png" alt="" width="15">               
                </div> 
                <router-link to="/GamePage" class="font-semibold">Игра</router-link>
            </div>

            <div class="relative flex items-center gap-5">
                <input class="sm:w-96 border rounded-3xl p-1 pl-5 outline-none bg-primary-bg-gray border border-4 border-primary-lime hover:border-10 sl:w-64" type="text" placeholder="Книга или автор">
                <img class="absolute right-3" src="/public/search.png" alt="">
            </div>

            <router-link to="/Login">
                <div class="flex items-center gap-3">
                    <img src="/public/profile.png" alt="" width="35">
                    <a class="font-semibold" href="">Войти</a>
                </div>
            </router-link>
        </div>        
    </header>
</template>