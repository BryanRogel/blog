<template>
    <div>
        <TheNav/>
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
<style lang="stylus" scoped>
nav:not(.isDarkTheme)
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%);
</style>
