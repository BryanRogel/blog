<template>
    <div>
        <TheNav />
        <nuxt />
    </div>
</template>

<script>
import TheNav from './components/TheMainNav'
export default {
    components:{
        TheNav
    },
    beforeMount(){
        this.$store.dispatch('theme/verifyFirstRender');
    },
}
</script>