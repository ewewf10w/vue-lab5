import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useProductsStore = defineStore('products', () => {
  const products = ref([
    {
      id: 1,
      name: 'Test',
      price: 500,
      collection_medias: ['media1', 'media2', 'media3'],
      meta: {
        view: 1500,
        comment: 100,
        like: 50,
      },
      user: {
        id: 1,
        full_name: 'Alex Alex Alex',
      },
    },

    {
      id: 2,
      name: 'Test 3',
      price: 5000,
      collection_medias: ['media1'],
      meta: {
        view: 200,
        comment: 1,
        like: 25,
      },
      user: {
        id: 2,
        full_name: 'Palex Palex Palex',
      },
    },
    {
      id: 3,
      name: 'Test 2',
      price: 170,
      collection_medias: ['media1'],
      meta: {
        view: 200,
        comment: 1,
        like: 25,
      },
      user: {
        id: 2,
        full_name: 'Sasha Pomchik',
      },
    },
    {
      id: 4,
      name: 'Test 4',
      price: 50000,
      collection_medias: ['media1'],
      meta: {
        view: 200,
        comment: 1,
        like: 25,
      },
      user: {
        id: 2,
        full_name: 'Savchok',
      },
    },
  ])

  const purchased = ref([])

  const onKupit = (id) => {
    const product = products.value.find((i) => i.id == id)
    purchased.value.push({ ...product })
    // console.log(sum.value)
  }

  const sum = computed(() => purchased.value.reduce((total, product) => total + product.price, 0))

  return { products, purchased, onKupit, sum }
})
