  <template>
    <div class=" sticky top-0 z-100 transition-all duration-500 bg-white">
      <div class="container mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
        <a href="#" class="group flex items-center transition-transform duration-300 hover:scale-105"
          @click.prevent="scrollToSection('#')">
          <div class="relative">
            <img src="../../assets/images/logo (1).png" alt="Referans Ambulance" class="h-12 md:h-16 object-contain" />
            <div
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00A3C4] transition-all duration-300 group-hover:w-full">
            </div>
          </div>
        </a>

        <nav class="hidden lg:flex items-center">
          <div class="relative">
            <!-- <div
              class="absolute top-0 h-full bg-gradient-to-r from-[#00A3C4]/8 to-[#0077B6]/8 rounded-2xl transition-all duration-500 ease-out border border-[#00A3C4]/20"
              :style="{
                left: indicatorLeft + 'px',
                width: indicatorWidth + 'px'
              }"></div> -->
            <div v-show="activeIdx !== -1"
              class="absolute top-0 h-full bg-gradient-to-r from-[#00A3C4]/10 to-[#0077B6]/10 rounded-2xl transition-all duration-500 ease-out border border-[#00A3C4]/20"
              :style="{
                left: indicatorLeft + 'px',
                width: indicatorWidth + 'px'
              }">
            </div>

            <ul class="flex items-center space-x-1 relative z-10">
              <li v-for="(item, index) in menuItems" :key="index" :ref="el => menuRefs[index] = el" class="relative">
                <div v-if="isMoving && targetIdx === index"
                  class="absolute top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-700 ease-out z-30"
                  :class="[
                    movingDirection === 'right' ? 'animate-drive-in-right' : 'animate-drive-in-left'
                  ]" :style="{
                    [movingDirection === 'right' ? 'left' : 'right']: ambulanceOffset + 'px'
                  }">
                  <div class="relative flex items-center">
                    <div v-if="movingDirection === 'right'" class="absolute -left-10 flex flex-col space-y-1">
                      <div class="w-6 h-0.5 bg-[#00A3C4]/50 rounded animate-speed-trail"></div>
                      <div class="w-4 h-0.5 bg-[#00A3C4]/30 rounded animate-speed-trail delay-75"></div>
                      <div class="w-3 h-0.5 bg-[#00A3C4]/20 rounded animate-speed-trail delay-150"></div>
                    </div>
                    <div v-else class="absolute -right-10 flex flex-col space-y-1">
                      <div class="w-6 h-0.5 bg-[#00A3C4]/50 rounded animate-speed-trail"></div>
                      <div class="w-4 h-0.5 bg-[#00A3C4]/30 rounded animate-speed-trail delay-75"></div>
                      <div class="w-3 h-0.5 bg-[#00A3C4]/20 rounded animate-speed-trail delay-150"></div>
                    </div>
                    <div class="absolute -top-4 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10">
                      <div
                        class="w-1.5 h-1.5 bg-red-500 rounded-full animate-siren shadow-[0_0_12px_rgba(239,68,68,0.9)]">
                      </div>
                      <div
                        class="w-1.5 h-1.5 bg-blue-500 rounded-full animate-siren-alt shadow-[0_0_12px_rgba(59,130,246,0.9)]">
                      </div>
                    </div>
                    <div class="relative px-2" :class="movingDirection === 'right' ? '' : 'scale-x-[-1]'">
                      <i class="fas fa-ambulance text-[#00A3C4] text-2xl drop-shadow-xl filter brightness-110"></i>
                    </div>
                    <div class="absolute bottom-0 flex space-x-1"
                      :class="movingDirection === 'right' ? '-left-6' : '-right-6'">
                      <div class="w-2 h-2 bg-gray-300/40 rounded-full animate-dust-cloud"></div>
                      <div class="w-1.5 h-1.5 bg-gray-300/30 rounded-full animate-dust-cloud delay-100"></div>
                      <div class="w-1 h-1 bg-gray-300/20 rounded-full animate-dust-cloud delay-200"></div>
                    </div>
                  </div>
                </div>
                <a :href="item.path" @click.prevent="scrollToSection(item.path, index)"
                  class="relative px-6 py-3 text-sm font-bold tracking-wide transition-all duration-300 rounded-2xl block group"
                  :class="activeSection === item.path ? 'text-[#00A3C4]' : 'text-gray-600 hover:text-[#2d3142]'">
                  <span class="relative inline-block transition-all duration-300"
                    :class="isMoving && targetIdx === index ? 'opacity-40 blur-[0.5px]' : 'opacity-100'">
                    {{ azUpper(item.name) }}
                  </span>
                </a>
              </li>
            </ul>
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
          <!-- <div class="flex items-center space-x-4 ml-8">
            <button @click="openLogin"
              class="relative overflow-hidden group px-7 py-3 bg-[#00A3C4] text-white font-bold text-[14px] rounded-xl shadow-[0_10px_20px_-5px_rgba(0,163,196,0.3)] hover:shadow-[0_15px_25px_-5px_rgba(0,163,196,0.4)] transition-all duration-300 active:scale-95">
              Daxil ol
            </button>
            <button @click="openRegister"
              class="relative overflow-hidden group px-7 py-3 bg-[#00A3C4] text-white font-bold text-[14px] rounded-xl shadow-[0_10px_20px_-5px_rgba(0,163,196,0.3)] hover:shadow-[0_15px_25px_-5px_rgba(0,163,196,0.4)] transition-all duration-300 active:scale-95">
              Qeydiyyat
            </button>
          </div> -->

        </nav>
        <!-- <AuthModal :isOpen="showAuth" :initialTab="initialTab" @close="showAuth = false" /> -->


        <div class="lg:hidden flex items-center relative z-1100"> <button @click="toggleMobileMenu"
            class="w-11 h-11 flex items-center justify-center rounded-xl bg-gray-50 text-[#00A3C4] border border-gray-100 active:scale-90 transition-all">
            <i :class="isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars-staggered'" class="text-xl"></i>
          </button>
        </div>
      </div>

      <transition name="mobile-menu">
        <div v-if="isMobileMenuOpen" class="fixed inset-0 bg-white z-[1000] lg:hidden flex flex-col pt-24 px-6">
          <div class="flex flex-col space-y-2">
            <!-- <a v-for="item in menuItems" :key="item.name"
              @click.prevent="() => { scrollToSection(item.path); isMobileMenuOpen.value = false; }"
              class="text-xl font-bold p-4 rounded-2xl transition-all cursor-pointer"
              :class="activeSection === item.path ? 'text-[#00A3C4]' : 'text-gray-800 hover:bg-gray-50 hover:text-[#00A3C4]'">
              {{ item.name }}
            </a> -->
            <a v-for="item in menuItems" :key="item.name" @click.prevent="mobileScrollTo(item.path)"
              class="text-xl font-bold p-4 rounded-2xl transition-all cursor-pointer"
              :class="activeSection === item.path ? 'text-[#00A3C4]' : 'text-gray-800 hover:bg-gray-50 hover:text-[#00A3C4]'">
              {{ item.name }}
            </a>
          </div>
          <div class="mt-auto pb-10">
            <!-- <div class="grid grid-cols-2 gap-4 mb-8">
              <button @click="() => { isMobileMenuOpen = false; openLogin(); }"
                class="flex items-center justify-center py-4 text-gray-500 font-bold rounded-2xl border-2 border-gray-100 transition-colors hover:bg-gray-50">
                Daxil ol
              </button>

              <button @click="() => { isMobileMenuOpen = false; openRegister(); }"
                class="flex items-center justify-center py-4 bg-[#00A3C4] text-white font-bold rounded-2xl shadow-lg shadow-cyan-100 transition-all hover:bg-[#008ba8]">
                Qeydiyyat
              </button>
            </div> -->
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
import azUpper from '../../utils/font.js';
import { throttle } from 'lodash';

