<template lang='pug'>
header(ref='header')
    figure
        img(src="/img/perfil-lowR.jpg" data-src='/img/perfil.webp' alt="Foto perfil" class="lazyload" )
    section
        h1 <span>Hola, soy</span> Abdiel Martinez
        h2 Desarrollador web amante de Vue y Laravel
        TheSocials
    TheNav
</template>

<script>
import TheNav from './TheMainNav'
import TheSocials from './TheMainSocials'

export default {
    components:{
        TheNav,
        TheSocials
    },
    mounted(){
        this.$refs.header.style.background=`linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.4) 100%), url('/img/portada.jpg') center`;
        this.$refs.header.style.backgroundSize=`cover`;
    }
}
</script>

<style lang="stylus" scoped>
header
    font-family 'Roboto', sans-serif
    position relative
    z-index 3
    padding 2em
    padding-top 1em
    background linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.4) 100%), url('/img/portada-lowR.jpg') center
    background-size cover
    min-height 200px
    display flex
    justify-content center
    flex-wrap wrap
    align-items center
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.15);
    transition opacity 1s
    section
        padding-bottom 1em
        text-align center
        h1
            color black
            font-size 1.75em
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        span
            font-weight: normal
        h2
            color: #FFFFFF;
            font-weight normal 
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    figure
        text-align center
        padding-bottom 1em
        padding-right 3em
        img
            width 110px
            height @width
            border-radius 50%
            border: 4px solid #FFFFFF;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
@media(max-width: 689px)
    header
        padding-bottom 4em
        figure
            padding-right 3em
            padding-left @padding-right

</style>


