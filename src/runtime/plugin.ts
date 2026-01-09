import { defineNuxtPlugin } from '#app'
import type { ShippingRate } from './types'

export default defineNuxtPlugin((_nuxtApp) => {
  _nuxtApp.provide("shippingRates", {
    getAllShippingRates() {
      return (_nuxtApp.$config.public.shippingRates.rates as ShippingRate[]) || []
    },
    getCourierRatesForZone(zone: string = "UK") {
      return (_nuxtApp.$config.public.shippingRates.rates as ShippingRate[]).filter(rate => rate.zone === zone && rate.isCourier === true) || []
    },
    getShippingRatesForZone(zone: string = "UK") {
      return (_nuxtApp.$config.public.shippingRates.rates as ShippingRate[]).filter(rate => rate.zone === zone) || []
    },
    getShippingRatesForWeightAndZone(weight: number, zone: string = "UK") {
      return (_nuxtApp.$config.public.shippingRates.rates as ShippingRate[]).filter(rate => rate.zone === zone && rate.minWeight <= weight && rate.maxWeight >= weight) || []
    }
  })
})
