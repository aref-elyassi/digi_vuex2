<template>
    <div class="container">
        <div class="row mt-5">
            <div v-if="interestedItem.length == 0" class="text-center">
                <div>
                    <i class="bi bi-basket-fill" style="font-size: 100px"></i>
                </div>
                <h3 class="text-bold">لیست علاقه مندی ها شما خالی است</h3>
                <router-link class="btn btn-outline-dark mt-3" to="/products">محصولات</router-link>
            </div>
            <div v-else class="container">
                <div class="row">
                    <div class="table table-responsive">

                        <table class="table table-hover border bg-white align-middle table-striped">
                            <thead>
                                <tr>
                                    <th>محصول</th>
                                   
                                    <th>قیمت</th>                                   
                                    <th>حذف</th>
                                    <th>اضافه کردن به سبد خرید</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in interestedItem" :key="item.id">
                                    <td>
                                        <div class="row">
                                            <div class="col-md-2">
                                                <img :src="require(`@/assets/img/${item.image}`)" alt="..."
                                                    class="img-fluid" />
                                            </div>
                                            <div class="col-md-4 nameProduct">
                                                <h5>{{ item.name }}</h5>

                                            </div>
                                        </div>
                                    </td>
                                    <td >{{ item.price }} تومان</td>
                                   
                                   
                                    <td >
                                      
                                        <i class="bi bi-file-excel removeitem"
                                         @click="removeFromInterested(item.id)"></i>
                                    </td>
                                    <td >
                                       
                                        <i @click="addToCart(item)" class="bi bi-plus-square addtocart"></i>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>
                                        <button @click="clearInterested" class="btn btn-dark">
                                            حذف کل  علاقه مندی ها
                                        </button>
                                    </td>
                                    <td colspan="2" class="hidden-xs"></td>
                                   

                                </tr>
                            </tfoot>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
    setup() {
        const store = useStore()
        const interestedItem = computed(() => store.getters.allInterested)
        function removeFromInterested(id) {
            store.dispatch("removeFromInterested", id);
        }

        function clearInterested() {
            store.dispatch("clearInterest");
            console.log('aref');
        }
        function addToCart(item) {
            store.dispatch('addToCart', item)
        }
        return{interestedItem,removeFromInterested,clearInterested,addToCart}

    }
}
</script>

<style  scoped>

.addtocart{
font-size: 2rem;
color: rgb(0, 116, 56);
}
.removeitem{
    color: red;
    font-size: 2rem;
}
.removeitem:hover{
    cursor: pointer;
}
.addtocart:hover{
    color: rgb(14, 14, 14);
    cursor: pointer;
 
}
</style>