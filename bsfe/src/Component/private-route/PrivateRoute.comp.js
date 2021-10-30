import React from 'react'
import { Route, Redirect} from "react-router-dom";
import { DefaultLayout } from '../../Layout/DefaultLayout';

// creat isAuth to check and private route
const isAuth =true

export const PrivateRoute = ({children, ...rest}) => {
    return (
        <Route
        {...rest}
           render = {() =>
                isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Redirect to="/"/>
        }    
        />
    )
}
