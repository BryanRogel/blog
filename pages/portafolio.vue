<template lang="pug">
main
    h2 Próximamente
    div 
</template>


<script>
export default {
    head:{
        title:'Portafolio'
    },
    mounted(){
        this.$store.commit('footer/setVisible', true);
    },
    beforeDestroy(){
        this.$store.commit('footer/setVisible', false);
    },
}
</script>

<style lang='stylus' scoped>
h2
    text-align center
    margin-bottom 0.5em
div
    height 49vh
    background url('/img/under_construction.svg')
    background-size contain
    background-position center
    background-repeat no-repeat
</style>

