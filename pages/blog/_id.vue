<template lang="pug">
    main.article
        Contenido(:render='render' :staticRender='staticRender')
        vue-disqus(shortname='abdielmartinez' identifier='a1s2d3')
</template>

<script>
import Contenido from '@/components/ArticuloContenido'
// require('@/plugins/prismjs/prism.js')
// require('')
export default {
    layout:'blog.layout',
    head(){
        return{
            link:[
                { rel:"stylesheet", href:"/prismjs/prism.css"}
            ],
            script:[{ src:'/prismjs/prism.js'}]
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
        Contenido
    }
}
</script>

<style lang="stylus">
main.article
    background var(--fondo-secundario);
    margin auto
    font-family 'Open sans'
    width 80%
    pre
        position relative
        border-radius var(--border-radius)
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
</style>
