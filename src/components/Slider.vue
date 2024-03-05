<template>
    <image-slider :vehicle-id="vehicle_id"></image-slider>
</template>

<script setup>
import { store } from './store.js'
import { computed } from 'vue';
const vehicle_id = computed(() => store.vehicleId.value);
</script>