<template>
    <h1 class="text-center mt-5">همه محصولات ما</h1>
    <div v-for="product in products" :key="product.id" class="mt-5">
        <h2 class="text-center">{{product.title}}</h2>
        <div class="container">
            <div class="row d-flex align-items-center justify-content-center">
                <div v-for="product_details in product.product" :key="product_details.id" class="col-md-2">
                    <div class="card d-flex align-items-center justify-content-center flex-column">
                        <img :src="require(`@/assets/img/${product_details.image}`)" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-title text-center">{{product_details.name}}</p>
                            <div class="d-flex align-items-center justify-content-center flex-column">
                                <br>
                                <br>
                                <p>قیمت:{{product_details.price}} تومان</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                
                                
                                <i class="bi bi-bookmark-plus-fill addtocart" @click="addToCart(product_details)"></i>
                              
                                <router-link class="router" :to="{name:'productId',params:{id:product_details.id}}">
                                    <i class="bi bi-list"></i>
                                   </router-link>
                                <i class="bi bi-chat-left-heart-fill addtocart" @click="addToInterested(product_details)"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue'
export default {
    setup() {
        const store = useStore()
        const products = computed(() => store.getters.allProducts)
        function addToCart(product_details) {
            store.dispatch('addToCart', product_details)
        }
        function addToInterested(product_details){
            store.dispatch('addToInterested',product_details)
        }
        return { products,addToCart,addToInterested }
    }
}
</script>


<style  scoped>
.addtocart{
font-size: 1.5rem;

color: red;
}
.addtocart:hover{
    color: rgb(14, 14, 14);
    cursor: pointer;
}

.router {
    color: #000;
    text-decoration: none;
}

img {
    width: 70%;
    height: 10rem;
    object-fit: contain;
}
.router:hover{
    color: red;
}
.router>i{
    font-size: 1.5rem;
    color: red;
   
}
.router>i:hover{
    color: #000;
}
.card {
    transition: 0.4s ease-in-out all;
}

.card:hover {
    background: rgb(246, 246, 246);
    border: 1px solid rgb(245, 245, 245);
    transform: scale(1.05);
}
</style>