import { ref } from 'vue'

export function useReactionButton(initialCount = 0) {
  const count = ref(initialCount)
  const isActive = ref(false)

  const handleClick = () => {
    if (isActive.value) {
      count.value--
      isActive.value = false
    } else {
      count.value++
      isActive.value = true
    }
    console.log('Reaction clicked, new count:', count.value)
  }

  return { count, isActive, handleClick }
}
