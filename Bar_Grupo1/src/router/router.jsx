import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Carta from '../carta/Carta'
import MenuPlatos from '../carta/MenuPlatos'
import MenuTragos from '../carta/MenuTragos'
import TragosContainer from '../components/tragos/TragosContainer'


const router = createBrowserRouter ([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <App/>
            },
            {
                path: "/LaMixtureria",
                element: <App/>
            },
        ]
    },
    {
        path: "/LaMixtureria/Carta",
        element: <Carta/>,
        children: 
        [
            {
                path: "/LaMixtureria/Carta/Tragos",
                element: <TragosContainer/>
            },
            {
                path: "/LaMixtureria/Carta/Platos",
                element: <MenuPlatos/>
            }
        ]
    },
])

export default router