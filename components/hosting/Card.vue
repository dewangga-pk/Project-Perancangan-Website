<template>
  <div class="w-56 h-full bg-gray-100 flex flex-col justify-between">
    <div class="text-right space-y-2 px-1">
      <h4 class="text-lg text-center pt-2">
        <strong>{{ plan.pname }}</strong>
      </h4>
      <p class="bg-blue-400 text-white text-lg">
        Rp {{ plan.price }},-/Bulan
      </p>
      <p>
        {{ plan.space }} Space
      </p>
      <p>
        <strong>{{ plan.bandwidth }}</strong> Bandwidth
      </p>
      <p>
        <template v-if="(plan.website)==='Unlimited'">
          <strong>Unlimited</strong> Website
        </template>
        <template v-else>
          {{ plan.website }} Website
        </template>
      </p>
      <p>
        <strong>{{ plan.email }}</strong> Email
      </p>
      <template v-if="plan.domain">
        <p>
          Gratis Domain
        </p>
      </template>
      <br v-else>
      <template v-if="plan.ssh">
        <p>
          Akses SSH
        </p>
      </template>
      <br v-else>
    </div>
    <button class="w-full p-2 bg-blue-500 text-white hover:bg-white hover:text-black hover:border hover:border-blue-500">
      Pesan
    </button>
  </div>
</template>

<script>
export default {
  name: 'HostingCard',
  props: {
    plan: {
      type: Object,
      required: true
    }
  }
}
</script>
