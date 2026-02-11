<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/layout/Footer.vue';
import Header from './components/layout/Header.vue';
import About from './views/About.vue';
import HomeSlider from './components/home/HomeSlider.vue';
import ServicesGrid from './components/home/ServicesGrid.vue';
import EService from './components/home/EService.vue';
import './assets/main.css'
import Video from './components/home/Video.vue';
import Loading from './components/common/Loading.vue';
import News from './components/home/News.vue';
</script>

<template>
  <Header />
  <HomeSlider />
  <ServicesGrid />
  <EService />
  <div>
    <RouterView/>
    <About />
    <Video />
    <Loading />
    <News />
  </div>

  <Footer />
</template>

<style scoped></style> -->

<script setup>
import { RouterView } from 'vue-router';
import Footer from './components/layout/Footer.vue';
import Header from './components/layout/Header.vue';
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>
