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
    <div v-if="isExpanded && audioSrc">
      <audio controls @click.stop>
        <source :src="audioSrc" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      </div>


      <!-- nestedcard -->
      <div v-if="isExpanded && nestedLinks?.length" class="nested-card">
        <button @click.stop="toggleNested" class="nested-toggle-button">
          <span class="nested-arrow">{{ isNestedExpanded ? '▼' : '▶' }}</span>
          {{ isNestedExpanded ? 'Hide Materials' : 'Show Materials' }}
        </button>

        <!-- nested links inside nested card -->
        <div v-if="isNestedExpanded" class="nested-links">
          <div v-for="(nestedLink, index) in nestedLinks" :key="index">
            <a :href="nestedLink.url" target="_blank" rel="noopener noreferrer">{{ nestedLink.name }}</a>
          </div>
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
        required: false
      },
      imageSrc: {
        type: String,
        required: false
      },
      links: {
        type: Array as PropType<{ name: string; url: string }[]>,
        required: true
      },
      nestedLinks: {
        type: Array as PropType<{ name: string; url: string }[]>,
        required: false
      },
      audioSrc: {
        type: String,
        required: false
      }
    },
    setup() {
      const isExpanded = ref(false);
      const isNestedExpanded = ref(false);

      const toggle = () => {
        isExpanded.value = !isExpanded.value;
      };

      const toggleNested = () => {
        isNestedExpanded.value = !isNestedExpanded.value;
      };

      return { isExpanded, toggle, isNestedExpanded, toggleNested };
    }
  });
</script>

<style scoped>
  .audio-player {
    margin-top: 20px;
    padding: 10px;
    background-color: #f1f1f1;
    border-radius: 5px;
  }

  audio {
    width: 100%;
    max-width: 600px;
    margin-top: 10px;
  }
  .result-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .arrow {
    font-size: 1rem;
    margin-right: 10px;
    transition: transform 0.3s ease;
    color: #4C6EF5;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 10px;
  }

  .image-container {
    margin: 10px 0;
    display: flex;
    justify-content: center;
  }

    .image-container img {
      width: 50%;
      border-radius: 8px;
    }

  .links,
  .nested-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

    .links a,
    .nested-links a {
      color: #007bff;
      text-decoration: none;
      font-weight: 600;
      display: block;
    }

      .links a:hover,
      .nested-links a:hover {
        text-decoration: underline;
      }

  .result-card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .nested-card {
    margin-top: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 8px; 
    padding: 0; 
  }

  .nested-toggle-button {
    width: 100%;
    padding: 15px;
    background-color: transparent; 
    border: none; 
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .nested-arrow {
    font-size: 1rem;
    margin-right: 10px;
    color: #4C6EF5;
  }

  .nested-toggle-button:hover {
    transform: none; 
    box-shadow: none;
  }

 
  .nested-links {
    padding: 15px; 
    background-color: transparent; 
  }

    .nested-links a {
      color: #007bff;
      text-decoration: none;
      font-weight: 600;
    }

      .nested-links a:hover {
        text-decoration: underline;
      }
</style>
