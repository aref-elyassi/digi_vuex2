<template>
    <Carousel />
    

    <hr>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h1 class="digistore">DigiStore</h1>
                <p>تلفن پشتیبانی:021123456789| در ۲۴ ساعت شبانه روز پاسخگوی شما هستیم</p>
            </div>
        </div>
        <div class="row mt-5 d-flex align-items-center justify-content-center">
            <div class="col-md">
                <img src="@/assets/svg/cash-on-delivery.svg" alt="">
                <p>امکان پرداخت در محل</p>
            </div>
            <div class="col-md">
                <img src="@/assets/svg/days-return.svg" alt="">
                <p>۷ روز ضمانت بازگشت کالا</p>
            </div>
            <div class="col-md">
                <img src="@/assets/svg/express-delivery.svg" alt="">
                <p>امکان تحویل اکسپرس</p>
            </div>
            <div class="col-md">
                
                <img src="@/assets/svg/original-products.svg" alt="">
                <p>ضمانت اصل بودن کالا</p>
            </div>
            <div class="col-md">
                <img src="@/assets/svg/support.svg" alt="">
                <p>۷ روز هفته| ۲۴ ساعت</p>
            </div>
        </div>
    </div>
    <br>
    <div class="container-fluid applications rounded p-2 mt-5">
        <div class="row d-flex align-items-center justify-content-between">
            <div class="col-md-5 col-sm-12 right-side-app d-flex align-item-center justify-content-center">
                <img src="@/assets/footerlogo2.png" alt="">
                <h5 class="text-gray mt-3">دانلود اپلیکیشن دیجی استور</h5>
            </div>
            <div class="col-md-7 col-sm-12 left-side-app  d-flex align-items-center justify-content-center">
                <div class="applications-app d-flex align-items-center justify-content-between w-100 ">
                    <div class="row d-flex align-items-center justify-content-center">
                        <img class="col-md-3 col-sm-12 img" src="@/assets/svg/coffe-bazzar.svg" alt="">
                        <img class="col-md-3 col-sm-12 img" src="@/assets/svg/google-play.svg" alt="">
                        <img class="col-md-3 col-sm-12 img" src="@/assets/svg/myket.svg" alt="">
                        <img class="col-md-3 col-sm-12 img" src="@/assets/svg/sib-app.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr>
   
    <hr>
    <div class="container-fluid">
        <div class="row description">
            <div class="col-md-6 d-flex align-items-start justify-content-center flex-column">
                <p class="header_description">فروشگاه اینترنتی دیجی‌ استور، بررسی، انتخاب و خرید آنلاین</p>
                <p class="text_description">یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع،
                    باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم
                    داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این
                    طریق مشتریان ثابت خود را داشته باشد.</p>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-5">
                <div class="container">
                    <div class="row logo_kasbokar d-flex align-items-center justify-content-center">
                        <div class="col-md-4 col-sm-6 d-flex align-items-center justify-content-center
                        logo_kasbokar">
                            <img class="img2 " src="@/assets/kasbokar.png" alt="">
                        </div>
                        <div class="col-md-4 col-sm-6 d-flex align-items-center justify-content-center
                        logo_kasbokar">
                            <img class="img2" src="@/assets/logo2.png" alt="">
                        </div>
                        <div class="col-md-4 col-sm-6 d-flex align-items-center justify-content-center logo_kasbokar">
                            <img class="img2" src="@/assets/rezi.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <p class="text-center mt-5 text-secondary">
                برای استفاده از مطالب سایت داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه است.
            </p>
            <hr>
            <Discount/>
        </div>
    </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import Discount from "@/components/Discount.vue";
export default {
    components: { Carousel, Discount }
}
</script>

<style  scoped>
.digistore {
    color: red;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 900;
    font-style: italic;
}

.applications {
    background: #3c4b6d;
    width: 90%;
}

.img {
    width: 10rem;
    height: 5rem;
    object-fit: fill;
}

.right-side-app>img {
    width: 10%;
    height: 10%;
}

.text-gray {
    color: rgb(187, 184, 184);
}

.text_description {
    color: gray;
    font-size: 0.9rem;
}

.logo_kasbokar>img {

    border: 1px solid rgb(209, 208, 208);
    padding: 10px;
    margin: 0 5px;
    border-radius: 5px;
}

.img2 {
    width: 7rem;
    height: 7rem;
    object-fit: fill;
}
</style>