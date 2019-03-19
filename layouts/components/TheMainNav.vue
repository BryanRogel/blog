<template lang="pug">
nav(ref='mainNav' :class='{fijado:fijado}')
    a
        i.fas.fa-cloud-moon
    nuxt-link(to='/') Inicio
    nuxt-link(to='portafolio') Portafolio
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
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);

nav
    // position absolute
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
