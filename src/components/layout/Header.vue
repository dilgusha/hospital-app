<script setup lang="ts">
import TopHeader from './TopHeader.vue';
import Navbar from './Navbar.vue';
</script>

<template>
  <header class="sticky top-0 z-100 w-full shadow-sm">
    <TopHeader />
    <Navbar />
  </header>
</template>

<style scoped>

</style>
<!-- 
<template>
  <nav class="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
    <div class="container mx-auto px-6 h-20 flex items-center justify-between relative">
      <div class="flex items-center space-x-2 group cursor-pointer">
        <div class="w-10 h-10 bg-[#00A3C4] rounded-lg flex items-center justify-center text-white transform  group-hover:rotate-12 transition-transform">
          <i class="fas fa-plus"></i>
        </div>
        <div class="text-xl font-black tracking-tighter">
          <span class="text-[#00A3C4]">REFERANS</span>
          <span class="text-[#2d3142] ml-1">AMBULANCE</span>
        </div>
      </div>

      <div class="hidden md:flex items-center relative h-full">
        <div 
          class="absolute transition-all duration-700 ease-in-out z-0 pointer-events-none"
          :class="isMoving ? 'opacity-100' : 'opacity-0 invisible'"
          :style="{ left: indicatorLeft + 'px', transform: 'translateX(-50%)' }"
        >
          <div class="flex flex-col items-center">
            <i class="fas fa-ambulance text-[#00A3C4] text-2xl drop-shadow-sm"></i>
            <div class="w-10 h-0.5 bg-gradient-to-r from-transparent via-[#00A3C4]/30 to-transparent mt-0.5"></div>
          </div>
        </div>

        <ul class="flex items-center space-x-4 h-full">
          <li 
            v-for="(item, index) in menuItems" 
            :key="index"
            :ref="el => menuRefs[index] = el"
            class="relative z-10"
          >
            <a 
              href="#"
              @click.prevent="setActive(index)"
              class="px-5 py-2 text-sm font-bold uppercase tracking-wide transition-all duration-300 rounded-lg"
              :class="activeIdx === index ? 'text-[#00A3C4] bg-[#00A3C4]/5' : 'text-gray-500 hover:text-[#2d3142]'"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>

      <div class="flex items-center space-x-4">
        <a href="tel:*0003" class="group relative overflow-hidden bg-[#2d3142] text-white px-6 py-2.5 rounded-xl font-bold transition-all hover:pr-12">
          <span class="relative z-10">*0003</span>
          <i class="fas fa-phone-alt absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all"></i>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const menuItems = [
  { name: 'Ana Səhifə' },
  { name: 'Xidmətlər' },
  { name: 'Haqqımızda' },
  { name: 'Filiallar' },
  { name: 'Əlaqə' }
];

const activeIdx = ref(0);
const indicatorLeft = ref(0);
const menuRefs = ref([]);
const isMoving = ref(false);

const setActive = (index) => {
  if (activeIdx.value === index) return;

  isMoving.value = true;
  
  const currentEl = menuRefs.value[activeIdx.value];
  const targetEl = menuRefs.value[index];
  
  if (currentEl && targetEl) {
    const startPoint = currentEl.offsetLeft + (currentEl.offsetWidth / 2);
    const endPoint = targetEl.offsetLeft + (targetEl.offsetWidth / 2);
    
    indicatorLeft.value = endPoint;
    activeIdx.value = index;
  }

  setTimeout(() => {
    isMoving.value = false;
  }, 750); 
};

onMounted(() => {
  const firstEl = menuRefs.value[0];
  if (firstEl) {
    indicatorLeft.value = firstEl.offsetLeft + (firstEl.offsetWidth / 2);
  }
});
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

.transition-all {
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
}

