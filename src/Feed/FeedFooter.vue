<script setup>
import CommentCount from './view/CommentCount.vue'
import LikeCount from './view/LikeCount.vue'
import ViewCount from './view/ViewCount.vue'

const props = defineProps({
  like: Number,
  view: Number,
  comment: Number,
  kupit: Function,
})
</script>

<template>
  <div class="mt-10 flex gap-4 bg-amber-100 p-1 justify-center items-center">
    <CommentCount :comment="comment" />
    <LikeCount :like="like" />
    <ViewCount :view="view" />

    <button class="bg-black text-white p-2" @click="kupit()">Купить</button>
  </div>
</template>
