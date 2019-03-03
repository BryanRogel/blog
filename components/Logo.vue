<script>
import algo from './algo'
import contenido from './prueba.md'

export default {
  //necesario para exportar con los componentes internos dentro del md
  extends: contenido.vue.component, 
  components:{
    algo
  },
  data(){
    return{
      atributos:contenido.attributes  //atributos | frontmatter
    }
  }
}
</script>


<style>
</style>
