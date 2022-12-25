<template>
    <div class="content-login-form d-flex align-items-center justify-content-center flex-column">
        <h1 class="text-center"> ثبت نام</h1>
        <div class="login-form">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">نام</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="عارف الیاسی" v-model="name">
                <p class="text-danger">{{errorName}}</p>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput2" class="form-label">شماره تلفن</label>
                <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="0123456789"
                v-model="phone">
                <p class="text-danger">{{errorPhone}}</p>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput3" class="form-label">ایمیل</label>
                <input type="email" class="form-control" id="exampleFormControlInput3" placeholder="name@example.com" v-model="email">
                <p class="text-danger">{{errorEmail}}</p>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput4" class="form-label">رمز عبور</label>
                <input type="password" class="form-control" id="exampleFormControlInput4" v-model="password">
                <p class="text-danger">{{errorPass}}</p>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput5" class="form-label">تکرار رمز عبور</label>
                <input type="password" class="form-control" id="exampleFormControlInput5" v-model="r_password">
                <p class="text-danger">{{error_r_pass}}</p>
            </div>
            
           <div class="mb-3">
            <button class="btn btn-dark" @click="signUp">ثبت نام</button>
           </div>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'

export default {
setup(){
    const errorName=ref('')
    const errorEmail=ref('')
    const errorPhone=ref('')
    const errorPass=ref('')
    const error_r_pass=ref('')
    const name=ref('')
    const email=ref('')
    const password=ref('')
    const phone=ref('')
    const r_password=ref('')
    function signUp(){
        if(name.value===""){
            errorName.value="لطفا نام را وارد کنید"
        }
        if(phone.value===''){
            errorPhone.value="لطفا شماره تلفن را وارد کنید"
        }
        if(email.value===""){
            errorEmail.value='لطفا ایمیل را وارد کنید'
        }
        if(password.value===''){
            errorPass.value='لطفا پسورد را وارد کنید'
        }
        if(r_password.value===''){
            error_r_pass.value='لطفا پسورد را دوباره کنید'
        }
    }
    return{signUp,name,password,phone,email,r_password,errorEmail,errorName,errorPass,errorPhone,error_r_pass}
}
}
</script>

<style  scoped>
.router{
    text-decoration: none;
}
.content-login-form{
    width: 100%;
}
 .login-form{
    padding: 2rem;
 border:1px solid gray;
 border-radius: 5px;   
width: 50%;
} 
</style>