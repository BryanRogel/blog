<template lang="pug">
    main.article
        header
            div(v-lazy:background-image="atributos.cover")
                // img(:src='atributos.cover')
            div
                Fecha(:date='atributos.date' :time='atributos.time')
                h1 {{ atributos.title }}
                span Abdiel Martinez  |   
                Tags(:tags='atributos.tags')
                p {{atributos.description}}
        Contenido(:render='render' :staticRender='staticRender')
        vue-disqus(shortname='abdielmartinez' :title='atributos.title' :identifier='atributos.slug')
        script(src='/prismjs/prism.js')  
</template>

<script>
import Fecha from '@/components/articulo/Fecha'
import Tags from '@/components/articulo/Tags'
import Contenido from '@/components/articulo/Contenido'

export default {
    layout:'blog.layout',
    head(){
        return{
            link:[{ rel:"stylesheet", href:"/prismjs/prism.css"}],
            title: `${this.atributos.title} | Abdiel Martinez`
            // Si se establece aca falla al hacer first render
            // script:[{ src:'/prismjs/prism.js'}]
        }
    },
    async asyncData(){
        const file = await import('@/assets/articulos/prueba.md')

        return {
            atributos    : file.attributes,
            render       : file.vue.render,
            staticRender : file.vue.staticRenderFns,
        }
    },
    components: {
        Fecha,
        Tags,
        Contenido,
    },
}
</script>

<style lang="stylus">
main.article
    background var(--fondo-secundario);
    margin auto
    font-family 'Open Sans', sans-serif
    width 80%
    padding 2em

    header
        display flex  
        & > div
            flex 2
            min-height 250px
        & > div:first-child
            border-radius var(--border-radius)
            background-position center
            background-size contain
            background-repeat no-repeat
            border 1px solid rgba(0, 0, 0, 0.25)
        & > div:nth-child(2)
            padding 1em
        span
            color var(--font-secondary-color)
        .tags
            display inline-block
            margin-top 0.5em  
            margin-bottom @margin-top
.frontmatter-markdown
    margin-top 1em 
    margin-bottom @margin-top
    padding-top @margin-top
    border-top 1px solid var(--fondo-primario)
    & > p
    & > ul
    & > ol
    & > blockquote
    & > table
        margin-bottom 1em

    a
        &:link
            color #3498db
        &:visited
            color #2874a6
        &:hover
            color #1b4f72
        &:active
            color #17a589
    &:not(pre)
        line-height 1.6
    p
        font-size 1.2em
        text-align justify
    li
        margin-left 1.2em
    hr
        border 0
        line-height 0
        &::before
            content ' . . . '
            display block
            margin-bottom 0.5em
            text-align center
            font-size 2em
    blockquote
        border-left 4px solid rgba(black,0.7)
        padding 0.5em 1em
        background var(--fondo-primario)
    pre
        position relative
        border-radius var(--border-radius)
        ::selection
            background #1c2833
        &::before 
            color #999
            position absolute
            top 0.5em
            right 1em
        &.language-stylus::before
            content 'stylus'
        &.language-html::before
            content 'html'
        &.language-css::before
            content 'css'
        &.language-javascript::before
            content 'js'
        &.language-php::before
            content 'php'
        &.language-pug::before
            content 'pug'
        &.language-json::before
            content 'json'
</style>
