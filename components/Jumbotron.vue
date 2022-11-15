<template>
  <div class="bg-img-jumbotron bg-no-repeat bg-cover h-screen grid content-center justify-center px-2 rounded-sm">
    <div class="bg-white/60 p-5 md:w-promo-jumbotron grid gap-2">
      <h1 class="md:text-4xl text-white text-center text-lg">
        <strong>DomainKu Selamat Datang</strong>
      </h1>
      <form action="#" class="flex justify-between content-center gap-1">
        <input
          type="text"
          placeholder="Ketik nama domain yang anda inginkan"
          class="p-2 w-4/5 focus:outline-none"
        >
        <button class="w-1/5 p-2 bg-blue-500 text-white hover:bg-blue-400">
          Cari
        </button>
      </form>
      <div class="flex justify-between items-center border-b-2 border-gray-300">
        <img
          src="~/assets/images/com.png"
          title="Promo domain com"
          alt="img com domain"
          width="64px"
          height="28px"
          loading="eager"
          class="md:w-32 md:h-14 w-16 h-7"
        >
        <p class="md:text-lg text-base">
          Rp XXXXXX/Tahun
        </p>
      </div>
      <div class="flex justify-between items-center border-b-2 border-gray-300">
        <img
          src="~/assets/images/net.png"
          title="Promo domain net"
          alt="img net domain"
          width="64px"
          height="28px"
          loading="eager"
          class="md:w-32 md:h-14 w-16 h-7"
        >
        <p class="md:text-lg text-base">
          Rp XXXXXX/Tahun
        </p>
      </div>
      <div class="flex justify-between items-center border-b-2 border-gray-300">
        <img
          src="~/assets/images/org.png"
          title="Promo domain org"
          alt="img org domain"
          width="64px"
          height="28px"
          loading="eager"
          class="md:w-32 md:h-14 w-16 h-7"
        >
        <p class="md:text-lg text-base">
          Rp XXXXXX/Tahun
        </p>
      </div>
      <button class="w-full p-2 bg-blue-500 font-bold text-white hover:bg-blue-400">
        Lihat Promo Lainnya
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PwJumbotron'
}
</script>
