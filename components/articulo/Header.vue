<template lang="pug">
    header.article
        div
            img( :data-src='img' src='/img/default.svg' class="lazyload" )
        div
            Fecha(:date='date' :time='time')
            h1 {{ title }}
            span {{author || 'Abdiel Martinez'}}  |   
            Tags(:tags='tags')
            p {{ description }}
            ShareButtons(:onlyIcon='true')
</template>

<script>
import Fecha from './Fecha'
import Tags from './Tags'
import ShareButtons from './../shareButtons'

export default {
    props:{
        img:{type:String, required:true},
        date:{type:String, required:true},
        time:{type:String,},
        title:{type:String, required:true},
        tags:{type:Array, required:true},
        author:{type:String,},
        description:{type:String, required:true},
    },
    components:{
        Fecha,
        Tags,
        ShareButtons
    },
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

        &:first-child   //imagen principal
            border-top 1px solid rgba(0, 0, 0, 0.1) 
            box-shadow 0px 4px 3px rgba(0, 0, 0, 0.25)
            text-align center
            max-height 250px
            img
                height 100%
                max-height 250px

        &:nth-child(2)
            padding 1em

    .tags
        display inline-block
        margin-top 0.5em  
        margin-bottom @margin-top

@media(max-width 900px)
    header.article
        position relative
        & > div
            width 100%
            
            &:first-child
                border 0px !important
                position relative
                z-index 1

            &:nth-child(2)
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
