<script setup>
import { RouterView } from 'vue-router';
import Footer from './components/layout/Footer.vue';
import Header from './components/layout/Header.vue';
import ScrollToTop from './components/common/ScrollToTop.vue';
import FloatingPhone from './components/common/FloatingPhone.vue';
import { ref } from 'vue';
const scrollVisible = ref(false)

</script>

<template>
  <Header />

  <RouterView />

  <Footer />
  <FloatingPhone :scroll-visible="scrollVisible" />
  <ScrollToTop @visible-change="scrollVisible = $event" />
</template>