<template lang="pug">
    .tags
        nuxt-link( v-for='(tag, index) of tags' :to='`/tag/${tag}`' :key='index') {{tag}} 
</template>
<script>
export default {
    props:{
        tags:{type:Array, required:true}
    }
}
</script>

<style lang="stylus">
.tags
    display inline
.tags a
    margin-right 5px
    color white !important
    padding 2px 12px
    text-decoration none
    background linear-gradient(144.56deg, #00E27B 4.62%, #00A6BE 137.38%)
    border-radius: 13px
</style>
