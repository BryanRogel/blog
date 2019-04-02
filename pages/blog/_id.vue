<template lang="pug">
    main.article
        Logo
        //- vue-disqus(shortname='abdielmartinez' identifier='a1s2d3')
</template>

<script>
import Logo from '@/components/ArticuloContenido'
export default {
    layout:'blog.layout',
    components: {
        Logo
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
