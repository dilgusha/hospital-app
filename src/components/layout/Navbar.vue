<script setup>
import { ref } from 'vue';
import { svgIcons } from '../../assets/images/svg';

const menuItems = [
  { name: 'Haqqımızda', path: '/about', subItems: ['Tariximiz', 'Rəhbərlik', 'Sertifikatlar'] },
  { name: 'Həkimlər', path: '/doctors', subItems: ['Həkim siyahısı', 'Şöbələr'] },
  { name: 'Bölmələrimiz', path: '/departments', subItems: ['Kardiologiya', 'Nevrologiya', 'Pediatriya'] },
  { name: 'Tibbi Xidmətlər', path: '/medical-services', subItems: ['Kardiologiya', 'Nevrologiya', 'Pediatriya'] },
];

const isMobileMenuOpen = ref(false);
const openSubMenu = ref(null);

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function toggleSubMenu(index) {
  openSubMenu.value = openSubMenu.value === index ? null : index;
}
</script>

<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-4 h-20 flex items-center justify-between">
      <div v-html="svgIcons.logo"></div>

      <nav class="hidden lg:flex items-center space-x-8 h-full">
        <router-link to="/" class="text-gray-700 font-semibold hover:text-hospital-green transition-colors h-full flex items-center border-b-2 border-transparent hover:border-hospital-green" active-class="text-hospital-green border-hospital-green">
          Əsas Səhifə
        </router-link>

        <div v-for="(item, index) in menuItems" :key="item.name" class="group relative h-full flex items-center">
          <router-link :to="item.path" class="flex items-center text-gray-700 font-semibold hover:text-hospital-green transition-colors h-full border-b-2 border-transparent group-hover:border-hospital-green" active-class="text-hospital-green border-hospital-green font-bold">
            {{ item.name }}
            <span v-html="svgIcons.upperline"></span>
          </router-link>

          <div class="absolute top-[80px] left-0 hidden group-hover:block bg-white shadow-xl py-3 w-56 rounded-b-md border-t-2 border-hospital-green animate-fade-in">
            <router-link v-for="sub in item.subItems" :key="sub" to="#" class="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-hospital-green">
              {{ sub }}
            </router-link>
          </div>
        </div>

        <router-link to="/check-up" class="text-gray-700 font-semibold hover:text-hospital-green transition-colors h-full flex items-center border-b-2 border-transparent hover:border-hospital-green" active-class="text-hospital-green border-hospital-green">
          Check Up
        </router-link>
          <div class="flex items-center space-x-6">
                <button class="text-hospital-green hover:scale-110 transition-transform"><svg class="h-5 w-5"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg></button>
                <button class="text-hospital-green hover:scale-110 transition-transform"><svg class="h-5 w-5"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                    </svg></button>
                <button class="text-orange-500 hover:scale-110 transition-transform"><svg class="h-5 w-5" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg></button>
            </div>
      </nav>

      <div class="flex lg:hidden items-center space-x-4">
        <button @click="toggleMobileMenu" class="text-hospital-green hover:scale-110 transition-transform">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
    </div>

    <div v-if="isMobileMenuOpen" class="lg:hidden bg-white shadow-md border-t border-gray-200 animate-fade-in">
      <router-link to="/" class="block px-4 py-3 text-gray-700 hover:text-hospital-green font-semibold border-b border-gray-100">Əsas Səhifə</router-link>

      <div v-for="(item, index) in menuItems" :key="item.name" class="border-b border-gray-100">
        <button @click="toggleSubMenu(index)" class="w-full text-left px-4 py-3 flex justify-between items-center text-gray-700 font-semibold hover:text-hospital-green">
          {{ item.name }}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform" :class="{'rotate-180': openSubMenu === index}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-if="openSubMenu === index" class="bg-gray-50">
          <router-link v-for="sub in item.subItems" :key="sub" to="#" class="block px-6 py-2 text-gray-600 hover:text-hospital-green">
            {{ sub }}
          </router-link>
        </div>
      </div>

      <router-link to="/check-up" class="block px-4 py-3 text-gray-700 hover:text-hospital-green font-semibold border-b border-gray-100">Check Up</router-link>
    </div>
  </header>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

