import {isAuthenticated, Role} from '../auth/auth';
import React from 'react';
import {Redirect, Route} from 'react-router-dom';

type Props ={
    children: React.ReactNode;
    path: string;
    exactPath?: boolean;
    allowedRoutes?: Role[];
}

const PrivateRoute = ({ children, path, exactPath} : Props) => {
    return (
      <Route 
        path={path}       
        render={({ location }) => {
                if(!isAuthenticated()){
                    return(
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
                return children;
            }            
        }
        exact={exactPath}
      />
    );
  }

export default PrivateRoute;