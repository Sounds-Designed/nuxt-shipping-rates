import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import { defu } from 'defu'
import type { ShippingRate } from './module'

export type * from './runtime/types'

// Module options TypeScript interface definition
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface NuxtShippingRatesOptions {
  rates?: ShippingRate[]
}

export default defineNuxtModule<NuxtShippingRatesOptions>({
  meta: {
    name: '@sounds-designed/nuxt-shipping-rates',
    configKey: 'shippingRates',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    rates: []
  },
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    _nuxt.options.shippingRates = _options
    _nuxt.options.runtimeConfig.public.shippingRates = defu(_nuxt.options.runtimeConfig.public.shippingRates, _options)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
  },
})
