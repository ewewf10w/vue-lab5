<script setup>
import { inject } from 'vue'

const sum = inject('sum')
</script>
<template>
  <div class="p-3 text-2xl mb-10">Общая сумма покупок: {{ sum }}</div>
</template>
