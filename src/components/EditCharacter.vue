<template>
    <article class="row  justify-content-center">
        <div class="col-8 row">
            <h1 class="tituloP">{{titulo}}</h1>
            <cardUsuarioVue @seleccion="editarPersonaje"
            v-for="character of lista" v-bind:key="character.id" :character="character"></cardUsuarioVue>
        </div>
        <div class="col-4">
            <form action="">
                <h1>formulario de edicion</h1>
                <input type="text" v-model="name" placeholder="Nombre">
            </form>
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
        computed:{
            /*characterSelectForEdit(){
                return this.$store.getters.characterSelectForEdit;
            }*/
            name:{
                get(){
                    return this.$store.getters.characterSelectForEdit.name;
                },
                set(value){
                    this.$store.commit('editCharacter',{ name : value})
                }
            }
        },
        components:{
            cardUsuarioVue
        }
    }

    import cardUsuarioVue from '../components/cardUsuario.vue';
</script>