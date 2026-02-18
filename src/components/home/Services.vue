<template>
  <section
    id="services"
    class="py-20 md:py-28 bg-[#f8fafc] overflow-hidden scroll-mt-24"
  >
    <div class="mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
      <div class="relative mb-12">
        <h2 class="text-3xl md:text-4xl font-black text-[#2d3142]">
          Xidmətlərimiz
        </h2>
        <div class="w-16 h-1 bg-[#00A3C4] mt-3 rounded-full"></div>
      </div>

      <div class="relative group">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="30"
          :loop="true"
          :centered-slides="false"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :pagination="{ clickable: true, el: '.custom-pagination' }"
          :navigation="{ nextEl: '.next-btn', prevEl: '.prev-btn' }"
          :breakpoints="{
            '320': { slidesPerView: 1.1, spaceBetween: 20 },
            '768': { slidesPerView: 2, spaceBetween: 30 },
            '1536': { slidesPerView: 3, spaceBetween: 40 },
          }"
          class="services-swiper"
        >
          <swiper-slide
            v-for="(service, index) in servicesList"
            :key="index"
            class="slide-flex"
          >
            <div
              class="bg-white p-6 md:p-8 rounded-[2rem] shadow-lg shadow-gray-200/40 border border-gray-100 flex flex-col h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group/card"
            >
              <div class="mb-6">
                <div
                  class="w-16 h-16 rounded-2xl bg-[#00A3C4]/10 flex items-center justify-center transition-transform duration-500 group-hover/card:rotate-6"
                >
                  <div
                    v-html="service.icon"
                    class="w-10 h-10 flex items-center justify-center text-[#00A3C4]"
                  ></div>
                </div>
              </div>
              <div class="flex flex-col flex-1">
                <div>
                  <h3
                    class="text-xl md:text-2xl font-bold text-[#2d3142] group-hover/card:text-[#00A3C4] transition-colors mb-3"
                  >
                    {{ service.title }}
                  </h3>
                  <p
                    class="text-gray-500 leading-relaxed text-sm md:text-base line-clamp-4"
                  >
                    {{ service.description }}
                  </p>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <button
          class="prev-btn absolute left-[-20px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl hidden xl:flex items-center justify-center text-[#00A3C4] hover:bg-[#00A3C4] hover:text-white transition-all z-20 opacity-0 group-hover:opacity-100 group-hover:left-[-60px]"
        >
          <i class="fas fa-chevron-left"></i>
        </button>
        <button
          class="next-btn absolute right-[-20px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl hidden xl:flex items-center justify-center text-[#00A3C4] hover:bg-[#00A3C4] hover:text-white transition-all z-20 opacity-0 group-hover:opacity-100 group-hover:right-[-60px]"
        >
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>

      <div class="custom-pagination flex justify-center mt-4 gap-2"></div>
    </div>
  </section>
</template>

<style scoped>
:deep(.swiper-wrapper) {
  display: flex !important;
  align-items: stretch !important;
}

.slide-flex {
  height: auto !important;
  display: flex !important;
}

:deep(.services-swiper) {
  padding: 10px 5px 40px 5px;
}

.services-swiper {
  overflow: hidden !important;
}

.line-clamp-4 {
  display: -webkit-box;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { servicesList } from "@/data/servicesList.js";

const modules = [Navigation, Pagination, Autoplay];
</script>
