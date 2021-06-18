export const formatCnpj = (data:string) => {
    data=data.replace(/\D/g,"")                           //Remove tudo o que não é dígito
    data=data.replace(/^(\d{2})(\d)/,"$1.$2")             //Coloca ponto entre o segundo e o terceiro dígitos
    data=data.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3") //Coloca ponto entre o quinto e o sexto dígitos
    data=data.replace(/\.(\d{3})(\d)/,".$1/$2")           //Coloca uma barra entre o oitavo e o nono dígitos
    data=data.replace(/(\d{4})(\d)/,"$1-$2")              //Coloca um hífen depois do bloco de quatro dígitos
    return data
}

export const formatTel = (data:string) =>{
    data=data.replace(/\D/g,"")
    switch(data.length){
        case 11:
            data=data.replace(/^(\d{2})(\d{5})(\d{4})/,"($1) $2-$3");
            break;
        case 10:
            data=data.replace(/^(\d{2})(\d{4})(\d{4})/,"($1) $2-$3");
            break;
        case 9:
            data=data.replace(/^(\d{5})(\d{4})/,"$1-$2");
            break;
        case 8:
            data=data.replace(/^(\d{4})(\d{4})/,"$1-$2");
            break;
    }
    return data;
}