<template>
   <div class="pagination">
      <ul>
         <li v-if="currentPage > 1">
            <router-link to="" @click.prevent="changePage(currentPage - 1)">Previous</router-link>
         </li>
         <li v-for="pageNumber in totalPages" :key="pageNumber" :class="{ active: pageNumber === currentPage }">
            <router-link to="" @click.prevent="changePage(pageNumber)">{{ pageNumber }}</router-link>
         </li>
         <li v-if="currentPage < totalPages">
            <router-link to="" @click.prevent="changePage(currentPage + 1)">Next</router-link>
         </li>
      </ul>
   </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
   props: {
      totalPages: {
         type: Number,
         required: true
      },
      page: {
         type: Number,
      }
   },
   data() {
      return {
         currentPage: this.page || 1
      };
   },
   methods: {
      loadPageData() {
         console.log('Loading data for page', this.currentPage);
      },
      changePage(pageNumber: number) {
         if (pageNumber >= 1 && pageNumber <= this.totalPages && pageNumber !== this.currentPage) {
            this.currentPage = pageNumber;
            this.$emit('page-changed', this.currentPage);
         }
      }
   }
})
</script>

<style scoped lang='scss'>
.pagination {
   width: 100%;
   margin-block: 30px 20px;
   display: flex;
   justify-content: center;

   ul {
      display: flex;
      padding: 0;
      gap: 5px;

      li{
         list-style: none;
      }

      a {
         padding: 0.4rem 1rem;
         min-width: 2.5rem;
         text-align: center;
         color: #1C3A60;
         font-weight: 500;
         border-radius: 3px;
         transition: all 0.2s;
         border: 2px solid #1C3A6022;
         cursor: pointer;
      }

      a:hover {
         border: 2px solid #fe6a00;
      }

      a:hover{
         color: #fe6a00;
      }

      li.active a{
         background-color: #1c559f;
         border: 2px solid #1C3A6022;
         cursor: default;
         user-select: none;
         color: #ffffff;
      }
   }
}

@media screen and (max-width: 768px) {
   .pagination {
      margin-block: 20px 10px;
   }
}


@media screen and (max-width: 480px) {
   .pagination {
      margin-block: 15px 10px;
   }
}
</style>