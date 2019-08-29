<template lang='pug' >
footer.mainFooter
    p(:class='{isArticle, isVisible, isInvisible: !isVisible}').
        Made with #[svg( aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"): path( fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z")] by #[a(href='#') me]
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
    svg
        width 1em
        color red

</style>
