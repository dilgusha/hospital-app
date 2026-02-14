<script setup>
import { RouterView } from 'vue-router';
import Footer from './components/layout/Footer.vue';
import Header from './components/layout/Header.vue';
import HomeSlider from './components/home/HomeSlider.vue';
import About from './components/home/About.vue';
import ServicesGrid from './components/home/Services.vue';
import Advantages from './components/home/Advantages.vue';
import Stats from './components/home/Stats.vue';
import Map from './components/home/Map.vue';
import Doctors from './components/home/Doctors.vue';
import BaseCard from './components/cards/BaseCard.vue';
import Comments from './components/home/Comments.vue';
import ScrollToTop from './components/common/ScrollToTop.vue';
import FloatingPhone from './components/common/FloatingPhone.vue';
import SocialSection from './components/home/SocialSection.vue';

</script>

<template>
  <Header />
  <HomeSlider />
  <About id="about" />
  <ServicesGrid id="services" />
  <Advantages id="advantages" />
  <Stats id="stats" />
  <Doctors id="doctors" />
  <SocialSection />
  <Comments />
  <Map />
  <Footer />
  <FloatingPhone />
  <ScrollToTop />
</template>
