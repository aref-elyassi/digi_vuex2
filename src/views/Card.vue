<template>
    <div class="container">
      
        <div class="row mt-5">
            <div v-if="cartItems.length == 0" class="text-center">
                <div>
                    <i class="bi bi-basket-fill" style="font-size: 100px"></i>
                </div>
                <h3 class="text-bold">سبد خرید خالی است</h3>
                <router-link class="btn btn-outline-dark mt-3" to="/products">محصولات</router-link>
            </div>
            <div v-else class="container">
                <div class="row">
                    <div class="col-12">

                        <table class="table table-hover border bg-white">
                            <thead>
                                <tr>
                                    <th>محصول</th>
                                    <th>قیمت</th>
                                    <th style="width: 10%">تعداد</th>
                                    <th>مجموع</th>
                                    <th>حذف</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in cartItems" :key="item.id">
                                    <td class="align-middle">
                                        <div class="row">
                                            <div class="col-lg-2">
                                                <img :src="require(`@/assets/img/${item.image}`)" alt="..."
                                                    class="img-fluid" />
                                            </div>
                                            <div class="col-lg-10 nameProduct">
                                                <h5>{{ item.name }}</h5>

                                            </div>
                                        </div>
                                    </td>
                                    <td class="align-middle">{{ item.price }}</td>
                                    <td class="align-middle">
                                        <button @click="increament(item.id)" class="btn btn-sm btn-dark me-2">
                                            +
                                        </button>
                                        <span>{{ item.quantity }}</span>
                                        <button @click="decreament(item.id)" class="btn btn-sm btn-dark ms-2">
                                            -
                                        </button>
                                    </td>
                                    <td class="align-middle">{{ item.price * item.quantity }}</td>
                                    <td class="align-middle" style="width: 15%">
                                        <button @click="removeFromCart(item.id)" class="btn btn-danger btn-sm">
                                            حذف
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>
                                        <button @click="clearCart" class="btn btn-dark">
                                            حذف کل سبد خرید
                                        </button>
                                    </td>
                                    <td colspan="2" class="hidden-xs"></td>
                                    <td class="hidden-xs text-center" style="width: 15%">
                                        <strong>مجموع : {{ cartTotalAmount }}</strong>
                                    </td>

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
    name: "CardComponent",
    setup() {

        const store = useStore();
        const cartItems = computed(() => store.getters.allItems);
        const cartTotalAmount = computed(() => store.getters.totalAmount);
        function increament(id) {
            store.dispatch("increament", id);
        }

        function decreament(id) {
            store.dispatch("decreament", id);
        }
        function removeFromCart(id) {
            store.dispatch("remove", id);
        }
        function clearCart() {
            store.dispatch("clear");
        }
        function showModal() {
            this.$refs['my-modal'].show()
        }
        function hideModal() {
            this.$refs['my-modal'].hide()
        }
        function toggleModal() {
            // We pass the ID of the button that we want to return focus to
            // when the modal has hidden
            this.$refs['my-modal'].toggle('#toggle-btn')
        }
        return {
            cartItems,
            cartTotalAmount,
            increament,
            decreament,
            removeFromCart,
            clearCart,
            showModal,
            hideModal, toggleModal


        };
    },
};
</script>
  
<style>
.nameProduct {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
  