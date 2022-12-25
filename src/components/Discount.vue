<template>


    <h1 class="text-center mt-5">تخفیفات ویژه</h1>
    <div class="container mt-5">
        <div class="row d-flex align-items-center justify-content-center">
            <div v-for="discount in allDiscount" :key="discount.id" class="col-md-2 mt-2" id="slider">
                <div class="card d-flex align-items-center justify-content-center flex-column" id="thumbnail">
                    <img :src="require(`@/assets/img/${discount.image}`)" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-title text-center">{{discount.name}}</p>
                        <div class="d-flex align-items-center justify-content-center flex-column">
                            <br>
                            <br>
                            <del class="discount">{{discount.price}} تومان</del>
                            <p>{{discount.priceDiscount}} تومان</p>
                            <span class="badge rounded-pill text-bg-danger">{{discount.discount}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
    setup() {
     
        const store = useStore()
        const allDiscount = computed(() => store.getters.getAllDiscount)
       
      
        return { allDiscount }
    }
}
</script>

<style scoped>
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

.discount {
    color: red
}
</style>