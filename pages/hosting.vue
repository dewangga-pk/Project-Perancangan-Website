<template>
  <div class="w-full">
    <HostingJumbotron />
    <div class="min-h-screen h-auto">
      <div class="h-2/4 flex justify-center md:gap-x-4 py-3 md:flex-row flex-col items-center gap-y-4">
        <HostingCard
          v-for="plan in plans"
          :key="plan.id"
          :plan="plan"
        />
      </div>
      <!-- Fitur -->
      <div class="border-y py-3 text-gray-500 lg:w-2/4 md:w-3/4 mx-auto">
        <h4 class="text-2xl text-center">
          Fitur
        </h4>
        <div class="flex flex-wrap justify-center">
          <HostingFeatureCard
            v-for="feature in features"
            :key="feature.id"
            :feature="feature"
          />
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
  name: 'HostingPage',
  data () {
    return {
      plans: [
        {
          id: 0,
          pname: 'Small',
          price: 16000,
          space: '750 MB',
          bandwidth: 'Unlimited',
          website: '5',
          email: 'Unlimited',
          domain: false,
          ssh: false
        },
        {
          id: 1,
          pname: 'Medium',
          price: 36000,
          space: '2 GB',
          bandwidth: 'Unlimited',
          website: 'Unlimited',
          email: 'Unlimited',
          domain: true,
          ssh: true
        },
        {
          id: 2,
          pname: 'Large',
          price: 60000,
          space: '5 GB',
          bandwidth: 'Unlimited',
          website: 'Unlimited',
          email: 'Unlimited',
          domain: true,
          ssh: true
        }
      ],
      features: [
        {
          id: 0,
          label: 'Enterprise-Grade SSD',
          desc: 'Dapatkan performa website secepat kilat dengan Enterprise-grade SSD yang ada pada paket hosting murah',
          icon: 'ssd.png'
        },
        {
          id: 1,
          label: 'Pilihan Lokasi Server',
          desc: 'Bebas memilih 5 lokasi server diberbagai data center yang tersebar di Indonesia,Singapura,Amerika,Inggris,dan Jepang',
          icon: 'location.png'
        },
        {
          id: 2,
          label: 'MailChannels Spam Filter',
          desc: 'Segala bentuk spam email sudah kami antisipasi dengan MailChannels Spam Filter guna memastikan email anda sampai ke tujuan',
          icon: 'mail.png'
        },
        {
          id: 3,
          label: 'Anti-virus & Anti-malware',
          desc: 'Semua paket hosting berkualitas telah dilengkapi dengan anti-virus dan anti-malware untuk pertahanan website',
          icon: 'mafia.png'
        }
      ]
    }
  }
}
</script>
