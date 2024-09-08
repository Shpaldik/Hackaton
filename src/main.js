import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Profile from './pages/Profile.vue';
import Game from './pages/GamePage.vue';
import Chat from './pages/Chat.vue';
import PopularBooksDetails from './components/PopularBooksDetails.vue';
import NoveltiesBooksDetails from './components/NoveltiesBooksDetails.vue';
import ActuallyBooksDetails from './components/ActuallyBooksDetails.vue';


const routes = [
{
  path: '/book/:id',
  name: 'BookDetails',
  component: PopularBooksDetails,
  props: true,
},

{
  path: '/novelties/:id',
  name: 'NoveltiesDetails',
  component: NoveltiesBooksDetails,
  props: true,
},

{
  path: '/actually/:id',
  name: 'ActuallyDetails',
  component: ActuallyBooksDetails,
  props: true,
},
  { path: '/', name: 'Home', component: Home },
  { path: '/Login', name: 'Login', component: Login },
  { path: '/Profile', name: 'Profile', component: Profile },
  { path: '/GamePage', name: 'Game', component: Game },
  { path: '/Chat', name: 'Chat', component: Chat },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);

app.use(router);


app.mount('#app');

