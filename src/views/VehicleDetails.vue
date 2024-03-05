<template>
    <div class="grid gap-4 w-full">
        <VehicleIdInput title="Vehicle Details" />
        <Collapse>
            <CodeSnippets :code="code" />
            <CodeSnippets :code="tag" />
        </Collapse>
        <div class="divider m-0"></div>
        <Details />
    </div>
</template>

<script setup>
import { CONSTANTS, store } from '../components/store.js';
import Collapse from '../components/Collapse.vue';
import CodeSnippets from '../components/CodeSnippets.vue';
import Details from '../components/Details.vue';
import VehicleIdInput from '../components/VehicleIdInput.vue';
const vehicle_details_script = document.createElement('script');
vehicle_details_script.src = CONSTANTS.VEHICLE_DETAILS_SCRIPT;
vehicle_details_script.type = "module";
document.head.appendChild(vehicle_details_script);

const vehicle_details_link = document.createElement('link');
vehicle_details_link.rel = "stylesheet";
vehicle_details_link.href = CONSTANTS.VEHICLE_DETAILS_STYLE;

const code = `${vehicle_details_script.outerHTML} 

${vehicle_details_link.outerHTML}`;

const tag = `<vehicle-details class="w-full" vehicle-id="${store.vehicleId.value}"></vehicle-details>`;
</script>