import {useForm} from "react-hook-form";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import {makeLogin} from "../../core/utils/request";
import {saveSessionData} from "../../core/auth/auth";

type FormState ={
    username:string;
    password:string;
}

const Login = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<FormState>();
    const [hasError, setHasError] = useState(false);
    const history = useHistory();

    const onSubmit = (data:FormState) =>{
        makeLogin(data)
            .then(response=>{
                setHasError(false);
                saveSessionData(response.data);
                history.push("/companies");
            })
            .catch(() => {setHasError(true)});
    }

    return(
        <div className="container-fluid vertical-center horizontal-center text-center">
            <main className="form-signin">
                <form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="form-floating">
                        <input type="email" id="username" className={`form-control ${errors.username ? 'is-invalid' : ''}`} {...register("username", {required: true, value: "bob@gmail.com"})} />
                        <label htmlFor="username">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" id="password" autoComplete="off" className={`form-control ${errors.password ? 'is-invalid' : ''}`} {...register("password", {required: true, value: "123456"})} />
                        <label htmlFor="password">Password</label>
                    </div>
                    {hasError && <div className="invalid-feedback">This field username is required or invalid</div>}
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
                </form>
            </main>
        </div>
    )
}

export default Login;