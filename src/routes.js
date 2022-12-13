import LoginUno from './components/LoginUno.vue'
//import Header from './pages/Header.vue'
import FormData from './pages/FormData.vue'
import PrintData from './pages/PrintData.vue'
import Details from './pages/Details.vue'
import Index from './pages/ProductosCard.vue'
import Recibo from './pages/ReciboPedido.vue'
import Pedidos from './pages/RegistroPedido.vue'

export const routes = [
    {path:'/LoginUno',component:LoginUno},
    //{path:'/Header', component:Header},
    {path:'/registro', component:FormData},
    {path:'/print', component:PrintData},
    {path:'/details/:index', component:Details},
    {path:'/Index', component:Index},
    {path:'/log', component:LoginUno},
    {path:'/Pedido', component:Recibo},
    {path:'/Pedidos',component:Pedidos}
]