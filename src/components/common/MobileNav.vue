<template>
  <nav class="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 pb-safe z-[100] shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
    <div class="flex justify-around items-end h-16 px-2 relative">
      
      <a href="#doctors" class="flex flex-col items-center justify-center flex-1 transition-all">
        <i class="fas fa-user-md text-[#00A3C4] text-xl mb-1"></i>
        <span class="text-[12px] font-bold text-[#2d3142]">Həkimlərimiz</span>
      </a>

      <a href="#about" class="flex flex-col items-center justify-center flex-1 transition-all">
        <i class="fas fa-notes-medical text-[#00A3C4] text-xl mb-1"></i>
        <span class="text-[12px] font-bold text-[#2d3142]">Haqqımızda</span>
      </a>

      <div class="flex-1 flex flex-col items-center relative -top-3">
        <div class="w-14 h-14 bg-[#00A3C4] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
          <i class="fas fa-home text-white text-2xl"></i>
        </div>
        <span class="text-[12px] font-bold text-[#00A3C4] mt-1">Əsas Səhifə</span>
      </div>

      <a href="#services" class="flex flex-col items-center justify-center flex-1 transition-all">
        <i class="fas fa-newspaper text-[#00A3C4] text-xl mb-1"></i>
        <span class="text-[12px] font-bold text-[#2d3142]">Xidmətlər</span>
      </a>

      <a href="#contact" class="flex flex-col items-center justify-center flex-1 transition-all">
        <i class="fas fa-phone-alt text-[#00A3C4] text-xl mb-1"></i>
        <span class="text-[12px] font-bold text-[#2d3142]">Əlaqə</span>
      </a>

    </div>
  </nav>
</template>

<style scoped>
.pb-safe {
  padding-bottom: env(safe-area-inset-bottom);
}

a:active i {
  transform: scale(0.9);
}
</style>