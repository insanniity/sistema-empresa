import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Companies from "./pages/Companies";
import Header from "./core/components/header";

const Routes = () =>{
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Redirect from="/" to="/companies" exact/>
                <Route path="/companies" exact>
                    <Companies />
                </Route>
                <Route path="/companies/adicionar" >
                    <h1>Companies Adicionar</h1>
                </Route>
                <Route path="/collaborators" exact>
                    <h1>Colaboradores ver</h1>
                </Route>
                <Route path="/collaborators/adicionar" >
                    <h1>Colaboradores Adicionar</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;