import { createRouter, createWebHistory } from 'vue-router'

import Guest from '../components/Guest.vue'
import Layout from '../components/Layout.vue'
import Home from '../views/Home.vue'
import MealsByIngredients from '../views/MealsByIngredients.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsDetails from '../views/MealsDetails.vue'
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/letter/:letter?',
        name: 'byLetter',
        component: MealsByLetter,
      },
      {
        path: '/name/:name?',
        name: 'byName',
        component: MealsByName,
      },
      {
        path: '/ingredients/:ingredients?',
        name: 'byIngredient',
        component: MealsByIngredients,
      },
      {
        path: "meal/:id",
        name: "mealDetails",
        component: MealsDetails,
      }
    ],
  },
  {
    path: '/guest',
    name: 'guest',
    component: Guest,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
