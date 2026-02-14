<script setup>
import { ref, computed } from 'vue';

const currentNumber = ref("200");
const isAnimating = ref(false);
const targetNumbers = ["301", "302", "403","404", "500", "501", "502", "200"];

let shouldStop = false;
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const digits = computed(() => currentNumber.value.split(''));

const handleHover = async () => {
  if (isAnimating.value) return;
  
  isAnimating.value = true;
  shouldStop = false;

  for (const target of targetNumbers) {
    if (shouldStop) break;
    currentNumber.value = target;
    await sleep(50); 
  }

  currentNumber.value = "200";
  isAnimating.value = false;
};

const handleMouseLeave = () => {
  shouldStop = true;
  currentNumber.value = "200";
  isAnimating.value = false;
};
</script>

<template>
  <div class="">
    <div 
      @mouseenter="handleHover"
      @mouseleave="handleMouseLeave"
      class="group relative px-3 py-1 bg-[#F2E8FF] rounded-[6px] flex items-center justify-center cursor-pointer overflow-hidden transition-all duration-300 border border-transparent hover:border-indigo-200"
    >
      <span class="flex items-center tracking-tight">
        
        <span class="flex">
          <span 
            v-for="(digit, idx) in digits" 
            :key="idx"
            class="inline-block w-[1ch] text-center transition-colors duration-100"
            :class="isAnimating ? 'text-green-500' : 'text-[#23272F]'"
          >
            {{ digit }}
          </span>
        </span>

        <span 
          class="ml-1 transition-colors duration-200"
          :class="isAnimating ? 'text-indigo-600' : 'text-[#23272F]'"
        >
          Soft
        </span>

      </span>

      <div class="absolute bottom-0 left-0 h-0.5 bg-indigo-500 transition-all duration-500 w-0 group-hover:w-full"></div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Tomorrow:wght@600;700&display=swap');

span {
  user-select: none;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.animate-pulse {
  animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>