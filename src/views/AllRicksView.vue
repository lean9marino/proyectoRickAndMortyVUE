<template>
  <div class="home">
    <ListaUsuario titulo="Todos los Ricks" :lista="allCharacters"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListaUsuario from '@/components/ListaUsuario.vue'
export default {
  name: 'AllRicksView',
    components:{
        ListaUsuario
    },
    computed:{
        allCharacters(){
            return this.$store.getters.allRicks;
        }
    }
}
</script>