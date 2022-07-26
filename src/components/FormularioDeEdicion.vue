<template>
    <div>
        <form action="">
                <h1>formulario de edicion</h1>
                <input type="text" v-model="name" placeholder="Nombre">
        </form>
    </div>
</template>

<script>
    export default{
        computed:{
            name:{
                get(){
                    return this.$store.getters.characterSelectForEdit.name;
                },
                set(value){
                    this.$store.commit('editCharacter',{ name : value})
                }
            }
        },
    }
</script>