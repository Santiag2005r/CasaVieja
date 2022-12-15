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
  axios.get('https://casavieja-7b8f4-default-rtdb.firebaseio.com/pedido.json')
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
<style scoped>
h3{
  text-align: center;
  font-family: Arial black;
  color:rgb(153, 109, 60);
  text-shadow: 2px 2px rgb(48, 26, 5);
  font-size: 40px;
}
li{
  border-style: solid;
  border-color: #221812;
  font-family:  "Poppins", sans-serif;
  font-size: 20px;
  margin-left: 25%;
  margin-right: 25%;  
  background-color: rgba(247, 180, 45, 0.269);
  
}
.list-group{
  border-radius:15px;
  border-width: 2px;
  color: black;

}
a {
    color: #221812;
    text-decoration: none;
    background-color: transparent;
}
</style>