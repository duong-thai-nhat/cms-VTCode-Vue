<template>
  <page-website/>
</template>

<script>
import PageWebsite from "./components/PageWebsite/PageWebsite.vue"

export default {
  name: 'App',
  components: {
    PageWebsite
  }
}
</script>

<style>
*{
  scroll-behavior: smooth;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  /* margin-top: 60px; */
}
</style>
