import {isAuthenticated, Role} from '../auth/auth';
import React from 'react';
import {Redirect, Route} from 'react-router-dom';

type Props ={
    children: React.ReactNode;
    path: string;
    exact: boolean;
    allowedRoutes?: Role[];
}

const PrivateRoute = ({ children, path,exact} : Props) => {
    return (
      <Route
        path={path}
        exact={exact}
        render={() => {
                if(!isAuthenticated()){
                    return(
                        <Redirect to="/login" />
                    )
                }
                return children;
            }
        }
      />
    );
  }

export default PrivateRoute;