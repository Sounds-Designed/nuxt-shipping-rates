import { defineNuxtConfig } from "nuxt/config";
import ShippingRates from "./shipping-rates.json"
import type { ShippingRate } from "../src/module";

export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  shippingRates: {
    rates: ShippingRates as ShippingRate[]
  }
})
