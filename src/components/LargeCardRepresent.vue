<template>
    <h1 class="text-center mt-5">همه نمایندگی های ما</h1>
    
    <div v-for="represents in allRepresents" :key="represents.id" class="mt-5">
        <h2 class="text-center">{{represents.title}}</h2>
        <div class="container">
            <div class="row d-flex align-items-center justify-content-center">
        <div v-for="represent_details in represents.represent" :key="represent_details.id" class="col-md-2">



                    <div class="card d-flex align-items-center justify-content-center flex-column">
                        <img :src="require(`@/assets/img/${represent_details.image}`)" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title text-center">{{represent_details.address}}</h5>
                            <div class="d-flex align-items-center justify-content-center flex-column">
                                <router-link :to="{name:'representId',params:{id:represent_details.id}}">نمایش
                                    جز‌‌ئیات نمایندگی</router-link>
                              
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
        const allRepresents = computed(() => store.getters.allRepresentatives)
       
        return { allRepresents }
    }
}
</script>


<style  scoped>
img {
    width: 50%;
    height:10rem;
    object-fit: contain;
}
.card{
    transition: 0.2s ease-in-out all;
}
.card:hover{
    background: rgb(246, 246, 246);
    border: 1px solid rgb(245, 245, 245);
    transform: scale(1.05);
}
</style>