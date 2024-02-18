<template>
   <v-container>
    <div class="images">
      <a 
        v-for="image in images" 
        :key="image" 
        :ref="`${API_URL}/static/images/${image}`" 
        class="image"
      >
        <img :src="`${API_URL}/static/images/${image}`" alt="image">
        <p class="file_name">{{ image }}</p>
        <div class="footer">
          <v-btn color="primary" variant="tonal" @click="() => copy(image)">
            copy
          </v-btn>
        </div>
      </a>
    </div>
    <div class="notificationContainer">
        <v-slide-y-transition group>
          <v-alert v-for="(notification, index) in notifications" :key="index" :type="notification.type">
              {{ notification.message }}
          </v-alert>
        </v-slide-y-transition>
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

interface INotification {
   type: "success" | "error",
   message: string,
}

export default defineComponent({
   data: () => ({
    images: [],
    notifications: [] as INotification[],
    API_URL: API_URL
  }),
  created() {
      this.initialize()
  },
  methods: {
    async initialize() {
      try {
        const res = await axios.get(`${API_URL}/api/files`);
        this.images = res.data.files
      }
      catch (error) {
        console.error(error)
        alert("Error!")
      }
    },
    async copy(text: string) {
      await navigator.clipboard.writeText(`${API_URL}/static/images/${text}`)
      this.addNotification({ type: "success", message: text })
    },
    addNotification(newNotification: INotification) {
      this.notifications.push(newNotification);
      setTimeout(() => {
        this.removeNotification(newNotification);
      }, 3000);
    },
    removeNotification(notification: INotification) {
      const index = this.notifications.indexOf(notification);
      if (index !== -1) {
        this.notifications.splice(index, 1);
      }
    },
  }
})
</script>

<style scoped lang="scss">

  .notificationContainer {
    position: fixed;
    bottom: 10px;
    right: 10px;
    display: grid;
    grid-gap: .5em;
    z-index: 99;
  }
  .images{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: 45px;

    .image{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    img {
      width: 100%;
    }

    .file_name{
       font-size: 12px;
       color: #757575;
    }

    .footer{
      display: flex;
      align-items: center;
      justify-content: center;

    }
  }
</style>