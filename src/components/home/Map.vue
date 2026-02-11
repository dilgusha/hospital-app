<template>
  <section class="py-12 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-[#8CC63F] font-bold text-3xl mb-8">Xəritədə Bax</h2>

      <div class="flex flex-wrap gap-3 mb-6">
        <button 
          v-for="branch in branches" 
          :key="branch.id"
          @click="activeBranch = branch"
          :class="[
            'px-6 py-2 rounded-full font-medium transition-all duration-300 border shadow-sm',
            activeBranch.id === branch.id 
              ? 'bg-[#8CC63F] text-white border-[#8CC63F]' 
              : 'bg-white text-gray-700 border-gray-200 hover:border-[#8CC63F]'
          ]"
        >
          {{ branch.name }}
        </button>
      </div>

      <div class="relative w-full h-125 rounded-4xl overflow-hidden shadow-2xl border border-gray-100">
        <iframe
          :src="activeBranch.mapUrl"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="grayscale-[0.2] contrast-[1.1]"
        ></iframe>

        <div class="absolute top-5 left-5 bg-white p-4 rounded-xl shadow-lg max-w-[280px] z-10 hidden md:block">
          <h3 class="font-bold text-lg text-gray-800">{{ activeBranch.name }}</h3>
          <p class="text-sm text-gray-500 mt-1">{{ activeBranch.address }}</p>
          <div class="flex items-center mt-3 text-[#8CC63F]">
            <span class="text-sm font-bold">3,5</span>
            <div class="flex ml-2 text-xs">
              <span v-for="i in 5" :key="i">★</span>
            </div>
            <span class="text-gray-400 text-xs ml-2">(186 rəy)</span>
          </div>
          <a :href="activeBranch.googleMapsLink" target="_blank" class="block mt-3 text-blue-500 text-sm hover:underline">
            Daha böyük xəritəyə baxın
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const branches = [
  {
    id: 1,
    name: 'Leyla Medical Center (Əsas Bina)',
    address: 'Yusif Səfərov küçəsi, Bakı',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.428490186165!2d49.8619113!3d40.3771909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d079efb51ad%3A0xdfc9725621a00940!2sLeyla%20Medical%20Center!5e0!3m2!1str!2saz!4v1715850000000!5m2!1str!2saz',
    googleMapsLink: 'https://maps.app.goo.gl/...'
  },
  {
    id: 2,
    name: 'Pediatriya Mərkəzi',
    address: 'Bakı şəhəri, Nərimanov r.',
    mapUrl: 'https://www.google.com/maps/embed?pb=...', 
    googleMapsLink: '#'
  },
  {
    id: 3,
    name: 'Pediatriya 2 Filialı',
    address: 'Bakı şəhəri, Yasamal r.',
    mapUrl: 'https://www.google.com/maps/embed?pb=...', 
    googleMapsLink: '#'
  }
];

const activeBranch = ref(branches[0]);
</script>

<style scoped>
iframe {
  filter: saturate(1.2);
}
</style>