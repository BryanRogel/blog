<template lang="pug">
    main.article
        Header(
            :img='atributos.cover'
            :date='atributos.date'
            :time='atributos.time'
            :title='atributos.title'
            :tags='atributos.tags'
            :description='atributos.description')
        Contenido(:render='render' :staticRender='staticRender')
        ShareButtons
        Relacionados
        vue-disqus(shortname='abdielmartinez' :title='atributos.title' :identifier='atributos.slug')
        script(src='/prismjs/prism.js')  
</template>

<script>
import Header from '@/components/articulo/Header'
import Contenido from '@/components/articulo/Contenido'
import ShareButtons from '@/components/shareButtons'
import Relacionados from '@/components/articulo/Relacionados'

export default {
    name:'BlogPage',
    layout:'blog.layout',
    validate({params, redirect, store}){
    
        if(store.state.articulos.lista[params.slug]) return true;
        redirect('/404');
    },
    head(){
        return{
            link:[{ rel:"stylesheet", href:"/prismjs/prism.css"}],
            title: this.atributos.title,
            // script:[{ src:'/prismjs/prism.js'}] Si se establece aca falla al hacer first render

            meta: [
                { hid    : 'description', name: 'description', content: this.atributos.description },
                // Opengraph -facebook
                {hid:'ogTitle', property: 'og:title', content: "Abdiel Martinez | "+this.atributos.title},
                {hid:'ogDescription', property: 'og:description', content: this.atributos.description},
                {hid:'ogImg', property: 'og:image', content: 'http://www.abdielmartinez.com/img/banner.png'},
                
                // Twitter card
                {hid:'twTitle', name: 'twitter:title', content: "Abdiel Martinez | "+this.atributos.title},
                {hid:'twDescription', name: 'twitter:description', content: this.atributos.description},
                {hid:'twImg', name: 'twitter:image:src', content: 'http://www.abdielmartinez.com/img/perfil.jpg'},
            ],

            __dangerouslyDisableSanitizers: ['script'],
            script: [{ innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }],
        }
    },
    async asyncData({params, store}){
        const file = await import(`@/assets/articulos/${params.slug}.md`)
        const atributos = store.state.articulos.lista[params.slug]
        

        return {
            atributos,
            render       : file.vue.render,
            staticRender : file.vue.staticRenderFns,
        }
    },
    computed:{
        structuredData(){
            return {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "http://abdielmartinez.com"+this.$nuxt.$route.path
                },
                "headline": this.atributos.title,
                "image": [
                    "https://example.com/photos/1x1/photo.jpg",
                    "https://example.com/photos/4x3/photo.jpg",
                    "https://example.com/photos/16x9/photo.jpg"
                ],
                "datePublished": "2019-02-05T08:00:00+08:00",
                "dateModified": "2019-02-05T09:20:00+08:00",
                "author": {
                    "@type": "Person",
                    "name": "Abdiel Martinez"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Abdiel Martinez",
                    "logo": {
                    "@type": "ImageObject",
                    "url": "http://www.abdielmartinez.com/img/perfil.jpg"
                    }
                },
                "description": this.atributos.description,
                "commentCount":7,
                "keywords": this.atributos.tags.join(", ")
            }
        }
    },
    mounted(){
        this.$store.commit('footer/setVisible', true);
    },
    beforeDestroy(){
        this.$store.commit('footer/setVisible', false);
    },
    components: {
        Header,
        Contenido,
        ShareButtons,
        Relacionados
    },
}
</script>

<style lang="stylus">
main.article
    background var(--fondo-secundario);
    margin auto
    font-family 'Open Sans', 'sans-serif'
    width 80%
    padding 2em
    margin-bottom 3em

.frontmatter-markdown
    margin-top 1em 
    margin-bottom @margin-top
    padding-top @margin-top
    border-top 1px solid var(--fondo-primario)
    word-break break-word

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
