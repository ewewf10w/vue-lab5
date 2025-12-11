<script setup>
import { provide } from 'vue'
import FeedNode from './Feed/FeedNode.vue'
import HeaderApp from './HeaderApp.vue'
import { useProductsStore } from './store/prodects'
import { storeToRefs } from 'pinia'

const store = useProductsStore()
const storeRef = storeToRefs(store)
const products = storeRef.products

provide('purchased', storeRef.purchased)
provide('onKupit', store.onKupit)
provide('sum', storeRef.sum)
</script>

<template>
  <div class="p-6 container mx-auto">
    <HeaderApp />

    <div class="grid grid-cols-2 gap-6">
      <FeedNode v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>
