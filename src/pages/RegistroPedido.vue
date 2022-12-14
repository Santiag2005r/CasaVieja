<template>
  <div>
    <title>Haz tu pedido</title>

    <div class="card" style="width: 35rem">
      <div class="card-body">
        <h1 class="card-title">¡Realiza Tu Pedido Con Nosotros!</h1>
        <h2>Formulario Para Diligenciar Tu Pedido</h2>
    <h6><br/>Recuerda que para diligenciar tu pedido debes conocer los soguientes datos del producto
        <br/>que deseas adquirir: Nombre del producto,Código del producto(el cual se muestra debajo de la imagen 
        <br/>de cada producto), Tipo de madera, Medio de pago, TIpo de tela, Color y tipo de pintura.
    </h6>
    <legend>Datos del Producto</legend>
        <div class="form-group">
          <label for="formGroupExampleInput">Codigo Del Producto</label>
          <input
            v-model="codigo"
            type="text"
            class="form-control"
            placeholder="Ingrese el código del producto"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">Nombre del Producto</label>
          <input
            v-model="nameProducto"
            type="text"
            class="form-control"
            placeholder="Ingrese el nombre del producto"
          />
        </div>

        <h6>Si el tipo de madera que buscas no se encuentra dentro de las opciones, por favor escoge la opción(Otro..cual) 
          y digítalo en la barra de texto que está al lado.
      </h6>

        <div class="form-group">
          <label for="formGroupExampleInput2">Tipo de Madera</label>
          <select
            v-model="TipoMadera"
            type="text"
            class="form-control"
            placeholder="Seleccione el tipo de madera"
        ><option value=""></option>
          <option value="Madera1">opción 1</option>
          <option value="Madera2">opción 2</option>
          <option value="Madera3">opción 3</option>
          <option value="Madera4">opción 4</option>

        </select>
        </div>

        <h6>Para realizar el pago de tu pedido, debes ponerte en contacto con el administrador vía whatsapp o por 
          llamada telefónica, a continuación te dejamos su contacto(SE PIDE AMABLEMENTE QUE SOLO SE CONTACTE CON
          EL VENDEDOR EN CASO DE SOLICITAR INFORMACIÓN ACERCA DE UN PRODUCTO O UN PEDIDO): 3174816178
      </h6>

      <div class="form-group">
        <label for="formGroupExampleInput2">Medio de Pago</label>
        <select
          v-model="MedioPago"
          type="text"
          class="form-control"
          placeholder="Seleccione el tipo de pago"
      ><option value=""></option>
        <option value="Transferencia">Transferencia</option>
        <option value="Consignación">Consignación(Nequi)</option>
        <option value="Efectivo">Efectivo</option>

    </select>
      </div>
        
      <div class="form-group">
        <label for="formGroupExampleInput2">Tipo de Tela</label>
        <select
          v-model="TipoTela"
          type="text"
          class="form-control"
          placeholder="Seleccione el tipo de tela"
      ><option value=""></option>
               <option value="Tela1">Opción 1</option>
               <option value="Tela2">Opción 2</option>
               <option value="Tela3">Opción 3</option>

    </select>
      </div>
      <h5>Datos Personales</h5>
        <div class="form-group">
          <label for="formGroupExampleInput">Nombres y Apellidos</label>
          <input
            v-model="nombre"
            type="text"
            class="form-control"
            placeholder="Nombre(s) y apellidos"
          />
        </div>

        <div class="form-group">
          <label for="formGroupExampleInput2">Tipo de Documento</label>
          <select
            v-model="tipoDoc"
            type="text"
            class="form-control"
            placeholder="Seleccione el tipo de documento"
        ><option value="0"></option>
          <option value="CC">Tarjeta de identidad</option>
          <option value="TI">Cédula de ciudadanía</option>
          <option value="CE">Cédula de extranjería</option>
        </select>
        </div>

        <div class="form-group">
          <label for="formGroupExampleInput">N° de Documento</label>
          <input
            v-model="documento"
            type="text"
            class="form-control"
            placeholder="Número de documento"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">Dirección</label>
          <input
            v-model="direccion"
            type="text"
            class="form-control"
            placeholder="Dirección de residencia"
          />
        </div>
        <div>
          <label>Fecha Del Pedido</label>
                <input type="DATE" v-model="fecha">
        </div>
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
    const codigo = ref("")
    const nameProducto = ref("")
    const TipoMadera = ref("")
    const MedioPago = ref("")
    const TipoTela = ref("")
    const nombre = ref("")
    const tipoDoc= ref("")
    const documento = ref("")
    const direccion = ref("")
    const fecha = ref("")

    //const aporte = ref("")

    function addPedido(){
      if(codigo.value != ''){
       const pedido = {
          codigo:codigo.value,
          nameProducto:nameProducto.value,
          TipoMadera:TipoMadera.value,
          MedioPago:MedioPago.value,
          TipoTela:TipoTela.value,
          nombre:nombre.value,
          tipoDoc:tipoDoc.value,
          documento:documento.value,
          direccion:direccion.value,
          fecha:fecha.value,

          /*aporte:aporte.value*/
         }
        /*    store.dispatch("addPersona", persona);        
        router.push('/print') */
        axios.post('https://vueinventarioaxiossa-default-rtdb.firebaseio.com/pedido.json',pedido).then(res=>console.log(res)).catch(error => console.log(error))
      }
    }
    return{codigo, nameProducto, TipoMadera, MedioPago, TipoTela, nombre, tipoDoc, documento, direccion ,fecha, addPedido}
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
<style scoped>
h1{
    font-family: arial black;
    text-align: center;
    cursor:default;
    color:rgb(150, 128, 110);
}
h2{
    font-family:Arial, Helvetica, sans-serif;
    font-size:36px;
    color: black;
    text-align: center;
}
h6{
    color:rgb(102, 102, 102);
    text-align: center;
    margin-left: 100px;
    margin-right: 100px;
}
legend{
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
}
p{
    text-align: center;
}
input{
    border-radius: 10px;
    border-style: none;
    font-family: "Poppins", sans-serif;
    margin:10px;
    padding: 10px;
}

.card {
    width: auto;
    height: 100%;
    margin:auto;
    background-color: rgba(218, 182, 136, 0.877);
    border-style: none;
    border-radius: 30px;
    border-style: solid;
    border-width: 2px;
    justify-content: center;
}
</style>