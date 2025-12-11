<script setup>
import { provide } from 'vue'
import FeedNode from './Feed/FeedNode.vue'
import HeaderApp from './HeaderApp.vue'
import { useProducts } from './composables/useProducts'

const { products, purchased, onKupit } = useProducts()
provide('purchased', purchased)
provide('onKupit', onKupit)
</script>

<template>
  <div class="p-6 container mx-auto">
    <HeaderApp />

    <div class="grid grid-cols-2 gap-6">
      <FeedNode v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>
