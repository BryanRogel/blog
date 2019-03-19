<template lang="pug">
article.card
    header
    section
        header
            h2 {{ titulo }}
            .subtitle
                time(:datetime='fecha') {{fechaLetras}} 
                span | {{tiempo_lectura}}
            p {{descripcion}}
        footer
            .tags
                nuxt-link( v-for='(tag, index) of tags' :to='tag.link' :key='index') {{tag.name}} 
            .comments( v-if='comentarios')
                i.far.fa-comment-alt  {{comentarios}}
</template>


<script>
export default {
    props:{
        titulo:{type:String, required: true},
        fecha:{type: String, required:true},
        tiempo_lectura:{type: String, required:true},
        descripcion:{type: String, required:true},
        tags:{type:Array, required:true},
        comentarios:{type:Number, required:true}
    },
    computed:{
        fechaLetras(){
            return '05 de marzo 2019';
        }
    },
    mounted(){
        this.$emit('load');
    }
}
</script>

<style lang="stylus">
article.card
    margin 1.5em
    flex 1 350px
    font-family 'Open Sans'
    background white
    border-radius 7px
    box-shadow 0px 4px 3px rgba(0, 0, 0, 0.25)
    transition 1s 
    h2 
        line-height 15px
        margin-bottom 7px
    & > header
        width 100%
        height 200px
        border-bottom 1px solid #dcdde1
        background-image url('https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg') 
        background-position center
        background-size contain
        background-repeat no-repeat

    & > section
        padding 15px
        .subtitle
            color #8395a7
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
        box-shadow 0px 10px 20px rgba(0, 0, 0, 0.25)
    &:active
        box-shadow 0px 0px 7px rgba(0, 0, 0, 0.25)
        transition 0.1s

.largeCard
    display flex
    position relative
    & > header, & > section
        flex 1
    & > header
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
        & > header
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

