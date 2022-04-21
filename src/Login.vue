<template>
    <div class="form__login__wrap">
        <div id="form__login">
            <form action="submit">
                <img src="../assets/Logo_VTCode.png" alt="" class="form__login__logo">
                <h1 class="form__login__heading">Login</h1>
                <div class="form__login__item">
                    <label for="" class="form__login__label_input">Username</label>
                    <input type="text" v-model="username" class="form__login__input">
                    <!-- {{ name }} -->
                </div>
                <div class="form__login__item">
                    <label for="" class="form__login__label_input">Passwork</label>
                    <input type="text" v-model="password" class="form__login__input">
                </div>
                <button @click="login" type="submit" class="form__login__button">
                    Submit
                </button>
            </form>
        </div>
    </div>
</template>

<script>
// import axios from 'axios'
// import routerAuthCheck from './Router/router.js'

export default {
    name: 'LoGin',
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        login(e){
            e.preventDefault();

            // await axios.post(
            //     `https://tengu-nodejs.herokuapp.com/api/auth/login/`,{
            // method:'POST',
            // headers: {
            //     Accept: "application/json, text/plain, */*",
            //     "Content-Type": "application/json",
            // },
            // body:JSON.stringify({
            //         email: this.username,
            //         password: this.password,
            //     }),
    
            // })
            // .then((res) => {
            //     console.log(res.data);
            //     if(res.status == 404){
            //         this.$router.push('/error');
            //     }
            //     else if(res.status == 200){
            //         this.$router.push('/');
            //     }

            //     localStorage.setItem("accessToken", res.accessToken)
            // })
            // .catch(() =>{
            //     this.$router.push('/error');
            // })

            // fetch('https://tengu-nodejs.herokuapp.com/api/auth/login/',{
            // method:'POST',
            // body:JSON.stringify({
            //         email: "tengu@gmail.com",
            //         password: "123456"
            //     })
            // })
            // .then(res=>res.json())
            // .then(json=>console.log(json))
         
            fetch('https://tengu-nodejs.herokuapp.com/api/auth/login/',{
            method:'POST',
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                    email: this.username,
                    password: this.password,
                }),
    
            }).then((response) => response.json())
            .then((data) => {
                if(data.status_code === 404){
                    this.$router.push('/error');
                    // this.$state.dispatch('editUserLogin', data)
                }
                else{
                    localStorage.setItem("accessToken", data.accessToken)
                    this.$router.push('/');
                    this.$store.dispatch('editUserLogin', data);
                    console.log(this.$store.getters.Userlogin.userIsAuthorized)
                    // routerAuthCheck = this.$store.getters.Userlogin.userIsAuthorized;
                }

            })
            .catch(()=>{
                this.$router.push('/error');
            })
        }
    },
}


</script>

<style scoped>
    .form__login__wrap{
        position: fixed;
        z-index: 999999;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #form__login{
        background-color: #fff;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 50px;
        border-radius: 10px;
    }

    .form__login__logo{
        max-height: 50px;
        margin: 20px;
    }

    .form__login__heading{
        color: #137db7;
    }

    .form__login__item{
        display: flex;
        flex-direction: column;
        /* justify-content: flex-start; */
        align-items: flex-start;
    }

    .form__login__label_input{
        margin: 30px 0 6px;
        font-weight: 600;
    }

    .form__login__input{
        padding: 6px;
        outline: none;
        min-width: 300px;
        height: 40px;
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.5);
    }

    .form__login__button{
        margin-top: 40px;
        padding: 16px;
        width: 100%;
        background-color: #333;
        outline: none;
        border: none;
        border-radius: 6px;
        color: #fff;
        transition: transform 0.15s;
        cursor: pointer;
    }

    .form__login__button:hover{
        background-color: rgb(109, 108, 108);
        transform: translateY(-4px);
    }

</style>