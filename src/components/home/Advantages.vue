<template>
  <section
    id="advantages"
    class="py-20 md:py-28 bg-white overflow-hidden scroll-mt-24"
  >
    <div class="mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
      <div class="relative mb-12 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-black text-[#2d3142]">
          Üstünlüklərimiz
        </h2>
        <div class="w-16 h-1.5 bg-[#00A3C4] mt-3 rounded-full"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in advantages"
          :key="index"
          class="group bg-white p-10 rounded-4xl text-gray-800 shadow-xl border border-gray-50 hover:bg-[#00A3C4] hover:text-white transition-all duration-500 hover:-translate-y-3 cursor-default"
        >
          <div
            class="w-16 h-16 bg-[#00A3C4]/10 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-8 transition-colors"
          >
            <i
              :class="[
                item.icon,
                'text-2xl text-[#00A3C4] group-hover:text-white transition-colors',
              ]"
            ></i>
          </div>
          <h3 class="text-2xl font-bold mb-4">{{ item.title }}</h3>
          <p
            class="text-gray-500 group-hover:text-white/80 leading-relaxed transition-colors"
          >
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { advantages } from "@/data/advantages.js";
</script>