export type CollaboratorResponse ={
    content: Collaborator[];
    totalPages:number;
    totalElements: number;
}

export type Collaborator ={
    id?: string;
    nome: string;
    cpf: string;
    telefone: string;
    email: string;
    endereco: string;
    companyId: string;
}

