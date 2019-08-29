<template lang='pug'>
nuxt-link.relacionado(:to='url') 
    .img(v-lazy:background-image="imagen")
    .contenido
        h3 {{titulo}}
        p {{descripcion}}
</template>

<script>
export default {
    props:{
        url:{type: String},
        img:{type:String, required: true},
        titulo:{type:String, required: true},
        descripcion:{type: String, required:true},
    },
    computed:{
        imagen(){
            return {
                src: this.img,
                error: '/img/default.svg',
                loading: '/img/default.svg'
            }
        }

    }
}
</script>

<style lang='stylus'>
.relacionado
    display inline-block
    color var(--font-primary-color)
    text-decoration none
    border-radius var(--border-radius) 
    box-shadow 0px 4px 3px rgba(0, 0, 0, 0.25)
    transition 0.5s 
    margin-left 1em
    margin-right @margin-left
    margin-bottom @margin-left
    background-color var(--fondo-articulo-relacionado)

    &:hover
        transform translateY(-10px)
        box-shadow 0px 10px 20px rgba(0, 0, 0, 0.25)

    .img
        height 11em
        width 14em
        background-position center
        background-size cover
        background-repeat no-repeat
        border-top-left-radius var(--border-radius)
        border-top-right-radius var(--border-radius)
    
    .contenido
        padding 0.5em 1em
        h3
            width 10em
        p
            width 12em
            white-space nowrap
            overflow hidden
            text-overflow ellipsis

</style>