const route = useRoute();
const activeSection = ref('');
import AuthModal from '../../components/home/AuthModal.vue'

const showAuth = ref(false)
const initialTab = ref('login')

const openLogin = () => {
  initialTab.value = 'login'
  showAuth.value = true
}

const openRegister = () => {
  initialTab.value = 'register'
  showAuth.value = true
}
const throttledScroll = throttle(() => {
  handleScroll();
}, 100);
onMounted(() => window.addEventListener('scroll', throttledScroll));
onUnmounted(() => window.removeEventListener('scroll', throttledScroll));

// const handleScroll = () => {
//   const scrollPosition = window.scrollY + 150;

//   if (window.scrollY < 150) {
//     activeSection.value = '';
//     activeIdx.value = -1;
//     indicatorWidth.value = 0;
//     return;
//   }

//   for (let index = 0; index < menuItems.length; index++) {
//     const item = menuItems[index];
//     const section = document.querySelector(item.path);
//     if (!section) continue;

//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.offsetHeight;

//     if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//       if (activeIdx.value !== index) {
//         activeSection.value = item.path;
//         const targetEl = menuRefs.value[index];
//         if (targetEl) {
//           indicatorLeft.value = targetEl.offsetLeft;
//           indicatorWidth.value = targetEl.offsetWidth;
//         }
//         activeIdx.value = index;
//       }
//       break;
//     }
//   }
// };

const handleScroll = () => {
  if (isMobileMenuOpen.value) return;

  const scrollPosition = window.scrollY + 150;

  if (window.scrollY < 150) {
    activeSection.value = '';
    activeIdx.value = -1;
    indicatorWidth.value = 0;
    return;
  }

  for (let index = 0; index < menuItems.length; index++) {
    const item = menuItems[index];
    const section = document.querySelector(item.path);
    if (!section) continue;

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      if (activeIdx.value !== index) {
        activeSection.value = item.path;
        const targetEl = menuRefs.value[index];
        if (targetEl) {
          indicatorLeft.value = targetEl.offsetLeft;
          indicatorWidth.value = targetEl.offsetWidth;
        }
        activeIdx.value = index;
      }
      break;
    }
  }
};

