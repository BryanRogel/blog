<template lang="pug">
main
  .cards(v-for='(grupo, i) of grupoDeTres') 
    CardArticle( 
      v-for='(articulo, index) of grupo'
      :key='index'
      :ref='"card" + index + "_g"+ i'
      :titulo='articulo.titulo'
      :fecha='articulo.fecha'
      :tiempo_lectura='articulo.tiempo_lectura'
      :descripcion='articulo.descripcion'
      :tags='articulo.tags'
      :comentarios='articulo.comentarios'
      :class='{largeCard: articulo.large}'
      @load='cardLarge(grupo,index,i,articulo.id)'
      @resize='cardLarge(grupo,index,i,articulo.id)'
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
          large:false
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
          large:false
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
          large:false
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
          large:false
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
          large:false
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
          large:false
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
          large:false
        },
        {
          id:8,
          titulo:'Titulo articulo 8',
          fecha:'2019-02-02',
          tiempo_lectura: '4 minutos',
          descripcion: 'descripccion de mi articulo',
          tags:[
            {name:'Vue', link:'#'},
            {name:'Nuxt', link:'#'}
          ],
          comentarios:1,
          large:false
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
    },
  },
  methods:{
    cardLarge(grupo, index,indexG,id){
      const cards=this.$refs;
      const indexArticulo = this.articulos.findIndex(element=>element.id==id);

      if(process.client){
        console.log('algo ');
        
        if(window.innerWidth > 600)
          this.articulos[indexArticulo].large=true;
        else
          this.articulos[indexArticulo].large=false;
      }
      
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

