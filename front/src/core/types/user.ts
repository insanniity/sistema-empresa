export type UserResponse ={
    content: User[];
    totalPages:number;
    totalElements: number;
}

export type User ={
    id?: string;
    name: string;
    email: string;
}