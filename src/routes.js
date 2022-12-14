import LoginUno from './components/LoginUno.vue'
import FormData from './pages/FormData.vue'
import PrintData from './pages/PrintData.vue'
import Details from './pages/Details.vue'
import Index from './pages/ProductosCard.vue'
import Pedidos from './pages/RegistroPedido.vue'
import PedidoGet from './pages/ImprimirPedido.vue'
import InfoPedido from './pages/InfoPedido.vue'



export const routes = [
    {path:'/LoginUno',component:LoginUno},
    {path:'/FormData', component:FormData},
    {path:'/print', component:PrintData},
    {path:'/details/:index', component:Details},
    {path:'/Index', component:Index},
    {path:'/log', component:LoginUno},
    {path:'/PedidoGet', component:PedidoGet},
    {path:'/Pedidos',component:Pedidos},
    {path:'/InfoPedido/:index',component:InfoPedido}

]