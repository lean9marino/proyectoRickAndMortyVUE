import { createStore } from 'vuex'
const API = "https://rickandmortyapi.com/api/character";

export default createStore({
  state: {
    charactersSelected:[],
    characters: []
  },
  getters: {
    allRicks(state){
      const listaCompleta = state.characters.filter(characters =>{
        return characters.name.includes('Rick') || characters.name.includes('rick')
      })
      const listaDeSleccionados = state.charactersSelected.filter(characters =>{
        return characters.name.includes('Rick') || characters.name.includes('rick')
      })
      return listaCompleta.concat(listaDeSleccionados)
    }
  },
  mutations: {
    addCharacterSelected(state,id){
      state.charactersSelected.unshift(state.characters.splice(id,1)[0])
    },
    addCharacterAll(state,id){
      state.characters.unshift(state.charactersSelected.splice(id,1)[0])
    },
    allCharacter(state,characters){
      state.characters = characters
    }
  },
  actions: {
    async getCharacters({commit}){
        const response = await fetch(API);
        const data = await response.json();
        const personajes = data.results;
        commit("allCharacter",personajes);
    }
  },
  modules: {
  }
})
