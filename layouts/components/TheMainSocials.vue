<template lang="pug">
article
    a(href="https://www.linkedin.com/in/rocketdiel" target='_blank')
        img(src="/img/linkedIn.svg", alt="linkedin")
    a(href="https://github.com/Anb98" target='_blank')
        img(src="/img/github.png", alt="github")
    a(href="https://codepen.io/anb98" target='_blank')
        img(src="/img/codepen.svg", alt="codepen")
</template>
<style lang="stylus" scoped>
article
    margin-top 0.5em
    // padding 7px
    background: rgba(255, 255, 255, 0.28);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    text-align center
    a 
        position relative
        &:hover
            &::after
                content ''
                position absolute
                height 2px
                width 100%
                bottom 0
                left 0
                background rgba(white, 0.8)
        img
            height 20px
            padding 0.4em 1.25em
</style>

