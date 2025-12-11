<script setup>
import { inject } from 'vue'
import FeedFooter from './FeedFooter.vue'
import FeedHeader from './FeedHeader.vue'

const product = inject('product')
</script>
<template>
  <div class="relative overflow-hidden">
    <FeedHeader />
    <FeedFooter />
  </div>
</template>
