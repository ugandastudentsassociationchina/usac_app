<template>
  <section>
    <section class="container">
      <h1>Welcome to USAC</h1>
    </section>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue';
  import Footer from '~/components/Footer.vue';

  export default {
    components: {
      Logo,
      Footer
    }
  }
</script>

<style lang="scss">
  body {
    background-color: $light-gray;
  }
  .container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>