<template lang="pug">
main
    h2 Página no encontrada 
    div
</template>
<script>
export default {
    head:{
        title:'Pagina no encontrada'
    },
    mounted(){
        this.$store.commit('footer/setVisible', true);
    },
    beforeDestroy(){
        this.$store.commit('footer/setVisible', false);
    },
}
</script>


<style lang="stylus" scoped>
h2
    text-align center
    margin-bottom 0.5em
div
    height 46vh
    background url('/img/404.svg')
    background-size contain
    background-position center
    background-repeat no-repeat
</style>