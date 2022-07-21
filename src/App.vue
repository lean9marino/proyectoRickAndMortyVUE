<script>
  import Logo from './components/logo.vue';
  export default{
    async created(){
      try{
        await this.$store.dispatch('getCharacters')
      }catch(error){
        console.error(error)
      }
    },
    components:{
      Logo
    }
  }
  
  import 'bootstrap-vue/dist/bootstrap-vue.css';
  import 'bootstrap/dist/css/bootstrap.css';
</script>

<template>
  <Logo/>
  <nav>
    <router-link to="/">Lista completa</router-link> |
    <router-link to="/seleccionados">Seleccionados</router-link> |
    <router-link to="/ricks">Lista de Ricks</router-link> |
    <router-link to="/revive">Lista Para Revivir</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #b2df28;
}

body{
  background: linear-gradient(180deg,#00b5cc,#b2df28)
}
</style>
