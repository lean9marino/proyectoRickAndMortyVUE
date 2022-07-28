<template>
    <div v-for="(value, key , index) in character.location" :key="index">
        <p class="card-text">
            <strong>{{key}}</strong> : {{value}}
        </p>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default{
        data(){
        return{
            id: this.$route.params.id
        }
    },
    computed:{
        ...mapState(["characters"]),
        character(){
            return this.characters.find(character => character.id == this.id)
        }
    }
    }
</script>
