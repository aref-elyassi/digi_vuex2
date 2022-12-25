<template>
    <div>
<CardViewRepresent :represent="represent"/>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import CardViewRepresent from '@/components/CardViewRepresent.vue';

    export default {
        setup(){
            const store=useStore()
            const router=useRoute()
            const represent=computed(()=>store.getters.getRepresentById(router.params.id))
            return{represent}
        },
    components: { CardViewRepresent }
}
</script>

<style lang="scss" scoped>

</style>