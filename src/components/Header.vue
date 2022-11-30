<template>
  <nav class="navbar navbar-light nav-pills" style="background-color: #ffc10761">
    <!-- <div class="container"> -->
      <ul class="nav">
       
        <li class="nav-item" v-if="verificar">
          <router-link to="/" class="nav-link" active-class="active"
            >Formulario</router-link
          >
        </li>
        <li class="nav-item" v-if="verificar">
          <router-link to="/print" class="nav-link" active-class="active"
            >Personas</router-link
          >
        </li>
         <li class="nav-item">
          <router-link to="/LoginUno" class="nav-link" active-class="active"
            >Inicio de Sesion</router-link
          >
        </li> 
        <!-- <li class="nav-item">
          <router-link to="/Productos" class="nav-link" active-class="active"
            >Productos</router-link
          >
        </li> -->
        <li class="nav-item">
          <router-link to="/IndexCasa" class="nav-link" active-class="active"
            >Inicio</router-link
          >
        </li>
      </ul>
    <!-- </div> -->
  </nav>
</template>
<script>

// import LoginUno from "./components/LoginUno";
/*import{ref} from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router';*/
export default {
 
  data(){
    return{
      error:false,
      mostrar:this.$store.state.mostrar,
    }
  },
  computed:{
    verificar(){
    return  this.$store.state.mostrar
  }
}}
</script>
<style>

</style>
