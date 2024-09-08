<template>
    <div>
      <Header />
      <section class="mt-16">
        <div class="flex px-20 py-2 h-screen">
          <!-- Левая колонка с чатом -->
          <div class="w-1/4 h-full overflow-auto scrollbar-thin scrollbar-thumb-primary-lime scrollbar-track-gray-800">
            <div class="flex flex-col gap-2">
              <div
                v-for="i in 6"
                :key="i"
                class="flex bg-black text-white pl-5 pr-20 py-7 border-b-2 border-primary-lime gap-4 hover:bg-primary-lime"
              >
                <img src="/public/profilexample.png" width="60" class="object-cover" alt="" />
                <div>
                  <p class="font-bold text-xl tracking-wide">dani_bek</p>
                  <p class="text-gray-400 text-base">последнее сообщение</p>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Правая колонка с чатом -->
          <div class="flex flex-col w-3/4 bg-primary-bg-gray relative">
            <div class="flex items-center bg-primary-bg-blackgray w-full text-white text-3xl py-3 px-5 gap-4">
              <img src="/public/profilexample.png" width="60" class="object-cover" alt="" />
              <p class="font-medium flex-grow">dani_bek</p>
            </div>
  
 
            <div class="flex-grow p-5 overflow-auto scrollbar-thin scrollbar-thumb-primary-lime scrollbar-track-gray-800">
              <div v-for="(message, index) in messages" :key="index" class="relative bg-gray-800 text-white p-4 mb-4 rounded-lg max-w-xs" :class="{ 'self-end bg-gray-700': message.isOwn }">
                <p v-if="!message.isImage">{{ message.text }}</p>
                <img v-else :src="message.text" alt="Отправленное изображение" class="rounded-lg max-w-full h-auto" />
                <p class="text-xs text-gray-400">{{ message.time }}</p>
                <img src="/public/icons/edit.svg" alt="edit" width="16" class="absolute top-2 right-2 cursor-pointer" @click="editMessage(index)" />
              </div>
            </div>
  
            <div class="flex items-center bg-primary-bg-gray w-full text-white px-5 py-3 gap-4 absolute bottom-0">
              <input
                type="file"
                ref="imageInput"
                class="hidden"
                accept="image/png, image/jpeg, pdf"
                @change="sendImage"
              />
              <img class="absolute left-8 z-10 cursor-pointer" src="/public/icons/file.svg" alt="attach" width="20" @click="triggerImageUpload" />
              <input
                type="text"
                v-model="newMessage"
                placeholder="Введите сообщение"
                class="relative flex-grow p-3 border-none outline-none rounded-lg w-full pl-10 bg-gray-800 text-white"
                @keyup.enter="sendMessage"
              />
              <img class="absolute right-8 z-10 cursor-pointer top-1/2 -translate-y-1/2" src="/public/icons/send.svg" alt="send" @click="sendMessage" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  
  export default {
    components: {
      Header,
    },
    data() {
      return {
        messages: [],
        newMessage: '',
        isEditing: false,
        editingIndex: null,
      };
    },
    methods: {
      // Метод для отправки сообщения
      sendMessage() {
        if (!this.newMessage.trim()) return;
  
        const time = new Date().toLocaleTimeString();
  
        if (this.isEditing) {
          // Редактирование сообщения
          this.messages[this.editingIndex].text = this.newMessage;
          this.isEditing = false;
          this.editingIndex = null;
        } else {
          // Отправка нового сообщения
          this.messages.push({
            text: this.newMessage,
            time,
            isOwn: true,
            isImage: false,
          });
        }
  
        this.newMessage = '';
      },
  
      // Метод для отправки изображения
      sendImage(event) {
        const file = event.target.files[0];
        if (!file) return;
  
        const reader = new FileReader();
        reader.onload = (e) => {
          const time = new Date().toLocaleTimeString();
          this.messages.push({
            text: e.target.result, // Base64 изображения
            time,
            isOwn: true,
            isImage: true,
          });
        };
        reader.readAsDataURL(file);
      },
  
      // Метод для вызова диалога выбора файла
      triggerImageUpload() {
        this.$refs.imageInput.click();
      },
  
      // Метод для редактирования сообщения
      editMessage(index) {
        if (this.messages[index].isImage) return; // Нельзя редактировать изображения
        this.newMessage = this.messages[index].text;
        this.isEditing = true;
        this.editingIndex = index;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Здесь можно добавить дополнительные стили для прокрутки или других элементов, если нужно */
  </style>
  