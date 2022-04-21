<template>
    <div id="error">
      <img src="assets/img/istockphoto-1339693264-170667a.jpg" alt="">
    </div>
</template>

<script>

export default {
    name: 'ErrorLogin',
}
</script>

<style scoped>
    #error{
        position: fixed;
        display: flex;
        justify-content: center;
        align-content: center;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 999999;
        background-color: #fff;
    }
</style>