<template>
  <div>
    <h3>Registrar Pedido</h3>

    <div class="card" style="width: 35rem">
      <div class="card-body">
        <h5 class="card-title">Registrese</h5>

        <div class="form-group">
          <label for="formGroupExampleInput">Nombre</label>
          <input
            v-model="cliente"
            type="text"
            class="form-control"
            placeholder="Armando Agudelo"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Direccion</label>
          <input
            v-model="direccion"
            type="text"
            class="form-control"
            placeholder="Cra 17 calle 45 #16-02"
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
        <button class="btn btn-primary" @click="addPedido">
          Añadir
        </button>
      </div>
    </div>
  </div>
</template>


<script>
/*eslint-disable*/
import {ref} from 'vue'
import axios from 'axios'
// import {useStore} from 'vuex'
// import {useRouter} from 'vue-router'
export default {
  setup(){
    // const store = useStore()
    // const router = useRouter()
    const cliente = ref("")
    const direccion = ref("")
    //const aporte = ref("")

    function addPedido(){
      if(cliente.value != '' && direccion.value != ""){
       const pedido = {
          cliente:cliente.value,
          direccion:direccion.value
          /*aporte:aporte.value*/
         }
        /*    store.dispatch("addPersona", persona);        
        router.push('/print') */
        axios.post('https://vueinventarioaxiossa-default-rtdb.firebaseio.com/pedido.json',pedido).then(res=>console.log(res)).catch(error => console.log(error))
      }
    }
    return{cliente, direccion , addPedido}
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