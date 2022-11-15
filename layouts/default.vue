<template>
  <div>
    <NavBar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  head () {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'http://localhost:3000/'
        }
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Revamp Project Perancangan Website'
        }
      ]
    }
  }
}
</script>
