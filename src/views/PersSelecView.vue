<template>
  <div class="home">
    <ListaUsuario titulo="Personajes Seleccionados" :lista="allCharacters" moverA="addCharacterAll"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListaUsuario from '@/components/ListaUsuario.vue'


export default {
  name: 'PersonajesSeleccionados',
  data(){
        return{
            
        }
    },
    components:{
        ListaUsuario
    },
    computed:{
        allCharacters(){
            return this.$store.state.charactersSelected;
        }
    }
}
</script>


