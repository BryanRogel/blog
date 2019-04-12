<template lang="pug">
nav(ref='mainNav' :class='{fijado:isFijado}')
    a(href='#' @click.prevent='cambiarTema')
        i.fas.fa-cloud-moon
    nuxt-link(to='/') Inicio
    nuxt-link(to='/portafolio') Portafolio
    a(href='#' @click.prevent)
        i.fas.fa-search
</template>
<script>
export default {
    data(){
        return{
            isFijado:false,
            distanciaTop:0,
            componentePapa:'header',
        }
    },
    mounted(){
        if (process.client) {
            const nav = this.$refs.mainNav
            this.distanciaTop = nav.offsetTop;

            document.addEventListener('scroll', this.onScroll);
        }
    }, 
    destroyed(){
        if (process.client) 
            document.removeEventListener('scroll',this.onScroll);
    },
    methods:{
        onScroll(e){

            const nav = this.$refs.mainNav
            let origOffsetY = nav.offsetTop;
            
            if(window.scrollY >= origOffsetY )
                this.isFijado=true;

            if(window.scrollY<=this.distanciaTop)
                this.isFijado=false;
        },
        cambiarTema(){
            if(process.client){
                const root = document.documentElement;  //elemento root
                root.style.setProperty('--fondo-primario', '#1c2833');
                root.style.setProperty('--fondo-secundario', '#273746');
                root.style.setProperty('--font-primary-color', '#8395a7');
                root.style.setProperty('--font-secondary-color', '#808b96');
            }
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
