<template>
  <div>
    Nuxt Shipping
    <pre>
      <code>
{{ allShippingRates }}
      </code>
    </pre>
    <pre>
      <code>
{{ courierRatesForUk }}
      </code>
    </pre>
    <pre>
      <code>
{{ shippingRatesForUk }}
      </code>
    </pre>
    <pre>
      <code>
{{ shippingRatesForUkPackageExample }}
      </code>
    </pre>
  </div>
</template>

<script setup>
const { $shippingRates } = useNuxtApp();

const allShippingRates = computed(() => {
  try {
    return $shippingRates.getAllShippingRates();
  } catch {
    return []
  }
})
const courierRatesForUk = computed(() => {
  try {
    return $shippingRates.getCourierRatesForZone("UK");
  } catch {
    return []
  }
})
const shippingRatesForUk = computed(() => {
  try {
    return $shippingRates.getShippingRatesForZone("UK");
  } catch {
    return []
  }
})
const shippingRatesForUkPackageExample = computed(() => {
  try {
    return $shippingRates.getShippingRatesForWeightAndZone(.5, "UK");
  } catch {
    return []
  }
})
</script>
