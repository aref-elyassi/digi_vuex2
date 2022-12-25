<template>
    <div class="content-login-form d-flex align-items-center justify-content-center flex-column">
        <h1 class="text-center"> ورود</h1>
        <div class="login-form">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">شماره تلفن</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="0123456789" v-model="phone">
                <p class="text-danger">{{errorPhone}}</p>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput2" class="form-label"> رمز عبور</label>
                <input type="password" class="form-control" id="exampleFormControlInput2" v-model="password">
                <p class="text-danger">{{errorPass}}</p>
            </div>
            <div class="mb-3">
                <button class="btn btn-dark" @click="signIn">ورود</button>
            </div>
            <div class="mt-3">
                <router-link class="router" to="/signup">
                    <p>اگر ثبت نام نکرده اید کلیک کنید</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
setup(){
    const phone=ref('')
    const password=ref('')
    const errorPass=ref('')
    const errorPhone=ref('')
    function signIn(){
        if(phone.value===""){
            errorPhone.value='لطفا شماره تلفن را وارد کنید'
         }
         if(password.value===""){
            errorPass.value='لطفا رمز عبور را وارد کنید'
         }
     }
     return{signIn,phone,errorPass,password,errorPhone}
}
}
</script>

<style  scoped>
.router {
    text-decoration: none;
}

.content-login-form {
    width: 100%;
}

.login-form {
    padding: 2rem;
    border: 1px solid gray;
    border-radius: 5px;
    width: 50%;
}
</style>