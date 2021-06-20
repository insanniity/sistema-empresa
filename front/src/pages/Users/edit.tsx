import {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {makePrivateRequest} from "../../core/utils/request";
import {useForm} from "react-hook-form";
import {toast} from 'react-toastify';
import {Company} from "../../core/types/company";
import {User} from "../../core/types/user";
import Breadcrumb from "../../core/components/breadcrumb";


type ParamsType = {
    id: string;
}

type FormState = {
    name: string;
    email: string;
    password: string;
    password_repeat: string;
}

const EditarUser = () => {
    const { id } = useParams<ParamsType>();
    const history = useHistory();
    const [user, setUser] = useState<User>();
    const { register, handleSubmit, formState: { errors }, setValue, reset, getValues} = useForm<FormState>();
    const isEditing = id !== 'adicionar';
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if(isEditing) {
            setIsLoading(true);
            makePrivateRequest({url: `/users/${id}`})
                .then(response => {
                    setUser(response.data);
                    setValue('name', response.data.name);
                    setValue('email', response.data.email);
                })
                .finally(() => setIsLoading(false));
        }
        reset();
    }, [id, isEditing, setValue, reset]);


    const onSubmit = (data:Company) => {
        makePrivateRequest({url: isEditing ? `/users/${id}` : '/users', method: isEditing ? 'PUT' : 'POST', data})
            .then(() => {
                toast.success('Usuário salvo com sucesso!');
                history.push('/users');
            })
            .catch(() =>{
                toast.error('Erro ao salvar usuário!');
            });
    }

    const handleCancel = () =>{
        history.push('/users');
    }

    return(
        <>
            <Breadcrumb controller="User" action={user?.name || id} />
            <div className="p-5 rounded bg-white">
                <div className="row">
                    <h2>{isEditing ? `Editando ${user?.name}` : "Adicionando usuário"}</h2>
                </div>
                <hr className="mb-5"/>
                {isLoading && ("Loading")}
                <form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
                    <div className="row mb-3">
                        <label className="col-lg-2 col-form-label">Nome</label>
                        <div className="col-lg-10">
                            <input type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`} placeholder="Nome" {...register("name", {required: true})} />
                            {errors.name && <div className="invalid-feedback">This field is required or invalid</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-lg-2 col-form-label">Email</label>
                        <div className="col-lg-10">
                            <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder="Email"   {...register("email", {required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i})} />
                            {errors.email && <div className="invalid-feedback">This field is required or invalid</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-lg-2 col-form-label">Senha</label>
                        <div className="col-lg-10">
                            <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} placeholder="******" {...register("password", {required: true, minLength: {
                                    value: 6,
                                    message: "Senha deve ter no minimo 6 caracteres"
                                }})} />
                            {errors.password && <div className="invalid-feedback">This field is required or invalid. {errors.password.message}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-lg-2 col-form-label">Confirme a senha</label>
                        <div className="col-lg-10">
                            <input type="password" className={`form-control ${errors.password_repeat ? 'is-invalid' : ''}`} placeholder="******" {...register("password_repeat", {required: true, validate: (value) => value === getValues("password")|| "As senhas não são iguais." })} />
                            {errors.password_repeat && <div className="invalid-feedback">This field is required or invalid. {errors.password_repeat.message}</div>}
                        </div>
                    </div>
                    <div className="col-lg-12 text-center mt-5">
                        <button className="btn btn-primary border-radius-10 px-5 me-5">SALVAR</button>
                        <button type="reset" className="btn btn-danger border-radius-10 px-5" onClick={handleCancel}>CANCELAR</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditarUser;