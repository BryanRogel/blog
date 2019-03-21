<template lang="pug">
main
    h2 Página no encontrada 
    div(v-lazy:background-image="'/img/404.png'")
</template>

<style lang="stylus" scoped>
h2
    text-align center
div
    height 50vh
    background-size contain
    background-position center
    background-repeat no-repeat
</style>