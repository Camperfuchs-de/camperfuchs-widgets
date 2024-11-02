<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { CONSTANTS } from './components/store.js'
const route = useRoute()
const routeName = computed(() => route.name)
const activeRoute = function (name) {
  return routeName.value === name ? 'active' : ''
}
const bookng_calendar_script = document.createElement('script');
bookng_calendar_script.src = CONSTANTS.BOOKING_CALENDAR_SCRIPT;
bookng_calendar_script.type = "module";
document.head.appendChild(bookng_calendar_script);
const booking_calendar_link = document.createElement('link');
booking_calendar_link.rel = "stylesheet";
booking_calendar_link.href = CONSTANTS.BOOKING_CALENDAR_STYLE;
document.head.appendChild(booking_calendar_link);
const image_slider_script = document.createElement('script');
image_slider_script.src = CONSTANTS.IMAGE_SLIDER_SCRIPT;
image_slider_script.type = "module";
document.head.appendChild(image_slider_script);
const image_slider_link = document.createElement('link');
image_slider_link.rel = "stylesheet";
image_slider_link.href = CONSTANTS.IMAGE_SLIDER_STYLE;
document.head.appendChild(image_slider_link);
const vehicle_details_script = document.createElement('script');
vehicle_details_script.src = CONSTANTS.VEHICLE_DETAILS_SCRIPT;
vehicle_details_script.type = "module";
document.head.appendChild(vehicle_details_script);
const vehicle_details_link = document.createElement('link');
vehicle_details_link.rel = "stylesheet";
vehicle_details_link.href = CONSTANTS.VEHICLE_DETAILS_STYLE;
document.head.appendChild(vehicle_details_link);
const vehicle_sale_script = document.createElement('script');
vehicle_sale_script.src = CONSTANTS.VEHICLE_SALE_SCRIPT;
vehicle_sale_script.type = "module";
document.head.appendChild(vehicle_sale_script);
const vehicle_sale_link = document.createElement('link');
vehicle_sale_link.rel = "stylesheet";
vehicle_sale_link.href = CONSTANTS.VEHICLE_SALE_STYLE;
document.head.appendChild(vehicle_sale_link);
</script>

<template>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <div class="navbar sticky top-0 z-10 shadow-md items-center justify-between lg:hidden bg-base-100">
        <label for="my-drawer-2" class="btn btn-ghost font-bold text-3xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </label>
        <RouterLink to="/" :class="'font-bold text-2xl text-primary-braun'">
          CamperFuchs
        </RouterLink>
      </div>
      <div class="flex flex-col items-center gap-4 p-4 min-h-screen bg-white">
        <div class="grid container w-full">
          <RouterView />
        </div>
      </div>
    </div>
    <div class="drawer-side z-20">
      <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu menu-lg p-4 w-80 min-h-full bg-base-200 text-primary-braun">
        <li>
          <RouterLink to="/" :class="'font-bold text-2xl'">
            CamperFuchs
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/booking-calendar" :class="activeRoute('BookingCalendar')">
            Booking Calendar
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/image-slider" :class="activeRoute('ImageSlider')">
            Image Slider
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/vehicle-details" :class="activeRoute('VehicleDetails')">
            Vehicle Details
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/vehicle-sale" :class="activeRoute('VehicleSale')">
            Vehicle Sale
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>