<template>
  <div>
    <h3>Pedidos</h3>

    <ul class="list-group">
      <li v-for="(pedido, i) in pedidos" :key="i"  class="list-group-item">
        <router-link :to="`/InfoPedido/${pedido.id}`">{{
          pedido.fecha
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import {ref} from 'vue';
export default {
  setup(){
    const pedidos = ref([])
  axios.get('https://vueinventarioaxiossa-default-rtdb.firebaseio.com/pedido.json')
  .then(res =>{
    console.log(res)
    for(const id in res.data){
      pedidos.value.push({
        id: id,
          codigo:res.data[id].codigo,
          nameProducto:res.data[id].nameProducto,
          TipoMadera:res.data[id].TipoMadera,
          MedioPago:res.data[id].MedioPago,
          TipoTela:res.data[id].TipoTela,
          nombre:res.data[id].nombre,
          tipoDoc:res.data[id].tipoDoc,
          documento:res.data[id].documento,
          direccion:res.data[id].direccion,
          fecha:res.data[id].fecha,
      })
    }
  })
  .catch(error=>console.log(error))
  return {pedidos};
}
  /* computed: {
    personas() {
      return this.$store.getters.getPersonas;
    },
  }, */
};
  
</script>