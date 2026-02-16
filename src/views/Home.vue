<template>
  <div>
    <HomeSlider />
    <About id="about" />
    <ServicesGrid id="services" />
    <Advantages id="advantages" />
    <Stats id="stats" />
    <ServicesSection/>
    <Doctors id="doctors" />
    <SocialSection />
    <Comments />
    <Map />
  </div>
</template>

<script setup>
import HomeSlider from '../components/home/HomeSlider.vue';
import About from '../components/home/About.vue';
import ServicesGrid from '../components/home/Services.vue';
import Advantages from '../components/home/Advantages.vue';
import Stats from '../components/home/Stats.vue';
import Doctors from '../components/home/Doctors.vue';
import SocialSection from '../components/home/SocialSection.vue';
import Comments from '../components/home/Comments.vue';
import Map from '../components/home/Map.vue';
import ServicesSection from '../components/home/ServicesSection.vue';
</script>