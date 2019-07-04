<template lang='pug'>
  div
    TheHeader
    nuxt
    TheFooter
</template>

<script>
import TheHeader from './components/TheMainHeader';
import TheFooter from './components/TheMainFooter'

export default {
  components:{
    TheHeader,
    TheFooter,
  },
  beforeMount(){
    this.$store.dispatch('theme/verifyFirstRender');
  },
}
</script>

