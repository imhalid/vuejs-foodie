<template>
  <div class="p-8 pb-0 flex flex-col items-center justify-center">
    <input
      type="text"
      v-model="keyword"
      class="rounded-lg border-2 border-neutral-200 w-full outline-0 ring-0"
      placeholder="Search for meals"
      @change="searchMeals"
    />
  </div>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-8"
  >
    <div
      v-for="meal in searchResults"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl overflow-hidden"
    >
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="h-52 w-full object-cover"
      />
      <div class="p-4">
        <h3 class="font-bold text-xl">{{ meal.strMeal }}</h3>
        <p class="text-gray-500 mt-2">
          {{ meal.strInstructions.slice(0, 180) }}
          {{ meal.strInstructions.length > 90 ? '...' : '' }}
        </p>
        <div class="flex justify-between mt-4">
          <a
            :href="meal.strYoutube"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md border-red-700 hover:border-red-800 border-2 transition-colors duration-300"
          >
            YouTube
          </a>
          <a
            :href="meal.strSource"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-neutral-600 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded-md border-neutral-700 hover:border-neutral-800 border-2 transition-colors duration-300"
          >
            Kaynak
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import store from '../store'

const route = useRoute()
const keyword = ref('')
const searchResults = computed(() => store.state.searchedMeals)

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()
  }
})

const searchMeals = async () => {
  store.dispatch('searchMeals', keyword.value)
}
</script>
