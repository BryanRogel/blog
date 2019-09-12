<template lang='pug'>
header(ref='header')
    figure
        lazy-component
            img(src="/img/perfil.webp", alt="Foto perfil")
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
        // this.$refs.header.style.background=`linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80') center`
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
    background linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://firebasestorage.googleapis.com/v0/b/blog-f2e52.appspot.com/o/portada.jpg?alt=media&token=5f17d2e4-ab6f-4222-b01d-375916528203') center
    background-size cover
    min-height 200px
    display flex
    justify-content center
    flex-wrap wrap
    align-items center
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.15);
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


