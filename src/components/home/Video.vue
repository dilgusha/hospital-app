<template>
    <section class="bg-[#FBFBFB] py-16">
        <div class="container mx-auto px-4">
            <div class="flex flex-col sm:flex-row justify-between items-center mb-12 border-b border-gray-100 pb-6">
                <div class="text-center sm:text-left">
                    <div class="flex items-center justify-center sm:justify-start gap-2 mb-2">
                        <span class="w-8 h-0.5 bg-[#76bc21]"></span>
                        <p class="text-gray-500 text-sm font-semibold uppercase tracking-widest">{{ azUpper("Youtube kanalımız") }}</p>
                    </div>
                    <h2 class="text-[#2D3139] text-3xl md:text-4xl font-extrabold uppercase"> {{ azUpper("Faydalı") }}
                        <span class="text-[#76bc21]">{{ azUpper("Məlumatlar ") }}</span>
                    </h2>
                </div>
                <a href="#"
                    class="mt-6 sm:mt-0 group flex items-center gap-3 bg-white border-2 border-[#76bc21] text-[#76bc21] hover:bg-[#76bc21] hover:text-white px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 shadow-md hover:shadow-[#76bc21]/20">
                    Kanalımıza keçid et
                    <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor"
                        viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                    </svg>
                </a>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div v-for="(video, index) in videos" :key="index" class="group flex flex-col h-full">
                    <div
                        class="relative aspect-video bg-gray-200 rounded-4xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                        <div v-if="video.url" class="w-full h-full">
                            <iframe :src="video.url" class="w-full h-full" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div v-else
                            class="w-full h-full bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                            <div
                                class="absolute inset-0 opacity-10 bg-[radial-gradient(#76bc21_1px,transparent_1px)] bg-size-[20px_20px]">
                            </div>
                            <div
                                class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 z-10">
                                <div
                                    class="w-0 h-0 border-y-10 border-y-transparent border-l-15 border-l-[#76bc21] ml-1">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 px-2 grow">
                        <h3
                            class="text-lg text-[#2D3139] font-bold leading-snug line-clamp-2 group-hover:text-[#76bc21] transition-colors duration-300">
                            {{ video.title }}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import azUpper from '../../utils/font';

const videos = ref([
    {
        title: "Leyla Medical Center-in uşaq nevroloqu uzman doktor Cavid Sərdarzadə...",
        url: "https://www.youtube.com/embed/RoTv-XLrO-M"
    },
    {
        title: "Leyla Medical Centerin Radiologiya şöbəsi KT və MRT müayinəsi ilə 7/24 xidmətinizdə!...",
        url: "https://www.youtube.com/embed/RoTv-XLrO-M"
    },
    {
        title: "Leyla Medical Center-in pediatr reanimatoloqu Dr. Oqtay",
        url: "https://www.youtube.com/embed/RoTv-XLrO-M"
    }
]);
</script>