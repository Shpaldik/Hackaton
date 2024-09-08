<script>
import Quiz from '../components/Game/Quiz.vue';
import Options from '../components/Game/Options.vue';
import Restart from '../components/Game/Restart.vue';
import { store } from '../store';

export default {
  components: {
    Quiz,
    Options,
    Restart,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="text-gray-700 bg-white h-[100vh]" >
    <Options v-if="store.step == 0"></Options>
    <Quiz v-if="store.step == 1"></Quiz>
    <Restart v-if="store.step == 2"></Restart>
  </div>
</template>

<style>
/* body {
  font-family: 'Epilogue';
} */
input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
