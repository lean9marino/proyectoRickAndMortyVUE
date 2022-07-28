<template>
    <article class="row justify-content-center">
        <div class="card p-2" style="width:400px">
        <section> 
            <a @click.prevent="loadPrevCharacter" href="#">Anterior Personaje</a> |
            <a @click.prevent="loadNextCharacter" href="#">Proximo Personaje</a>
        </section>
          <div class="card-body">
            <img class="card-img-top" :src="character.image" alt="Card image" style="width:50%">
            <h4 class="card-title">{{character.name}}</h4>
            <p class="card-text">Estado: {{character.status}}</p>
            <p class="card-text">Especie: {{character.species}}</p>
            <p class="card-text">Genero: {{character.gender}}</p>
          </div>
        <RouterLink class="btn btn-primary" :to="{ name: 'datos'}">Ver mas Datos</RouterLink>
        <RouterView/>
    </div>
    </article>
    
</template>

<script>
    import { mapState } from 'vuex'
    export default{
        components:{
        },
        data(){
            return{
                id: this.$route.params.id
            }
        },
        beforeRouteUpdate(to,from,next){
        this.id = to.params.id
        next()
        },
        computed:{
        ...mapState(["characters"]),
         character (){
            return this.characters.find(character => character.id == this.id)
        }
        },
        methods:{
            loadPrevCharacter(){
                this.$router.push({
                    name:"character",
                    params:{id:this.$route.params.id-1}
                })
            },
            loadNextCharacter(){
                this.$router.push({
                    name:"character",
                    params:{id:parseInt(this.$route.params.id)+1}
                })
            }
        },
    }
</script>
<style>
</style>