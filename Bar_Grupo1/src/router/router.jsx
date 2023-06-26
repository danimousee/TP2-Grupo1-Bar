import { createBrowserRouter, redirect } from 'react-router-dom'
import App from '../App'
import Carta from '../carta/Carta'
import MenuPlatos from '../carta/MenuPlatos'
import MenuTragos from '../carta/MenuTragos'
import TragosContainer from '../components/tragos/TragosContainer'
import PlatosContainer from '../components/platos/PlatosContainer'
import Home from '../components/Home'


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [

            {
                path: "/LaMixtureria",
                element: <Home />
            },
            {
                path: "/LaMixtureria/Carta",
                element: <Carta />,
            },
        
            {
                path: "/LaMixtureria/Carta/Tragos",
                element: <TragosContainer />,
        
            },
            {
                path: "/LaMixtureria/Carta/Platos",
                element: <PlatosContainer />,
            }

        ]
    }
])

export default router