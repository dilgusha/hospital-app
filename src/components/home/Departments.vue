<template>
  <section class="py-16 bg-[#8CC63F] relative overflow-hidden">
    <div class="container mx-auto px-4 relative z-10">
      <div class="flex justify-between items-center mb-10">
        <h2 class="text-white font-bold text-3xl md:text-4xl tracking-tight">
          Şöbələrimiz
        </h2>
        
        <div class="flex gap-3">
          <button 
            class="dept-prev w-10 h-10 rounded-lg bg-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#8CC63F] transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            class="dept-next w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#8CC63F] hover:bg-gray-100 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div class="swiper-container-wrapper">
        <swiper
          :modules="[Navigation]"
          :slides-per-view="1" 
          :space-between="24"
          :slides-per-group="1"
          :loop="false" 
          :rewind="false"
          :navigation="{
            prevEl: '.dept-prev',
            nextEl: '.dept-next',
          }"
          :breakpoints="{
            '768': { slidesPerView: 2 },
            '1024': { slidesPerView: 3 }
          }"
          class="dept-swiper"
        >
          <swiper-slide v-for="(dept, index) in departments" :key="index">
            <div class="bg-white rounded-3xl hover:rounded-xl p-10 flex items-center gap-6 shadow-lg h-full min-h-35 transition-all duration-200 ease-in-out">
              <div class="w-16 h-16 shrink-0" v-html="dept.icon"></div>
              <div class="overflow-hidden">
                <h3 class="text-[#4A4A4A] font-bold text-xl mb-1 line-clamp-1">{{ dept.name }}</h3>
                <p class="text-gray-400 text-sm line-clamp-2 italic leading-tight">{{ dept.desc }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { svgIcons } from '../../assets/images/svg';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const departments = ref([
  { name: 'Nevrologiya', desc: 'Sinir sistemi xəstəliklərinin müasir müalicəsi...', icon: svgIcons.medic },
  { name: 'Urologiya', desc: 'Yüksək texnoloji avadanlıqlarla müayinə...', icon: svgIcons.medic },
  { name: 'Flebologiya', desc: 'Flebologiya şöbəmiz peşəkar həkim heyəti ilə...', icon: svgIcons.phlebology },
  { name: 'Ginekologiya', desc: 'Leyla Medical Center – Cərrahiyyə və diaqnostika...', icon: svgIcons.gynecology },
  { name: 'Laboratoriya', desc: 'Müasir laboratoriya sistemi...', icon: svgIcons.laboratory },
  { name: 'Laboratoriya', desc: 'Müasir laboratoriya sistemi...', icon: svgIcons.laboratory }
]);
</script>

<style scoped>
:deep(svg) {
  width: 100%;
  height: 100%;
  stroke: #8CC63F;
}

.dept-swiper {
  overflow: hidden !important;
  padding: 10px 2px 40px 2px !important;
}

.dept-prev.swiper-button-disabled,
.dept-next.swiper-button-disabled {
  opacity: 0.2;
  cursor: not-allowed;
  pointer-events: none;
}
</style>