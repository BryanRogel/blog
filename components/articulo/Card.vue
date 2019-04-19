<template lang="pug">
article.card
    nuxt-link(v-lazy:background-image="imagen"  :to='url')
    section
        nuxt-link(:to='url')
            h2 {{ titulo }}
            .subtitle
                Fecha(date='2018-06-09' time='16:10')
                // span | {{tiempo_lectura}}
            p {{descripcion}}
        footer
            .tags
                nuxt-link( v-for='(tag, index) of tags' :to='`tag/${tag}`' :key='index') {{tag}} 
            .comments( v-if='comentarios')
                i.far.fa-comment-alt  {{comentarios}}
</template>


<script>
import Fecha from './Fecha'
export default {
    props:{
        img:{type:String, required: true},
        titulo:{type:String, required: true},
        fecha:{type: String, required:true},
        tiempo_lectura:{type: String, required:true},
        descripcion:{type: String, required:true},
        tags:{type:Array, required:true},
        comentarios:{type:Number, required:true},
        url:{type: String},
    },
    components:{
        Fecha
    },
    computed:{
        fechaLetras(){
            return '05 de marzo 2019';
        },
        imagen(){
            return {
                src: this.img,
                error: '/img/default.svg',
                loading: '/img/default.svg'
            }
        }
    },
}
</script>

<style lang="stylus">
article.card
    cursor pointer
    margin 1.5em
    flex 1 350px
    background var(--fondo-secundario)
    border-radius var(--border-radius)
    box-shadow 0px 4px 3px rgba(0, 0, 0, 0.25)
    transition 0.5s 
    *
        text-decoration none
        &:visited, &:link
            color var(--font-primary-color)
    h2 
        line-height 15px
        margin-bottom 7px
    & > a
        display block
        width 100%
        height 200px
        border-bottom 1px solid #dcdde1
        opacity 1
        // background-image url('https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg') 
        border-radius var(--border-radius)
        background-position center
        background-size cover
        background-repeat no-repeat
        transition 1s

    & > section
        padding 15px
        .subtitle
            color var(--font-secondary-color)
            margin-bottom 7px
        p
            text-align justify  
    footer
        padding-top 1em
        .tags, .comments
            display inline
        .tags a
            margin-right 5px
            color white
            padding 2px 12px
            text-decoration none
            background linear-gradient(144.56deg, #00E27B 4.62%, #00A6BE 137.38%)
            border-radius: 13px
        .comments
            float right
    &:hover
        transform translateY(-10px)
        box-shadow 0px 10px 20px rgba(0, 0, 0, 0.25)
    &:active
        transform translateY(0px)
        box-shadow 0px 0px 7px rgba(0, 0, 0, 0.25)
        transition 0.1s

.largeCard
    display flex
    position relative
    & > a, & > section
        flex 1
    & > a
        height 300px !important
        border-right 1px solid #dcdde1
        border-bottom 0 !important
    & > section
        position relative
    footer
        width 100%
        position absolute
        bottom 1em
        .comments
            margin-right 2em

@media(max-width: 600px)
    .largeCard
        display block
        & > a
            height 200px !important
            border-right 0 !important
            border-bottom 1px solid #dcdde1 !important
        & > section
            position relative
        footer
            position static
            padding-top 1em !important
            .comments
                margin-right 0

</style>

