<template>
    <div class="grid gap-4 w-full">
        <VehicleIdInput title="Booking Calendar" />
        <Collapse>
            <CodeSnippets :code="code" />
            <CodeSnippets :code="tag" />
        </Collapse>
        <div class="divider m-0"></div>
        <Calendar />
    </div>
</template>

<script setup>
import { CONSTANTS, store } from '../components/store.js'
import Calendar from '../components/Calendar.vue'
import VehicleIdInput from '../components/VehicleIdInput.vue'
import CodeSnippets from '@/components/CodeSnippets.vue';
import Collapse from '@/components/Collapse.vue';
const bookng_calendar_script = document.createElement('script');
bookng_calendar_script.src = CONSTANTS.BOOKING_CALENDAR_SCRIPT;
bookng_calendar_script.type = "module";

const booking_calendar_link = document.createElement('link');
booking_calendar_link.rel = "stylesheet";
booking_calendar_link.href = CONSTANTS.BOOKING_CALENDAR_STYLE;
const code = `${bookng_calendar_script.outerHTML}

${booking_calendar_link.outerHTML}
`
const tag = `<booking-calendar class="w-full" vehicle-id="${store.vehicleId.value}"></booking-calendar>`;
</script>