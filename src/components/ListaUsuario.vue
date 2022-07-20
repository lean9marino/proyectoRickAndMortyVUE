<template>
    <article class="row align-items-center justify-content-center">
        <h1 class="tituloP">{{titulo}}</h1>
        <cardUsuarioVue @seleccion="alterarSeleccion"
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
            alterarSeleccion(id){
                var indice = this.lista.findIndex(char =>{
                    return char.id === id
                })

                if(indice > -1){
                    //obtener el elemento a extraer
                    
                    this.$store.commit(this.moverA,indice)
                }
            }
        },
        components:{
            cardUsuarioVue
        }
    }

    import cardUsuarioVue from './cardUsuario.vue';
</script>
