<template>
  <div class="p-8 flex flex-col items-center justify-center">
    <div class="flex gap-1">
      <router-link
        v-for="letter of letters"
        :to="{ name: 'byLetter', params: { letter } }"
        :key="letter"
      >
        {{ letter }}
      </router-link>
    </div>
    <div>{{ ingredients }}</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axiosClient from '../axiosClient'

// const meals = computed(() => store.state.meals)
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const ingredients = ref([])
onMounted(async () => {
  const response = await axiosClient.get('/list.php?i=list')
  ingredients.value = response.data.meals
})
</script>
