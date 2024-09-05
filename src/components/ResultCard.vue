<template>
  <div class="result-card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <a :href="fileLink" target="_blank" rel="noopener noreferrer">View File</a>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';

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
      fileLink: {
        type: String,
        required: true
      }
    }
  });
</script>

<style scoped>
  .result-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    h3

  {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 10px;
  }

  a {
    color: #007bff;
    text-decoration: none;
    font-weight: 600;
  }

    a:hover {
      text-decoration: underline;
    }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  }
</style>
