<template>
    <div>
        <EditCharacterVue :lista="allCharacters"/>
    </div>
</template>

<script>
    export default{
        components:{
            EditCharacterVue
        },
        computed:{
        allCharacters(){
            return this.$store.state.characters;
        }
    }
    }
    import EditCharacterVue from '@/components/EditCharacter.vue'
</script>