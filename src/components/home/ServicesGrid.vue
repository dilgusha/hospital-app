<template>
  <section class="py-12 px-5 text-black">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        <div v-for="(service, index) in services" :key="index"
          class="relative group overflow-hidden rounded-[40px] p-8 h-75 flex flex-col justify-end transition-all duration-300 hover:scale-105 scale-100 cursor-pointer shadow-lg border border-gray-100">
          <div class="absolute inset-0 bg-linear-to-b from-transparent via-[#6BB52B]/90 to-[#6BB52B] -z-10"></div>
          <div class="mb-4 w-12 h-12 transition-transform duration-300 group-hover:-translate-y-2 font-light"
            v-html="service.icon">
          </div>
          <h3 class="text-2xl font-bold mb-2 text-white">{{ service.title }}</h3>
          <p class="text-sm text-white opacity-95 leading-relaxed">
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
    title: 'Ünvanda Xidmət',
    description: 'Ünvanda müayinə rahat, komfortlu və operativ tibbi xidmətin ən optimal üsuludur.',
    icon: svgIcons.medic
  },
  {
    title: 'Təcili Tibbi Yardım',
    description: 'Təcili və Təxirəsalmaz Tibbi yardım xidməti üzrə briqadamız 7/24 sizə yüksək səviyyədə xidmət göstərir.',
    icon: svgIcons.ambulance
  },
  {
    title: 'Çağrı Mərkəzimiz',
    description: '*0101 çağrı mərkəzi dinləmədədir. Suallarınızı cavablandırmağa hazırıq!',
    icon: svgIcons.callCenter
  }
];
</script>

<style scoped>

</style>