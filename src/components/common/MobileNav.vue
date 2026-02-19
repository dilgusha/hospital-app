<template>
  <nav
    class="lg:hidden fixed bottom-0 left-0 right-0 z-[999]"
    v-if="!isMobileMenuOpen"
  >
    <div
      class="absolute bottom-0 left-0 w-full h-20 bg-white shadow-[0_-5px_20px_rgba(0,0,0,0.05)] border-t border-gray-100"
    ></div>

    <div class="relative flex justify-around items-end h-20 pb-2 px-2">
      <a
        href="#doctors"
        class="flex flex-col items-center justify-center flex-1 h-16 transition-transform active:scale-90"
      >
        <i class="fas fa-user-md text-[#00A3C4] text-xl"></i>
        <span
          class="text-[10px] font-bold text-[#2d3142] mt-1 whitespace-nowrap"
          >Həkimlərimiz</span
        >
      </a>

      <a
        href="#about"
        class="flex flex-col items-center justify-center flex-1 h-16 transition-transform active:scale-90"
      >
        <i class="fas fa-file-medical text-[#00A3C4] text-xl"></i>
        <span
          class="text-[10px] font-bold text-[#2d3142] mt-1 whitespace-nowrap"
          >Haqqımızda</span
        >
      </a>

      <div class="relative flex flex-col items-center px-4">
        <div
          class="absolute w-16 h-16 bg-[#00A3C4]/20 rounded-full blur-xl animate-pulse"
        ></div>
        <a
          href="#"
          class="w-16 h-16 bg-[#00A3C4] rounded-full flex items-center justify-center shadow-[0_8px_15px_rgba(0,163,196,0.4)] border-4 border-white relative z-10 transition-transform hover:scale-105 active:scale-95"
        >
          <i class="fas fa-home text-white text-2xl"></i>
        </a>
        <span
          class="text-[10px] font-black text-[#00A3C4] mt-2 whitespace-nowrap"
          >Əsas Səhifə</span
        >
      </div>

      <a
        href="#services"
        class="flex flex-col items-center justify-center flex-1 h-16 transition-transform active:scale-90"
      >
        <i class="fas fa-newspaper text-[#00A3C4] text-xl"></i>
        <span
          class="text-[10px] font-bold text-[#2d3142] mt-1 whitespace-nowrap"
          >Xidmətlər</span
        >
      </a>

      <a
        href="#contact"
        class="flex flex-col items-center justify-center flex-1 h-16 transition-transform active:scale-90"
      >
        <i class="fas fa-phone-alt text-[#00A3C4] text-xl"></i>
        <span
          class="text-[10px] font-bold text-[#2d3142] mt-1 whitespace-nowrap"
          >Əlaqə</span
        >
      </a>
    </div>
  </nav>
</template>
<script setup>

defineProps({
  isMobileMenuOpen: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
nav {
  padding-bottom: env(safe-area-inset-bottom);
}
</style>