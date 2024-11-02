<template>
    <div class="grid gap-4 w-full">
        <VehicleIdInput title="Vehicle Sale" />
        <Collapse>
            <CodeSnippets :code="code" />
            <CodeSnippets :code="tag" />
        </Collapse>
        <div class="divider m-0"></div>
        <Sale />
    </div>
</template>

<script setup>
import { CONSTANTS, store } from '../components/store.js';
import Collapse from '../components/Collapse.vue';
import CodeSnippets from '../components/CodeSnippets.vue';
import Sale from '../components/Sale.vue';
import VehicleIdInput from '../components/VehicleIdInput.vue';
const vehicle_sale_script = document.createElement('script');
vehicle_sale_script.src = CONSTANTS.VEHICLE_SALE_SCRIPT;
vehicle_sale_script.type = "module";
document.head.appendChild(vehicle_sale_script);

const vehicle_sale_link = document.createElement('link');
vehicle_sale_link.rel = "stylesheet";
vehicle_sale_link.href = CONSTANTS.VEHICLE_SALE_STYLE;

const code = `${vehicle_sale_script.outerHTML} 

${vehicle_sale_link.outerHTML}`;

const tag = `<vehicle-sale vehicle-id="9B3PGQSJ" price="63999" km="42600" erstzulassung="01.01.2024"></vehicle-sale>`;
</script>