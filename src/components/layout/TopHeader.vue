<template>
  <div
    class="top-header bg-[#00A3C4]/95 backdrop-blur-md text-white py-2 sticky top-0 z-130 shadow-lg border-b border-white/10 overflow-hidden"
  >
    <!-- <div
      class="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-16 xl:px-20 h-full flex items-center justify-between"
    > -->
    <div
      class="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer"
    ></div>

    <div
      class="mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 flex items-center justify-between relative z-10"
    >
      <div class="flex items-center space-x-3 md:space-x-8">
        <a
          href="tel:*0003"
          class="group flex items-center space-x-3 cursor-pointer outline-none"
        >
          <div class="relative">
            <div
              class="bg-white text-[#00A3C4] w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] group-hover:scale-105 transition-all duration-300"
            >
              <i
                class="fas fa-phone-alt text-sm md:text-base animate-phone-ring"
              ></i>
            </div>
            <span class="absolute -top-1 -right-1 flex h-3 w-3">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-3 w-3 bg-green-500"
              ></span>
            </span>
          </div>
          <span
            class="text-xl md:text-2xl font-black tracking-tight text-white drop-shadow-md group-hover:text-cyan-50 transition-colors"
          >
            *0003
          </span>
        </a>

        <div
          class="h-6 w-px bg-linear-to-b from-transparent via-white/20 to-transparent hidden sm:block"
        ></div>

        <!-- <div class="hidden sm:flex items-center space-x-6">
          <a href="https://wa.me/994517290003" target="_blank" 
             class="flex items-center space-x-2 group hover:opacity-100 transition-all">
            <div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
              <i class="fab fa-whatsapp text-white group-hover:scale-110 transition-transform"></i>
            </div>
            <span class="text-[13px] font-semibold tracking-wide hover:scale-3d">+99451 729 00 03</span>
          </a>

          <a href="mailto:info@rmg.az" 
             class="hidden lg:flex items-center space-x-2 group hover:opacity-100 transition-all">
            <div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#00A3C4] transition-colors duration-300">
              <i class="far fa-envelope text-[14px] group-hover:rotate-12 transition-transform"></i>
            </div>
            <span class="text-[13px] font-semibold tracking-wide opacity-80 group-hover:opacity-100">info@rmg.az</span>
          </a>
        </div> -->
        <div class="hidden sm:flex items-center space-x-8">
          <a
            href="https://wa.me/994517290003"
            target="_blank"
            class="flex items-center space-x-3 group relative transition-all duration-300"
          >
            <div class="relative">
              <div
                class="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-green-500 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.6)] transition-all duration-500"
              >
                <i
                  class="fab fa-whatsapp text-lg text-white group-hover:scale-125 transition-transform duration-300"
                ></i>
              </div>
            </div>
            <div class="flex flex-col">
              <span
                class="text-[14px] font-bold tracking-tight text-white group-hover:translate-x-1 transition-transform duration-300"
              >
                +99451 729 00 03
              </span>
            </div>
          </a>

          <a
            href="mailto:info@rmg.az"
            class="hidden lg:flex items-center space-x-3 group relative transition-all duration-300"
          >
            <div
              class="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white transition-all duration-500 shadow-inner"
            >
              <i
                class="far fa-envelope text-base text-white group-hover:text-[#00A3C4] transition-all duration-300"
              ></i>
            </div>
            <div class="flex flex-col">
              <span
                class="text-[14px] font-bold tracking-tight text-white group-hover:translate-x-1 transition-transform duration-300"
              >
                info@rmg.az
              </span>
            </div>
          </a>
        </div>
      </div>

      <div class="flex items-center space-x-4">
        <span
          class="text-[10px] tracking-[0.2em] opacity-50 hidden xl:block font-bold"
          >{{ azUpper("Sosial Şəbəkələr") }}</span
        >

        <div
          class="flex items-center bg-white/10 p-1 rounded-xl border border-white/5"
        >
          <a
            v-for="(icon, index) in [
              'facebook-f',
              'instagram',
              'telegram-plane',
            ]"
            :key="index"
            href="#"
            class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white hover:text-[#00A3C4] transition-all duration-300 group"
          >
            <i
              :class="'fab fa-' + icon"
              class="text-xs group-hover:scale-110"
            ></i>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- <a href="tel:*0003"
    class="lg:hidden fixed bottom-6 right-6 z-[999] flex items-center space-x-3 bg-red-600 text-white pl-5 pr-6 py-4 rounded-2xl font-bold shadow-[0_15px_35px_rgba(220,38,38,0.4)] active:scale-95 transition-all duration-300 group overflow-hidden">
    <span
      class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>

    <div class="relative flex items-center justify-center w-8 h-8 bg-white/20 rounded-lg">
      <i class="fas fa-phone-alt animate-shake text-lg"></i>
    </div>
    <div class="flex flex-col">
      <span class="text-[10px] opacity-80 leading-none mb-0.5 uppercase tracking-tighter">7/24 Xidmət</span>
      <span class="text-[16px] leading-none font-black tracking-widest">*0003</span>
    </div>

    <span class="absolute inset-0 rounded-2xl ring-4 ring-red-600/30 animate-pulse"></span>
  </a> -->
</template>
<script setup>
import azUpper from "../../utils/font.js";
</script>

<style scoped>
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 3s infinite ease-in-out;
}

@keyframes shake {
  0%,
  100% {
    transform: rotate(0deg);
  }

  20% {
    transform: rotate(-20deg);
  }

  40% {
    transform: rotate(20deg);
  }

  60% {
    transform: rotate(-20deg);
  }

  80% {
    transform: rotate(20deg);
  }
}

.animate-shake {
  animation: shake 0.6s infinite ease-in-out;
}

@keyframes phone-ring {
  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1) rotate(5deg);
  }
}

.animate-phone-ring {
  animation: phone-ring 2s infinite ease-in-out;
}

.top-header {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
</style>