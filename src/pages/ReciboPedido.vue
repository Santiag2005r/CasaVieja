<template>
<head>
    <title>Haz Tu Pedido</title>
</head>
<body>
    <h1>¡Realiza Tu Pedido Con Nosotros!</h1>
    <h2>Formulario Para Diligenciar Tu Pedido</h2>
    <h6><br/>Recuerda que para diligenciar tu pedido debes conocer los soguientes datos del producto
        <br/>que deseas adquirir: Nombre del producto,Código del producto(el cual se muestra debajo de la imagen 
        <br/>de cada producto), Tipo de madera, Medio de pago, TIpo de tela, Color y tipo de pintura.
    </h6>
    <div id="whatToPrint">
    <form>
        <fieldset>

            <legend>Datos del Producto</legend>
            <p>
                <label>Codigo del Producto</label>
                <input type="text" v-model="codigo"  placeholder="Ingrese el código del producto">
            </p>
            <p>
                <label>Nombre del Producto</label>
                <input type="text" v-model="nameProducto"  placeholder="Ingrese el nombre del producto">
            </p>
            <h6>Si el tipo de madera que buscas no se encuentra dentro de las opciones, por favor escoge la opción(Otro..cual) 
                y digítalo en la barra de texto que está al lado.
            </h6>
            <p>
                <label>Tipo de Madera</label>
                <select v-model="TipoMadera">
                    <option value="Madera1">opción 1</option>
                    <option value="Madera2">opción 2</option>
                    <option value="Madera3">opción 3</option>
                    <option value="Madera4">opción 4</option>
                    <!-- <option value="Madera5">Otro...cual -->
                        <!-- <input type="text" v-model="OtraMadera" size="20px"> -->
                    <!-- </option> -->
                </select>
            </p>
            <h6>Para realizar el pago de tu pedido, debes ponerte en contacto con el administrador vía whatsapp o por 
                llamada telefónica, a continuación te dejamos su contacto(SE PIDE AMABLEMENTE QUE SOLO SE CONTACTE CON
                EL VENDEDOR EN CASO DE SOLICITAR INFORMACIÓN ACERCA DE UN PRODUCTO O UN PEDIDO): 3174816178
            </h6>
            <p>
                <label>Medio de Pago</label>
                <select v-model="MedioPago">
                    <option value="Transferencia">Transferencia</option>
                    <option value="Consignación">Consignación(Nequi)</option>
                    <option value="Efectivo">Efectivo</option>
                </select>
            </p>
             <p>
                <label>Tipo de Tela</label>
                <select v-model="TipoTela">
                    <option value="Tela1">Opción 1</option>
                    <option value="Tela2">Opción 2</option>
                    <option value="Tela3">Opción 3</option>
                    <!-- <option value="">Otro...cual -->
                        <!-- <input type="text" v-model="otra tela" size="20px"> -->
                    <!-- </option> -->
                </select>
            </p> 
            <legend>Datos Personales</legend>
            <p>
                <label>Nombres y Apellidos</label>
                <input type="text" v-model="nombre"  placeholder="Nombre(s) y apellidos">
            </p>
            <p>
                <label>Tipo de Documento</label>
                <select v-model="tipoDoc">
                    <option value="CC">Cédula de ciudadanía</option>
                    <option value="TI">Tarjeta de identidad</option>
                    <option value="CE">Cédula de extranjería</option>
                </select>
            </p>
            <p>
                <label>N° de Documento</label>
                <input type="text" v-model="documento"  placeholder="Número de documento">
            </p>
            <p>
                <label>Fecha Del Pedido</label>
                <input type="DATE" v-model="fecha">
            </p>
            <p>
                <label>Dirección</label>
                <input type="text"  v-model="direccion"  placeholder="Dirección de residencia">
            </p>
            <button class="btn btn-primary" @click="addPedido">
                Añadir
              </button>
                    </fieldset>        
    </form>    
</div>
</body>
</template>

<script>
//import jsPDF from 'jspdf'
//import html2canvas from 'jspdf-html2canvas'
import {ref} from 'vue'
import axios from 'axios'
//import {useStore} from 'vuex'
//import {useRouter} from 'vue-router'
export default{

setup(){
    const codigo= ref("")
    const nameProducto= ref("")
    // const TipoMadera= ref("")
    // const MedioPago= ref("")
    // const TipoTela= ref("")
    const nombre= ref("")
    const tipoDoc= ref("")
    const documento= ref("")
    // const fecha= ref("")
    const direccion= ref("")

    function addPedido(){
      if(codigo.value != ''/*codigo.value != '' && nameProducto.value != "" && TipoMadera.value != '' && MedioPago.value != '' && TipoTela.value != '' && nombre.value != '' && tipoDoc.value  != ''  && documento.value != '' && fecha.value != '' && direccion.value != ''*/){
        const pedido = {
          codigo:codigo.value,
          nameProducto:nameProducto.value,
        //   TipoMadera:TipoMadera.value,
        //   MedioPago:MedioPago.value,
        //   TipoTela:TipoTela.value,
          nombre:nombre.value,
          tipoDoc:tipoDoc.value,
          documento:documento.value,
        //   fecha:fecha.value,
          direccion:direccion.value
            }
        
        axios.post('https://vueinventarioaxiossa-default-rtdb.firebaseio.com/pedido.json',pedido).then(res=>console.log(res)).catch(error => console.log(error))
      }
    }
    return{codigo, nameProducto,/*TipoMadera,MedioPago,TipoTela*/nombre,tipoDoc,documento,/*fecha*/direccion,addPedido}
  }
   
}
//}}
</script>

<style scoped>
form{
    width: 800px;
    height: auto;
    margin:auto;
    background-color: rgba(247, 180, 45, 0.269);
    border-radius: 30px;
    border-style: solid;
    border-width: 2px;
}
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
#whatToPrint{
    padding: 10px;
}
a{
    background-color: rgb(135, 101, 70);
    color:white;
    padding:15px;
    text-decoration: none;
    margin: auto;
    border-radius: 15px;
    border-style:solid;
    border-color: rgb(24, 13, 2);  
    border-width: 1.8px;   
    cursor:pointer;          
}
a:hover{
    background-color: rgb(111, 76, 43);
}
</style>