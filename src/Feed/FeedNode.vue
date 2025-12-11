<script setup>
import { inject } from 'vue'
import FeedType from './FeedType.vue'

const props = defineProps({
  product: Object,
})

const onKupit = inject('onKupit')

const buyProduct = () => {
  if (onKupit && props.product.id != null) {
    onKupit(props.product.id)
  }
}
</script>

<template>
  <div class="border p-3">
    <div class="border p-5 mb-2">
      <p v-if="product.price" class="text-gray-light text-sm">Цена: {{ product.price }}</p>
      <p v-if="product.purchase_date" class="text-gray-light text-sm">
        Дата покупки: {{ product.purchase_date }}
      </p>
    </div>

    <FeedType
      :product="product"
      :user="product.user"
      :meta="product.meta"
      :kupit="buyProduct"
    ></FeedType>
  </div>
</template>
