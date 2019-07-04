<template lang='pug'>
div
    TheNav
    nuxt
    TheFooter(:isArticle='true')
</template>

<script>
import TheNav from './components/TheMainNav'
import TheFooter from './components/TheMainFooter'
export default {
    components:{
        TheNav,
        TheFooter
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
