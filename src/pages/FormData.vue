<template>
  <div>
    <h3>A&ntilde;adir invitados</h3>

    <div class="card" style="width: 35rem">
      <div class="card-body">
        <h5 class="card-title">Registrese</h5>

        <div class="form-group">
          <label for="formGroupExampleInput">Nombre</label>
          <input
            v-model="nombreusuario"
            type="text"
            class="form-control"
            placeholder="Armando Agudelo"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Contraseña</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            placeholder="aagudelo@elemail.com"
          />
        </div>
        <!-- <div class="form-group">
          <label for="formGroupExampleInput2">Aporta</label>
          <input
            v-model="aporte"
            type="text"
            class="form-control"
            placeholder="cer-ve-za ?"
          /> 
        </div>-->
        <button class="btn btn-primary" @click="addPersona">
          A&ntilde;adir
        </button>
      </div>
    </div>
  </div>
</template>


<script>
/*eslint-disable*/
import {ref} from 'vue'
import axios from 'axios'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
export default {
  setup(){
    const store = useStore()
    const router = useRouter()
    const nombreusuario = ref("")
    const password = ref("")
    //const aporte = ref("")

    function addPersona(){
      if(nombreusuario.value != '' && password.value != ""){
        const persona = {
          nombreusuario:nombreusuario.value,
          password:password.value
          /*aporte:aporte.value*/
        }
        /*    store.dispatch("addPersona", persona);        
        router.push('/print') */
        axios.post('https://vueinventarioaxiossa-default-rtdb.firebaseio.com/persona.json',persona).then(res=>console.log(res)).catch(error => console.log(error))
      }
    }
    return{nombreusuario, password , addPersona}
  }
  /*data() {
     return {
       nombre: "",
       email: "",
       aporte: "",
     };
   },
   methods: {
     addPersona() {
       if (this.nombre != "" && this.email != "") {
         const persona = {
           nombre: this.nombre,
           email: this.email,
           aporte: this.aporte,
         };
         this.$store.dispatch("addPersona", persona);
         this.$router.push('/print')
       }
     },
   },*/
};
</script>