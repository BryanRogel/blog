<template lang="pug">
main
  .cards(v-for='(grupo, i) of grupoDeTres') 
    CardArticle( 
      v-for='(articulo, index) of grupo'
      :key='index'
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
// import Logo from '~/components/Logo.vue'
import CardArticle from '@/components/articulo/Card';

export default {
  components: {
    CardArticle,
  },
  mounted(){
    this.$store.commit('footer/setVisible', true);
  },
  beforeDestroy(){
    this.$store.commit('footer/setVisible', false);
  },
  data(){
    return{
      articulos:[
        {
          id:1,
          title:'title articulo 1',
          date:'2019-02-02',
          tiempo_lectura: '4 minutos',
          description: 'descripccion de mi articulo',
          tags:['Vue','Nuxt'],
          comentarios:1,
          cover:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
          slug:'tema-lavarel'
        },
        {
          id:2,
          title:'title articulo 2',
          date:'2019-02-02',
          tiempo_lectura: '4 minutos',
          description: 'descripccion de mi articulo',
          tags:['Vue','Nuxt'],
          comentarios:1,
          cover:'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg',
          slug:'tema-vue'
        },
        {
          id:3,
          title:'title articulo 3',
          date:'2019-02-02',
          tiempo_lectura: '4 minutos',
          description: 'descripccion de mi articulo',
          tags:['Vue','Nuxt'],
          comentarios:1,
          cover:'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg',
          slug:'1'
        },
        {
          id:4,
          title:'title articulo 4',
          date:'2019-02-02',
          tiempo_lectura: '4 minutos',
          description: 'descripccion de mi articulo',
          tags:['Vue','Nuxt'],
          comentarios:1,
          cover:'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg',
          slug:'1'
        },
        {
          id:5,
          title:'title articulo 5',
          date:'2019-02-02',
          tiempo_lectura: '4 minutos',
          description: 'descripccion de mi articulo',
          tags:['Vue','Nuxt'],
          comentarios:1,
          cover:'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg',
          slug:'1'
        },
        {
          id:6,
          title:'title articulo 6',
          date:'2019-02-02',
          tiempo_lectura: '4 minutos',
          description: 'descripccion de mi articulo',
          tags:['Vue','Nuxt'],
          comentarios:1,
          cover:'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg',
          slug:'1'
        },
        {
          id:7,
          title:'title articulo 7',
          date:'2019-02-02',
          tiempo_lectura: '4 minutos',
          description: 'descripccion de mi articulo',
          tags:['Vue','Nuxt'],
          comentarios:1,
          cover:'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg',
          slug:'1'
        },
        {
          id:8,
          title:'title articulo 8',
          date:'2019-02-02',
          tiempo_lectura: '4 minutos',
          description: 'descripccion de mi articulo',
          tags:['Vue','Nuxt'],
          comentarios:1,
          cover:'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg',
          slug:'1'
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

