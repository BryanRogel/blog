<template lang="pug">
    time(:datetime='date') {{mensajeFecha}} 
</template>
<script>
import { formatDistance, format } from 'date-fns'
import { es }                     from 'date-fns/locale'

export default {
    props:{
        date:{type:String, required:true},
        time:{type:String},

    },
    computed:{
        mensajeFecha(){
            const [anio, mes, dia] = this.date.split('-');
            const [h,m]            = this.time && this.time.split(':') || [0,0];
            const fechaActual      = new Date();
            const fechaPublicacion = new Date(anio,mes-1,dia,h,m);
            let mensaje;

            if(fechaActual.getFullYear()-anio >= 1)
                mensaje = format(fechaPublicacion,"d 'de' MMMM 'de' yyyy",{ locale: es });
            else
                mensaje = 'Hace '+ formatDistance(fechaPublicacion, fechaActual, { locale: es });    
            
            return mensaje;
        }
    }
}
</script>

