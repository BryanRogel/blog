<template lang="pug">
    header.article
        div(v-lazy:background-image="imagen")
        div
            Fecha(:date='date' :time='time')
            h1 {{ title }}
            span {{author || 'Abdiel Martinez'}}  |   
            Tags(:tags='tags')
            p {{ description }}
</template>

<script>
import Fecha from '@/components/articulo/Fecha'
import Tags from '@/components/articulo/Tags'

export default {
    props:{
        imgSrc:{type:String, required:true},
        date:{type:String, required:true},
        time:{type:String,},
        title:{type:String, required:true},
        tags:{type:Array, required:true},
        author:{type:String,},
        description:{type:String, required:true},
    },
    components:{
        Fecha,
        Tags
    },
    computed:{
        imagen(){
            return {
                src: this.imgSrc,
                error: '/img/default.svg',
                loading: '/img/default.svg'
            }
        }
    }
}
</script>

<style lang="stylus">
header.article
    display flex  
    & > div
        flex 2
        min-height 250px
        border-radius var(--border-radius)
        transition 0.5s
    & > div:first-child
        background-position center
        background-size contain
        background-repeat no-repeat
        border-top 1px solid rgba(0, 0, 0, 0.1) 
        box-shadow 0px 4px 3px rgba(0, 0, 0, 0.25)
    & > div:nth-child(2)
        padding 1em
    span
        // color var(--font-secondary-color)
    .tags
        display inline-block
        margin-top 0.5em  
        margin-bottom @margin-top

@media(max-width 900px)
    header.article
        position relative
        & > div
            width 100%
        & > div:first-child
            border 0px !important
            position relative
            z-index 1
        & > div:nth-child(2)
            top 0
            min-height 251px !important
            color white
            padding 0 !important
            background rgba(grey, 0.5)
            position absolute
            z-index 2
            time
                display block
                padding-top 1em
            time, p
                padding-left 1em;
                padding-right @padding-left
            h1 
                padding-left 0.5em
            span
                padding-left 1em;
                color white
</style>
