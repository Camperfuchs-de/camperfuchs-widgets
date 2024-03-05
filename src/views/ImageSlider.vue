<template>
    <div class="grid gap-4 w-full">
        <VehicleIdInput title="Image Slider" />
        <Collapse>
            <CodeSnippets :code="code" />
            <CodeSnippets :code="tag" />
        </Collapse>
        <div class="divider m-0"></div>
        <Slider />
    </div>
</template>

<script setup>
import { CONSTANTS, store } from '../components/store.js';
import Slider from '../components/Slider.vue';
import VehicleIdInput from '../components/VehicleIdInput.vue';
import CodeSnippets from '../components/CodeSnippets.vue';
import Collapse from '@/components/Collapse.vue';

const image_slider_script = document.createElement('script');
image_slider_script.src = CONSTANTS.IMAGE_SLIDER_SCRIPT;
image_slider_script.type = "module";

const image_slider_link = document.createElement('link');
image_slider_link.rel = "stylesheet";
image_slider_link.href = CONSTANTS.IMAGE_SLIDER_STYLE;

const code = `${image_slider_script.outerHTML}

${image_slider_link.outerHTML}`;

const tag = `<image-slider class="w-full" vehicle-id="${store.vehicleId.value}"></image-slider>`;
</script>