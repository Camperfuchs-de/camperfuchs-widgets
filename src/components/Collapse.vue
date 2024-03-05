<template>
    <div class="collapse bg-white shadow-md collapse-plus">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">
            Code Snippets
        </div>
        <div class="collapse-content flex flex-col gap-4 w-full">
            <slot/>
        </div>
    </div>
</template>

<script setup>

</script>