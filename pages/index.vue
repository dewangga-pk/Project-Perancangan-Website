<template>
  <div>
    <Jumbotron />
    <Superiority />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
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
