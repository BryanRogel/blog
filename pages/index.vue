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
      :class='{largeCard: (grupo.length==2 || grupo.length==1)}'
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
      articulos:[
        {
          id:1,
          titulo:'Titulo articulo 1',
          fecha:'2019-02-02',
          tiempo_lectura: '4 minutos',
          descripcion: 'descripccion de mi articulo',
          tags:[
            {name:'Vue', link:'#'},
            {name:'Nuxt', link:'#'}
          ],
          comentarios:1,
          
        },
        {
          id:2,
          titulo:'Titulo articulo 2',
          fecha:'2019-02-02',
          tiempo_lectura: '4 minutos',
          descripcion: 'descripccion de mi articulo',
          tags:[
            {name:'Vue', link:'#'},
            {name:'Nuxt', link:'#'}
          ],
          comentarios:1,
          
        },
        {
          id:3,
          titulo:'Titulo articulo 3',
          fecha:'2019-02-02',
          tiempo_lectura: '4 minutos',
          descripcion: 'descripccion de mi articulo',
          tags:[
            {name:'Vue', link:'#'},
            {name:'Nuxt', link:'#'}
          ],
          comentarios:1,
          
        },
        {
          id:4,
          titulo:'Titulo articulo 4',
          fecha:'2019-02-02',
          tiempo_lectura: '4 minutos',
          descripcion: 'descripccion de mi articulo',
          tags:[
            {name:'Vue', link:'#'},
            {name:'Nuxt', link:'#'}
          ],
          comentarios:1,
          
        },
        {
          id:5,
          titulo:'Titulo articulo 5',
          fecha:'2019-02-02',
          tiempo_lectura: '4 minutos',
          descripcion: 'descripccion de mi articulo',
          tags:[
            {name:'Vue', link:'#'},
            {name:'Nuxt', link:'#'}
          ],
          comentarios:1,
          
        },
        {
          id:6,
          titulo:'Titulo articulo 6',
          fecha:'2019-02-02',
          tiempo_lectura: '4 minutos',
          descripcion: 'descripccion de mi articulo',
          tags:[
            {name:'Vue', link:'#'},
            {name:'Nuxt', link:'#'}
          ],
          comentarios:1,
          
        },
        {
          id:7,
          titulo:'Titulo articulo 7',
          fecha:'2019-02-02',
          tiempo_lectura: '4 minutos',
          descripcion: 'descripccion de mi articulo',
          tags:[
            {name:'Vue', link:'#'},
            {name:'Nuxt', link:'#'}
          ],
          comentarios:1,
          
        },
        {
          id:7,
          titulo:'Titulo articulo 7',
          fecha:'2019-02-02',
          tiempo_lectura: '4 minutos',
          descripcion: 'descripccion de mi articulo',
          tags:[
            {name:'Vue', link:'#'},
            {name:'Nuxt', link:'#'}
          ],
          comentarios:1,
          
        },
      ]
    }
  },
  computed:{
    grupoDeTres(){
      //agrupa los articulos en grpos para mostrarse en distintos tamanio
      let inicio            = 0;
      let restantes         = this.articulos.length;
      let cont              = 3;
      const gruposArticulos = [];


      while(restantes>0){
        cont=cont || 3;

        gruposArticulos.push(this.articulos.slice(inicio,(inicio+cont))); 

        inicio    += cont;
        restantes -= cont;
        cont--;
      }

      return gruposArticulos;
    },
  },
  methods:{
    
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

