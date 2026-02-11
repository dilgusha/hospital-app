<template>
    <footer class="bg-hospital-dark  py-12 px-6">
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            <div class="flex flex-col">
                <p class="leading-6 mb-4">Bizi sosial mediada izləyin:</p>
                <div class="flex items-center space-x-4 mb-6">
                    <a href="#" class="hover:text-[#6BB52B] hover:scale-110 transition-all"><i class="fab fa-facebook-f text-lg"></i></a>
                    <a href="#" class="hover:text-[#6BB52B] hover:scale-110 transition-all"><i class="fab fa-telegram-plane text-lg"></i></a>
                    <a href="#" class="hover:text-[#6BB52B] hover:scale-110 transition-all"><i class="fab fa-youtube text-lg"></i></a>
                    <a href="#" class="hover:text-[#6BB52B] hover:scale-110 transition-all"><i class="fab fa-instagram text-lg"></i></a>
                    <a href="#" class="hover:text-[#6BB52B] hover:scale-110 transition-all"><i class="fab fa-whatsapp text-lg"></i></a>
                </div>
                <div >
                    <img src="../../assets/images/footer-logo.DM1xd_Q5.svg" alt="">
                </div>
            </div>

            <div class="flex flex-col md:items-center">
                <div class="space-y-4">
                    <div class="flex items-center space-x-3 group cursor-pointer">
                        <span class="text-[#6BB52B] text-xl font-bold italic group-hover:scale-110 transition-transform">*0101</span>
                    </div>
                    <div class="flex items-center space-x-3 group cursor-pointer">
                        <i class="fas fa-envelope text-[#6BB52B]"></i>
                        <span class="hover:text-[#6BB52B] transition-colors">info@leylamc.az</span>
                    </div>
                </div>
            </div>

            <div class="flex flex-col lg:pl-10">
                <h4 class=" font-semibold mb-4 border-l-4 border-[#6BB52B] pl-3">Əlaqə</h4>
                <div class="space-y-2">
                    <div v-for="(item, index) in connectPhone" :key="index" class="flex items-center space-x-3 group">
                        <span class="text-[#6BB52B] group-hover:scale-110 transition-transform">
                            <i class="fas fa-phone-alt text-xs"></i>
                        </span>
                        <p class="text-sm hover:text-[#6BB52B] transition-colors">{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="text-center border-t border-gray-700 mt-10 pt-6 text-xs tracking-wider opacity-60">
            &copy; 2026 City Hospital. Bütün hüquqlar qorunur.
        </div>
    </footer>
</template>

<script setup>
const connectPhone = [
    { text: '+994 12 490 18 58' },
    { text: '+994 12 490 18 58' },
    { text: '+994 12 490 18 58' },
    { text: '+994 12 490 18 58' },
    { text: '+994 12 490 18 58' }
]
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
</style>