nav {
  -webkit-backdrop-filter: blur(8px);
}
</style> -->
<!-- 
<template>
  <nav class="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 h-20">
    <div class="max-w-7xl mx-auto px-4 h-full flex items-center justify-between relative">
      
      <div class="flex-shrink-0 font-bold text-2xl text-[#2d3142]">
        LOGO
      </div>

      <div class="relative h-full flex items-center">
        <div 
          class="absolute top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-700 ease-in-out z-20"
          :class="[
            isMoving ? 'opacity-100 scale-110' : 'opacity-0 invisible scale-90',
            movingDirection === 'right' ? 'rotate-3' : '-rotate-3'
          ]"
          :style="{ left: indicatorLeft + 'px', transform: 'translate(-50%, -50%)' }"
        >
          <div class="flex flex-col items-center relative">
            <div v-if="isMoving" class="absolute -top-1 flex space-x-2">
              <div class="w-1 h-1 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_red]"></div>
              <div class="w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-75 shadow-[0_0_8px_blue]"></div>
            </div>
            
            <i class="fas fa-ambulance text-[#32a1eb] text-2xl drop-shadow-md"></i>
            
            <div class="absolute -bottom-1 w-8 h-1 bg-[#00A3C4]/20 blur-sm rounded-full"></div>
          </div>
        </div>

        <ul class="flex items-center space-x-2 h-full">
          <li 
            v-for="(item, index) in menuItems" 
            :key="index"
            :ref="el => menuRefs[index] = el"
            class="relative z-10"
          >
            <a 
              href="#"
              @click.prevent="setActive(index)"
              class="px-5 py-2 text-sm font-bold uppercase tracking-wide transition-all duration-300 rounded-xl relative group"
              :class="activeIdx === index ? 'text-[#00A3C4]' : 'text-gray-500 hover:text-[#2d3142]'"
            >
              <span 
                v-if="activeIdx === index" 
                class="absolute inset-0  rounded-xl -z-10"
              ></span>
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>

      <div class="flex items-center">
        <a href="tel:*0003" class="group relative flex items-center bg-[#2d3142] text-white px-6 py-3 rounded-2xl font-bold transition-all hover:bg-[#00A3C4] hover:shadow-lg hover:shadow-[#00A3C4]/20 overflow-hidden">
          <span class="mr-2">*0003</span>
          <i class="fas fa-phone-alt group-hover:animate-bounce"></i>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const menuItems = [
  { name: 'Ana Səhifə' },
  { name: 'Xidmətlər' },
  { name: 'Haqqımızda' },
  { name: 'Filiallar' },
  { name: 'Əlaqə' }
];

const activeIdx = ref(0);
const indicatorLeft = ref(0);
const menuRefs = ref([]);
const isMoving = ref(false);
const movingDirection = ref('right'); 

const setActive = (index) => {
  if (activeIdx.value === index) return;

  movingDirection.value = index > activeIdx.value ? 'right' : 'left';
  
  isMoving.value = true;
  
  const targetEl = menuRefs.value[index];
  if (targetEl) {
    indicatorLeft.value = targetEl.offsetLeft + (targetEl.offsetWidth / 2);
    activeIdx.value = index;
  }

  setTimeout(() => {
    isMoving.value = false;
  }, 700);
};

onMounted(() => {
  setTimeout(() => {
    if (menuRefs.value[0]) {
      indicatorLeft.value = menuRefs.value[0].offsetLeft + (menuRefs.value[0].offsetWidth / 2);
    }
  }, 100);
});
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

