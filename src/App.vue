<script setup>
import { RouterView } from 'vue-router';
import Footer from '@/components/layout/Footer.vue';
import Header from '@/components/layout/Header.vue';
import ScrollToTop from '@/components/common/ScrollToTop.vue';
import FloatingPhone from '@/components/common/FloatingPhone.vue';
import { ref } from 'vue';
import MobileNav from './components/common/MobileNav.vue';
const scrollVisible = ref(false)
const isMobileMenuOpen = ref(false);

</script>

<template>
  <Header v-model:isMobileMenuOpen="isMobileMenuOpen"/>

  <RouterView />

  <Footer />
  <MobileNav :is-mobile-menu-open="isMobileMenuOpen" />
  <FloatingPhone :scroll-visible="scrollVisible" />
  <ScrollToTop @visible-change="scrollVisible = $event" />
</template>