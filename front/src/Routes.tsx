import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Companies from "./pages/Companies";
import Header from "./core/components/header";
import EditarCompany from "./pages/Companies/edit";
import Collaborators from "./pages/Collaborators";
import EditarCollaborator from "./pages/Collaborators/edit";
import Users from "./pages/Users";
import Login from "./pages/auth/login";
import {isAuthenticated} from "./core/auth/auth";
import PrivateRoute from "./core/routes/PrivateRoute";
import EditarUser from "./pages/Users/edit";

const Routes = () =>{
    return(
        <BrowserRouter>
                <Switch>
                    <Redirect from="/" to="/login" exact/>
                    <Route path="/login">
                        {isAuthenticated() ? <Redirect from="/login" to="/companies" exact/> : <Login />}
                    </Route>
                        <>
                            <Header />
                            <main className="container">
                                <Switch>
                                    <PrivateRoute path="/users" exact={true}>
                                        <Users />
                                    </PrivateRoute>
                                    <PrivateRoute path="/users/:id" exact={true}>
                                        <EditarUser />
                                    </PrivateRoute>
                                    <PrivateRoute path="/companies"  exact={true}>
                                        <Companies />
                                    </PrivateRoute>
                                    <PrivateRoute path="/companies/:companyId" exact={true}>
                                        <EditarCompany />
                                    </PrivateRoute>
                                    <PrivateRoute path="/collaborators" exact={true}>
                                        <Collaborators />
                                    </PrivateRoute>
                                    <PrivateRoute path="/collaborators/:collaboratorId" exact={true}>
                                        <EditarCollaborator />
                                    </PrivateRoute>
                                </Switch>
                            </main>
                        </>
                </Switch>
        </BrowserRouter>
    )
}

export default Routes;