<template>
    <div class="mockup-code">
        <VCodeBlock :code="code" highlightjs label="" lang="html" theme="neon-bunny" />
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
const { code } = defineProps(['code'])
</script>