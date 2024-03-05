<template>
    <div class="flex items-center max-lg:justify-center lg:justify-between gap-4 max-lg:flex-wrap">
        <h1 class="text-3xl font-bold text-center">{{ title }}</h1>
        <form @submit.prevent="onSubmit" class="flex items-center gap-2">
            <input type="text" name="id" class="input input-bordered bg-gray-100" :placeholder="store.vehicleId.value" required>
            <button class="btn btn-primary-blue">Save</button>
        </form>
    </div>
</template>

<script setup>
const { title } = defineProps(['title'])
import { store } from './store.js'
const onSubmit = (e) => {
    e.preventDefault()
    store.setVehicleId(e.target.id.value)
}


</script>