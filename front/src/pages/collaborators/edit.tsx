import {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {makeRequest} from "../../core/utils/request";
import {useForm} from "react-hook-form";
import {toast} from 'react-toastify';
import {formatCpf, formatTel} from "../../core/utils/formatValues";
import {cpf} from 'cpf-cnpj-validator';
import {Collaborator} from "../../core/types/collaborator";
import {Company} from "../../core/types/company";


type ParamsType = {
    collaboratorId: string;
}

type FormState = {
    nome: string;
    cpf: string;
    telefone: string;
    email: string;
    endereco: string;
    companyId: string;
}

const EditarCollaborator = () => {
    const { collaboratorId } = useParams<ParamsType>();
    const [collaborator, setCollaborator] = useState<Collaborator>();
    const [companies, setCompanies] = useState<Company[]>();
    const history = useHistory();
    const { register, handleSubmit, formState: { errors }, setValue, reset} = useForm<FormState>();
    const isEditing = collaboratorId !== 'adicionar';
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if(isEditing) {
            setIsLoading(true);
            makeRequest({url: `/collaborators/${collaboratorId}`})
                .then(response => {
                    setCollaborator(response.data);
                    setValue('nome', response.data.nome);
                    setValue('cpf', formatCpf(response.data.cpf));
                    setValue('telefone', formatTel(response.data.telefone));
                    setValue('email', response.data.email);
                    setValue('endereco', response.data.endereco);
                })
                .finally(() => setIsLoading(false));
        }
        reset();
    }, [collaboratorId, isEditing, setValue, reset]);

    useEffect(() => {
        setIsLoading(true);
        const params ={
            linesPerPage: 50,
        }
        makeRequest({url: `/companies`, params})
            .then(response => setCompanies(response.data.content))
            .finally(() => setIsLoading(false));
    }, []);

    const onSubmit = (data:FormState) => {
        if(!data.companyId){
            data.companyId = collaborator?.companyId as string;
        }
        if(cpf.isValid(data.cpf)){
            data.cpf = formatCpf(data.cpf);
            data.telefone = formatTel(data.telefone);
            makeRequest({url: isEditing ? `/collaborators/${collaboratorId}` : '/collaborators', method: isEditing ? 'PUT' : 'POST', data})
                .then(() => {
                    toast.success('Colaborador salvo com sucesso!');
                    history.push('/collaborators');
                })
                .catch(() =>{
                    toast.error('Erro ao salvar Colaborador!');
                });
        }else{
            toast.error('Cpf inválido!');
        }
    }

    const handleCancel = () =>{
        history.push('/collaborators');
    }

    return(
        <div className="p-5 rounded bg-white">
            <div className="row">
                <h2>{isEditing ? `Editando ${collaboratorId}` : "Adicionando colaborador"}</h2>
            </div>
            <hr className="mb-5"/>
            {isLoading && ("Loading")}
            <form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
                <div className="row mb-3">
                    <label className="col-lg-2 col-form-label">Nome</label>
                    <div className="col-lg-10">
                        <input type="text" className={`form-control ${errors.nome ? 'is-invalid' : ''}`} placeholder="Nome" {...register("nome", {required: true})} />
                        {errors.nome && <div className="invalid-feedback">This field is required or invalid</div>}
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-lg-2 col-form-label">CPF</label>
                    <div className="col-lg-10">
                        <input type="text" className={`form-control ${errors.cpf ? 'is-invalid' : ''}`} placeholder="000.000.000-00"   {...register("cpf", {required: true, pattern: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/i})} />
                        {errors.cpf && <div className="invalid-feedback">This field is required or invalid</div>}
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-lg-2 col-form-label">Telefone</label>
                    <div className="col-lg-10">
                        <input type="tel" className={`form-control ${errors.telefone ? 'is-invalid' : ''}`} placeholder="(00) 00000-0000" {...register("telefone", {required: true, pattern: /^(\([0-9]{2}\)|([0-9]{2}))(\s|)(([0-9]{5})|([0-9]{4}))(-|\s|)([0-9]{4})$/i})} />
                        {errors.telefone && <div className="invalid-feedback">This field is required or invalid</div>}
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-lg-2 col-form-label">Email</label>
                    <div className="col-lg-10">
                        <input type="email"  className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder="Email" {...register("email", {required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i})} />
                        {errors.email && <div className="invalid-feedback">This field is required or invalid</div>}
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-lg-2 col-form-label">Endereço</label>
                    <div className="col-lg-10">
                        <input type="text" className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder="Endereço" {...register("endereco", {required: true})} />
                        {errors.endereco && <div className="invalid-feedback">This field is required or invalid</div>}
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-lg-2 col-form-label">Empresa</label>
                    <div className="col-lg-10">
                        <select {...register("companyId")} className={`form-control ${errors.companyId ? 'is-invalid' : ''}`} defaultValue={collaborator?.companyId} >
                            {!isEditing && <option selected={true}>Selecione a empresa</option>}
                            {companies?.map(x => (<option value={x.id} key={x.id} selected={x.id === collaborator?.companyId ? true : false} >{x.nome}</option>))}
                        </select>
                        {errors.companyId && <div className="invalid-feedback">This field is required or invalid</div>}
                    </div>
                </div>
                <div className="col-lg-12 text-center mt-5">
                    <button className="btn btn-primary border-radius-10 px-5 me-5">SALVAR</button>
                    <button type="reset" className="btn btn-danger border-radius-10 px-5" onClick={handleCancel}>CANCELAR</button>
                </div>
            </form>
        </div>
    )
}

export default EditarCollaborator;