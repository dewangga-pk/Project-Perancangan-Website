<template>
  <div class="w-64 min-h-min p-3">
    <div class="flex items-center">
      <img
        :src="require(`~/assets/images/${feature.icon}`)"
        :alt="`icon ${feature.icon.replace('.png','')}`"
        :title="`${feature.label}`"
        width="50"
        height="50"
        loading="lazy"
        class="h-12 w-12"
      >
      <p class="text-xl">
        {{ feature.label }}
      </p>
    </div>
    <p>
      {{ feature.desc }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'HostingFeatureCard',
  props: {
    feature: {
      type: Object,
      required: true
    }
  }
}
</script>
