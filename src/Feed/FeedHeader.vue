<script setup>
import { inject } from 'vue'

const product = inject('product')
const user = product.user
const count = product.collection_medias.length
const name = product.name
</script>
<template>
  <div class="text-sm">
    <div>Creator - {{ user.full_name }}</div>
    <div>MEdia count: {{ count }}</div>
  </div>
  <h2 class="text-lg font-extrabold">{{ name }}</h2>
</template>
