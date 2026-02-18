<template>
  <section id="reviews" class="py-20 md:py-28 bg-gray-50 overflow-hidden">
    <div class="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-16 xl:px-20">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
        <div>
          <h2 class="text-3xl md:text-4xl font-black text-[#2d3142] relative mb-4">
            Rəylər
            <span class="absolute -bottom-3 left-0 w-16 h-1.5 bg-[#00A3C4] rounded-full"></span>
          </h2>
          <span class="text-gray-500 block mt-6">Fikirləriniz bizim üçün hər zaman önəmlidir.</span>
        </div>
        <div class="hidden sm:flex space-x-3">
          <button
            ref="prevReview"
            class="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:bg-[#00A3C4] hover:border-[#00A3C4] hover:text-white transition-all duration-300"
          >
            <i class="fas fa-arrow-left"></i>
          </button>
          <button
            ref="nextReview"
            class="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:bg-[#00A3C4] hover:border-[#00A3C4] hover:text-white transition-all duration-300"
          >
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <swiper :modules="[Navigation, Autoplay, Pagination]" :slides-per-view="1.1" :space-between="30"
        :centered-slides="true" :loop="true" :navigation="{ prevEl: prevReview, nextEl: nextReview }"
        :autoplay="{ delay: 4000 }"  :breakpoints="{
          '768': { slidesPerView: 2, centeredSlides: false },
          '1024': { slidesPerView: 3, centeredSlides: true }
        }" class="reviews-swiper">
        <swiper-slide v-for="review in reviews" :key="review.id" v-slot="{ isActive }">
            <div :class="[
              'rounded-2xl p-8 border transition-all duration-500 min-h-[320px] flex flex-col justify-between cursor-pointer active:cursor-grabbing',
              isActive ? 'bg-[#00A3C4] text-white shadow-xl border-transparent' : 'bg-white text-gray-600 border-gray-100'
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
import { ref } from 'vue';
const getImageUrl = (name) => {
  return new URL(`../../assets/images/${name}`, import.meta.url).href;
};
const prevReview = ref(null);
const nextReview = ref(null);
</script>
<style scoped>
:deep(.swiper-pagination-bullet-active) {
  background-color: #00A3C4 !important;
  width: 25px;
  border-radius: 5px;
}
/* .reviews-swiper {
  padding: 20px 0;
}  */
</style>
