import {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {makePrivateRequest} from "../../core/utils/request";
import {useForm} from "react-hook-form";
import {toast} from 'react-toastify';
import {Company} from "../../core/types/company";
import {formatCnpj, formatTel} from "../../core/utils/formatValues";
import {cnpj} from 'cpf-cnpj-validator';
import Breadcrumb from "../../core/components/breadcrumb";
import MyLoader from "../../core/components/contentLoader";


type ParamsType = {
    companyId: string;
}

const EditarCompany = () => {
    const { companyId } = useParams<ParamsType>();
    const history = useHistory();
    const { register, handleSubmit, formState: { errors }, setValue, reset} = useForm<Company>();
    const isEditing = companyId !== 'adicionar';
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if(isEditing) {
            setIsLoading(true);
            makePrivateRequest({url: `/companies/${companyId}`})
                .then(response => {
                    setValue('nome', response.data.nome);
                    setValue('cnpj', formatCnpj(response.data.cnpj));
                    setValue('telefone', formatTel(response.data.telefone));
                    setValue('email', response.data.email);
                    setValue('endereco', response.data.endereco);
                })
                .finally(() => setIsLoading(false));
        }
        reset();
    }, [companyId, isEditing, setValue, reset]);


    const onSubmit = (data:Company) => {
        if(cnpj.isValid(data.cnpj)){
            data.cnpj = formatCnpj(data.cnpj);
            data.telefone = formatTel(data.telefone);
            makePrivateRequest({url: isEditing ? `/companies/${companyId}` : '/companies', method: isEditing ? 'PUT' : 'POST', data})
                .then(() => {
                    toast.success('Empresa salvo com sucesso!');
                    history.push('/companies');
                })
                .catch(() =>{
                    toast.error('Erro ao salvar empresa!');
                });
        }else{
            toast.error('CNPJ inválido!');
        }

    }

    const handleCancel = () =>{
        history.push('/companies');
    }

    return(
        <>
            <Breadcrumb controller="Empresa" action={companyId} />
            <div className="p-5 rounded bg-white">
                {isLoading ? <MyLoader/> : (
                    <>
                        <div className="row">
                            <h2>{isEditing ? `Editando ${companyId}` : "Adicionando empresa"}</h2>
                        </div>
                        <hr className="mb-5"/>
                        <form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
                            <div className="row mb-3">
                                <label className="col-lg-2 col-form-label">Nome</label>
                                <div className="col-lg-10">
                                    <input type="text" className={`form-control ${errors.nome ? 'is-invalid' : ''}`} placeholder="Nome" {...register("nome", {required: true})} />
                                    {errors.nome && <div className="invalid-feedback">This field is required or invalid</div>}
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-lg-2 col-form-label">CNPJ</label>
                                <div className="col-lg-10">
                                    <input type="text" className={`form-control ${errors.cnpj ? 'is-invalid' : ''}`} placeholder="00.000.000/0000-00"   {...register("cnpj", {required: true, pattern: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/i})} />
                                    {errors.cnpj && <div className="invalid-feedback">This field is required or invalid</div>}
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
                            <div className="col-lg-12 text-center mt-5">
                                <button className="btn btn-primary border-radius-10 px-5 me-5">SALVAR</button>
                                <button type="reset" className="btn btn-danger border-radius-10 px-5" onClick={handleCancel}>CANCELAR</button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </>
    )
}

export default EditarCompany;