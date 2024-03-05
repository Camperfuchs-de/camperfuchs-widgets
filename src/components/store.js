import { ref } from 'vue';
export const CONSTANTS = {
    BOOKING_CALENDAR_SCRIPT: "https://camperfuchs-de.github.io/camperfuchs-widgets/booking-calendar/booking-calendar.js",
    BOOKING_CALENDAR_STYLE: "https://camperfuchs-de.github.io/camperfuchs-widgets/booking-calendar/style.css",
    IMAGE_SLIDER_SCRIPT: "https://camperfuchs-de.github.io/camperfuchs-widgets/image-slider/image-slider.js",
    IMAGE_SLIDER_STYLE: "https://camperfuchs-de.github.io/camperfuchs-widgets/image-slider/style.css",
    VEHICLE_DETAILS_SCRIPT: "https://camperfuchs-de.github.io/camperfuchs-widgets/vehicle-details/vehicle-details.js",
    VEHICLE_DETAILS_STYLE: "https://camperfuchs-de.github.io/camperfuchs-widgets/vehicle-details/style.css"
};

const vehicleId = ref('ZJS534I0');
const setVehicleId = (id) => {
    vehicleId.value = id;
};

export const store = {
    vehicleId,
    setVehicleId
};
