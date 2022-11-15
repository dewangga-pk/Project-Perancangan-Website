<template>
  <div class="w-40 h-48 grid md:gap-2 text-center justify-items-center">
    <img
      :src="require(`~/assets/images/${promotion.img}`)"
      :title="`Promo domain ${promotion.domain}`"
      :alt="`img ${promotion.domain} domain`"
      width="128px"
      height="55px"
      loading="lazy"
      class="md:w-32 md:h-14 w-16 h-7"
    >
    <p class="text-sm">
      Ekstensi domain terpopuler untuk segala kebutuhan anda
    </p>
    <p>Rp XXXXXX/Tahun</p>
  </div>
</template>

<script>
export default {
  name: 'SpPromotionCard',
  props: {
    promotion: {
      type: Object,
      required: true
    }
  }
}
</script>
