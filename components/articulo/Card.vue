<template lang="pug">
article.card
    nuxt-link(:to='url')
        img(:data-src="img" src='/img/default.svg' class="lazyload" )
    section
        nuxt-link(:to='url')
            h2 {{ titulo }}
            .subtitle
                Fecha(date='2018-06-09')
                // span | {{tiempo_lectura}}
            p {{descripcion}}
        footer
            Tags(:tags='tags')
            //- .comments( v-if='comentarios')
                svg( aria-hidden="true" focusable="false" data-prefix="far" data-icon="comment-alt" class="svg-inline--fa fa-comment-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"): path( fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288z")
                span {{comentarios}}
</template>


<script>
import Fecha from './Fecha'
import Tags from './Tags'
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
        Fecha,
        Tags
    },
    computed:{
        fechaLetras(){
            return '05 de marzo 2019';
        },
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
        text-align center
        border-bottom 1px solid #dcdde1
        opacity 1
        // background-image url('https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg') 
        border-radius var(--border-radius)
        // background-position center
        // background-size cover
        // background-repeat no-repeat
        transition 1s
        img
            height 100%

    & > section
        padding 15px
        .subtitle
            color var(--font-secondary-color)
            margin-bottom 7px
        p
            text-align justify  
    footer
        padding-top 1em
        .comments
            display inline
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
            svg
                width 1em

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
                svg
                    display inline-block
                    width 1em

</style>

