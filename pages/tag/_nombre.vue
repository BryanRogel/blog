<template lang="pug">
    main
        h1 aqui van los articulos de: {{$route.params.nombre}}
</template>

<script>
export default {
    mounted(){
        this.$store.commit('footer/setVisible', true);
    },
    beforeDestroy(){
        this.$store.commit('footer/setVisible', false);
    },
}
</script>

<style lang="stylus">

</style>
