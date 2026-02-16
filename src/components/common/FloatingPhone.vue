<script setup>
import { computed } from 'vue'

const props = defineProps({
  scrollVisible: Boolean
})

const bottomClass = computed(() =>
  props.scrollVisible ? 'bottom-24' : 'bottom-8'
)
</script>

<template>
  <a
    href="tel:*0003"
    :class="[
      'fixed right-8 z-50 w-14 h-14 flex items-center justify-center rounded-full text-white shadow-2xl transition-all duration-300',
      bottomClass,
      'animate-color-pulse'
    ]"
    aria-label="Zəng et"
  >
    <i class="fas fa-phone-alt text-xl"></i>
    <span class="absolute inset-0 rounded-full animate-ping opacity-75 bg-current"></span>
  </a>
</template>


<style scoped>
@keyframes colorChange {

  0%,
  100% {
    background-color: #00A3C4;
    box-shadow: 0 0 20px rgba(101, 195, 238, 0.6);
  }

  50% {
    background-color: #ef4444;
    box-shadow: 0 0 20px rgba(239, 68, 68, 0.6);
  }
}

.animate-color-pulse {
  animation: colorChange 3s infinite ease-in-out;
}

@keyframes phoneShake {

  0%,
  100% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(-15deg);
  }

  75% {
    transform: rotate(15deg);
  }
}

.fa-phone-alt {
  animation: phoneShake 0.5s infinite ease-in-out;
}
</style>