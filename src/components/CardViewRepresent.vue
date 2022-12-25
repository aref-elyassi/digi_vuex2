<template>
    <div class="container mt-5">
        <div class="row">
            <div class="content d-flex row">
                <div class="content_image col-md-5 col-sm-12">
                    <img :src="require(`@/assets/img/${represent.image}`)" alt="">
                </div>
                <div class="col-md-7 col-sm-12">
                    <h3 class="text-center text-secondary">{{represent.name}}</h3>
                    <p class="text-secondary text-justify">{{represent.description}}</p>
                    <h1 class="text-secondary text-justify">آدرس: {{represent.address}} </h1>
                    <h1 class="text-secondary text-justify">تلفن: {{represent.phone}}</h1>


                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['represent']
}
</script>
<style  scoped>
img {

    height: 20rem;
    object-fit: contain;

}

.content {
    border: 1px solid rgb(186, 186, 186);
    border-radius: 5px;
    padding: 20px;
}

.content_image {
    display: flex;
    flex-direction: column;
}
</style>