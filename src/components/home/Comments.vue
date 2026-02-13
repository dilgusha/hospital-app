<!-- <template>
  <section id="doctors" class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between mb-10">
        <div class="">
            <h2 class="text-3xl font-extrabold text-[#2d3142] relative mb-4">
              Rəylər
              <span class="absolute -bottom-3 left-0 w-16 h-1 bg-[#00A3C4] rounded-full"></span>
            </h2>
            <span class=""> Fikirləriniz bizim üçün hər zaman önəmlidir.</span>
        </div>
        
        <div class="flex space-x-3">
          <button class="prev-btn w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#00A3C4] hover:text-white transition-all">
            <i class="fas fa-arrow-left"></i>
          </button>
          <button class="next-btn w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#00A3C4] hover:text-white transition-all">
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <swiper
        :modules="[Navigation, Autoplay]"
        :slides-per-view="1"
        :space-between="20"
        :navigation="{ prevEl: '.prev-btn', nextEl: '.next-btn' }"
        :autoplay="{ delay: 4000 }"
        :breakpoints="{
          '640': { slidesPerView: 2 },
          '1024': { slidesPerView: 4 }
        }"
        class="pb-10"
      >
        <swiper-slide v-for="doctor in doctors" :key="doctor.id">
          <div class="bg-white rounded-2xl p-6 my-10 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center group">
            <div class="relative w-32 h-32 mx-auto mb-6">
              <img :src="doctor.image" :alt="doctor.name" 
                class="w-full h-full object-cover rounded-full border-4 border-gray-50  transition-colors" />
            </div>
            <h4 class="text-lg font-bold text-[#2d3142] mb-1 group-hover:text-[#00A3C4] transition-colors">
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
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
const getImageUrl = (name) => {
  return new URL(`../../assets/images/${name}`, import.meta.url).href;
};
const doctors = [
  { id: 1, name: 'Anar Abdullayev', comment: 'Təcili Tibbi Yardım Həkimi', image: getImageUrl('doctor.jpg') },
  { id: 2, name: 'Zümrüd Məmmədova', comment: 'Təcili Tibbi Yardım Həkimi', image: getImageUrl('doctor.jpg') },
  { id: 3, name: 'Ülkər Mehdiyeva', comment: 'Təcili Tibbi Yardım Həkimi', image: getImageUrl('doctor.jpg') },
  { id: 4, name: 'İkram Qubadov', comment: 'Təcili Tibbi Yardım Həkimi', image: getImageUrl('doctor.jpg') },
  { id: 5, name: 'Nəzrin Məmmədova', comment: 'Təcili Tibbi Yardım Həkimi', image: getImageUrl('doctor.jpg') },
  { id: 6, name: 'Rəşad Məmmədov', comment: 'Təcili Tibbi Yardım Həkimi', image: getImageUrl('doctor.jpg') },
];
</script>

<style scoped>
.swiper {
  padding-top: 10px;
}
</style> -->

<template>
  <section id="reviews" class="py-16 bg-gray-50 overflow-hidden">
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
          <button class="prev-btn w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#00A3C4] hover:text-white transition-all">
            <i class="fas fa-arrow-left"></i>
          </button>
          <button class="next-btn w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#00A3C4] hover:text-white transition-all">
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <swiper
        :modules="[Navigation, Autoplay, Pagination]"
        :slides-per-view="1"
        :space-between="30"
        :centered-slides="true"
        :loop="true"
        :navigation="{ prevEl: '.prev-btn', nextEl: '.next-btn' }"
        :autoplay="{ delay: 4000 }"
        :pagination="{ clickable: true }"
        :breakpoints="{
          '768': { slidesPerView: 2, centeredSlides: false },
          '1024': { slidesPerView: 3, centeredSlides: true } 
        }"
        class="pb-14 reviews-swiper"
      >
        <swiper-slide v-for="doctor in doctors" :key="doctor.id" v-slot="{ isActive }">
          <div :class="[
            'rounded-2xl p-8 shadow-sm border transition-all duration-500 min-h-[320px] flex flex-col justify-between cursor-pointer',
            isActive ? 'bg-[#00A3C4] text-white scale-105 shadow-xl border-transparent' : 'bg-white text-gray-600 border-gray-100'
          ]">
            
            <p class="text-sm leading-relaxed mb-6 italic">
              "{{ doctor.comment }}"
            </p>

            <div class="flex items-center space-x-4">
              <div class="w-16 h-16 shrink-0">
                <img :src="doctor.image" :alt="doctor.name" 
                  class="w-full h-full object-cover rounded-full border-2 border-white shadow-sm" />
              </div>
              <div class="text-left">
                <h4 :class="['font-bold text-lg', isActive ? 'text-white' : 'text-[#2d3142]']">
                  {{ doctor.name }}
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

const getImageUrl = (name) => {
  return new URL(`../../assets/images/${name}`, import.meta.url).href;
};

const doctors = [
  { id: 1, name: 'Anar Abdullayev', comment: 'Anam təzyiq xəstəsidir və şəkəri var. Belə halda tez-tez Təcili Yardım çağırmalı oluram. Çox şadam ki, ölkəmizdə belə xidmət var.', image: getImageUrl('doctor.jpg') },
  { id: 2, name: 'Zümrüd Məmmədova', comment: 'İlk dəfə idi özəl Təcili Tibbi Yardım çağırırdım. Uşaq Ambulans həkimləri çox mehriban və peşəkar yanaşdı. Hər şey üçün təşəkkürlər.', image: getImageUrl('doctor.jpg') },
  { id: 3, name: 'Ülkər Mehdiyeva', comment: 'İl ərzində ölkəmizdə bəzi konsert proqramları təşkil edirik. Tədbirlərdə tibbi təhlükəsizlik üçün hər zaman Referans-a etibar edirik.', image: getImageUrl('doctor.jpg') },
  { id: 4, name: 'İkram Qubadov', comment: 'Professional xidmət və sürətli reaksiya üçün çox minnətdaram. Çox razı qaldıq.', image: getImageUrl('doctor.jpg') },
  { id: 4, name: 'İkram Qubadov', comment: 'Professional xidmət və sürətli reaksiya üçün çox minnətdaram. Çox razı qaldıq.', image: getImageUrl('doctor.jpg') },
  { id: 5, name: 'Nəzrin Məmmədova', comment: 'Təcili Yardım xidməti çox keyfiyyətli və sadədir. Hər zaman təşəkkürlər.', image: getImageUrl('doctor.jpg') },
  { id: 6, name: 'Rashad Məmmədov', comment: 'Həkimlər çox mehriban və təcrübəliydi. Tıbbi yardım üçün təşəkkürlər.', image: getImageUrl('doctor.jpg') }
];
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