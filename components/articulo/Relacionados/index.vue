<template lang='pug'>
.relacionados
    h3 Articulos relacionados
    .ArtRelacionados
        Item( v-for='(item, i) of data' :key='i' url='/' img='/img/banner.png' titulo='De vue a react lo que aprendi' descripcion='mi descripccion asdfasdf asdfasdfg gdfghfgh jghjghjgh er5ertrty ')
</template>

<script>
import Item from './Item'

export default {
    components:{
        Item
    },
    data(){
        return{
            data:[,,,]
        }
    }
}
</script>

<style lang='stylus'>
.relacionados 
    margin-top 1em
    
    & > h3
        text-align center
        margin-bottom 1em
        border 1px


.ArtRelacionados
    display flex
    justify-content center
    flex-wrap wrap
    margin-bottom 2em
    
</style>
