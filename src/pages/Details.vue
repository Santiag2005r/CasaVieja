<template>
  <div>
    <div class="card" v-if="personas != undefined">
      <h5 class="card-header">{{ personas.nombreusuario }}</h5>
      <div class="card-body">
        <div class="card-text">
          <p>Nombre: {{personas.nombreusuario}}</p>
          <p>Contraseña: {{personas.password}}</p>
        </div>
       
      </div>
    </div>

    <div v-else class="alert alert-danger" role="alert">
      No hay datos disponibles
    </div>
    <router-link to="/print" class="btn btn-primary mt-3">Volver</router-link>
  </div>
</template>

<script>
/* import {computed} from 'vue' */
/* import {useStore} from 'vuex' */
// import {useRoute} from 'vue-router'
import{ref} from 'vue'
import axios from 'axios'

export default {
setup(){
  /*   const store = useStore() */
    // const route = useRoute()
    const personas = ref([])

   /*  const persona = computed(()=>{ */
      // const index = route.params.index;
    /*   return store.getters.getPersona(index); */
   /*  }) */
   axios.get('https://vueinventarioaxiossa-default-rtdb.firebaseio.com/persona.json')
   .then(res=>{
    console.log(res.data)
    personas.value = res.data
    /*for(const id in res.data){
      personas.value.push({
        id: id,
        nombreusuario: res.data[id].nombreusuario,
        password:res.data[id].password,
      })
    }*/
   })
   .catch(error => console.log(error))
    return {personas}
  }
  };
</script>