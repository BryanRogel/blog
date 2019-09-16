<template lang='pug'>
nuxt-link.relacionado(:to='url') 
    div(ref='cover')
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
    mounted(){
        this.$refs.cover.style.background=`url('${this.img}') center no-repeat`
        this.$refs.cover.style.backgroundSize=`cover`;
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

    & > div:first-child
        height 11em
        width 14em
        border-top-left-radius var(--border-radius)
        border-top-right-radius var(--border-radius)
        background url('/img/default.svg') center no-repeat
        background-size cover
    
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
