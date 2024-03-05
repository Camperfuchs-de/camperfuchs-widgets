<template>
    <vehicle-details :vehicle-id="store.vehicleId.value"></vehicle-details>
</template>

<script setup>
import { store } from './store.js'
</script>