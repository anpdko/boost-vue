<template>
  <div class="result-card" @click="toggle">
    <h3>
      <span class="arrow">{{ isExpanded ? '▼' : '▶' }}</span>
      {{ title }}
    </h3>
    <p>{{ description }}</p>
    <div v-if="isExpanded && imageSrc" class="image-container">
      <img :src="imageSrc" alt="Card Image" />
    </div>
    <div v-if="isExpanded" class="links">
      <div v-for="(link, index) in links" :key="index">
        <a :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.name }}</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, ref } from 'vue';

  export default defineComponent({
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      imageSrc: {
        type: String,
        required: false
      },
      links: {
        type: Array as PropType<{ name: string; url: string }[]>,
        required: true
      }
    },
    setup() {
      const isExpanded = ref(false);

      const toggle = () => {
        isExpanded.value = !isExpanded.value;
      };

      return { isExpanded, toggle };
    }
  });
</script>

<style scoped>
  .result-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    h3

  {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .arrow {
    font-size: 1rem;
    margin-right: 10px;
    transition: transform 0.3s ease;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 10px;
  }

  .image-container {
    margin: 10px 0;
  }

    .image-container img {
      width: 50%;
      border-radius: 8px;
    }

  .links a {
    color: #007bff;
    text-decoration: none;
    font-weight: 600;
    display: block;
    margin-top: 5px;
  }

    .links a:hover {
      text-decoration: underline;
    }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  }

  
</style>
