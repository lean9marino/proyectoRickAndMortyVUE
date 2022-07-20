<script>
    export default{
        methods:{
            modificarSeleccion(){
                this.$emit('seleccion', this.character.id)
            }
        },
        props:{
            character: Object
        }
    }
</script>

<template>
    <div @click="modificarSeleccion" class="card border row container justify-content-center align-items-center p-4 m-3 ">
        <img :src="character.image"  alt="">
        <h1>{{character.name}}</h1>
        <h2>{{character.id}}</h2>
    </div>
</template>

<style scoped>
    .card{
        width: 20%;
        background: linear-gradient(180deg,#00b5cc,#b2df28)
    }
</style>
