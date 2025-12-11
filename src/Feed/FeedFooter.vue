<script setup>
import { inject } from 'vue'
import CommentCount from './view/CommentCount.vue'
import LikeCount from './view/LikeCount.vue'
import ViewCount from './view/ViewCount.vue'

const product = inject('product')
const meta = product.meta
const kupit = inject('onKupit')

const onKupit = () => {
  console.log('SIGMA')
  if (kupit && product.id != null) {
    kupit(product.id)
  }
}
</script>

<template>
  <div class="mt-10 flex gap-4 bg-amber-100 p-1 justify-center items-center">
    <CommentCount :comment="meta.comment" />
    <LikeCount :like="meta.like" />
    <ViewCount :view="meta.view" />

    <button class="bg-black text-white p-2" @click="onKupit">Купить</button>
  </div>
</template>
