<template lang="pug">
main
  .cards(v-for='(grupo, i) of grupoDeTres') 
    CardArticle( 
      v-for='(articulo, index) of grupo'
      :key='articulo.id'
      :titulo='articulo.title'
      :fecha='articulo.date'
      :tiempo_lectura='articulo.tiempo_lectura'
      :descripcion='articulo.description'
      :tags='articulo.tags'
      :comentarios='1'
      :img='articulo.cover'
      :url='`blog/${articulo.slug}`'
      :class='{largeCard: (grupo.length==2 || grupo.length==1)}'
      )
</template>


<script>
import CardArticle from '@/components/articulo/Card';

export default {
  name:'HomePage',
  components: {
    CardArticle,
  },
  mounted(){
    this.$store.commit('footer/setVisible', true);
  },
  beforeDestroy(){
    this.$store.commit('footer/setVisible', false);
  },
  computed:{
    articulos(){
      return this.$store.getters['articulos/publicados'];
    },
    grupoDeTres(){
      //agrupa los articulos en grpos para mostrarse en distintos tamanio
      let inicio            = 0;
      let restantes         = this.articulos.length;
      let cont              = 3;
      const gruposArticulos = [];


      while(restantes>0){
        if(cont==1){
          cont--;
          continue;
        }

        cont=cont || 3;

        gruposArticulos.push(this.articulos.slice(inicio,(inicio+cont))); 

        inicio    += cont;
        restantes -= cont;
        cont--;
      }

      return gruposArticulos;
    },
  },
}
</script>

<style lang="stylus">
main
  z-index 2
  padding 2em 2em 1em
  margin-bottom 3em
  position relative
  background-color var(--fondo-primario)
  box-shadow 0px 4px 3px rgba(0, 0, 0, 0.25) 

.cards
  display flex
  flex-wrap wrap
  justify-content center

@media(min-width: 1370px)
  main
    margin-left 5%
    margin-right @margin-left

@media(min-width: 1495px)
  main
    margin-left 10%
    margin-right @margin-left
</style>

