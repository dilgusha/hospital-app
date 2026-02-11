<!-- <template>
    <section class="py-12 px-5 text-black bg-gray-100">
        <div class="container mx-auto px-4">
            <h2 class="text-[#6BB52B] font-bold text-3xl mb-3">Xəbərlər</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div v-for="(service, index) in services" :key="index"
                    class="relative group overflow-hidden rounded-[40px] p-8 h-[300px] flex flex-col justify-end transition-all duration-300 hover:scale-105 scale-100 cursor-pointer shadow-lg border border-gray-100">
                    <div class="absolute inset-0"></div>
                    <div class="mb-4 w-12 h-12 transition-transform duration-300 group-hover:-translate-y-2 font-light"
                        v-html="service.icon">
                    </div>
                    <h3 class="text-xl mb-2 ">{{ service.date }}</h3>
                    <p class="text-sm opacity-95 leading-relaxed">
                        {{ service.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { svgIcons } from '../../assets/images/svg';

const services = [
    {
        date: '29.01.2025',
        description: 'Ünvanda müayinə rahat, komfortlu və operativ tibbi xidmətin ən optimal üsuludur.',
        icon: svgIcons.medic
    },
    {
        date: '29.01.2025',
        description: 'Təcili və Təxirəsalmaz Tibbi yardım xidməti üzrə briqadamız 7/24 sizə yüksək səviyyədə xidmət göstərir.',
        icon: svgIcons.ambulance
    },
    {
        date: '29.01.2025',
        description: '*0101 çağrı mərkəzi dinləmədədir. Suallarınızı cavablandırmağa hazırıq!',
        icon: svgIcons.callCenter
    }
];
</script>

<style scoped></style> -->
<!-- 
<template>
    <section class="py-20 bg-gray-100">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-end mb-12">
                <div>
                    <h2 class="text-[#2D3139] font-extrabold text-4xl mb-2">Xəbərlər</h2>
                    <div class="w-20 h-1.5 bg-[#6BB52B] rounded-full"></div>
                </div>
                <a href="#" class="text-[#6BB52B] font-bold hover:underline flex items-center gap-2 transition-all">
                    Butun xeberler
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="(service, index) in services" :key="index"
                    class="group relative bg-white rounded-[40px] p-8 h-[320px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-3 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(107,181,43,0.15)] border border-transparent hover:border-[#6BB52B]/10">
                    
                    <div class="flex justify-between items-start">
                        <div class="p-4 bg-[#F4F7F2] rounded-2xl text-[#6BB52B] transition-colors duration-300 group-hover:bg-[#6BB52B] group-hover:text-white"
                             v-html="service.icon">
                        </div>
                        <span class="text-sm font-bold text-gray-400 group-hover:text-[#6BB52B] transition-colors">
                            {{ service.date }}
                        </span>
                    </div>

                    <div class="mt-4">
                        <p class="text-gray-700 text-lg font-medium leading-snug group-hover:text-black transition-colors">
                            {{ service.description }}
                        </p>
                    </div>

                    <div class="flex items-center justify-between mt-4">
                        <span class="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#6BB52B]">Ətraflı oxu</span>
                        <div class="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center transition-all duration-300 group-hover:bg-[#6BB52B] group-hover:border-[#6BB52B]">
                            <svg class="w-4 h-4 text-[#6BB52B] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7-7 7M3 12h18" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { svgIcons } from '../../assets/images/svg';

const services = [
    {
        date: '29.01.2025',
        description: 'Ünvanda müayinə rahat, komfortlu və operativ tibbi xidmətin ən optimal üsuludur.',
        icon: svgIcons.medic
    },
    {
        date: '29.01.2025',
        description: 'Təcili və Təxirəsalmaz Tibbi yardım xidməti üzrə briqadamız 7/24 sizə yüksək səviyyədə xidmət göstərir.',
        icon: svgIcons.ambulance
    },
    {
        date: '29.01.2025',
        description: '*0101 çağrı mərkəzi dinləmədədir. Suallarınızı cavablandırmağa hazırıq!',
        icon: svgIcons.callCenter
    }
];
</script> -->

<template>
  <NewsSection
    :news="allNews"
    :limit="3"
    :showButton="true"
  />
</template>

<script setup>
import NewsSection from '../cards/NewsSection.vue'
import { svgIcons } from '../../assets/images/svg'

const allNews = [
  {
    date: '29.01.2025',
    description: 'Ünvanda müayinə rahat...',
    icon: svgIcons.medic
  },
  {
    date: '29.01.2025',
    description: 'Təcili və Təxirəsalmaz...',
    icon: svgIcons.ambulance
  },
  {
    date: '29.01.2025',
    description: '*0101 çağrı mərkəzi...',
    icon: svgIcons.callCenter
  },
  {
    date: '30.01.2025',
    description: 'Yeni xəbər...',
    icon: svgIcons.medic
  }
]
</script>
