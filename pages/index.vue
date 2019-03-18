<template lang="pug">
main
  .cards(v-for='(grupo, i) of grupoDeTres') 
    CardArticle( 
      v-for='(articulo, index) of grupo'
      :key='index'
      :titulo='articulo.titulo'
      :fecha='articulo.fecha'
      :tiempo_lectura='articulo.tiempo_lectura'
      :descripcion='articulo.descripcion'
      :tags='articulo.tags'
      :comentarios='articulo.comentarios'
      :class='{largeCard: cardLarge(grupo,index)}'
      )
</template>


<script>
// import Logo from '~/components/Logo.vue'
import CardArticle from '@/components/CardArticle';

export default {
  components: {
    CardArticle,
  },
  data(){
    return{
      sobrante:0,
      articulos:[
        {
          titulo:'Titulo articulo 1',
          fecha:'2019-02-02',
          tiempo_lectura: '4 minutos',
          descripcion: 'descripccion de mi articulo',
          tags:[
            {name:'Vue', link:'#'},
            {name:'Nuxt', link:'#'}
          ],
          comentarios:1
        },
        {
          titulo:'Titulo articulo 2',
          fecha:'2019-02-02',
          tiempo_lectura: '4 minutos',
          descripcion: 'descripccion de mi articulo',
          tags:[
            {name:'Vue', link:'#'},
            {name:'Nuxt', link:'#'}
          ],
          comentarios:1
        },
        {
          titulo:'Titulo articulo 3',
          fecha:'2019-02-02',
          tiempo_lectura: '4 minutos',
          descripcion: 'descripccion de mi articulo',
          tags:[
            {name:'Vue', link:'#'},
            {name:'Nuxt', link:'#'}
          ],
          comentarios:1
        },
        {
          titulo:'Titulo articulo 4',
          fecha:'2019-02-02',
          tiempo_lectura: '4 minutos',
          descripcion: 'descripccion de mi articulo',
          tags:[
            {name:'Vue', link:'#'},
            {name:'Nuxt', link:'#'}
          ],
          comentarios:1
        },
        {
          titulo:'Titulo articulo 5',
          fecha:'2019-02-02',
          tiempo_lectura: '4 minutos',
          descripcion: 'descripccion de mi articulo',
          tags:[
            {name:'Vue', link:'#'},
            {name:'Nuxt', link:'#'}
          ],
          comentarios:1
        },
        {
          titulo:'Titulo articulo 6',
          fecha:'2019-02-02',
          tiempo_lectura: '4 minutos',
          descripcion: 'descripccion de mi articulo',
          tags:[
            {name:'Vue', link:'#'},
            {name:'Nuxt', link:'#'}
          ],
          comentarios:1
        },
        {
          titulo:'Titulo articulo 7',
          fecha:'2019-02-02',
          tiempo_lectura: '4 minutos',
          descripcion: 'descripccion de mi articulo',
          tags:[
            {name:'Vue', link:'#'},
            {name:'Nuxt', link:'#'}
          ],
          comentarios:1
        },
        {
          titulo:'Titulo articulo 8',
          fecha:'2019-02-02',
          tiempo_lectura: '4 minutos',
          descripcion: 'descripccion de mi articulo',
          tags:[
            {name:'Vue', link:'#'},
            {name:'Nuxt', link:'#'}
          ],
          comentarios:1
        },
      ]
    }
  },
  computed:{
    grupoDeTres(){
      //agrupa los articulos en grpos para mostrarse en distintos tamanio
      const n               = 5
      const nGrupos         = Math.ceil(this.articulos.length / n)
      const gruposArticulos = [];
      const penultimaI = nGrupos-2;

      for (let i = 0; i < nGrupos; i++){

        if(i==penultimaI){ //penultima iteracion   

          if(this.articulos.length % n == 1){
            gruposArticulos.push(this.articulos.slice(i*n,(i*n)+(n+1)));
            break;
          }
        }

        // iteracion normal
        gruposArticulos.push(this.articulos.slice(i*n,(i*n)+n)); 
      }

      return gruposArticulos;
    }
  },
  methods:{
    cardLarge(grupo, index){

      if(grupo.length>3 || grupo.length==2){
        if(index==grupo.length-1 || index==grupo.length-2)
          return true
      }else 
        return false
    }
  }
}
</script>

<style lang="stylus">
body
  background-color $fondoClaro
main
  padding 2em

.cards
  display flex
  flex-wrap wrap
  justify-content center
</style>

