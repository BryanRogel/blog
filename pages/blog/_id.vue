<template lang="pug">
    main.article
        Contenido(:componentes='contenido')
        //- vue-disqus(shortname='abdielmartinez' identifier='a1s2d3')
</template>

<script>
import Contenido from '@/components/ArticuloContenido'
export default {
    layout:'blog.layout',
    async asyncData(){
        const file = await import('@/assets/articulos/prueba.md')
        return {
            atributos:file.attributes,
            contenido:file.html,
            file:file
        }
    },
    mounted(){
        console.log('file',this.file);
    },
    components: {
        Contenido
    }
}
</script>

<style lang="stylus">
main.article
    background gray
    margin auto
    font-family 'Open sans'
    width 80%
</style>
