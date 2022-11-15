<template>
  <div class="flex flex-col items-center">
    <img
      :src="require(`~/assets/images/${benefit.img}`)"
      :title="`${benefit.title}`"
      :alt="`${benefit.alt}`"
      width="128px"
      height="128px"
      loading="lazy"
      class="md:w-32 md:h-32 w-16 h-16"
    >
    <p>{{ benefit.label }}</p>
  </div>
</template>

<script>
export default {
  name: 'SpBenefitCard',
  props: {
    benefit: {
      type: Object,
      required: true
    }
  }
}
</script>
