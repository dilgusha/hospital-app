<template>
    <div class="bg-white">
        <section class="py-20" id="services">
            <div class="container mx-auto px-4 space-y-24">

                <div class="flex flex-col lg:flex-row items-center gap-12">
                    <!-- <div class="w-full lg:w-1/2">
                        <div
                            class="relative rounded-[5px] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                            <img src="../../assets/images/plain-ambulance.jpg" alt="Hava Ambulansı"
                                class="w-full h-[400px] object-cover" />
                        </div>
                    </div> -->
                    <div class="w-full lg:w-1/2">
                        <div class="rounded-[5px] overflow-hidden shadow-2xl relative group">
                            <img src="../../assets/images/plain-ambulance.jpg"
                                class="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                                alt="Ambulans parkı" />
                            <div class="absolute inset-0 bg-gradient-to-t from-[#00A3C4]/20 to-transparent"></div>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2 space-y-6">
                        <div class="inline-block">
                            <h2 class="text-4xl font-extrabold text-[#2d3142] mb-2">Hava Ambulansı</h2>
                            <div class="h-1 w-20 bg-[#00A3C4] rounded-full"></div>
                        </div>
                        <p class="text-gray-600 leading-relaxed text-lg">
                            Referans Medical Group Türkiyənin Apronjet havacılıq şirkətinin Azərbaycandakı rəsmi
                            distributoru olaraq
                            Hava Ambulansı ilə də xidmətinizdədir. Müraciət edən pasiyentlərin istənilən xarici ölkəyə
                            daşınması
                            və təxliyəsi həyata keçirilir.
                        </p>
                    </div>
                </div>

                <div class="flex flex-col lg:flex-row-reverse items-center gap-12">
                    <!-- <div class="w-full lg:w-1/2">
                        <div
                            class="relative rounded-[5px] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                            <img src="../../assets/images/ambulance-2.jpg" alt="Stand by xidməti"
                                class="w-full h-[400px] object-cover" />
                        </div>
                    </div> -->
                    <div class="w-full lg:w-1/2">
                        <div class="rounded-[5px] overflow-hidden shadow-2xl relative group">
                            <img src="../../assets/images/ambulance-2.jpg"
                                class="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                                alt="Ambulans parkı" />
                            <div class="absolute inset-0 bg-gradient-to-t from-[#00A3C4]/20 to-transparent"></div>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2 space-y-6">
                        <div class="inline-block">
                            <h2 class="text-4xl font-extrabold text-[#2d3142] mb-2">"Stand by" xidməti</h2>
                            <p class="text-xl text-[#00A3C4] font-medium mb-2">(istənilən məkanda müşayiət)</p>
                            <div class="h-1 w-24 bg-[#00A3C4] rounded-full"></div>
                        </div>
                        <p class="text-gray-600 leading-relaxed text-lg">
                            Referans Ambulans Təcili Tibbi Yardım xidməti olaraq istədiyiniz məkanda sizi müşayiət edə
                            bilər.
                            Məkandan və zamandan asılı olmayaraq, Referans Ambulans xidməti təcrübəli və dinamik tibbi
                            heyətlə
                            7/24 çağırış etdiyiniz nöqtədədir.
                        </p>
                    </div>
                </div>
            </div>
            <div class=" py-20 space-y-32">
                <section class="container mx-auto px-4" id="about">
                    <div class="flex flex-col lg:flex-row items-center gap-16">
                        <div class="w-full lg:w-1/2 relative h-[400px] md:h-[550px] mb-10 lg:mb-0">
                            <div
                                class="absolute top-0 left-0 w-[65%] h-[75%] rounded-[12px] overflow-hidden shadow-2xl z-20 border-4 border-white transition-transform hover:z-30 hover:scale-[1.03] duration-300">
                                <img src="../../assets/images/Union1.png" class="w-full h-full object-cover"
                                    alt="Tibbi müdaxilə" />
                            </div>
                            <div
                                class="absolute bottom-0 right-0 w-[65%] h-[75%] rounded-[12px] overflow-hidden shadow-2xl z-10 border-4 border-white transition-transform hover:z-30 hover:scale-[1.03] duration-300">
                                <img src="../../assets/images/union2.png" class="w-full h-full object-cover"
                                    alt="Ambulans daxili" />
                            </div>
                        </div>
                        <div class="w-full lg:w-1/2 space-y-6">
                            <div>
                                <span class="text-[#00A3C4] font-medium tracking-widest uppercase text-sm">niyə</span>
                                <h2 class="text-4xl font-extrabold text-[#2d3142] mt-2">Referans Ambulance?</h2>
                                <div class="h-1 w-20 bg-[#00A3C4] mt-4 rounded-full"></div>
                            </div>
                            <p class="text-gray-600 text-lg leading-relaxed">
                                Referans Ambulans Azərbaycanın ilk özəl Təcili Tibbi Yardım xidmətidir.
                                Təcrübəli və dinamik tibbi heyətlə əhaliyə 24 saat yüksək xidmət göstərir.
                            </p>
                            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                                <li v-for="item in advantages" :key="item" class="flex items-center gap-3 group">
                                    <div
                                        class="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center group-hover:bg-[#00A3C4] transition-colors duration-300">
                                        <i class="fas fa-check text-[#00A3C4] text-[10px] group-hover:text-white"></i>
                                    </div>
                                    <span class="text-gray-700 font-medium">{{ item }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section class="container mx-auto px-4">
                    <div class="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <div class="w-full lg:w-1/2">
                            <div class="rounded-[5px] overflow-hidden shadow-2xl relative group">
                                <img src="../../assets/images/ambulance.jpg"
                                    class="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                                    alt="Ambulans parkı" />
                                <div class="absolute inset-0 bg-gradient-to-t from-[#00A3C4]/20 to-transparent"></div>
                            </div>
                        </div>

                        <div class="w-full lg:w-1/2 space-y-8">
                            <div>
                                <h2 class="text-4xl font-extrabold text-[#2d3142]">Təcili Tibbi Yardıma ehtiyacınız var?
                                </h2>
                                <div class="h-1 w-24 bg-[#00A3C4] mt-4 rounded-full"></div>
                            </div>
                            <p class="text-gray-600 text-lg">
                                Göstərilən xidmətlər haqqında sualınız var? O zaman *0003 Çağrı Mərkəzinə zəng edə
                                bilərsiniz.
                                Sizin çağırışınızı təmin etmək üçün əməkdaşlarımız 7/24 xidmətinizdədir.
                            </p>

                            <div class="flex flex-col gap-3 mt-6">
                                <a href="tel:*0003" class="flex items-center gap-4 group">
                                    <div
                                        class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-[#00A3C4] group-hover:bg-[#00A3C4] group-hover:text-white transition-all duration-300">
                                        <i class="fas fa-phone-alt"></i>
                                    </div>
                                    <div class="flex flex-col">
                                        <span
                                            class="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Çağrı
                                            Mərkəzi</span>
                                        <span
                                            class="text-xl font-bold text-[#2d3142] group-hover:text-[#00A3C4] transition-colors leading-tight">*0003</span>
                                    </div>
                                </a>

                                <div class="w-16 h-[1px] bg-gray-200 ml-14"></div>

                                <a href="https://wa.me/994517290003" class="flex items-center gap-4 group">
                                    <div
                                        class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                                        <i class="fab fa-whatsapp text-xl"></i>
                                    </div>
                                    <div class="flex flex-col">
                                        <span
                                            class="text-[10px] uppercase tracking-widest text-gray-400 font-bold">WhatsApp
                                            Xətti</span>
                                        <span
                                            class="text-xl font-bold text-[#2d3142] group-hover:text-green-500 transition-colors leading-tight">+994
                                            51 729 00 03</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>

    </div>
</template>

<script setup>
const advantages = [
    'Müasir avadanlıqlarla təchiz olunmuş Ambulanslar',
    'Fərdi yanaşma və xidmət keyfiyyəti',
    'Daha sürətli və effektiv xidmət',
    'Ölkədaxili və Ölkəxarici təxliyə',
    'Stand by xidməti',
    'Alternativ müalicə imkanları'
];
</script>

<style scoped>
img {
    filter: contrast(1.02) saturate(1.05);
}
</style>



<!-- 
<template>
  <div class="bg-white overflow-hidden">
    <section class="py-12 md:py-20" id="services">
      <div class="container mx-auto px-4 space-y-16 lg:space-y-32">

        <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div class="w-full lg:w-1/2">
            <div class="relative rounded-[12px] overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform duration-500">
              <img src="../../assets/images/plain-ambulance.jpg" alt="Hava Ambulansı"
                class="w-full h-[300px] md:h-[450px] object-cover" />
            </div>
          </div>
          <div class="w-full lg:w-1/2 space-y-4 md:space-y-6 text-center lg:text-left">
            <div class="inline-block lg:block">
              <h2 class="text-3xl md:text-4xl font-extrabold text-[#2d3142] mb-2">Hava Ambulansı</h2>
              <div class="h-1 w-20 bg-[#00A3C4] rounded-full mx-auto lg:mx-0"></div>
            </div>
            <p class="text-gray-600 leading-relaxed text-base md:text-lg">
              Referans Medical Group Türkiyənin Apronjet havacılıq şirkətinin Azərbaycandakı rəsmi
              distributoru olaraq Hava Ambulansı ilə də xidmətinizdədir. Müraciət edən pasiyentlərin 
              istənilən xarici ölkəyə daşınması və təxliyəsi həyata keçirilir.
            </p>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
          <div class="w-full lg:w-1/2">
            <div class="relative rounded-[12px] overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform duration-500">
              <img src="../../assets/images/ambulance-2.jpg" alt="Stand by xidməti"
                class="w-full h-[300px] md:h-[450px] object-cover" />
            </div>
          </div>
          <div class="w-full lg:w-1/2 space-y-4 md:space-y-6 text-center lg:text-left">
            <div class="inline-block lg:block">
              <h2 class="text-3xl md:text-4xl font-extrabold text-[#2d3142] mb-2">"Stand by" xidməti</h2>
              <p class="text-lg md:text-xl text-[#00A3C4] font-medium mb-2">(istənilən məkanda müşayiət)</p>
              <div class="h-1 w-24 bg-[#00A3C4] rounded-full mx-auto lg:mx-0"></div>
            </div>
            <p class="text-gray-600 leading-relaxed text-base md:text-lg">
              Referans Ambulans Təcili Tibbi Yardım xidməti olaraq istədiyiniz məkanda sizi müşayiət edə bilər. 
              Məkandan və zamandan asılı olmayaraq, təcrübəli və dinamik tibbi heyətlə 7/24 çağırış etdiyiniz nöqtədəyik.
            </p>
          </div>
        </div>

        <section class="pt-10 lg:pt-20" id="about">
          <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div class="w-full lg:w-1/2 relative h-[400px] md:h-[550px] mb-10 lg:mb-0">
              <div class="absolute top-0 left-0 w-[65%] h-[75%] rounded-[12px] overflow-hidden shadow-2xl z-20 border-4 border-white transition-transform hover:z-30 hover:scale-[1.03] duration-300">
                <img src="../../assets/images/Union1.png" class="w-full h-full object-cover" alt="Tibbi müdaxilə" />
              </div>
              <div class="absolute bottom-0 right-0 w-[65%] h-[75%] rounded-[12px] overflow-hidden shadow-2xl z-10 border-4 border-white transition-transform hover:z-30 hover:scale-[1.03] duration-300">
                <img src="../../assets/images/union2.png" class="w-full h-full object-cover" alt="Ambulans daxili" />
              </div>
            </div>

            <div class="w-full lg:w-1/2 space-y-6">
              <div class="text-center lg:text-left">
                <span class="text-[#00A3C4] font-bold tracking-widest uppercase text-xs">üstünlüklərimiz</span>
                <h2 class="text-3xl md:text-4xl font-extrabold text-[#2d3142] mt-2">Niyə Referans Ambulance?</h2>
                <div class="h-1 w-20 bg-[#00A3C4] mt-4 rounded-full mx-auto lg:mx-0"></div>
              </div>
              <p class="text-gray-600 text-base md:text-lg leading-relaxed text-center lg:text-left">
                Referans Ambulans Azərbaycanın ilk özəl Təcili Tibbi Yardım xidmətidir.
                Təcrübəli və dinamik tibbi heyətlə əhaliyə 24 saat yüksək xidmət göstərir.
              </p>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <li v-for="item in advantages" :key="item" class="flex items-center gap-3 group bg-gray-50 p-3 rounded-lg border border-transparent hover:border-[#00A3C4]/30 hover:bg-white transition-all">
                  <div class="flex-shrink-0 w-6 h-6 rounded-full bg-[#00A3C4] flex items-center justify-center text-white">
                    <i class="fas fa-check text-[10px]"></i>
                  </div>
                  <span class="text-gray-700 font-semibold text-sm md:text-base leading-tight">{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section class="pt-10 lg:pt-20">
          <div class="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
            <div class="w-full lg:w-1/2">
              <div class="rounded-[12px] overflow-hidden shadow-2xl relative group h-[300px] md:h-[450px]">
                <img src="../../assets/images/ambulance.jpg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Ambulans parkı" />
                <div class="absolute inset-0 bg-gradient-to-t from-[#2d3142]/40 to-transparent"></div>
              </div>
            </div>

            <div class="w-full lg:w-1/2 space-y-8">
              <div class="text-center lg:text-left">
                <h2 class="text-3xl md:text-4xl font-extrabold text-[#2d3142] leading-tight">
                  Təcili Tibbi Yardıma ehtiyacınız var?
                </h2>
                <div class="h-1 w-24 bg-[#00A3C4] mt-4 rounded-full mx-auto lg:mx-0"></div>
              </div>
              <p class="text-gray-600 text-base md:text-lg text-center lg:text-left">
                Göstərilən xidmətlər haqqında sualınız var? O zaman 7/24 xidmətinizdə olan əməkdaşlarımızla əlaqə saxlayın.
              </p>

              <div class="flex flex-col gap-4 max-w-md mx-auto lg:mx-0">
                <a href="tel:*0003" class="flex items-center gap-4 p-2 group bg-gray-50 rounded-full hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                  <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[#00A3C4] text-white shadow-lg shadow-cyan-100 group-hover:scale-105 transition-transform">
                    <i class="fas fa-phone-alt"></i>
                  </div>
                  <div class="flex flex-col">
                    <span class="text-[10px] uppercase tracking-tighter text-gray-400 font-bold">Çağrı Mərkəzi</span>
                    <span class="text-xl font-bold text-[#2d3142] tracking-tight">*0003</span>
                  </div>
                </a>

                <div class="w-10 h-[1px] bg-gray-200 ml-6 hidden lg:block"></div>

                <a href="https://wa.me/994517290003" class="flex items-center gap-4 p-2 group bg-gray-50 rounded-full hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                  <div class="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-100 group-hover:scale-105 transition-transform">
                    <i class="fab fa-whatsapp text-xl"></i>
                  </div>
                  <div class="flex flex-col">
                    <span class="text-[10px] uppercase tracking-tighter text-gray-400 font-bold">WhatsApp Xətti</span>
                    <span class="text-xl font-bold text-[#2d3142] tracking-tight">+994 51 729 00 03</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </section>
  </div>
</template>

<script setup>
const advantages = [
  'Müasir avadanlıqlar',
  'Fərdi yanaşma',
  'Sürətli xidmət',
  'Beynəlxalq təxliyə',
  'Stand by xidməti',
  'Alternativ müalicə'
];
</script>

<style scoped>
img {
  filter: contrast(1.02) saturate(1.05);
}
@media (max-width: 640px) {
  .container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
</style> -->