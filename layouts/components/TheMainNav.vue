<template lang="pug">
nav(ref='mainNav' :class='{fijado:isFijado, isDarkTheme:isDarkTheme}')
    a(href='#' @click.prevent='cambiarTema')
        svg( v-if="isDarkTheme" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sun" class="svg-inline--fa fa-sun fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"): path( fill="currentColor" d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z")
        svg( v-else aria-hidden="true" focusable="false" data-prefix="fas" data-icon="moon" class="svg-inline--fa fa-moon fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"): path(fill="currentColor" d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z")

        //- i.fas(ref='themeBotton' :class="{'fa-sun':isDarkTheme, 'fa-moon': !isDarkTheme }")
    nuxt-link(to='/') Inicio
    nuxt-link(to='/portafolio') Portafolio
    a(href='#' @click.prevent)
        svg(aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"): path( fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z")
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
    z-index 3
    width 100%
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
        svg
            width 1em
</style>
