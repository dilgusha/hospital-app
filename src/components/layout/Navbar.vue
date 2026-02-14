  <template>
    <div class=" sticky top-0 z-100 transition-all duration-500 bg-white">
      <div class="container mx-auto px-4 h-20 md:h-24 flex items-center justify-between">

        <router-link to="/" class="group flex items-center transition-transform duration-300 hover:scale-105">
          <div class="relative">
            <img src="../../assets/images/logo (1).png" alt="Referans Ambulance" class="h-12 md:h-16 object-contain" />
            <div
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00A3C4] transition-all duration-300 group-hover:w-full">
            </div>
          </div>
        </router-link>

        <nav class="hidden lg:flex items-center">
          <div class="flex items-center space-x-1">
            <!-- <router-link v-for="item in menuItems" :key="item.name" :to="item.path"
              class="nav-item text-gray-600 font-semibold px-4 py-2 rounded-full transition-all duration-300 text-[14px] hover:text-[#00A3C4] hover:bg-blue-50">
              {{ item.name }}
            </router-link> -->

            <!-- <a v-for="item in menuItems" :key="item.name" href="javascript:void(0)"
              @click.prevent="scrollToSection(item.path)"
              class="nav-item text-gray-600 font-semibold px-4 py-2 rounded-full transition-all duration-300 text-[14px] hover:text-[#00A3C4] hover:bg-blue-50 cursor-pointer">
              {{ item.name }}
            </a> -->
            <a v-for="item in menuItems" :key="item.name" href="javascript:void(0)"
              @click.prevent="scrollToSection(item.path)"
              class="nav-item px-4 py-2 rounded-full font-semibold transition-all duration-300 text-[14px] cursor-pointer"
              :class="activeSection === item.path
                ? 'bg-[#00A3C4] text-white'
                : 'text-gray-600 hover:text-[#00A3C4] hover:bg-blue-50'">
              {{ item.name }}
            </a>

          </div>

          <div class="h-6 w-px bg-gray-200 mx-6"></div>

          <div class="relative" ref="langDropdown">
            <button @click.stop="isLangOpen = !isLangOpen"
              class="flex items-center space-x-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 hover:border-[#00A3C4] transition-all group">
              <img :src="languages[currentLang].flag" class="w-5 h-3.5 object-cover rounded-sm shadow-sm" />
              <span class="text-gray-700 font-bold text-sm">{{ currentLang }}</span>
              <i class="fas fa-chevron-down text-[10px] text-gray-400 transition-transform duration-300"
                :class="{ 'rotate-180': isLangOpen }"></i>
            </button>

            <transition name="dropdown">
              <div v-if="isLangOpen"
                class="absolute right-0 mt-3 w-32 bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl border border-white/20 py-2 z-100 overflow-hidden">
                <button v-for="(data, code) in languages" :key="code" @click="currentLang = code; isLangOpen = false"
                  class="w-full flex items-center space-x-3 px-4 py-2.5 hover:bg-[#00A3C4]/10 transition-colors"
                  :class="{ 'bg-blue-50': currentLang === code }">
                  <img :src="data.flag" class="w-5 h-3.5 object-cover rounded-sm" />
                  <span class="text-sm font-semibold text-gray-700">{{ data.name }}</span>
                </button>
              </div>
            </transition>
          </div>

          <div class="flex items-center space-x-4 ml-8">
            <router-link to="/signin"
              class="text-[14px] font-bold text-gray-500 hover:text-[#00A3C4] transition-colors">
              Daxil ol
            </router-link>
            <router-link to="/signup"
              class="relative overflow-hidden group px-7 py-3 bg-[#00A3C4] text-white font-bold text-[14px] rounded-xl shadow-[0_10px_20px_-5px_rgba(0,163,196,0.3)] hover:shadow-[0_15px_25px_-5px_rgba(0,163,196,0.4)] transition-all duration-300 active:scale-95">
              <span class="relative z-10">Qeydiyyat</span>
              <div
                class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              </div>
            </router-link>
          </div>
        </nav>

        <!-- <div class="lg:hidden flex items-center">
          <button @click="toggleMobileMenu"
            class="w-11 h-11 flex items-center justify-center rounded-xl bg-gray-50 text-[#00A3C4] border border-gray-100 active:scale-90 transition-all">
            <i :class="isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars-staggered'" class="text-xl"></i>
          </button>
        </div> -->
        <div class="lg:hidden flex items-center relative z-[110]"> <button @click="toggleMobileMenu"
            class="w-11 h-11 flex items-center justify-center rounded-xl bg-gray-50 text-[#00A3C4] border border-gray-100 active:scale-90 transition-all">
            <i :class="isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars-staggered'" class="text-xl"></i>
          </button>
        </div>
      </div>

      <transition name="mobile-menu bg-white">
        <div v-if="isMobileMenuOpen" class="fixed inset-0 bg-white z-105 lg:hidden flex flex-col pt-24 px-6">
          <div class="flex flex-col space-y-2">
            <!-- <a v-for="item in menuItems" :key="item.name" href="javascript:void(0)"
              @click.prevent="scrollToSection(item.path)"
              class="text-xl font-bold p-4 rounded-2xl hover:bg-gray-50 text-gray-800 hover:text-[#00A3C4] transition-all cursor-pointer">
              {{ item.name }}
            </a> -->
            <a v-for="item in menuItems" :key="item.name" @click.prevent="scrollToSection(item.path)"
              class="text-xl font-bold p-4 rounded-2xl transition-all cursor-pointer " :class="activeSection === item.path
                ? 'text-[#00A3C4] '
                : 'text-gray-800 hover:bg-gray-50 hover:text-[#00A3C4]'">
              {{ item.name }}
            </a>

          </div>

          <div class="mt-auto pb-10">
            <div class="grid grid-cols-2 gap-4 mb-8">
              <router-link to="/signin" @click="isMobileMenuOpen = false"
                class="flex items-center justify-center py-4 text-gray-500 font-bold rounded-2xl border-2 border-gray-100">
                Daxil ol
              </router-link>
              <router-link to="/signup" @click="isMobileMenuOpen = false"
                class="flex items-center justify-center py-4 bg-[#00A3C4] text-white font-bold rounded-2xl shadow-lg shadow-cyan-100">
                Qeydiyyat
              </router-link>
            </div>

            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div class="flex space-x-3">
                <button v-for="(data, code) in languages" :key="code" @click="currentLang = code"
                  class="p-2 rounded-lg transition-all border"
                  :class="currentLang === code ? 'bg-white border-[#00A3C4] shadow-sm scale-110' : 'border-transparent opacity-50'">
                  <img :src="data.flag" class="w-6 h-4 object-cover rounded-sm" />
                </button>
              </div>
              <div class="flex space-x-4 text-[#00A3C4] text-lg">
                <i class="fab fa-instagram"></i>
                <i class="fab fa-whatsapp"></i>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const activeSection = ref('');

