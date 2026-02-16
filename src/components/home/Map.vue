<template>
  <section class="py-20 md:py-28 bg-gray-50" id="contact">
    <div class="container mx-auto px-4">
      <h2 class="text-[#00A3C4] font-bold text-3xl mb-8">Xəritədə Bax</h2>
      <div class="flex flex-wrap gap-3 mb-6">
        <button v-for="branch in branches" :key="branch.id" @click="activeBranch = branch" :class="[
          'px-6 py-2 rounded-full font-medium transition-all duration-300 border shadow-sm',
          activeBranch.id === branch.id
            ? 'bg-[#00A3C4] text-white border-[#00A3C4]'
            : 'bg-white text-gray-700 border-gray-200 hover:border-[#00A3C4]'
        ]">
          {{ branch.name }}
        </button>
      </div>
      <div class="flex flex-col lg:flex-row gap-12 items-start">

        <div class="w-full lg:w-3/5">


          <div class="relative w-full h-110 lg:h-135 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <iframe :src="activeBranch.mapUrl" width="100%" height="100%" style="border:0;" allowfullscreen=""
              loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              class="grayscale-[0.1] contrast-[1.05]"></iframe>

            <div class="absolute top-5 left-5 bg-white p-4 rounded-xl shadow-lg max-w-[260px] z-10 hidden sm:block">
              <h3 class="font-bold text-lg text-gray-800">{{ activeBranch.name }}</h3>
              <p class="text-sm text-gray-500 mt-1">{{ activeBranch.address }}</p>
              <div class="flex items-center mt-3 text-[#00A3C4]">
                <span class="text-sm font-bold">4.8</span>
                <div class="flex ml-2 text-xs text-yellow-400">
                  <span v-for="i in 5" :key="i">★</span>
                </div>
                <span class="text-gray-400 text-xs ml-2">(186 rəy)</span>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full lg:w-2/5 bg-white p-8 lg:p-10 rounded-3xl shadow-sm border border-gray-50">
          <div class="mb-8">
            <p class="text-gray-500 text-lg">sualınız var?</p>
            <h2 class="text-4xl font-extrabold text-[#2d3142] mt-1 relative inline-block">
              Bizimlə əlaqə saxlayın
              <span class="absolute -bottom-2 left-0 w-2/3 h-1 bg-[#00A3C4]"></span>
            </h2>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Ad*" v-model="form.firstName"
                class="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#00A3C4] transition-colors bg-gray-50"
                required>
              <input type="text" placeholder="Soyad*" v-model="form.lastName"
                class="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#00A3C4] transition-colors bg-gray-50"
                required>
            </div>

            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-4">
                <div class="relative flex items-center h-full">
                  <select v-model="form.prefix"
                    class="appearance-none bg-transparent text-gray-700 pr-7 mr-3 border-r border-gray-300 outline-none cursor-pointer h-[60%] leading-tight">
                    <option value="050">050</option>
                    <option value="051" selected>051</option>
                    <option value="055">055</option>
                    <option value="070">070</option>
                    <option value="077">077</option>
                    <option value="099">099</option>
                    <option value="010">010</option>
                  </select>
                  <div class="absolute right-4 pointer-events-none flex items-center">
                    <i class="fas fa-chevron-down text-[10px] text-gray-400"></i>
                  </div>
                </div>
              </div>

              <input type="tel" placeholder="XXX-XX-XX" v-model="form.phone"
                class="w-full p-4 pl-24 border border-gray-200 rounded-lg focus:outline-none focus:border-[#00A3C4] transition-colors bg-gray-50"
                required>
            </div>

            <textarea placeholder="Mesajınız*" rows="4" v-model="form.message"
              class="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#00A3C4] transition-colors bg-gray-50 resize-none"
              required></textarea>

            <button type="submit"
              class="w-full bg-[#00A3C4] text-white font-bold py-4 rounded-lg hover:bg-[#008ba8] transition-all transform hover:shadow-lg active:scale-[0.98]">
              Göndər
            </button>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const branches = [
  {
    id: 1,
    name: 'Referans Ambulance',
    address: 'Yusif Səfərov küçəsi, Bakı',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.428490186165!2d49.8619113!3d40.3771909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d079efb51ad%3A0xdfc9725621a00940!2sLeyla%20Medical%20Center!5e0!3m2!1str!2saz!4v1715850000000!5m2!1str!2saz', // Real embed linkinizi bura qoyun
    googleMapsLink: '#'
  }
  // {
  //   id: 2,
  //   name: 'Mərkəz Filialı',
  //   address: 'Nizami küçəsi, Bakı',
  //   mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.428490186165!2d49.8619113!3d40.3771909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d079efb51ad%3A0xdfc9725621a00940!2sLeyla%20Medical%20Center!5e0!3m2!1str!2saz!4v1715850000000!5m2!1str!2saz',
  //   googleMapsLink: '#'
  // }
];

const activeBranch = ref(branches[0]);

const form = ref({
  firstName: '',
  lastName: '',
  prefix: '050',
  phone: '',
  message: ''
});
const handleSubmit = () => {
  console.log('Göndərilən məlumat:', form.value);

  alert('Mesajınız uğurla göndərildi!');

  form.value = {
    firstName: '',
    lastName: '',
    prefix: '051',
    phone: '',
    message: ''
  };
};
</script>

<style scoped>
iframe {
  filter: saturate(1.1) brightness(1.02);
}
</style>