<template lang="pug">
nav(ref='secondNav' :class='{fijado:fijado}')
    nuxt-link(to='/')
        img(src='/logo.png')
    nuxt-link(to='/') Inicio
    nuxt-link(to='/portafolio') Portafolio
    a
        i.fas.fa-search
</template>
<script>
export default {
    data(){
        return{
            fijado:false,
            distanciaTop:0
        }
    },
    mounted(){
        if (process.client) {
            const nav = this.$refs.secondNav
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

            const nav = this.$refs.secondNav
            let origOffsetY = nav.offsetTop;
            
            if(window.scrollY >= origOffsetY )
                this.fijado=true;

            if(window.scrollY<this.distanciaTop)
                this.fijado=false;
        }
    }
}
</script>


<style lang="stylus" scoped>
.fijado
    position fixed
    top 0
    z-index 3
    transition 1s 
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%);

nav
    font-family Roboto
    // position absolute
    position relative
    width 100%
    // bottom 0px
    text-align center
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.15);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%);
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
            padding-top 0.4em
            padding-bottom 0.15em
            float left
            img
                height 1.4em
        &:last-child
            float right
            padding-right 0.8em
</style>
