<script setup>
import { useProductsStore } from './store/prodects'
import { storeToRefs } from 'pinia'

const store = useProductsStore()
const { sum } = storeToRefs(store)
</script>
<template>
  <div class="p-3 text-2xl mb-10">Общая сумма покупок: {{ sum }}</div>
</template>
