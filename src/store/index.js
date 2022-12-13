import {createStore} from 'vuex'

export const store = createStore({
    state:{
        personas:[{nombre:'Marcela', aporte:'Cerveza'}],
        mostrar:false, 
        login:true

    },
    getters:{
        getPersonas:state => {
            return state.personas
        },
        getPersona:(state) => (index) => {
            return state.personas[index]
        }
    },
    mutations:{
        addPersona(state, payload){
            state.personas.push(payload)
        }
    },
    actions:{
        addPersona(context, payload){
            context.commit('addPersona', payload)
        }
    }
})