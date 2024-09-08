<template>
  <div>
    <section  class="registrationPage">
      <div class="backBtn">
        <div class="backIcon" @click="navigateToLogin" >
          <img src="/public/chevronLeft.svg" alt="Not Found" />
        </div>
        <p class="back">Назад</p>
      </div>
      <section class="login-page2">
        <div class="leftSection">
          <h2 class="h2">
            Войти в аккаунт
          </h2>
          <input
            type="text"
            class="input"
            placeholder="Введите логин"
            v-model="email"
          />
          <div class="inputBoxPassword">
            <input
              :type="visible ? 'text' : 'password'"
              class="inputPassword"
              placeholder="Введи пароль"
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
          <button class="button" @click="logBtn">Далее</button>
          <p class="text-white text-[20px] text-center">Ещё нет аккаунта?</p>
          <button class="button" @click="regBtn">Регистрация</button>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import { ref, reactive, nextTick } from 'vue';
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const email = ref('');
    const username = ref('');
    const password = ref('');
    const rePassword = ref('');
    const verificationStatus = ref('');
    const visible = ref(false);
    const visible2 = ref(false);
    // const step = ref(1);
    // const codes = ref(['', '', '', '']);
    // const inputRefs = ref([null, null, null, null]);

    function navigateToLogin() {
      router.push('/')
    }
    const regBtn = () => {
      router.push('/register')
    }
  

    const toggleVisibility = () => {
      visible.value = !visible.value;
    };

    const toggleVisibility2 = () => {
      visible2.value = !visible2.value;
    };

    const backFun = () => {
      step.value = 1; // Переключение на шаг 1
    };

    const logBtn = () => {

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
      logBtn,
      backFun,
      regBtn,
      toggleVisibility,
      toggleVisibility2,
      navigateToLogin
    };
  },
};
</script>

<style scoped>

body{
  background: #000000;
}
.registrationPage{
    display: flex;
    flex-direction: column;
    margin: 32px 130px 100px;
}
.backBtn{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
}
.backBtn p{
    font-size: 16px;
}
.backIcon{
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    cursor: pointer;
}
.backIcon img{
  border-radius: 100%;
}
.login-page2{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 90px;
}
.login-page2 h2{
    text-align: center;
    line-height: 1.5;
}
.login-page2 .input{
    margin-bottom: 14px;
}
.login-page2 .input:nth-child(3){
  margin-bottom: 0;
}
.login-page2 button{
    margin-top: 24px;
    background-color: #D7D7D7;
    font-size: 16px;
    font-weight: 500;
    color: #767676;
}


.verifyCodeBox{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
}
.inputVerifyCode{
    outline: none;
    border: none;
    border-radius: 12px;
    width: 56px;
    height: 64px;
    box-sizing: border-box;
    padding: 13px 16px;
    background-color: #f4f4f4;
    color: #212121;
    font-size: 24px;
    font-weight: 500;
}
.verifyBtn{
    margin: 56px 0 24px;
}
.sendAgain{
    font-size: 14px;
    text-align: center;
    font-weight: 500;
}
.login-page{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 130px 150px;
}

.logo{
    width: 480px;
    margin-bottom: 40px;
}

.rightSection, .leftSection{
    display: flex;
    flex-direction: column;;
    position: relative;
}
.rightSection{
    align-items: center;
}
.rightSection h1{
    margin-bottom: 20px;
}
.rightSection h3{
    font-weight: 400;
}

.leftSection h2{
    margin-bottom: 48px;
    text-align: center;
}
.inputBoxPassword{
    display: flex;
    align-items: center;
    background-color: #f8f8f8;
    border-radius: 12px;
    gap: 50px;
    width: 343px;
    height: 52px;
    padding: 14px 16px;
    box-sizing: border-box;
    margin-top: 14px;
}
.inputBoxPassword:focus-within{
    border: 1px solid #292929;
}
.inputBoxPassword input{
    width: 249px;
    height: 24px;
    border: none;
    outline: none;
    color: #212121;
    font-weight: 500;
    font-size: 16px;
    background-color: transparent;
}
.checkPassword{
    width: 21px;
    height: 15px;
    cursor: pointer;
}

.leftSection button{
    color: #fff;
    background-color: #292929;
    margin: 48px 0 61px;
    font-size: 16px;
}

.loginError{
    width: 343px;
    height: 52px;
    border: 1px solid #EC0000;
    border-radius: 12px;
    padding: 15px 16px;
    position: absolute;
    top: -225px;
    animation: slideToDown .5s ease .35s 1 normal both;
}
.loginError p{
    font-size: 16px;
    font-weight: 500;
    color: #EC0000;
}

.loginError.show {
    opacity: 1;
}

@keyframes slideToDown{
    from{
        opacity: 0;
        /* transform: translateY(-100px); */
    }
    to{
        opacity: 1;
        /* transform: translateY(0px); */
    }
}



.img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.button{
    border: none;
    outline: none;
    font-weight: 500;
    width: 343px;
    height: 50px;
    border-radius: 12px;
    background: transparent;
    cursor: pointer;
    font-family: "M PLUS 1p", sans-serif;
}

.input{
    border: none;
    outline: none;
    background-color: #f8f8f8;
    color: #212121;
    font-weight: 400;
    font-size: 16px;
    border-radius: 12px;
    width: 343px;
    height: 52px;
    padding: 14px 16px;
    box-sizing: border-box;
}
.input::placeholder{
    color: #767676;
    font-weight: 400;
    font-size: 16px;
}
.input:focus-visible{
    border: 1px solid #292929;
}

h1, h2, h3, h4, h5, h6, span, .link{
    color: #212121;
    font-weight: 500;
}
.h1{
    font-size: 48px;
}
.h2{
    font-size: 32px;
    color: white;
}
.h3{
    font-size: 28px;
}
.link{
    font-size: 16px;
    text-align: center;
}

.send-again{
  color: white;
  text-align: center;
}

.back{
  color: white
}


</style>

