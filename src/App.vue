<script setup>
import { RouterView } from 'vue-router';
import Footer from './components/layout/Footer.vue';
import Header from './components/layout/Header.vue';
import ScrollToTop from './components/common/ScrollToTop.vue';
import FloatingPhone from './components/common/FloatingPhone.vue';
</script>

<template>
  <Header v-if="$route.name !== 'Login' && $route.name !== 'Register'" />

  <RouterView />

  <Footer v-if="$route.name !== 'Login' && $route.name !== 'Register'" />
  <FloatingPhone />
  <ScrollToTop />
</template>