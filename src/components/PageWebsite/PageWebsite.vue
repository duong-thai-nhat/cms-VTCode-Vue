<template>
    <!-- Page Wrapper -->
    <page-wrapper/>

  <!-- End of Page Wrapper -->
  <scroll-top/>

  <!-- Logout Modal-->
  <modal-logout/>
</template>

<script>
import PageWrapper from "./PageWrapper/PageWrapper.vue"
import ScrollTop from "./ScrollTopPage.vue"
import ModalLogout from "./ModalLogout.vue"

export default {
    components: {
        ModalLogout,
        ScrollTop,
        PageWrapper
    }
}
</script>

<style>

</style>