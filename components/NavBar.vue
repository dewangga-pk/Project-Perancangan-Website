<template>
  <nav class="bg-white md:flex md:justify-between py-5 px-4 grid grid-cols-2">
    <img
      src="~/assets/images/logodomain.png"
      title="Logo Website DomainKu"
      alt="logo"
      width="155"
      height="49"
      loading="eager"
      class="w-36 h-12 col-span-1 justify-self-start"
    >
    <div class="md:flex md:justify-around md:gap-3 md:items-center hidden">
      <NuxtLink to="/" class="p-3 border border-blue-500 rounded hover:bg-blue-500 hover:text-white">
        Domain
      </NuxtLink>
      <NuxtLink to="/hosting" class="p-3 border border-blue-500 rounded hover:bg-blue-500 hover:text-white">
        Hosting
      </NUxtLink>
      <hr class="w-px h-8 bg-blue-500 border border-blue-500 md:block hidden">
      <button class="p-3 border border-blue-500 rounded bg-blue-500 text-white hover:bg-white hover:text-black">
        Masuk
      </button>
      <button class="p-3 border border-blue-500 rounded bg-blue-500 text-white hover:bg-white hover:text-black">
        Daftar
      </button>
    </div>
    <button
      class="md:hidden col-span-1 justify-self-end"
      @click="isMobile = !isMobile"
    >
      <IconsThreeLine class="w-9 h-9 fill-blue-500" />
    </button>
    <ul
      v-if="isMobile"
      class="col-span-2 text-blue-400"
    >
      <li class="w-full border-b pt-2 text-right">
        Domain
      </li>
      <li class="w-full border-b pt-2 text-right">
        Hosting
      </li>
      <li class="w-full border-b pt-2 text-right">
        Masuk
      </li>
      <li class="w-full border-b pt-2 text-right">
        Daftar
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      isMobile: false
    }
  }
}
</script>
