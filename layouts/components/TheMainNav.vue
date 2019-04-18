<template lang="pug">
nav(ref='mainNav' :class='{fijado:isFijado, isDarkTheme:isDarkTheme}')
    a(href='#' @click.prevent='cambiarTema')
        i.fas(ref='themeBotton' :class="{'fa-sun':isDarkTheme, 'fa-moon': !isDarkTheme }")
    nuxt-link(to='/') Inicio
    nuxt-link(to='/portafolio') Portafolio
    a(href='#' @click.prevent)
        i.fas.fa-search
</template>
<script>
export default {
    mounted(){
        if (process.client) {
            const nav = this.$refs.mainNav
            this.distanciaTopToNav = nav.offsetTop;

            document.addEventListener('scroll', this.onScroll);
        }
    },
    destroyed(){
        if (process.client) 
            document.removeEventListener('scroll',this.onScroll);
    },
    data(){
        return{
            isFijado:false,
            distanciaTopToNav:0,
        }
    }, 
    computed:{
        isDarkTheme(){
            return this.$store.state.theme.isDarkTheme;
        }
    },
    methods:{
        onScroll(e){

            const nav = this.$refs.mainNav
            
            if(window.scrollY >= this.distanciaTopToNav)
                this.isFijado=true;

            if(window.scrollY<=this.distanciaTopToNav)
                this.isFijado=false;
        },
        cambiarTema(){
            if(process.client)
                this.$store.commit('theme/setDarkTheme',!this.isDarkTheme);
        }
    }
}



</script>


<style lang="stylus" scoped>
.fijado
    position fixed
    top 0
    z-index 3
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);

nav
    font-family Roboto
    position relative
    width 100%
    // bottom 0px
    text-align center
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.15);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%);
    color white
    font-size 1.25em
    
    a
        display inline-block
        padding 0.5em 0.7em
        text-decoration none
        color white
        &:hover
            background: rgba(0, 0, 0, .5)
        &:first-child
            padding-left 0.8em
            float left
        &:last-child
            float right
            padding-right 0.8em
</style>
