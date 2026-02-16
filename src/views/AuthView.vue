<template>
    <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div class="w-full max-w-md bg-white rounded-[32px] p-8 shadow-sm border border-gray-100">
            <div class="flex items-center mb-10">
                <router-link to="/login" @click="activeTab = 'login'"
                    :class="activeTab === 'login' ? 'text-gray-900' : 'text-gray-400'"
                    class="text-lg font-bold mr-8 transition-all relative">
                    Daxil ol
                    <span v-if="activeTab === 'login'"
                        class="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900 rounded-full"></span>
                </router-link>
                <router-link to="/register" @click="activeTab = 'register'" :class="activeTab === 'register'
                    ? 'bg-[#00A3C4] text-white shadow-lg shadow-cyan-200'
                    : 'bg-gray-100 text-gray-400 hover:bg-gray-200'"
                    class="text-lg font-bold px-10 py-3 rounded-[20px] transition-all">
                    Qeydiyyat
                </router-link>
            </div>
            <div class="space-y-6">
                <div v-if="activeTab === 'register'" class="space-y-5 animate-in fade-in duration-300">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Ad Soyad</label>
                        <input type="text" placeholder="Adınız və Soyadınız"
                            class="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A3C4] bg-gray-50/50">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Mobil nömrə</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-4">
                                <div class="relative flex items-center h-full">
                                    <select
                                        class="appearance-none bg-transparent text-gray-700 font-semibold pr-7 mr-3 border-r border-gray-300 outline-none cursor-pointer h-[60%]">
                                        <option value="050">050</option>
                                        <option value="051" selected>051</option>
                                        <option value="055">055</option>
                                        <option value="070">070</option>
                                    </select>
                                    <div class="absolute right-4 pointer-events-none">
                                        <i class="fas fa-chevron-down text-[10px] text-gray-400"></i>
                                    </div>
                                </div>
                            </div>
                            <input type="tel" placeholder="XXX-XX-XX"
                                class="w-full p-4 pl-28 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A3C4] transition-colors bg-gray-50/50">
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">E-poçt</label>
                        <input type="email" placeholder="nümunə@mail.com"
                            class="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A3C4] bg-gray-50/50">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Şifrə</label>
                        <input type="password" placeholder="••••••••"
                            class="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A3C4] bg-gray-50/50">
                    </div>
                    <button
                        class="w-full bg-[#00A3C4] text-white font-bold py-4 rounded-xl hover:bg-[#008ba8] transition-all shadow-lg shadow-cyan-100 mt-4">
                        Hesab yarat
                    </button>
                </div>
                <div v-if="activeTab === 'login'" class="space-y-5 animate-in fade-in duration-300">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">E-poçt və ya İstifadəçi adı</label>
                        <input type="text" placeholder="nümunə@mail.com"
                            class="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A3C4] bg-gray-50/50">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Şifrə</label>
                        <input type="password" placeholder="••••••••"
                            class="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A3C4] bg-gray-50/50">
                    </div>
                    <button
                        class="w-full bg-[#00A3C4] text-white font-bold py-4 rounded-xl hover:bg-[#008ba8] transition-all shadow-lg shadow-cyan-100">
                        Daxil ol
                    </button>
                </div>

            </div>
            <!-- <div class="mt-8 pt-8 border-t border-gray-100">
        <div class="flex gap-4 justify-center">
          <button class="p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
            <img src="https://www.svgrepo.com/show/475656/google.svg" class="w-6 h-6" alt="Google">
          </button>
          <button class="p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
            <img src="https://www.svgrepo.com/show/475647/facebook.svg" class="w-6 h-6" alt="Facebook">
          </button>
        </div>
      </div> -->

        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const activeTab = ref('register');

const updateTabFromRoute = () => {
    if (route.path === '/login') {
        activeTab.value = 'login';
    } else if (route.path === '/register') {
        activeTab.value = 'register';
    }
};

onMounted(() => {
    updateTabFromRoute();
});

watch(() => route.path, () => {
    updateTabFromRoute();
});

</script>

<style scoped>
.fade-in {
    animation: fadeIn 0.4s ease-in-out;
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