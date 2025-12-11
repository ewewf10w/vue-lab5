<script setup>
import { inject } from 'vue'
import CommentCount from './view/CommentCount.vue'
import LikeCount from './view/LikeCount.vue'
import ViewCount from './view/ViewCount.vue'

const props = defineProps({
  like: Number,
  view: Number,
  comment: Number,
  product: Object,
})

const kupit = inject('onKupit')

const onKupit = () => {
  console.log('SIGMA')
  if (kupit && props.product.id != null) {
    kupit(props.product.id)
  }
}
</script>

<template>
  <div class="mt-10 flex gap-4 bg-amber-100 p-1 justify-center items-center">
    <CommentCount :comment="comment" />
    <LikeCount :like="like" />
    <ViewCount :view="view" />

    <button class="bg-black text-white p-2" @click="onKupit">Купить</button>
  </div>
</template>
