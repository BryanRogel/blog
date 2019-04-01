<template>
    <div>
        <TheNav class='fijado'/>
        <nuxt />
    </div>
</template>

<script>
import TheNav from './components/TheMainNav'
export default {
    components:{
        TheNav
    }

}
</script>