<script setup>
import { svgIcons } from '../../assets/images/svg';

const eService = [
    {
        icon: svgIcons.medic,
        title: "E-növbə",
        desc: 'Online qəbula E-növbəyə yazılın'
    },
    {
        icon: svgIcons.medic,
        title: "Laboratoriya",
        desc: 'Analiz nəticələrini onlayn əldə edin'
    },
    {
        icon: svgIcons.medic,
        title: "E-Resept",
        desc: 'Təyin olunmuş reseptlərlə tanış olun'
    },
    {
        icon: svgIcons.medic,
        title: "Həkim tap",
        desc: 'Sizə uyğun mütəxəssisi dərhal tapın'
    },
]
</script>

<template>
    <section class="py-16 bg-[#F8F9FA]">
        <div class="container mx-auto px-4">
            <div class="max-w-3xl mx-auto text-center mb-12">
                <h2 class="text-[#6BB52B] font-extrabold text-3xl md:text-4xl mb-4">
                    Elektron xidmətlərimizlə bir addım daha yaxınıq
                </h2>
                <p class="text-gray-600 text-xl">Hər an, hər yerdə sizinləyik</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div 
                    v-for="(item, index) in eService" 
                    :key="index" 
                    class="group bg-white rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#6BB52B]/20 flex flex-col items-start"
                >
                    <div 
                        v-html="item.icon" 
                        class="mb-6 w-14 h-14 flex items-center justify-center text-[#6BB52B] [&_svg]:w-full [&_svg]:h-full [&_svg]:fill-current"
                    ></div>

                    <h3 class="mb-3 font-bold text-2xl text-gray-800">{{ item.title }}</h3>
                    <p class="text-gray-500 leading-relaxed mb-6">{{ item.desc }}</p>

                    <div 
                        class="mt-auto w-14 h-8 bg-[#6BB52B] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-2 cursor-pointer"
                    >
                        <div class="w-5 h-5 flex items-center justify-center [&_svg]:fill-white" v-html="svgIcons.arrowRight"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>