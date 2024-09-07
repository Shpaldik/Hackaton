import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Profile from './pages/Profile.vue';
import Game from './pages/GamePage.vue';
import BookDetails from './components/BookDetails.vue'; // Страница книги


const routes = [
{
  path: '/book/:id',
  name: 'BookDetails',
  component: BookDetails,
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

