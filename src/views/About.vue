<script setup>
import { svgIcons } from '../assets/images/svg';

const aboutInfo = [
  {
    icon: svgIcons.medic,
    img: new URL('../assets/images/endokrin_xeber.jpg', import.meta.url).href,
    desc: `1999-cu ildə ulu öndərimiz Heydər Əliyev tərəfindən açılışı baş tutan Leyla Medical Center fəaliyyətinin 22-ci ilində Referans Medical Group şəbəkəsinə daxil olaraq yeni ad, daha geniş xidmət çeşidi, daha da peşəkar həkimlər ilə sizlər üçün xidmət göstərməyə başladı. Mərkəzimiz tək Azərbaycanda deyil, eyni zamanda Qafqazda ilk Mamalıq və Ginekologiya üzrə ixtisaslaşdırılmış özəl tibb müəssisəsi kimi uğurla fəaliyyətə başlamışdır.`
  }
];
</script>

<template>
  <div 
    v-for="(item, index) in aboutInfo" 
    :key="index" 
    class="py-10 px-4 container mx-auto"
  >
    <div class="flex flex-col lg:flex-row items-center gap-8">

      <div class="w-full lg:w-1/2">
        <div 
          v-html="item.icon" 
          class="mb-5 w-12 h-12 text-[#6BB52B] [&_svg]:fill-current">
        </div>
        <p class="text-black text-base leading-relaxed">
          {{ item.desc }}
        </p>
      </div>
      <div class="w-full lg:w-1/2">
        <img 
          :src="item.img" 
          alt="About Image" 
          class="w-full h-auto rounded-2xl object-cover"
        >
      </div>
    </div>  
  </div>
</template>
