<template>
  <section id="reviews" class="py-20 md:py-28 bg-gray-50 overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between mb-10">
        <div>
          <h2 class="text-3xl font-extrabold text-[#2d3142] relative mb-4">
            Rəylər
            <span class="absolute -bottom-3 left-0 w-16 h-1 bg-[#00A3C4] rounded-full"></span>
          </h2>
          <span class="text-gray-500">Fikirləriniz bizim üçün hər zaman önəmlidir.</span>
        </div>
        <div class="flex space-x-3">
          <button
            class="prev-btn w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#00A3C4] hover:text-white transition-all">
            <i class="fas fa-arrow-left"></i>
          </button>
          <button
            class="next-btn w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#00A3C4] hover:text-white transition-all">
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <swiper :modules="[Navigation, Autoplay, Pagination]" :slides-per-view="1" :space-between="30"
        :centered-slides="true" :loop="true" :navigation="{ prevEl: '.prev-btn', nextEl: '.next-btn' }"
        :autoplay="{ delay: 4000 }" :pagination="{ clickable: true }" :breakpoints="{
          '768': { slidesPerView: 2, centeredSlides: false },
          '1024': { slidesPerView: 3, centeredSlides: true }
        }" class="pb-14 reviews-swiper">
        <swiper-slide v-for="review in reviews" :key="review.id" v-slot="{ isActive }">
          <div :class="[
            'rounded-2xl p-8 shadow-sm border transition-all duration-500 min-h-[320px] flex flex-col justify-between cursor-pointer active:cursor-grabbing',
            isActive ? 'bg-[#00A3C4] text-white scale-105 shadow-xl border-transparent' : 'bg-white text-gray-600 border-gray-100'
          ]">
            <p class="text-sm leading-relaxed mb-6 italic">
              "{{ review.comment }}"
            </p>
            <div class="flex items-center space-x-4">
              <div class="w-16 h-16 shrink-0">
                <img :src="getImageUrl(review.image)" :alt="review.name"
                  class="w-full h-full object-cover rounded-full border-2 border-white shadow-sm" />
              </div>
              <div class="text-left">
                <h4 :class="['font-bold text-lg', isActive ? 'text-white' : 'text-[#2d3142]']">
                  {{ review.name }}
                </h4>
                <p :class="['text-xs font-medium', isActive ? 'text-cyan-50' : 'text-gray-400']">
                  Xəstə
                </p>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { reviews } from '@/data/reviews.js';
const getImageUrl = (name) => {
  return new URL(`../../assets/images/${name}`, import.meta.url).href;
};

</script>
<style scoped>
:deep(.swiper-pagination-bullet-active) {
  background-color: #00A3C4 !important;
  width: 25px;
  border-radius: 5px;
}

.reviews-swiper {
  padding: 20px 10px 50px 10px;
}
</style>