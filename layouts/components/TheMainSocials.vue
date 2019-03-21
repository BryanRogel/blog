<template lang="pug">
article
    lazy-component
        a(href="https://www.linkedin.com/in/rocketdiel" target='_blank')
            img(src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png", alt="linkedin")
        a(href="https://github.com/Anb98" target='_blank')
            img(src="http://elfreneticoinformatico.com/wp-content/uploads/2017/10/GitHubLogo-676x251.png", alt="github")
        a(href="https://codepen.io/anb98" target='_blank')
            img(src="https://blog.codepen.io/wp-content/uploads/2012/06/codepen-wordmark-display-inside-black@10x.png", alt="codepen")
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

