<template>
  <footer class="bg-[#00A3C4] text-white pt-16 pb-8 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl">
    </div>
    <div class="mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start">

        <div class="lg:col-span-4 space-y-8 bg-[#00A3C4]">
          <router-link to="/" class="inline-block transition-transform hover:scale-105 duration-300">
            <img src="../../assets/images/footlogo.png" alt="Referans Ambulans" class="h-20 w-auto object-contain" />
          </router-link>

          <div class="space-y-4">
            <a href="tel:*0003" class="group flex items-center space-x-4 w-fit">
              <div
                class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-[#00A3C4] transition-all duration-500 shadow-xl">
                <i class="fas fa-phone-alt text-lg animate-phone-ring"></i>
              </div>
              <div class="flex flex-col">
                <span class="text-[10px] uppercase tracking-[0.2em] opacity-60"> {{ azUpper("Təcili Yardım") }}</span>
                <span class="text-2xl font-black tracking-tighter">*0003</span>
              </div>
            </a>
          </div>

          <div class="flex items-center space-x-3">
            <a v-for="social in ['facebook-f', 'instagram', 'telegram-plane', 'linkedin-in']" :key="social" href="#"
              class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#00A3C4] hover:-translate-y-1 transition-all duration-300 border border-white/5">
              <i :class="'fab fa-' + social" class="text-sm"></i>
            </a>
          </div>
        </div>

        <div class="lg:col-span-3">
          <div class="grid grid-cols-1 gap-4">
            <ul class="space-y-4 text-[15px]">
              <li v-for="item in menuItems" :key="item.name">
                <a href="javascript:void(0)" @click.prevent="scrollToSection(item.path)"
                  class="font-bold opacity-80 hover:opacity-100 hover:translate-x-1 transition-all flex items-center">
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="lg:col-span-5 space-y-8">
          <div class="bg-white/5 p-6 rounded-3xl border border-white/10">
            <p class="text-lg font-medium leading-relaxed italic opacity-90">
              <i class="fas fa-quote-left mr-2 opacity-30"></i>
              Həyatı xilas etmək üçün saniyələr içində tələsirik!
            </p>
          </div>

          <div class="flex flex-wrap gap-4">
            <a href="#"
              class="flex items-center space-x-4 bg-white text-[#00A3C4] px-5 py-3 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 min-w-45">
              <i class="fab fa-apple text-3xl"></i>
              <div class="flex flex-col items-start leading-none">
                <span class="text-[10px] font-bold uppercase opacity-60 mb-1">{{ azUpper("Available on") }}</span>
                <span class="text-base font-black">App Store</span>
              </div>
            </a>
            <a href="#"
              class="flex items-center space-x-4 bg-white text-[#00A3C4] px-5 py-3 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 min-w-45">
              <i class="fab fa-google-play text-2xl text-[#00A3C4]"></i>
              <div class="flex flex-col items-start leading-none">
                <span class="text-[10px] font-bold uppercase opacity-60 mb-1">{{ azUpper("Get it on") }}</span>
                <span class="text-base font-black">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <!-- <div class="mt-16 pt-8 border-t border-white/10 text-center md:flex md:justify-between items-center">
        <div class="lg:flex justify-between items-center flex-wrap">
          <p class="text-[13px] opacity-70 mr-4">
            “Referans Ambulance” © 2026 Bütün hüquqlar qorunur.
          </p>
          <Footer200 />
        </div>
        <div class="flex space-x-6 mt-4 md:mt-0 justify-center text-[12px] opacity-60">
          <a href="#" class="hover:text-white transition-colors">Gizlilik Siyasəti</a>
          <a href="#" class="hover:text-white transition-colors">Şərtlər və Qaydalar</a>
        </div>
      </div> -->
      <div class="mt-16 pt-8 border-t border-white/10 text-center md:flex md:justify-between md:items-center">
        <div
          class="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-center flex-wrap gap-2 lg:gap-4">
          <p class="text-[13px] opacity-70">
            “Referans Ambulans” © 2026 Bütün Hüquqlar Qorunur.
          </p>
          <Footer200 />
        </div>

        <div
          class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 mt-4 md:mt-0 justify-center text-[12px] opacity-60">
          <a href="#" class="hover:text-white transition-colors">Gizlilik Siyasəti</a>
          <a href="#" class="hover:text-white transition-colors">Şərtlər və Qaydalar</a>
        </div>
      </div>

    </div>
  </footer>
</template>

<style scoped>
@keyframes phone-ring {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1) rotate(10deg);
  }
}

.animate-phone-ring {
  animation: phone-ring 2s infinite ease-in-out;
}
</style>

<script setup>
import azUpper from '../../utils/font';
import Footer200 from '@/components/common/Footer-200.vue';


const menuItems = [
  { name: 'Haqqımızda', path: '#about' },
  { name: 'Xidmətlər', path: '#services' },
  { name: 'Üstünlük', path: '#advantages' },
  { name: 'Həkimlərimiz', path: '#doctors' },
  { name: 'Rəylər', path: '#reviews' },
  { name: 'Əlaqə', path: '#contact' },
];
const scrollToSection = (id) => {
  const element = document.querySelector(id);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    });

    isMobileMenuOpen.value = false;
  }
};</script>