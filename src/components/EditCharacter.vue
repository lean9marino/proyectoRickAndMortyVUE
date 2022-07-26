<template>
    <article class="row  justify-content-center">
        <div class="col-8 row">
            <h1 class="tituloP">{{titulo}}</h1>
            <cardUsuarioVue @seleccion="editarPersonaje"
            v-for="character of lista" v-bind:key="character.id" :character="character"></cardUsuarioVue>
        </div>
        <div class="col-4">
            <FormularioDeEdicion/>
        </div>
    </article> 
</template>
<script>
    export default{
        name:'EditCharacter',
        props:{
            lista: Array,
            titulo: String,
            moverA: String
        },
        methods:{
            editarPersonaje(character){
                this.$store.commit('setSelectedCharacter',character)
            }
        },
        
        components:{
    cardUsuarioVue,
    FormularioDeEdicion
}
    }

    import cardUsuarioVue from '../components/cardUsuario.vue';
import FormularioDeEdicion from './FormularioDeEdicion.vue';
</script>