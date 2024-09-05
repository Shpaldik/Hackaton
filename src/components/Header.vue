<template>
    <header class="fixed top-0 left-0 z-50 bg-primary-gray w-full">
        <div class="flex justify-between items-center p-4 mr-32 ml-32 text-white">
            <img src="/public/logo.png" alt="" width="70">
            <div class="flex items-center gap-20">
                <a class="font-semibold" href="">Книги</a>         
                <div class="flex items-center gap-1">

                    <a class="font-semibold" href="">Подписки</a>
                    <img class="hover:rotate-180" src="/public/vector.png" alt="" width="15">
                </div>
            </div>

            <div class="relative flex items-center gap-5">
                <input class="w-96 border rounded-3xl p-1 pl-5 outline-none bg-primary-bg-gray border border-4 border-primary-lime hover:border-10" type="text" placeholder="Книга или автор">
                <img class="absolute right-3" src="/public/search.png" alt="">
            </div>

            <div class="flex items-center gap-3">
                <img src="/public/profile.png" alt="" width="35">
                <a class="font-semibold" href="">Войти</a>
            </div>
        </div>        
    </header>
</template>