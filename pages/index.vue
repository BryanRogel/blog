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
      :img='articulo.img'
      :url='articulo.url'
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
          tags:['Vue','Nuxt'],
          comentarios:1,
          img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
          url:'blog/1'
        },
        {
          id:2,
          titulo:'Titulo articulo 2',
          fecha:'2019-02-02',
          tiempo_lectura: '4 minutos',
          descripcion: 'descripccion de mi articulo',
          tags:['Vue','Nuxt'],
          comentarios:1,
          img:'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg',
          url:'blog/1'
        },
        {
          id:3,
          titulo:'Titulo articulo 3',
          fecha:'2019-02-02',
          tiempo_lectura: '4 minutos',
          descripcion: 'descripccion de mi articulo',
          tags:['Vue','Nuxt'],
          comentarios:1,
          img:'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg',
          url:'blog/1'
        },
        {
          id:4,
          titulo:'Titulo articulo 4',
          fecha:'2019-02-02',
          tiempo_lectura: '4 minutos',
          descripcion: 'descripccion de mi articulo',
          tags:['Vue','Nuxt'],
          comentarios:1,
          img:'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg',
          url:'blog/1'
        },
        {
          id:5,
          titulo:'Titulo articulo 5',
          fecha:'2019-02-02',
          tiempo_lectura: '4 minutos',
          descripcion: 'descripccion de mi articulo',
          tags:['Vue','Nuxt'],
          comentarios:1,
          img:'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg',
          url:'blog/1'
        },
        {
          id:6,
          titulo:'Titulo articulo 6',
          fecha:'2019-02-02',
          tiempo_lectura: '4 minutos',
          descripcion: 'descripccion de mi articulo',
          tags:['Vue','Nuxt'],
          comentarios:1,
          img:'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg',
          url:'blog/1'
        },
        {
          id:7,
          titulo:'Titulo articulo 7',
          fecha:'2019-02-02',
          tiempo_lectura: '4 minutos',
          descripcion: 'descripccion de mi articulo',
          tags:['Vue','Nuxt'],
          comentarios:1,
          img:'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg',
          url:'blog/1'
        },
        {
          id:7,
          titulo:'Titulo articulo 8',
          fecha:'2019-02-02',
          tiempo_lectura: '4 minutos',
          descripcion: 'descripccion de mi articulo',
          tags:['Vue','Nuxt'],
          comentarios:1,
          img:'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg',
          url:'blog/1'
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
main
  padding 2em

.cards
  display flex
  flex-wrap wrap
  justify-content center

@media(min-width: 1370px)
  main
    padding-left 5%
    padding-right @padding-left

@media(min-width: 1495px)
  main
    padding-left 10%
    padding-right @padding-left
</style>

