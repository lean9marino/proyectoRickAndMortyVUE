<template>
  <div class="home row">
    <ListaUsuario titulo="Todos los personajes" :lista="allCharacters" moverA="addCharacterSelected"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListaUsuario from '@/components/ListaUsuario.vue'
export default {
  name: 'HomeView',
    components:{
        ListaUsuario
    },
    computed:{
        allCharacters(){
            return this.$store.state.characters;
        }
    }
}
</script>


