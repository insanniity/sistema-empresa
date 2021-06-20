import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Companies from "./pages/Companies";
import Header from "./core/components/header";
import EditarCompany from "./pages/Companies/edit";
import Collaborators from "./pages/Collaborators";
import EditarCollaborator from "./pages/Collaborators/edit";
import Users from "./pages/Users";
import Login from "./pages/auth/login";
import {isAuthenticated} from "./core/auth/auth";
import PrivateRoute from "./core/routes/PrivateRoute";

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
                                    <PrivateRoute path="/users" exactPath={true}>
                                        <Users />
                                    </PrivateRoute>
                                    <PrivateRoute path="/users/:id" >
                                        <h1>Edit Users</h1>
                                    </PrivateRoute>
                                    <PrivateRoute path="/companies" exactPath={true}>
                                        <Companies />
                                    </PrivateRoute>
                                    <PrivateRoute path="/companies/:companyId" >
                                        <EditarCompany />
                                    </PrivateRoute>
                                    <PrivateRoute path="/collaborators" exactPath={true}>
                                        <Collaborators />
                                    </PrivateRoute>
                                    <PrivateRoute path="/collaborators/:collaboratorId" >
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