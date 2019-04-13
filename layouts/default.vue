<template>
  <div>
    <theHeader/>
    <nuxt />
  </div>
</template>

<script>
import theHeader from './components/TheMainHeader.vue';
export default {
  components:{
    theHeader,
  },
  beforeMount(){
    this.$store.dispatch('theme/verifyFirstRender');
  },
}
</script>

