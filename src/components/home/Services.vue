<template>
  <section id="services" class="py-20 md:py-28 bg-[#f8fafc] overflow-hidden">
    <div class="container mx-auto px-4 relative">
      <h2 class="text-3xl font-extrabold text-[#2d3142] relative mb-12">
        Xidmətlərimiz
        <span class="absolute -bottom-3 left-0 w-16 h-1 bg-[#00A3C4] rounded-full"></span>
      </h2>
      <div class="relative group">
        <swiper :modules="modules" :slides-per-view="1" :space-between="30" :loop="true" :centered-slides="false"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :pagination="{ clickable: true, el: '.custom-pagination' }"
          :navigation="{ nextEl: '.next-btn', prevEl: '.prev-btn' }" :breakpoints="{
            '768': { slidesPerView: 2, spaceBetween: 30 },
            '1280': { slidesPerView: 2, spaceBetween: 40 }
          }" class="services-swiper">
          <swiper-slide v-for="(service, index) in servicesList" :key="index" class="slide-flex">
            <div
              class="bg-white cursor-pointer p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-50 flex flex-col md:flex-row gap-8 w-full h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group/card">
              <div class="shrink-0">
                <div
                  class="w-20 h-20 rounded-2xl bg-linear-to-br from-[#00A3C4]/10 to-cyan-50 flex items-center justify-center transition-transform duration-500 group-hover/card:rotate-6">
                  <!-- <img :src="service.icon" :alt="service.title" class="w-12 h-12 object-contain" /> -->
                  <div v-html="service.icon"
                    class="w-12 h-12 flex items-center justify-center *:w-full *:h-full *:object-contain">
                  </div>
                </div>
              </div>
              <div class="text-left space-y-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 class="text-2xl font-bold text-[#2d3142] group-hover/card:text-[#00A3C4] transition-colors mb-2">
                    {{ service.title }}
                  </h3>
                  <p
                    class="text-gray-500 leading-relaxed text-[15px] line-clamp-4 group-hover/card:text-gray-600 transition-colors">
                    {{ service.description }}
                  </p>
                </div>

                <div
                  class="pt-2 flex items-center text-[#00A3C4] font-bold text-sm uppercase tracking-wider gap-2 opacity-0 group-hover/card:opacity-100 transition-all">
                  Ətraflı <i class="fas fa-chevron-right text-[10px]"></i>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <button
          class="prev-btn absolute -left-6 lg:-left-12 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-[#00A3C4] hover:bg-[#00A3C4] hover:text-white transition-all z-20 opacity-0 group-hover:opacity-100 group-hover:left-2 lg:group-hover:-left-7">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button
          class="next-btn absolute -right-6 lg:-right-12 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-[#00A3C4] hover:bg-[#00A3C4] hover:text-white transition-all z-20 opacity-0 group-hover:opacity-100 group-hover:right-2 lg:group-hover:-right-7">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>

      <div class="custom-pagination flex justify-center mt-14 gap-3"></div>
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
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { svgIcons } from '../../assets/images/svg'


const modules = [Navigation, Pagination, Autoplay];

const servicesList = ref([
  {
    title: 'Xəstənin təxliyəsi',
    description: 'Referans Ambulans Respublikanın istənilən bölgəsinə xəstə təxliyəsi xidmətləri təklif edir. Referans Medical Group, Türkiyənin Apronjet Aircraft aviaşirkətinin Azərbaycandakı rəsmi distribütorudur. Biz istənilən xarici ölkəyə nəqliyyat və təxliyə xidmətləri göstəririk.',
    icon: svgIcons.ambulance
  },
  {
    title: 'Pediatriya Təcili Tibbi Yardım',
    description: 'Referans Ambulans Pediatric Ambulans Xidməti uşaqlarınızın sağlamlığını təmin etmək üçün 24/7 mövcuddur. Beynəlxalq standartlara uyğun olaraq, maşınlarımız 2 dəqiqə ərzində yola düşür. Uşaqlarınızın sağlamlığı etibarlı əllərdədir!',
    icon: svgIcons.ambulance
  },
  {
    title: 'Hava Təxliyəsi',
    description: 'Xüsusi təchiz olunmuş təyyarə və helikopterlərlə həm ölkə daxili, həm də ölkə xaricinə kritik vəziyyətdə olan xəstələrin sürətli və təhlükəsiz daşınması.',
    icon: svgIcons.ambulance
  }
]);
</script>
