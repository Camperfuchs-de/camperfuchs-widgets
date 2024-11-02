import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BookingCalendar from '../views/BookingCalendar.vue'
import ImageSlider from '../views/ImageSlider.vue'
import VehicleDetails from '../views/VehicleDetails.vue'
import VehicleSale from '../views/VehicleSale.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/booking-calendar',
      name: 'BookingCalendar',
      component: BookingCalendar
    },
    {
      path: '/image-slider',
      name: 'ImageSlider',
      component: ImageSlider
    }, 
    {
      path: '/vehicle-details',
      name: 'VehicleDetails',
      component: VehicleDetails
    },
    {
      path: '/vehicle-sale',
      name: 'VehicleSale',
      component: VehicleSale
    }
  ]
})

export default router
