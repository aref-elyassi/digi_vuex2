<template>
    <div class="container-fluid footer mt-5">
        <div class="row">
            <div class="col-md-4">
                <h1 class="digistore">DigiStore</h1>
                <p>بهترین ها را از ما خرید کنید</p>
                <p>در صورت ایراد در جنس میتوانید آنرا تعویض کنید</p>
                <p>ضمانت بازگشت وجه در صورت پشیمانی تا ۲۴ ساعت</p>
            </div>
            <div class="col-md-4 d-flex align-items-center justify-content-center flex-column links">
                <h5>لینک های مفید</h5>
                <router-link to="/" class="router">خانه</router-link>
                <router-link to="/login" class="router">ورود | ثبت نام</router-link>
                <router-link to="/products" class="router">محصولات</router-link>
                <router-link to="/represent" class="router">نمایندگی ها</router-link>
            </div>
            <div class="col-md-4 d-flex align-items-center justify-content-center flex-column">

                <h5>همراه ما باشید</h5>
                <div class="row d-flex align-items-center justify-content-between social_media mt-2">

                    <i class="bi bi-telegram col-md-2 col-sm-12"></i>
                    <i class="bi bi-whatsapp col-md-2 col-sm-12"></i>
                    <i class="bi bi-instagram col-md-2 col-sm-12"></i>
                    <i class="bi bi-linkedin col-md-2 col-sm-12"></i>
                    <i class="bi bi-twitter col-md-2 col-sm-12"></i>
                </div>
                <div class="row d-flex align-items-center justify-content-center mt-3">
                    
                    <div class="d-flex">
                        <div class="mb-3 col-md-8">
                            <input type="email" class="form-control text-center" id="exampleFormControlInput1"
                                placeholder=" ثبت ایمیل ">
                        </div>
                        <div class="col-md-1"></div>
                        <button class="btn btn-secondary col-md-3">ثبت </button>

                    </div>
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.btn{
    height: 2.5rem;
}
.footer {
    background: #EDEDED;
}

.digistore {
    color: red;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 900;
    font-style: italic;

}

.router {
    text-decoration: none;
    color: #000;
    font-size: 1.1rem;
    margin-top: 5px;
}

.router:hover {
    color: red;
}

.links>h5 {
    border-bottom: 2px solid #000;
}

.social_media {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.social_media>i {
    color: #8b8b8b;
    font-size: 2rem;
    transition: all 0.6s ease-in-out;
}

.social_media>i:hover {
    color: #ff0033;

}
</style>