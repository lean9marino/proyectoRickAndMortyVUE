<template>
    <article class="row align-items-center justify-content-center">
        <h1 class="tituloP">{{titulo}}</h1>
        <cardUsuarioVue :class="{ 'backgroundPar':$store.getters.changeBackground(character.id)}" @seleccion="alterarSeleccion"
        v-for="character of lista" v-bind:key="character.id" :character="character"></cardUsuarioVue>
    </article> 
</template>
<script>
    export default{
        name:'ListaUsuario',
        props:{
            lista: Array,
            titulo: String,
            moverA: String
        },
        methods:{
            alterarSeleccion(character){
                this.$store.commit(this.moverA,character.id)
            }
        },
        components:{
            cardUsuarioVue
        }
    }

    import cardUsuarioVue from './cardUsuario.vue';
</script>

<style scoped>

.backgroundPar{
    background: linear-gradient(180deg,#b2df28,#00b5cc)
}
</style>
