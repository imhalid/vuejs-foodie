<template>
  <div class="p-8 flex flex-col items-center justify-center">
    <input
      type="text"
      class="rounded-lg border-2 border-red-200 w-full"
      placeholder="Search for meals"
    />
    <div class="flex gap-1">
      <router-link
        v-for="letter of letters"
        :to="{ name: 'byLetter', params: { letter } }"
        :key="letter"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import axiosClient from '../axiosClient'

// const meals = computed(() => store.state.meals)
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

onMounted(async () => {
  const response = await axiosClient.get('/list.php?i=list')
  console.log(response.data.meals)
})
</script>
