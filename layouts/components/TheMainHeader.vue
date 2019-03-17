<template lang='pug'>
header
    figure
        img(src="https://scontent.fsal3-1.fna.fbcdn.net/v/t1.0-1/c0.5.160.160a/p160x160/34201966_1683221888460673_3951761029221842944_n.jpg?_nc_cat=105&_nc_ht=scontent.fsal3-1.fna&oh=b44147e41262a5a6bfe8e45fe1825293&oe=5CDE8615", alt="Foto perfil")
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
    }
}
</script>

<style lang="stylus" scoped>
header
    font-family 'Roboto'
    position relative
    padding 2em
    padding-top 1em
    background linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.4) 100%),  url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80') center
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


