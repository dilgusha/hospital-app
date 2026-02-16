<template>
  <section class="py-20 bg-[#F9F9F9]">
    <div class="container mx-auto px-4 text-center">
      <div class="max-w-3xl mx-auto mb-8">
        <h2 class="text-3xl md:text-5xl font-black text-[#2d3142] mb-6 leading-tight">
          #Həyat qurtarmaq üçün<br>
          saniyələrlə yarışırıq!
        </h2>
        <div class="w-32 h-1 bg-[#00A3C4] mx-auto"></div>
      </div>

      <div class="max-w-2xl mx-auto mb-10">
        <p class="text-gray-600 text-lg md:text-xl leading-relaxed">
          Instagram müasir dövrün foto albomu və ən dinamik sosial şəbəkələrindən biridir.
          Bizi Instagramda izləməklə ən son məlumatlarımızdan və digər xidmətlərimiz haqqında
          məlumat ala bilərsiniz.
        </p>
      </div>
      <div class="animate-bounce-slow">
        <a href="https://www.instagram.com/referansambulance/" target="_blank"
          class="text-[#00A3C4] text-lg md:text-xl font-semibold hover:underline decoration-2 underline-offset-8 transition-all break-all">
          https://www.instagram.com/referansambulance/
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
@keyframes bounce-slow {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}

h2 {
  letter-spacing: -0.02em;
}
</style>