.transition-all {
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1.2); }
  50% { opacity: 0.5; transform: scale(0.8); }
}
.animate-pulse {
  animation: pulse 0.2s infinite;
}
</style> -->
<!-- 
<template>
  <nav class="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200/50 z-50 shadow-sm">
    <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        
        <div class="flex items-center space-x-3 group cursor-pointer">
          <div class="w-12 h-12 bg-gradient-to-br from-[#00A3C4] to-[#0077B6] rounded-2xl flex items-center justify-center shadow-lg shadow-[#00A3C4]/20 transform group-hover:scale-105 transition-all duration-300">
            <i class="fas fa-heartbeat text-white text-xl"></i>
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-xl text-[#2d3142] tracking-tight">MedCare</span>
            <span class="text-xs text-gray-500 font-medium">Təcili Yardım</span>
          </div>
        </div>

        <div class="relative">
          <div 
            class="absolute top-0 h-full bg-gradient-to-r from-[#00A3C4]/8 to-[#0077B6]/8 rounded-2xl transition-all duration-500 ease-out border border-[#00A3C4]/20"
            :style="{ 
              left: indicatorLeft + 'px', 
              width: indicatorWidth + 'px'
            }"
          ></div>

          <ul class="flex items-center space-x-1 relative z-10">
            <li 
              v-for="(item, index) in menuItems" 
              :key="index"
              :ref="el => menuRefs[index] = el"
              class="relative"
            >
              <div 
                v-if="isMoving && targetIdx === index"
                class="absolute top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-700 ease-out z-30"
                :class="[
                  movingDirection === 'right' ? 'animate-drive-in-right' : 'animate-drive-in-left'
                ]"
                :style="{ 
                  [movingDirection === 'right' ? 'left' : 'right']: ambulanceOffset + 'px'
                }"
              >
                <div class="relative flex items-center">
                  <div 
                    v-if="movingDirection === 'right'"
                    class="absolute -left-10 flex flex-col space-y-1"
                  >
                    <div class="w-6 h-0.5 bg-[#00A3C4]/50 rounded animate-speed-trail"></div>
                    <div class="w-4 h-0.5 bg-[#00A3C4]/30 rounded animate-speed-trail delay-75"></div>
                    <div class="w-3 h-0.5 bg-[#00A3C4]/20 rounded animate-speed-trail delay-150"></div>
                  </div>
                  <div 
                    v-else
                    class="absolute -right-10 flex flex-col space-y-1"
                  >
                    <div class="w-6 h-0.5 bg-[#00A3C4]/50 rounded animate-speed-trail"></div>
                    <div class="w-4 h-0.5 bg-[#00A3C4]/30 rounded animate-speed-trail delay-75"></div>
                    <div class="w-3 h-0.5 bg-[#00A3C4]/20 rounded animate-speed-trail delay-150"></div>
                  </div>
                  
                  <div class="absolute -top-4 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10">
                    <div class="w-1.5 h-1.5 bg-red-500 rounded-full animate-siren shadow-[0_0_12px_rgba(239,68,68,0.9)]"></div>
                    <div class="w-1.5 h-1.5 bg-blue-500 rounded-full animate-siren-alt shadow-[0_0_12px_rgba(59,130,246,0.9)]"></div>
                  </div>
                  
                  <div 
                    class="relative px-2"
                    :class="movingDirection === 'right' ? '' : 'scale-x-[-1]'"
                  >
                    <i class="fas fa-ambulance text-[#00A3C4] text-2xl drop-shadow-xl filter brightness-110"></i>
                  </div>
                  
                  <div 
                    class="absolute bottom-0 flex space-x-1"
                    :class="movingDirection === 'right' ? '-left-6' : '-right-6'"
                  >
                    <div class="w-2 h-2 bg-gray-300/40 rounded-full animate-dust-cloud"></div>
                    <div class="w-1.5 h-1.5 bg-gray-300/30 rounded-full animate-dust-cloud delay-100"></div>
                    <div class="w-1 h-1 bg-gray-300/20 rounded-full animate-dust-cloud delay-200"></div>
                  </div>
                </div>
              </div>

              <a 
                href="#"
                @click.prevent="setActive(index)"
                class="relative px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-300 rounded-2xl block group"
                :class="activeIdx === index 
                  ? 'text-[#00A3C4]' 
                  : 'text-gray-600 hover:text-[#2d3142]'"
              >
                <span 
                  class="relative inline-block transition-all duration-300"
                  :class="isMoving && targetIdx === index ? 'opacity-40 blur-[0.5px]' : 'opacity-100'"
                >
                  {{ item.name }}
                </span>
                
                <span 
                  class="absolute bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#00A3C4] to-[#0077B6] rounded-full transition-all duration-300"
                  :class="activeIdx === index ? 'w-10' : 'w-0 group-hover:w-8 group-hover:bg-gray-400'"
                ></span>
              </a>
            </li>
          </ul>
        </div>

        <div class="flex items-center space-x-4">
          <a 
            href="tel:*0003" 
            class="group relative flex items-center bg-gradient-to-r from-[#2d3142] to-[#1a1d2e] text-white px-7 py-3.5 rounded-2xl font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-[#00A3C4]/40 hover:scale-105 overflow-hidden"
          >
            <span class="absolute inset-0 bg-gradient-to-r from-[#00A3C4] to-[#0077B6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            
            <span class="relative flex items-center space-x-3">
              <div class="relative">
                <i class="fas fa-phone-alt text-lg group-hover:rotate-12 transition-transform duration-300"></i>
                <span class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
              </div>
              <div class="flex flex-col items-start">
                <span class="text-xs opacity-80">Təcili Zəng</span>
                <span class="text-lg font-black tracking-wider">*0003</span>
              </div>
            </span>
            
            <span class="absolute -inset-1 bg-[#00A3C4] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></span>
          </a>

          <button class="p-3 rounded-xl text-gray-600 hover:bg-gradient-to-r hover:from-[#00A3C4]/10 hover:to-[#0077B6]/10 hover:text-[#00A3C4] transition-all duration-300 border border-transparent hover:border-[#00A3C4]/20">
            <i class="fas fa-info-circle text-lg"></i>
          </button>
        </div>

      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const menuItems = [
  { name: 'Ana Səhifə' },
  { name: 'Xidmətlər' },
  { name: 'Haqqımızda' },
  { name: 'Filiallar' },
  { name: 'Əlaqə' }
];