const updateIndicator = (index) => {
  const targetEl = menuRefs.value[index];
  if (targetEl) {
    indicatorLeft.value = targetEl.offsetLeft;
    indicatorWidth.value = targetEl.offsetWidth;
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

const mobileScrollTo = (id) => {
  isMobileMenuOpen.value = false;

  setTimeout(() => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
      activeSection.value = id;
    }
  }, 300);
};

const scrollToSection = (id, index) => {
  if (index !== undefined) {
    setActive(index);
    activeSection.value = menuItems[index].path;
    if (id !== '#') {
      const element = document.querySelector(id);
      if (element) {
        const offset = 90;
        window.scrollTo(0, element.offsetTop - offset);
      }
    } else {
      window.scrollTo(0, 0);
    }
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
onMounted(() => {
  handleScroll();

  setTimeout(() => {
    const currentIdx = activeIdx.value >= 0 ? activeIdx.value : 0;
    const targetEl = menuRefs.value[currentIdx];
    if (targetEl) {
      indicatorLeft.value = targetEl.offsetLeft;
      indicatorWidth.value = targetEl.offsetWidth;
    }
  }, 200);
});

onMounted(() => document.addEventListener('click', handleClickOutside));
onUnmounted(() => document.removeEventListener('click', handleClickOutside));
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const activeIdx = ref(-1);
const indicatorLeft = ref(0);
const indicatorWidth = ref(0);
const ambulanceOffset = ref(-50);
const targetIdx = ref(0);
const menuRefs = ref([]);
const isMoving = ref(false);
const movingDirection = ref('right');


const setActive = (index) => {
  if (activeIdx.value === index || isMoving.value) return;

  const prevIndex = activeIdx.value === -1 ? 0 : activeIdx.value;
  movingDirection.value = index > prevIndex ? 'right' : 'left';

  targetIdx.value = index;
  isMoving.value = true;

  const targetEl = menuRefs.value[index];
  if (targetEl) {
    indicatorLeft.value = targetEl.offsetLeft;
    indicatorWidth.value = targetEl.offsetWidth;
  }

  ambulanceOffset.value = -50;

  const animationInterval = setInterval(() => {
    ambulanceOffset.value += 2;

    if (ambulanceOffset.value >= 50) {
      clearInterval(animationInterval);
      activeIdx.value = index;

      setTimeout(() => {
        isMoving.value = false;
        ambulanceOffset.value = -50;
      }, 100);
    }
  }, 10);
};


onMounted(() => {
  setTimeout(() => {
    if (menuRefs.value[0]) {
      const firstEl = menuRefs.value[0];
      indicatorLeft.value = firstEl.offsetLeft;
      indicatorWidth.value = firstEl.offsetWidth;
    }
  }, 100);
});

</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.transition-all {
  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes siren {

  0%,
  100% {
    opacity: 1;
    transform: scale(1.2);
  }

  50% {
    opacity: 0.2;
    transform: scale(0.8);
  }
}

@keyframes siren-alt {

  0%,
  100% {
    opacity: 0.2;
    transform: scale(0.8);
  }

  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

.animate-siren {
  animation: siren 0.4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-siren-alt {
  animation: siren-alt 0.4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes speed-trail {
  0% {
    opacity: 0;
    width: 0;
  }

  50% {
    opacity: 0.8;
  }

  100% {
    opacity: 0;
    width: 100%;
  }
}

.animate-speed-trail {
  animation: speed-trail 0.4s ease-out infinite;
}

@keyframes dust-cloud {
  0% {
    opacity: 0.6;
    transform: scale(1) translateY(0);
  }

  100% {
    opacity: 0;
    transform: scale(2) translateY(4px);
  }
}

.animate-dust-cloud {
  animation: dust-cloud 0.5s ease-out infinite;
}

@keyframes drive-in-right {
  0% {
    transform: translateX(-100px) translateY(-50%) rotate(-3deg);
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  80% {
    opacity: 1;
  }

  100% {
    transform: translateX(100px) translateY(-50%) rotate(3deg);
    opacity: 0;
  }
}

@keyframes drive-in-left {
  0% {
    transform: translateX(100px) translateY(-50%) rotate(3deg);
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  80% {
    opacity: 1;
  }

  100% {
    transform: translateX(-100px) translateY(-50%) rotate(-3deg);
    opacity: 0;
  }
}

.animate-drive-in-right {
  animation: drive-in-right 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.animate-drive-in-left {
  animation: drive-in-left 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.delay-75 {
  animation-delay: 0.1s;
}

.delay-100 {
  animation-delay: 0.15s;
}

.delay-150 {
  animation-delay: 0.2s;
}

.delay-200 {
  animation-delay: 0.25s;
}

nav {
  backdrop-filter: saturate(180%) blur(20px);
}

@keyframes ping {

  75%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}

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