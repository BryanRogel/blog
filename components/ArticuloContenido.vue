<template lang="pug">
  div(v-html='componentes')
</template>

<script>
import algo from './algo'

export default {
  //necesario para exportar con los componentes internos dentro del md
  components:{
    algo
  },
  
  props:[
    'componentes'
  ]
}
</script>


