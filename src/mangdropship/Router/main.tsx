
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Index from './AppRouter/Index'
import Error_v1 from '../Error/Error_v1'
import Login from '../Auth/Login'
import Register from '../Auth/Register';
import Indexs from '../Pages/Indexs';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Index/>,
        errorElement: <Error_v1/>,
        children:[
            {
                index: true,
                element: <Indexs/>
            },
            {
                path: 'login',
                element: <Login/>,
                errorElement: <Error_v1/>
            },
            {
                path: 'register',
                element: <Register/>
            }
        ]
    }
]);

const ProvidersRoute = () =>{
    return <RouterProvider router={ routes }/>
}

export default { ProvidersRoute }

