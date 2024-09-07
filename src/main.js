import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Profile from './pages/Profile.vue';
import Game from './pages/GamePage.vue';
import PopularBooksDetails from './components/PopularBooksDetails.vue'; // Страница книги
import NoveltiesBooksDetails from './components/NoveltiesBooksDetails.vue';
import ActuallyBooksDetails from './components/ActuallyBooksDetails.vue';


const routes = [
{
  path: '/book/:id',
  name: 'BookDetails',
  component: PopularBooksDetails,
  props: true, // Позволяет передавать параметры маршрута как props в компонент
},

{
  path: '/novelties/:id',
  name: 'NoveltiesDetails',
  component: NoveltiesBooksDetails,
  props: true, // Позволяет передавать параметры маршрута как props в компонент
},

{
  path: '/actually/:id',
  name: 'ActuallyDetails',
  component: ActuallyBooksDetails,
  props: true, // Позволяет передавать параметры маршрута как props в компонент
},
  { path: '/', name: 'Home', component: Home },
  { path: '/Login', name: 'Login', component: Login },
  { path: '/Profile', name: 'Profile', component: Profile },
  { path: '/GamePage', name: 'Game', component: Game },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);

app.use(router);


app.mount('#app');

