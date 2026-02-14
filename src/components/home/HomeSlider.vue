<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


const modules = [Navigation, Pagination, Autoplay, EffectFade];

const getImageUrl = (name) => {
  return new URL(`../../assets/images/${name}`, import.meta.url).href;
};

const slides = [
  {
    image: getImageUrl('slider1.webp'),
    subtitle: '7/24 Təcili Tibbi Yardım',
    title: 'Həyatınız Bizim üçün Dəyərlidir',
    description: 'Ən müasir avadanlıqlarla təchiz olunmuş ambulanslarımızla saniyələr içində yanınızdayıq.'
  },
  {
    image: getImageUrl('slider2.jpg'),
    subtitle: 'Beynəlxalq Təxliyə',
    title: 'Sərhəd Tanımayan Tibbi Xidmət',
    description: 'Hava və quru yolu ilə xəstələrin dünyanın istənilən nöqtəsinə təhlükəsiz daşınması.'
  }
];
</script>

<template>
  <section class="relative group">
    <swiper :modules="modules" :slides-per-view="1" :effect="'fade'" :fade-effect="{ crossFade: true }" :loop="true"
      :autoplay="{ delay: 5000, disableOnInteraction: false }" :pagination="{
        clickable: true,
        el: '.hero-pagination',
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active'
      }" :navigation="{
        nextEl: '.hero-next',
        prevEl: '.hero-prev'
      }" class="h-125 md:h-162.5 lg:h-187.5 w-full">
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="relative w-full h-full overflow-hidden ">
         
          <img :src="slide.image" :alt="slide.title" class="absolute inset-0 w-full h-full object-cover hero-image"
            :fetchpriority="index === 0 ? 'high' : 'auto'" :loading="index === 0 ? 'eager' : 'lazy'" decoding="sync" />
          <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-0"></div>

          <div class="absolute inset-0 bg-linear-to-r to-transparent"></div>

          <div class="container mx-auto px-4 h-full flex items-center relative z-10">
            <div class="max-w-2xl space-y-6">
              <span
                class="inline-block px-4 py-1.5 bg-[#00A3C4] text-white text-xs md:text-sm font-bold rounded-full uppercase tracking-widest animate-fade-in-down">
                {{ slide.subtitle }}
              </span>
              <h1 class="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight animate-fade-in-up">
                {{ slide.title }}
              </h1>
              <p class="text-lg md:text-xl text-gray-200 font-medium max-w-lg animate-fade-in-up delay-200">
                {{ slide.description }}
              </p>

              <div class="flex flex-wrap gap-4 pt-4 animate-fade-in-up delay-300">
                <a href="#services"
                  class="px-8 py-4 bg-[#00A3C4] text-white font-bold rounded-xl shadow-lg hover:bg-[#008ba8] transition-all">
                  Xidmətlərimiz
                </a>
                <a href="tel:*0003"
                  class="px-8 py-4 bg-white text-[#2d3142] font-bold rounded-xl hover:bg-gray-100 transition-all flex items-center space-x-2">
                  <i class="fas fa-phone-alt text-[#00A3C4]"></i>
                  <span>Təcili Zəng</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <button
        class="hero-prev absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-[#00A3C4] hover:border-[#00A3C4] transition-all z-100 hidden md:flex items-center justify-center group/btn pointer-events-auto">
        <i class="fas fa-chevron-left group-hover/btn:-translate-x-1 transition-transform pointer-events-none"></i>
      </button>

      <button
        class="hero-next absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-[#00A3C4] hover:border-[#00A3C4] transition-all z-100 hidden md:flex items-center justify-center group/btn pointer-events-auto">
        <i class="fas fa-chevron-right group-hover/btn:translate-x-1 transition-transform pointer-events-none"></i>
      </button>

      <div
        class="hero-pagination absolute bottom-10 left-1/2 -translate-x-1/2 z-100 flex space-x-2 pointer-events-auto">
      </div>
    </swiper>
  </section>
</template>

<style>
.hero-image {
  filter: blur(2px);
  transform: scale(1.05);
  width: 100%;
  height: 100%;
}

.swiper-slide-active .hero-image {
  animation: radialReveal 1.8s ease-out forwards;
}


@keyframes radialReveal {
  0% {
    opacity: 0;
    transform: scale(1.1);
  }

  100% {
    opacity: 1;
    transform: scale(1.05);
  }
}



.swiper-slide {
  background-color: transparent !important;
}
</style> 