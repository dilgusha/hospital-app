<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
</style> 

<template>
  <div class="bg-[#6BB52B] text-white py-2 text-xs md:text-sm font-medium">
    <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
      
      <div class="flex items-center space-x-2 md:space-x-4 flex-wrap justify-center">
        <div class="flex items-center bg-white/20 px-2 py-1 rounded cursor-pointer hover:bg-white/30 transition">
          <img src="https://flagcdn.com/w20/az.png" alt="AZ" class="w-4 h-2.5 md:w-5 md:h-3 mr-2" />
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <span class="opacity-50 hidden xs:block">|</span>

        <div class="flex items-center space-x-1 border border-white px-2 rounded font-bold italic">
          <span class="text-red-500">📞</span>
          <span>*0101</span>
        </div>

        <span class="opacity-50 hidden sm:block">|</span>

        <div class="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <span class="whitespace-nowrap">+994 50 225 73 30</span>
        </div>

        <span class="opacity-50 hidden lg:block">|</span>

        <div class="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span class="truncate">info@leylamc.az</span>
        </div>
      </div>

      <div class="flex items-center space-x-4">
        <a href="#" class="hover:scale-110 transition"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="hover:scale-110 transition"><i class="fab fa-telegram-plane"></i></a>
        <a href="#" class="hover:scale-110 transition"><i class="fab fa-youtube"></i></a>
        <a href="#" class="hover:scale-110 transition"><i class="fab fa-instagram"></i></a>
        <a href="#" class="hover:scale-110 transition"><i class="fab fa-whatsapp"></i></a>
      </div>
    </div>
  </div>
</template>