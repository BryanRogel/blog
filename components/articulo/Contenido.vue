<script>
import algo from './../algo'

export default {
  //necesario para exportar con los componentes internos dentro del md
  components:{
    algo
  },
  props:{
    render      : {type: String, required: true},
    staticRender: {type: String, required: true}
  },
  render (createElement) {
    return this.templateRender ? this.templateRender() : createElement("div", "Rendering");
  },
  created () {
    this.templateRender = new Function(this.render)();
    this.$options.staticRenderFns = new Function(this.staticRender)();
  }
}
</script>


