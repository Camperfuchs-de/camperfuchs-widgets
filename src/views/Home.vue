<template>
    <div class="grid w-full gap-4">
        <VehicleIdInput title="Widget Composition" />
        <div class="divider m-0"></div>
        <div class="grid lg:grid-cols-3 w-full gap-4">
            <div class="lg:col-span-2 w-full">
                <Slider />
            </div>
            <div class="w-full">
                <Calendar />
            </div>
        </div>
        <Details />
    </div>
</template>

<script setup>
import Slider from '../components/Slider.vue'
import Calendar from '../components/Calendar.vue'
import Details from '../components/Details.vue'
import VehicleIdInput from '../components/VehicleIdInput.vue'
</script>