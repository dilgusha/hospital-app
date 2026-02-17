<!-- <template>
    <transition name="fade">
        <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            @click.self="$emit('close')">
            <div class="w-full max-w-md bg-white rounded-4xl p-8 shadow-xl border border-gray-100 relative">
                <button @click="$emit('close')" class="absolute top-4 right-4 text-gray-400 hover:text-gray-700">
                    ✕
                </button>
                <div class="flex items-center mb-10">
                    <button @click="activeTab = 'login'" :class="activeTab === 'login'
                        ? 'bg-[#00A3C4] text-white shadow-lg shadow-cyan-200'
                        : 'bg-gray-100 text-gray-400 hover:bg-gray-200'"
                        class="text-lg font-bold px-10 py-3 rounded-[20px] transition-all mr-4">
                        Daxil ol
                    </button>
                    <button @click="activeTab = 'register'" :class="activeTab === 'register'
                        ? 'bg-[#00A3C4] text-white shadow-lg shadow-cyan-200'
                        : 'bg-gray-100 text-gray-400 hover:bg-gray-200'"
                        class="text-lg font-bold px-10 py-3 rounded-[20px] transition-all">
                        Qeydiyyat
                    </button>
                </div>
                <div v-if="activeTab === 'register'" class="space-y-5 fade-in">
                    <input type="text" placeholder="Ad Soyad"
                        class="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A3C4]" />
                    <input type="email" placeholder="E-poçt"
                        class="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A3C4]" />
                    <input type="password" placeholder="Şifrə"
                        class="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A3C4]" />
                    <button
                        class="w-full bg-[#00A3C4] text-white font-bold py-4 rounded-xl hover:bg-[#008ba8] transition-all">
                        Hesab yarat
                    </button>
                </div>

                <div v-if="activeTab === 'login'" class="space-y-5 fade-in">
                    <input type="text" placeholder="E-poçt"
                        class="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A3C4]" />
                    <input type="password" placeholder="Şifrə"
                        class="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A3C4]" />
                    <button
                        class="w-full bg-[#00A3C4] text-white font-bold py-4 rounded-xl hover:bg-[#008ba8] transition-all">
                        Daxil ol
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    isOpen: Boolean,
    initialTab: {
        type: String,
        default: 'login'
    }
})

defineEmits(['close'])

const activeTab = ref(props.initialTab)

watch(
    () => props.initialTab,
    (val) => {
        activeTab.value = val
    }
)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-in {
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(8px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style> -->


<template>
  <transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
         @click.self="$emit('close')">
      
      <!-- Modal Card -->
      <div class="w-full max-w-md bg-white rounded-4xl p-6 md:p-8 shadow-xl border border-gray-100 relative">
        <!-- Close Button -->
        <button @click="$emit('close')" class="absolute top-4 right-4 text-gray-400 hover:text-gray-700">
          ✕
        </button>

        <!-- Tabs -->
        <div class="flex items-center mb-6 md:mb-10 justify-center md:justify-start gap-4">
          <button @click="activeTab = 'login'"
                  :class="activeTab === 'login'
                    ? 'bg-[#00A3C4] text-white shadow-lg shadow-cyan-200'
                    : 'bg-gray-100 text-gray-400 hover:bg-gray-200'"
                  class="text-lg font-bold px-6 py-2 md:px-10 md:py-3 rounded-2xl transition-all">
            Daxil ol
          </button>

          <button @click="activeTab = 'register'"
                  :class="activeTab === 'register'
                    ? 'bg-[#00A3C4] text-white shadow-lg shadow-cyan-200'
                    : 'bg-gray-100 text-gray-400 hover:bg-gray-200'"
                  class="text-lg font-bold px-6 py-2 md:px-10 md:py-3 rounded-2xl transition-all">
            Qeydiyyat
          </button>
        </div>

        <!-- Register Form -->
        <div v-if="activeTab === 'register'" class="space-y-4 md:space-y-5 fade-in">
          <input type="text" placeholder="Ad Soyad"
                 class="w-full p-3 md:p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A3C4]" />
          <input type="email" placeholder="E-poçt"
                 class="w-full p-3 md:p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A3C4]" />
          <input type="password" placeholder="Şifrə"
                 class="w-full p-3 md:p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A3C4]" />
          <button class="w-full bg-[#00A3C4] text-white font-bold py-3 md:py-4 rounded-xl hover:bg-[#008ba8] transition-all">
            Hesab yarat
          </button>
        </div>

        <!-- Login Form -->
        <div v-if="activeTab === 'login'" class="space-y-4 md:space-y-5 fade-in">
          <input type="text" placeholder="E-poçt"
                 class="w-full p-3 md:p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A3C4]" />
          <input type="password" placeholder="Şifrə"
                 class="w-full p-3 md:p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A3C4]" />
          <button class="w-full bg-[#00A3C4] text-white font-bold py-3 md:py-4 rounded-xl hover:bg-[#008ba8] transition-all">
            Daxil ol
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  initialTab: {
    type: String,
    default: 'login'
  }
})

defineEmits(['close'])

const activeTab = ref(props.initialTab)

watch(
  () => props.initialTab,
  (val) => {
    activeTab.value = val
  }
)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-in {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