const handleScroll = () => {
  const scrollPosition = window.scrollY + 120;

  for (const item of menuItems) {
    const section = document.querySelector(item.path);
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        activeSection.value = item.path;
      }
    }
  }
};

const menuItems = [
  { name: 'Haqqımızda', path: '#about' },
  { name: 'Xidmətlər', path: '#services' },
  { name: 'Üstünlük', path: '#advantages' },
  { name: 'Həkimlərimiz', path: '#doctors' },
  { name: 'Rəylər', path: '#reviews' },
  { name: 'Əlaqə', path: '#contact' },
];

const languages = {
  AZ: { name: 'AZ', flag: 'https://flagcdn.com/w20/az.png' },
  RU: { name: 'RU', flag: 'https://flagcdn.com/w20/ru.png' },
  EN: { name: 'EN', flag: 'https://flagcdn.com/w20/gb.png' }
};

const scrollToSection = (id) => {
  const element = document.querySelector(id);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    });

    isMobileMenuOpen.value = false;
  }
};

const currentLang = ref('AZ');
const isLangOpen = ref(false);
const isMobileMenuOpen = ref(false);
const langDropdown = ref(null);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

watch(() => route.path, () => {
  isMobileMenuOpen.value = false;
});

watch(isMobileMenuOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : '';
});

const handleClickOutside = (event) => {
  if (langDropdown.value && !langDropdown.value.contains(event.target)) {
    isLangOpen.value = false;
  }
};

onMounted(() => document.addEventListener('click', handleClickOutside));
onUnmounted(() => document.removeEventListener('click', handleClickOutside));
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<style scoped>
.header-glass {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.router-link-active.nav-item {
  background: #00A3C4;
  color: white !important;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.95);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>