const activeIdx = ref(0);
const indicatorLeft = ref(0);
const indicatorWidth = ref(0);
const ambulanceOffset = ref(-50);
const targetIdx = ref(0);
const menuRefs = ref([]);
const isMoving = ref(false);
const movingDirection = ref('right');

const setActive = (index) => {
  if (activeIdx.value === index) return;

  movingDirection.value = index > activeIdx.value ? 'right' : 'left';
  targetIdx.value = index;
  isMoving.value = true;
  
  const targetEl = menuRefs.value[index];
  if (targetEl) {
    indicatorLeft.value = targetEl.offsetLeft;
    indicatorWidth.value = targetEl.offsetWidth;
  }

  ambulanceOffset.value = -50;
  const animationInterval = setInterval(() => {
    ambulanceOffset.value += 2;
    if (ambulanceOffset.value >= 50) {
      clearInterval(animationInterval);
      activeIdx.value = index;
      
      setTimeout(() => {
        isMoving.value = false;
        ambulanceOffset.value = -50;
      }, 100);
    }
  }, 10);
};

onMounted(() => {
  setTimeout(() => {
    if (menuRefs.value[0]) {
      const firstEl = menuRefs.value[0];
      indicatorLeft.value = firstEl.offsetLeft;
      indicatorWidth.value = firstEl.offsetWidth;
    }
  }, 100);
});
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.transition-all {
  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes siren {
  0%, 100% { 
    opacity: 1; 
    transform: scale(1.2); 
  }
  50% { 
    opacity: 0.2; 
    transform: scale(0.8); 
  }
}

@keyframes siren-alt {
  0%, 100% { 
    opacity: 0.2; 
    transform: scale(0.8); 
  }
  50% { 
    opacity: 1; 
    transform: scale(1.2); 
  }
}

.animate-siren {
  animation: siren 0.4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-siren-alt {
  animation: siren-alt 0.4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes speed-trail {
  0% {
    opacity: 0;
    width: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
    width: 100%;
  }
}

.animate-speed-trail {
  animation: speed-trail 0.4s ease-out infinite;
}

@keyframes dust-cloud {
  0% {
    opacity: 0.6;
    transform: scale(1) translateY(0);
  }
  100% {
    opacity: 0;
    transform: scale(2) translateY(4px);
  }
}

.animate-dust-cloud {
  animation: dust-cloud 0.5s ease-out infinite;
}

@keyframes drive-in-right {
  0% {
    transform: translateX(-100px) translateY(-50%) rotate(-3deg);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateX(100px) translateY(-50%) rotate(3deg);
    opacity: 0;
  }
}

@keyframes drive-in-left {
  0% {
    transform: translateX(100px) translateY(-50%) rotate(3deg);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateX(-100px) translateY(-50%) rotate(-3deg);
    opacity: 0;
  }
}

.animate-drive-in-right {
  animation: drive-in-right 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.animate-drive-in-left {
  animation: drive-in-left 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

/* Delay classes */
.delay-75 {
  animation-delay: 0.1s;
}

.delay-100 {
  animation-delay: 0.15s;
}

.delay-150 {
  animation-delay: 0.2s;
}

.delay-200 {
  animation-delay: 0.25s;
}

nav {
  backdrop-filter: saturate(180%) blur(20px);
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style> -->