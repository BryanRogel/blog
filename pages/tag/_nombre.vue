<template lang="pug">
    main.tag
        h1 🏷 Post sobre {{$route.params.nombre}}:
</template>

<script>
export default {
    name:'TagsPage',
    mounted(){
        this.$store.commit('footer/setVisible', true);
    },
    beforeDestroy(){
        this.$store.commit('footer/setVisible', false);
    },
    computed:{
        resultado(){
            return this.$store.getters['articulos/publicados'].filter((item)=>item.tags.includes(this.$route.params.nombre));
        }
    }
}
</script>

<style lang="stylus">
main.tag
    color white
</style>
