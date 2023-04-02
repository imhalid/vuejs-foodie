<template>
  <header class="bg-white shadow h-14 flex justify-between items-stretch">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center px-5 hover:bg-sky-100"
    >
      Home
    </router-link>
    <div class="flex gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="hover:bg-emerald-100 inline-flex items-center transition-colors px-5"
      >
        Search
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="hover:bg-emerald-100 inline-flex items-center transition-colors px-5"
      >
        Meals
      </router-link>
      <router-link
        :to="{ name: 'byIngredient' }"
        class="hover:bg-emerald-100 inline-flex items-center transition-colors px-5"
      >
        Ingredients
      </router-link>
    </div>
  </header>
</template>
