<template>
  <div class="w-full h-screen flex justify-center items-center">
    <svg
      class="rotating w-10 h-10"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#666"
    >
      <path
        d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm8 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-19 0c0-6.065 4.935-11 11-11v2c-4.962 0-9 4.038-9 9 0 2.481 1.009 4.731 2.639 6.361l-1.414 1.414.015.014c-2-1.994-3.24-4.749-3.24-7.789z"
      />
    </svg>
  </div>
</template>

<script setup>
import { store } from '../../store';
</script>

<style>
@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.rotating {
  animation: rotating 1s linear infinite;
}
</style>
