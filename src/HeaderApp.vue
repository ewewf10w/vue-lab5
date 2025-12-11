<script setup>
import { inject, computed } from 'vue'

const purchased = inject('purchased', [])

const sum = computed(() =>
  purchased.value.reduce((total, product) => {
    return total + product.price
  }, 0),
)
</script>
<template>
  <div class="p-3 text-2xl mb-10">Общая сумма покупок: {{ sum }}</div>
</template>
