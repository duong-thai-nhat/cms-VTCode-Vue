<template>
  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded scroll-top " @click= "scrollToTop" href="">
    <i class="fas fa-angle-up"></i>
  </a>
</template>

<script>
export default {
    name: "ScrollTop",
    methods: {
      scrollToTop: function (e) {
            e.preventDefault();
            window.scrollTo(0, 0);
        }
    }
}

</script>

<style>
    .scroll-top{
      scroll-behavior: smooth;
    }
</style>