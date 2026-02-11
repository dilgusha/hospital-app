<script setup>
import HomeSlider from '../components/home/HomeSlider.vue'
import ServicesGrid from '../components/home/ServicesGrid.vue'
import EService from '../components/home/EService.vue'
import About from '../views/About.vue'
import Video from '../components/home/Video.vue'
import Loading from '../components/common/Loading.vue'
import NewsSection from '../components/cards/NewsSection.vue'

import {newsData} from '../data/news.js'
import Departments from '../components/home/Departments.vue'
import Map from '../components/home/Map.vue'
</script>

<template>
  <HomeSlider />
  <ServicesGrid />
  <EService />
  <About />
  <Video />
  <Loading />

  <NewsSection :news="newsData" :limit="3" :showButton="true" />

  <Departments/>
  <Map/>
</template>
