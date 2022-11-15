<template>
  <div class="border border-blue-400 h-40 p-2">
    <div class="flex items-center gap-3 pb-2">
      <img
        :src="require(`~/assets/images/${testimony.img}`)"
        :title="`Testimoni dari ${testimony.name}`"
        :alt="`img ${testimony.name}`"
        loading="lazy"
        width="40"
        height="40"
        class="rounded-full w-10 h-10"
      >
      <p>{{ testimony.name }}</p>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro perferendis possimus, officiis atque eius non!</p>
  </div>
</template>

<script>
export default {
  name: 'SpTestimoniCard',
  props: {
    testimony: {
      type: Object,
      required: true
    }
  }
}
</script>
