<template>
  <div 
    class="bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 group w-xl"
    :class="[
      hoverEffect ? 'hover:shadow-xl hover:-translate-y-1' : 'shadow-sm',
      customClass
    ]"
  >
    <div v-if="image" class="relative overflow-hidden" :class="imageContainerClass">
      <img 
        :src="image" 
        :alt="title" 
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <slot name="image-overlay"></slot>
    </div>

    <div class="p-5" :class="contentClass">
      <slot name="header">
        <h4 v-if="title" class="text-lg font-bold text-[#2d3142] mb-2">{{ title }}</h4>
      </slot>

      <slot name="body">
        <p v-if="description" class="text-gray-500 text-sm leading-relaxed">
          {{ description }}
        </p>
      </slot>

      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  hoverEffect: {
    type: Boolean,
    default: true
  },
  customClass: String,
  imageContainerClass: {
    type: String,
    default: 'h-48'
  },
  contentClass: String
});
</script>