<template lang='pug' >
footer.mainFooter
    p(:class='{isArticle, isVisible, isInvisible: !isVisible}') Made with #[i.fas.fa-heart] by #[a(href='#') me]
</template>

<script>
export default {
    props:{
        isArticle:{default:false},
    },
    computed:{
        isVisible(){
            return this.$store.state.footer.isVisible;
        }
    }
}
</script>

<style lang='stylus'>
.mainFooter
    position fixed
    bottom 0
    width 100%
    font-family 'Open Sans', 'sans-serif'
    font-weight bold
    color black
    p
        padding 1em 0 0.5em
        text-align center
    p:not(.isArticle)
        background #10ac84
    a
        color @color
    .fas.fa-heart
        color red

</style>
