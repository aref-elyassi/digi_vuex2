<template>
    <div>

    <CardViewPRoduct :product="product"/>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

import CardViewPRoduct from '@/components/CardViewPRoduct.vue';
    export default {
    components: { CardViewPRoduct },
    setup(){
        const store=useStore()
        const router=useRoute()
        const product=computed(()=>store.getters.getProductById(router.params.id))
        return{product}
    }
}
</script>

<style  scoped>

</style>