<template>
    <NewsSection :news="allNews" :showButton="false" />
</template>

<script setup>
import NewsSection from '../components/cards/BaseCard.vue'
import { svgIcons } from '../assets/images/svg'

const allNews = [
    {
        date: '29.01.2025',
        description: 'Ünvanda müayinə rahat...',
        icon: svgIcons.medic
    },
    {
        date: '29.01.2025',
        description: 'Təcili və Təxirəsalmaz...',
        icon: svgIcons.ambulance
    },
    {
        date: '29.01.2025',
        description: '*0101 çağrı mərkəzi...',
        icon: svgIcons.callCenter
    },
    {
        date: '30.01.2025',
        description: 'Yeni xəbər...',
        icon: svgIcons.medic
    }]
</script>
