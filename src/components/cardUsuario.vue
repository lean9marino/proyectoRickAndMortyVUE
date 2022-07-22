<script>
    export default{
        methods:{
            modificarSeleccion(){
                this.$emit('seleccion', this.character)
            },            
        },
        computed:{
            largoDelNombre(){
                if(this.character.name.length <= 17){
                    let largoFaltante = 17 - this.character.name.length
                    return this.character.name + ' '.repeat(largoFaltante)
                }
                return this.character.name.substring(0,14) +'...'
            }
        },
        props:{
            character: Object
        },

    }
</script>

<template>
    <div @click="modificarSeleccion" class="card border row container justify-content-center align-items-center p-4 m-3 col-3">
        <img :src="character.image"  alt="">
        <h1>{{largoDelNombre}}</h1>
        <h2>{{character.id}}</h2>
        <h4>Estado: {{character.status}}</h4>
    </div>
</template>

<style scoped>
    .card{
        
        background: linear-gradient(180deg,#00b5cc,#b2df28)
    }
</style>
