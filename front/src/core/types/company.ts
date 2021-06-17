export type CompanyResponse ={
    content: Company[];
    totalPages:number;
    totalElements: number;
}

export type Company ={
    id: string;
    nome: string;
    cnpj: string;
    telefone: string;
    email: string;
    endereco: string;
}