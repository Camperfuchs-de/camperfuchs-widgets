<template>
    <booking-calendar :vehicle-id="store.vehicleId.value"></booking-calendar>
</template>

<script setup>
import { store } from './store.js'
</script>