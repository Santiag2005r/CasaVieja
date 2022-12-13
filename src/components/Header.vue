<template>
  <body>
    
 
  <nav class="navbar navbar-light nav-pills">
    <!-- <div class="container"> -->
      <ul class="nav">
       
        <li class="nav-item">
          <router-link to="/Index" class="nav-link" active-class="active"
            >Inicio</router-link
          >
        </li>
        <li class="nav-item" v-if="verificar">
          <router-link to="/FormData" class="nav-link" active-class="active"
            >Agregar Usuarios</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/Pedidos" class="nav-link" active-class="active"
            >Pedidos</router-link
          >
        </li>
        <li class="nav-item" v-if="verificar">
          <router-link to="/print" class="nav-link" active-class="active"
            >Usuarios Registrados</router-link
          >
        </li>
         <li class="nav-item" v-if="check">
          <router-link to="/LoginUno" class="nav-link" active-class="active"
            >Inicio de Sesion</router-link
          >
        </li> 
        <!-- <li class="nav-item">
          <router-link to="/Productos" class="nav-link" active-class="active"
            >Productos</router-link
          >
        </li> -->
               <li class="nav-item" v-if="verificar">
          <router-link to="/Pedido" class="nav-link" active-class="active"
            >¡Pedir!</router-link
          >
        </li>
        <button v-if="verificar"><a href="/log">Cerrar Sesion</a></button>
      </ul>
  </nav>
</body>
</template>
<script>

// import LoginUno from "./components/LoginUno";
/*import{ref} from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router';*/
export default {
 
  data(){
    return{
      mostrar:this.$store.state.mostrar,
      login:this.$store.state.login 
    }
  },
  computed:{
    verificar(){
    return  this.$store.state.mostrar
  },
  check(){
      return  this.$store.state.login 
    }
}}
</script>
<style>
body{
  background-color: #d8c6bc;
}
.nav-item{
  color: #8b6c53;
}
.nav-link{
  color: #FFF;
  background-color:#8e400000;
  border-color: #95786b;
  transition-duration: 0.4s;

}
.nav-link:hover {
  background-color: #af9784;
  color: white;
}
.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    color: #fff;
    background-color: #9f8672;
}
.navbar{
  color:#8b6c53
}
</style>
