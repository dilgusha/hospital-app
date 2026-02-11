<template>
  <section class="home-slider relative">

    <swiper :modules="modules" :slides-per-view="1" :loop="true" :pagination="{ clickable: true }"
      :autoplay="{ delay: 5000 }" class="mySwiper h-62.5 sm:h-87.5 md:h112.5 lg:h-137.5">
      <swiper-slide v-for="(slide, index) in slides" :key="index"
        class="relative overflow-hidden flex items-center justify-center">
        <div class="absolute inset-0 bg-cover bg-center scale-110 blur-2xl opacity-40"
          :style="{ backgroundImage: `url(${slide.img})` }"></div>

        <a :href="slide.link" target="_blank" class="relative z-10 w-full h-full flex items-center justify-center px-4">
          <img :src="slide.img" alt="slider image" class="w-full h-full object-contain rounded-xl shadow-xl 
                   transition-transform duration-500 hover:scale-[1.02]" />
        </a>
      </swiper-slide>
    </swiper>

  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Pagination, Autoplay, Navigation];

const slides = [
  {
    img: new URL('/src/assets/images/endokrin_xeber.jpg', import.meta.url).href,
    link: "#"
  },
  {
    img: new URL('/src/assets/images/Ped_slide_evde_stsionar_xidmet.jpg', import.meta.url).href,
    link: "#"
  }
];
</script>

<style scoped>
:deep(.swiper-pagination-bullet-active) {
  background: #6BB52B !important;
}

.swiper-slide {
  background: black;
}
</style>
