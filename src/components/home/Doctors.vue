<template>
  <section id="doctors" class="py-20 md:py-28 bg-gray-50 overflow-hidden">
    <div class="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-16 xl:px-20">
      <div class="flex items-end justify-between mb-12">
        <div class="relative">
          <h2 class="text-3xl md:text-4xl font-black text-[#2d3142]">
            Həkimlərimiz
          </h2>
          <div class="w-16 h-1.5 bg-[#00A3C4] mt-3 rounded-full"></div>
        </div>
        <div class="hidden sm:flex space-x-3">
          <button
            ref="prevBtn"
            class="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:bg-[#00A3C4] hover:border-[#00A3C4] hover:text-white transition-all duration-300"
          >
            <i class="fas fa-chevron-left"></i>
          </button>
          <button
            ref="nextBtn"
            class="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:bg-[#00A3C4] hover:border-[#00A3C4] hover:text-white transition-all duration-300"
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <swiper
        v-if="doctors && doctors.length"
        :modules="[Navigation, Autoplay]"
        :slides-per-view="1.2"
        :space-between="20"
        :navigation="{
          prevEl: prevBtn,
          nextEl: nextBtn,
        }"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        :breakpoints="{
          '640': { slidesPerView: 2 },
          '1024': { slidesPerView: 3 },
          '1280': { slidesPerView: 4 },
        }"
        class="!pb-10"
      >
        <swiper-slide v-for="doctor in doctors" :key="doctor.id">
          <div
            class="bg-white rounded-2xl p-6 my-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group h-full"
          >
            <div class="relative w-32 h-32 mx-auto mb-6">
              <img
                :src="getImageUrl(doctor.image)"
                :alt="doctor.name"
                class="w-full h-full object-cover rounded-full border-4 border-gray-50 transition-colors"
              />
            </div>
            <h4
              class="text-lg font-bold text-[#2d3142] mb-1 group-hover:text-[#00A3C4] transition-colors"
            >
              {{ doctor.name }}
            </h4>
            <p class="text-sm text-gray-500 font-medium italic">
              {{ doctor.position }}
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { doctors } from "@/data/doctors.js";
import { ref } from "vue";
const prevBtn = ref(null);
const nextBtn = ref(null);
const getImageUrl = (name) => {
  return new URL(`../../assets/images/${name}`, import.meta.url).href;
};
</script>

<style scoped>
.swiper-button-disabled {
  opacity: 0.3;
  cursor: not-allowed !important;
  pointer-events: none;
}
</style> 