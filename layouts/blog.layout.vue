<template lang='pug'>
div
    vueCobra(color='#10ac84')
    TheNav
    nuxt
    TheFooter(:isArticle='true')
</template>

<script>
import TheNav from './components/TheMainNav'
import TheFooter from './components/TheMainFooter'
import vueCobra  from 'vue-cobra'

export default {
    components:{
        vueCobra,
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
