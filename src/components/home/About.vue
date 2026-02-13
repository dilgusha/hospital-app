<template>
    <section class="py-16 md:py-24 bg-[#f8f9fa]" id="about">
        <div class="container mx-auto px-4">
            <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                <div class="w-full lg:w-1/2 order-2 lg:order-1">
                    <div class="mb-8">
                        <h2 class="text-3xl md:text-4xl font-extrabold text-[#2d3142] mb-4 relative">
                            Haqqımızda
                            <span class="absolute -bottom-3 left-0 w-20 h-1 bg-[#00A3C4] rounded-full"></span>
                        </h2>
                    </div>

                    <div class="space-y-6 text-[#555] leading-relaxed text-sm md:text-base">
                        <p>
                            <span class="font-bold text-[#2d3142]">Referans Ambulans</span>, Azərbaycanda ilk özəl
                            təcili yardım xidməti olaraq,
                            Referans Tibb Qrupunun bir hissəsi olaraq fəaliyyət göstərir. Yerindən asılı olmayaraq,
                            xidmətlərimizə ölkənin istənilən bölgəsində təcili tibbi yardım, eləcə də müxtəlif
                            klinikalara təxliyə xidmətləri daxildir.
                        </p>

                        <p>
                            Bundan əlavə, Referans Medical Group olaraq, biz Türkiyənin Apronjet aviaşirkətinin
                            Azərbaycandakı rəsmi distribütoruyuq. Buna görə də, hava təcili yardım xidmətimizdən
                            istifadə edərək, xəstələrin istənilən xarici ölkəyə və xarici ölkələrə təxliyəsini
                            təmin edirik.
                        </p>

                        <p class="font-medium italic border-l-4 border-[#00A3C4] pl-4 py-2 bg-white/50 rounded-r-lg">
                            Xəyallarınızı, ümidlərinizi və istəklərinizi gerçəkləşdirməyinizə kömək etmək üçün
                            əlimizdən gələni edirik!
                        </p>
                    </div>

                    <!-- <button
                        class="mt-8 px-8 py-3 bg-[#00A3C4] text-white font-bold rounded-lg hover:bg-[#008ba8] cursor-pointer transition-all transform hover:-translate-y-1 shadow-lg shadow-cyan-100">
                        Daha çox
                    </button> -->
                </div>

                <div class="w-full lg:w-1/2 order-1 lg:order-2">
                    <div class="relative group cursor-pointer overflow-hidden rounded-2xl shadow-2xl">
                        <img src="../../assets/images/endokrin_xeber.jpg" alt="Referans Ambulance"
                            class="w-full h-87.5 md:h-112.5 object-cover transition-transform duration-700 group-hover:scale-105" />

                        <div
                            class="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300">
                        </div>

                        <div class="absolute inset-0 flex items-center justify-center">
                            <div
                                class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50 group-hover:scale-110 transition-transform duration-300">
                                <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                                    <i class="fas fa-play text-[#00A3C4] text-2xl ml-1"></i>
                                </div>
                            </div>
                        </div>

                        <div class="absolute bottom-0 left-0 w-full h-2 bg-[#00A3C4]"></div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
h2 {
    letter-spacing: -0.5px;
}

p {
    text-align: justify;
}

.fa-play {
    filter: drop-shadow(0 0 8px rgba(0, 163, 196, 0.3));
}
</style>