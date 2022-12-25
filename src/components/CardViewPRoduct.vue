<template>
    <div class="container mt-5">
        <div class="row">
            <div class="content d-flex row">
                <div class="content_image col-md-5 col-sm-12">
                    <img :src="require(`@/assets/img/${product.image}`)" alt="">
                </div>
                <div class="col-md-7 col-sm-12">
                    <h3 class="text-center text-secondary">{{product.name}}</h3>
                    <p class="text-secondary text-justify">{{product.description}}</p>
                    <h3 class="text-secondary text-center">قیمت: {{product.price}} تومان</h3>
                    <h3 class="text-secondary text-center">ساخت: {{product.country}}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore()
        function addToCart(product) {
            store.dispatch('addToCart', product)
        }
        return { addToCart }
    },
    props: ['product']
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