<template>
  <div class="grid justify-center py-10 px-2">
    <h2 class="text-center md:text-4xl text-gray-400 text-md">
      PILIHAN DOMAIN DENGAN HARGA TERBAIK
    </h2>
    <h3 class="text-center md:text-lg text-sm">
      Bangun website anda dengan mengunakan domain pilihan yang terjangkau
    </h3>
    <!-- Promo Section -->
    <div class="flex flex-col md:flex-row md:justify-evenly justify-self-center py-3">
      <SpPromotionCard
        v-for="promotion in promotions"
        :key="promotion.id"
        :promotion="promotion"
      />
    </div>
    <!-- Benefit Section-->
    <div class="grid md:grid-cols-4 grid-cols-2 md:justify-evenly items-center border-y border-gray-500 text-center py-3">
      <SpBenefitCard
        v-for="benefit in benefits"
        :key="benefit.id"
        :benefit="benefit"
        class="col-span-1"
      />
    </div>
    <!-- Testimoni Section -->
    <h2 class="text-center text-4xl pt-7 text-gray-400">
      TESTIMONI
    </h2>
    <div class="grid md:grid-cols-2 grid-cols-1 py-3 px-5 justify-self-center gap-3">
      <SpTestimoniCard
        v-for="testimony in testimonies"
        :key="testimony.id"
        :testimony="testimony"
        class="col-span-1 max-w-xs"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PwSuperiority',
  data () {
    return {
      promotions: [
        {
          id: 0,
          domain: 'Domain .com',
          img: 'com.png'
        },
        {
          id: 1,
          domain: 'Domain .net',
          img: 'net.png'
        },
        {
          id: 2,
          domain: 'Domain .org',
          img: 'org.png'
        }
      ],
      benefits: [
        {
          id: 0,
          title: 'Keunggulan keamanan domain',
          alt: 'img keamanan domain',
          label: 'Aman',
          img: 'key.png'
        },
        {
          id: 1,
          title: 'Keunggulan customer service',
          alt: 'img customer serv',
          label: 'Support Tanggap',
          img: 'customer service.png'
        },
        {
          id: 2,
          title: 'Keunggulan mengenai proses aktivasi',
          alt: 'img aktivasi',
          label: 'Aktivasi Instan',
          img: 'lcd.png'
        },
        {
          id: 3,
          title: 'Keunggulan manajamen DNS',
          alt: 'img dns',
          label: 'Manajemen DNS',
          img: 'world.png'
        }
      ],
      testimonies: [
        {
          id: 0,
          name: 'Mark Zuckerberg',
          img: 'Mark Zuckerberg.png'
        },
        {
          id: 1,
          name: 'Bill Gates',
          img: 'Bill Gates.png'
        },
        {
          id: 2,
          name: 'Jack Ma',
          img: 'JackMa.png'
        },
        {
          id: 3,
          name: 'Jeff Bezos',
          img: 'Jeff Bezos.png'
        }
      ]
    }
  }
}
</script>
