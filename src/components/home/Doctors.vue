<template>
  <section id="doctors" class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between mb-10">
        <h2 class="text-3xl font-extrabold text-[#2d3142] relative">
          Həkimlərimiz
          <span class="absolute -bottom-3 left-0 w-16 h-1 bg-[#00A3C4] rounded-full"></span>
        </h2>
        
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
        class="pb-10 "
      >
        <swiper-slide v-for="doctor in doctors" :key="doctor.id">
          <div class="bg-white cursor-pointer active:cursor-grabbing rounded-2xl p-6 my-10 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center group">
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
  { id: 1, name: 'Dr. Anar Abdullayev', position: 'Təcili Tibbi Yardım Həkimi', image: getImageUrl('doctor.jpg') },
  { id: 2, name: 'Dr. Zümrüd Məmmədova', position: 'Təcili Tibbi Yardım Həkimi', image: getImageUrl('doctor.jpg') },
  { id: 3, name: 'Dr. Ülkər Mehdiyeva', position: 'Təcili Tibbi Yardım Həkimi', image: getImageUrl('doctor.jpg') },
  { id: 4, name: 'Dr. İkram Qubadov', position: 'Təcili Tibbi Yardım Həkimi', image: getImageUrl('doctor.jpg') },
  { id: 5, name: 'Dr. Nəzrin Məmmədova', position: 'Təcili Tibbi Yardım Həkimi', image: getImageUrl('doctor.jpg') },
  { id: 6, name: 'Dr. Rəşad Məmmədov', position: 'Təcili Tibbi Yardım Həkimi', image: getImageUrl('doctor.jpg') },
];
</script>

<style scoped>
.swiper {
  padding-top: 10px;
}
</style>