<template lang="pug">
    main
        Logo
        vue-disqus(shortname='abdielmartinez' identifier='a1s2d3')
</template>

<script>
import Logo from '@/components/Logo'
export default {
    layout:'blog.layout',
    components: {
        Logo
    }
}
</script>

<style lang="stylus">
main
    font-family 'Open sans'
</style>
