<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const emit = defineEmits(['visible-change'])
const isVisible = ref(false)

const checkScroll = () => {
  isVisible.value = window.scrollY > 400
}

watch(isVisible, (val) => {
  emit('visible-change', val)
})

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <Transition name="fade">
    <button v-if="isVisible" @click="scrollToTop"
      class="fixed bottom-8 right-8 z-50 w-14 h-14 p-4 bg-[#00A3C4] text-white rounded-full shadow-2xl hover:bg-[#008ba8] transition-all hover:-translate-y-1 active:scale-95 group"
      aria-label="Scroll to top">
      <i class="fas fa-arrow-up text-lg group-hover:animate-bounce"></i>
    </button>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>