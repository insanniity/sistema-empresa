import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Companies from "./pages/Companies";
import Header from "./core/components/header";
import EditarCompany from "./pages/Companies/edit";
import Collaborators from "./pages/collaborators";
import EditarCollaborator from "./pages/collaborators/edit";

const Routes = () =>{
    return(
        <BrowserRouter>
            <Header />
            <main className="container">
                <Switch>
                    <Redirect from="/" to="/companies" exact/>
                    <Route path="/companies" exact>
                        <Companies />
                    </Route>
                    <Route path="/companies/:companyId" exact>
                        <EditarCompany />
                    </Route>
                    <Route path="/collaborators" exact>
                        <Collaborators />
                    </Route>
                    <Route path="/collaborators/:collaboratorId" exact>
                        <EditarCollaborator />
                    </Route>
                </Switch>
            </main>
        </BrowserRouter>
    )
}

export default Routes;