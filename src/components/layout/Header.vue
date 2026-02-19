<script setup lang="ts">
import TopHeader from "@/components/layout/TopHeader.vue";
import Navbar from "@/components/layout/Navbar.vue";
defineProps<{
  isMobileMenuOpen: boolean;
}>();

const emit = defineEmits(["update:isMobileMenuOpen"]);
</script>

<template>
  <header class="sticky top-0 z-[100] w-full bg-white shadow-sm">
    <TopHeader />
    <Navbar
      :isMobileMenuOpen="isMobileMenuOpen"
      @update:isMobileMenuOpen="emit('update:isMobileMenuOpen', $event)"
    />
  </header>
</template>

<style scoped>
</style>

