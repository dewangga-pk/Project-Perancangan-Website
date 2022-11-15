<template>
  <div class="w-full">
    <HostingJumbotron />
    <div class="min-h-screen h-auto">
      <div class="h-2/4 flex justify-center md:gap-x-4 py-3 md:flex-row flex-col items-center gap-y-4">
        <HostingCard />
        <HostingCard />
        <HostingCard />
      </div>
      <!-- Fitur -->
      <div class="border-y py-3 text-gray-500 lg:w-2/4 md:w-3/4 mx-auto">
        <h4 class="text-2xl text-center">
          Fitur
        </h4>
        <div class="flex flex-wrap justify-center">
          <HostingFeatureCard />
          <HostingFeatureCard />
          <HostingFeatureCard />
          <HostingFeatureCard />
        </div>
      </div>
      <div class="py-3 text-gray-500 md:w-4/5 lg:2/5 mx-auto">
        <h4 class="text-2xl text-center">
          Pembayaran
        </h4>
        <div class="flex flex-wrap justify-center items-center">
          <img
            src="~/assets/images/indomaret.png"
            alt="payment indomaret"
            title="Pembayaran Melalui Indomaret"
            width="250"
            height="180"
            loading="lazy"
            class="max-h-44 w-60"
          >
          <img
            src="~/assets/images/alfamart.png"
            alt="payment alfamart"
            title="Pembayaran Melalui Alfamart"
            width="250"
            height="80"
            loading="lazy"
            class="max-h-20 w-60"
          >
          <img
            src="~/assets/images/paypal.png"
            alt="payment paypal"
            title="Pembayaran Melalui Paypal"
            width="250"
            height="80"
            loading="lazy"
            class="max-h-20 w-60"
          >
          <img
            src="~/assets/images/visa-mastercard.png"
            alt="payment visa mastecard"
            title="Pembayaran Menggunakan~/assets/images/Debit"
            width="250"
            height="80"
            loading="lazy"
            class="max-h-20 w-60"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HostingPage'
}
</script>
