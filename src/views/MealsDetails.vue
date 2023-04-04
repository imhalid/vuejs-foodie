<template>
  <div class="flex justify-center items-center w-full">
    <div class="max-w-xl mt-12">
      <h1 class="text-3xl font-bold ">
        {{ meal.strMeal }}
      </h1>
      <p
        class="inline-block bg-sky-400 text-white text-xs font-bold leading-none rounded-full px-3 py-1 uppercase tracking-wide">
        {{ meal.strCategory }}
      </p>
      <p
        class="inline-block ml-1 bg-emerald-400 text-white text-xs font-bold leading-none rounded-full px-3 py-1 uppercase tracking-wide">
        {{ meal.strArea }}
      </p>
      <div class="mt-5">
        <img :src="meal.strMealThumb" :alt="meal.strMeal"
          class="h-32 w-32 mt-5 mr-5 ring-2 ring-white shadow-md float-left rounded-lg  object-cover" />
        {{ meal.strInstructions }}
      </div>
      <ul class="mt-4 list-disc list-inside">
        <p class="text-lg mb-2 font-bold">Ingredient</p>
        <template v-for="(el, index) in new Array(20)">
          <li v-if="meal[`strIngredient${index + 1}`]">
            {{ meal[`strIngredient${index + 1}`] }}
          </li>
        </template>
      </ul>
      <p class="border-t-[1px] mt-5 border-neutral-300 pt-2">
        For more details: <a :href="meal.strSource" target="_blank" rel="noopener noreferrer"
          class="italic text-neutral-500 hover:text-neutral-600 transition-colors">{{
            meal.strSource
          }}</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axiosClient from '../axiosClient'

const router = useRoute()

const meal = ref({})

onMounted(() => {
  axiosClient.get(`/lookup.php?i=${router.params.id}`)
    .then(response => {
      meal.value = response.data.meals[0]
    })
})
</script>