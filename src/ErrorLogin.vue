<template>
    <div id="error">
        <img class="error__bg" src="assets/img/bg_login.webp" alt="">
        <div class="error__wrap__img">
            <img class="error__404" src="assets/img/istockphoto-1339693264-170667a.jpg" alt="">
        </div>
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

    .error__bg{
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    .error__wrap__img{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
</style>