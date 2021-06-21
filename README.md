# Projeto Sistema


---

## Tecnologias

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![SpringBoot](https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![PostgreeSql](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![NodeJs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![BootStrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![Html](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

---
## Sobre

Sistema gerenciador de empresas e colaboradores.

### Features
    - [x] Cadastro e gerenciamento de usuário
    - [x] Cadastro e gerenciamento de empresas
    - [x] Cadastro e gerenciamento de colaboradores

      

---

## BackEnd

Backend Feito em Rest API utilizando Java 11, SpringBoot 2.5.1, JWT e Oauth2

### Requisitos

- Java SDK11

### Links
 - [Código fonte](https://github.com/insanniity/sistema-empresa/tree/main/backend)
 - [Build](https://github.com/insanniity/sistema-empresa/releases/tag/Demo)


### Starting local backend comand
````
 java -jar api-empresa-0.0.1-SNAPSHOT.jar
````
### Localhost start on
````
 http://localhost:8080/api
````

### Variaveis de ambiente
| VARIAVEL | TIPO |
| ------ | ------ |
| CLIENT_ID | String |
| CLIENT_SECRET | String |
| DATABASE_URL | URL |
| JWT_DURATION | Mileseconds |
| JWT_SECRET | String |
| PROFILE_TYPE | test - dev - prod|

### Preview [here](https://insannity-company.herokuapp.com/api/)

```
https://insannity-company.herokuapp.com/api/

//Usuário
user: bob@gmail.com
senha: 123456
```
### Api documentation [here](https://insannity-company.herokuapp.com/api/swagger-ui/)

```
/swagger-ui/
```
---

## Front Web

Front feito em React.js e bootstrap 5

### Requisitos

- NodeJs

### Links
 - [Código fonte](https://github.com/insanniity/sistema-empresa/tree/main/front)

### Preview [here](https://insannity-empresa.netlify.ap/)

```bash
https://insannity-empresa.netlify.app/

//Usuário
user: bob@gmail.com
senha: 123456
```

### Instalação

Required Node.js >=14 

```bash
npm install
```

```bash
npm start
```

### Localhost start on
````
 http://localhost:3000/
````

### Variaveis de ambiente
| VARIAVEL | TIPO |
| ------ | ------ |
| REACT_APP_BACKEND_URL | URL |
| REACT_APP_CLIENT_ID | String |
| REACT_APP_CLIENT_SECRET | String |




