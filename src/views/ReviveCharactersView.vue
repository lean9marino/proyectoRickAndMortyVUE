<template>
  <div class="home">
    <ListaUsuario titulo="Personajes Muertos" :lista="allCharacters" moverA="revive"/>
    <ListaUsuario titulo="Personajes Revividos" :lista="reviveCharacters"/>
  </div>
</template>
<script>
// @ is an alias to /src
import ListaUsuario from '@/components/ListaUsuario.vue'
export default {
  name: 'ReviveCharacterView',
    components:{
        ListaUsuario
    },
    computed:{
        allCharacters(){
            return this.$store.getters.notAliveCharacters;
        },
        reviveCharacters(){
            return this.$store.state.charactersRevive
        }
    }
}
</script>