<template>
  <section
    ref="statsSection"
    class="bg-[#00A3C4] py-16 md:py-20 text-white font-sans overflow-hidden w-full"
    id="stats"
  >
    <div
      class="mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20"
    >
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 text-center"
      >
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="flex-1 flex flex-col items-center"
        >
          <div
            class="text-5xl md:text-6xl font-black mb-3 tabular-nums drop-shadow-md transition-transform duration-500 group-hover:scale-110"
          >
            {{
              Math.floor(displayNumbers[index])
                .toLocaleString()
                .replace(/,/g, " ")
            }}
          </div>

          <div class="w-10 h-0.5 bg-white/80 mb-4 rounded-full"></div>

          <div
            class="text-lg md:text-xl font-medium leading-snug tracking-wide opacity-90"
            v-html="stat.label"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const statsSection = ref(null);
const stats = [
  { target: 20, label: "Təcili Tibbi Yardım<br>Avtomobili" },
  { target: 512, label: "Tibbi Briqada" },
  { target: 4125, label: "Laboratoriya<br>Analizləri" },
  { target: 5250, label: "Çağırış" },
];

const displayNumbers = ref(stats.map(() => 0));
let animated = false;

const animateNumbers = () => {
  if (animated) return;
  animated = true;

  const duration = 2000;
  const frameRate = 1000 / 60;
  const totalFrames = duration / frameRate;

  stats.forEach((stat, index) => {
    let currentFrame = 0;

    const counter = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);

      displayNumbers.value[index] = easeOutQuad * stat.target;

      if (currentFrame >= totalFrames) {
        displayNumbers.value[index] = stat.target;
        clearInterval(counter);
      }
    }, frameRate);
  });
};

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateNumbers();
      }
    },
    { threshold: 0.2 }
  );

  if (statsSection.value) {
    observer.observe(statsSection.value);
  }
});
</script>