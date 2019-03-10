<template lang="pug">
nav
    a
        i.fas.fa-cloud-moon
    a(href="#") Inicio
    a(href="#") Portafolio
    a
        i.fas.fa-search
</template>

<style lang="stylus" scoped>
nav
    position absolute
    width 100%
    bottom 0
    text-align center
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.15);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%);
    color white
    font-size 1.25em
    a
        display inline-block
        padding 0.5em 0.7em
        text-decoration none
        color white
        &:hover
            background: rgba(0, 0, 0, .5)
        &:first-child
            padding-left 0.8em
            float left
        &:last-child
            float right
            padding-right 0.8em
</style>
