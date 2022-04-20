<template>
    <div class="modal fade" :id="idModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
        <div class="modal-content">
            <!-- Header -->
            <div class="modal-header">
                <slot name="header"></slot>
            </div>
            <!-- Content -->

            <div class="modal-body row">
                <slot name="body"></slot>
            </div>
            <!-- Footer -->
            <div class="modal-footer">
                <slot name="footer"></slot>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MoDal",
    props: ["idModal"]
}
</script>

<style>
    
</style>