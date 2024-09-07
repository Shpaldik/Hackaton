<template>
    <div>
      <!-- Первый шаг -->
      <section v-if="step === 1" class="registrationPage">
        <div class="backBtn">
          <div class="backIcon" @click="goToLogin">
            <img src="/public/chevronLeft.svg" alt="Not Found" />
          </div>
          <p>Назад</p>
        </div>
        <section class="login-page2">
          <div class="rightSection">
            <div class="logo">
              <img src="/public/logo.png" alt="Not Found" class="img" />
            </div>
            <h1 class="h1">Lorby</h1>
            <h3 class="h3">Твой личный репетитор</h3>
          </div>
          <div class="leftSection">
            <h2 class="h2">
              Создать аккаунт <br /> Lorby
            </h2>
            <input
              type="text"
              class="input"
              placeholder="Введите адрес почты"
              v-model="email"
            />
            <input
              type="text"
              class="input"
              placeholder="Придумай логин"
              v-model="username"
            />
            <div class="inputBoxPassword">
              <input
                :type="visible ? 'text' : 'password'"
                class="inputPassword"
                placeholder="Создай пароль"
                v-model="password"
              />
              <div class="checkPassword" @click="toggleVisibility">
                <img
                  :src="visible ? '/public/eyeOpen.svg' : '/public/eye.svg'"
                  alt="Not Found"
                  class="img"
                />
              </div>
            </div>
  
            <div class="inputBoxPassword">
              <input
                :type="visible2 ? 'text' : 'password'"
                class="inputPassword"
                placeholder="Повтори пароль"
                v-model="rePassword"
              />
              <div class="checkPassword" @click="toggleVisibility2">
                <img
                  :src="visible2 ? '/public/eyeOpen.svg' : '/public/eye.svg'"
                  alt="Not Found"
                  class="img"
                />
              </div>
            </div>
            <button class="button" @click="regBtn">Далее</button>
          </div>
        </section>
      </section>
  
      <!-- Второй шаг -->
      <section v-if="step === 2" class="registrationPage">
        <div class="backBtn">
          <div class="backIcon" @click="backFun">
            <img src="/public/chevronLeft.svg" alt="Not Found" />
          </div>
          <p>Назад</p>
        </div>
        <section class="login-page2">
          <div class="rightSection">
            <div class="logo">
              <img src="/public/logo.png" alt="Not Found" class="img" />
            </div>
            <h1 class="h1">Lorby</h1>
            <h3 class="h3">Твой личный репетитор</h3>
          </div>
          <div class="leftSection">
            <h2 class="h2">
              Введи 4-значный код, <br />
              высланный на <br /> {{ email }}
            </h2>
            <div class="verifyCodeBox">
                <input
                v-for="(code, index) in codes"
                :key="index"
                ref="inputRefs[index]"
                class="inputVerifyCode"
                type="text"
                maxlength="1"
                v-model="codes[index]"
                @input="handleChange(index, $event)"
                @keydown.delete="handleKeyDown(index, $event)"
                :style="{ border: verificationStatus === 'error' ? '1px solid red' : '' }"
                />
                <button class="button verify-btn" @click="handleSubmit">Подтвердить</button>
            </div>
          <p class="send-again" @click="reSendCode">Выслать код повторно</p>
          </div>
        </section>
      </section>
    </div>
  </template>
  
  <script>
  import { ref, reactive, nextTick } from 'vue';
  
  export default {
    setup() {
      const email = ref('');
      const username = ref('');
      const password = ref('');
      const rePassword = ref('');
      const verificationStatus = ref('');
      const visible = ref(false);
      const visible2 = ref(false);
      const step = ref(1);
      const codes = ref(['', '', '', '']);
      const inputRefs = ref([null, null, null, null]);

    const handleChange = (index, event) => {
      const value = event.target.value;
      codes.value[index] = value;
      if (value && index < inputRefs.value.length - 1) {
        inputRefs.value[index + 1].focus();
      }
    };

    const handleKeyDown = (index, event) => {
      if (event.key === 'Backspace' && index > 0 && !codes.value[index]) {
        inputRefs.value[index - 1].focus();
      }
    };

      const toggleVisibility = () => {
        visible.value = !visible.value;
      };
  
      const toggleVisibility2 = () => {
        visible2.value = !visible2.value;
      };
  
      const backFun = () => {
        step.value = 1; // Переключение на шаг 1
      };
  
      const regBtn = () => {
        step.value = 2;
        // if (email.value && password.value && rePassword.value) {
        //   step.value = 2; // Переключение на шаг 2
        // } else {
        //   alert('Пожалуйста, заполните все поля');
        // }
      };
  
      return {
        email,
        username,
        password,
        rePassword,
        verificationStatus,
        visible,
        visible2,
        step,
        codes,
        regBtn,
        backFun,
        toggleVisibility,
        toggleVisibility2,
      };
    },
  };
  </script>
  
  