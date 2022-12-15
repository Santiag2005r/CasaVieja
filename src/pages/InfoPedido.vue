<template>
  <div>
    <div class="card" v-if="pedidos != undefined">
      <h5 class="card-header">{{ pedidos.fecha }}</h5>
      <div class="card-body">
        <div class="card-text">
          <p>Fecha: <b>{{pedidos.fecha}}</b></p>
          <p>Codigo:  <b>{{pedidos.codigo}}</b></p>
          <p>Nombre Producto: <b>{{pedidos.nameProducto }}</b></p>
          <p>Tipp de Madera: <b>{{pedidos.TipoMadera}}</b></p>
          <p>Medio de pago:  <b>{{pedidos.MedioPago}}</b></p>
          <p>Tipo de tela: <b>{{pedidos.TipoTela}}</b></p>
          <p> Nombre: <b>{{pedidos.nombre}}</b></p>
          <p>Tipo de documento: <b>{{pedidos.tipoDoc}}</b></p>
          <p>Numero documento: <b> {{pedidos.documento}}</b></p>
          <p>Dirección:  <b>{{pedidos.direccion}}</b></p>

        </div>
       
      </div>
    </div>

    <div v-else class="alert alert-danger" role="alert">
      No hay datos disponibles
    </div>
    <router-link to="/PedidoGet" class="btn btn-primary mt-3">Volver</router-link>
  </div>
</template>

<script>
/* import {computed} from 'vue' */
/* import {useStore} from 'vuex' */
import {useRoute} from 'vue-router'
import{ref} from 'vue'
import axios from 'axios'

export default {
setup(){
  /*   const store = useStore() */
     const route = useRoute()
    const pedidos = ref([])

   /*  const persona = computed(()=>{ */
      const index = route.params.index;
    /*   return store.getters.getPersona(index); */
   /*  }) */
   axios.get('https://casavieja-7b8f4-default-rtdb.firebaseio.com/pedido/'+index+'.json')
   .then(res=>{
    console.log(res.data)
    pedidos.value = res.data
   
   })
   .catch(error => console.log(error))
    return {pedidos}
  }
  };
</script>
<style scoped>

</style>