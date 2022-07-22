import { createStore } from 'vuex'
const API = "https://rickandmortyapi.com/api/character";

function FiltradoPor(lista,key,nombre){
  return lista.filter(elementos =>{
    return elementos[key].includes(nombre) 
  })
}
function ObtenerIndice(lista,id){
  return lista.findIndex(char =>{
    return char.id === id
})
}

export default createStore({
  strict: true,
  state: {
    charactersSelected:[],
    characters: [],
    charactersRevive:[],
    characterSelectForEdit:{}
  },
  getters: {
    allRicks(state){
      const listaCompleta = FiltradoPor(state.characters,'name','Rick')
      const listaDeSleccionados = FiltradoPor(state.charactersSelected,'name','Rick')
      return listaCompleta.concat(listaDeSleccionados)
    },
    notAliveCharacters(state){
      return FiltradoPor(state.characters,'status','Dead')
    },
    characterSelectForEdit(state){
      return state.characterSelectForEdit
    },
    changeBackground(state){
      return id =>{
        return state.characters.find(character => character.id === id).id % 2 == 0
      }
    }

  },
  mutations: {
    addCharacterSelected(state,id){
      var indice = ObtenerIndice(state.characters,id)
      state.charactersSelected.unshift(state.characters.splice(indice,1)[0])
    },
    addCharacterAll(state,id){
      var indice = ObtenerIndice(state.charactersSelected,id)
      state.characters.unshift(state.charactersSelected.splice(indice,1)[0])
    },
    allCharacter(state,characters){
      state.characters = characters
    },
    revive(state,id){
      let character = state.characters.filter(char => char.id === id)[0]
      character.status = "Revived"
      state.charactersRevive.push(character)
    },
    setSelectedCharacter(state,character){
      state.characterSelectForEdit = character
    },
    editCharacter(state, data){
      //Buscar el indice del personaje
      const index = state.characters.findIndex(character => character.id === state.characterSelectForEdit.id)
      //Componer el personaje en base a las propiedades cambiadas
      const character = Object.assign({},state.characters[index],data)

      //Actualizar activando la reactividad, ya no funciona en vue 3
      this.state.characters[index] = character
    }
  },
  actions: {
    async getCharacters({commit}){
        const response = await fetch(API);
        const data = await response.json();
        const personajes = data.results;
        console.log(personajes)
        commit("allCharacter",personajes);
    }
  },
  modules: {
  }
})
