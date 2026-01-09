import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((_nuxtApp) => {
  console.log('Nuxt shipping plugin initialized successfully!')

  return {
    provide: {
      shippingRates: {
        getAllShippingRates() {
          console.log('Getting all shipping rates')

          return []
        },
        getCouriersForZone(zone: string) {
          console.log('Getting couriers for zone %s', zone)

          return []
        },
        getShippingRatesForZone(zone: string) {
          console.log('Getting shipping rates for zone %s', zone)

          return []
        },
        getShippingRatesForWeightAndZone(weight: number, zone: string) {
          console.log('Getting shipping rates for weight %s in zone %s', weight, zone)

          return []
        }
      },
    },
  }
})
