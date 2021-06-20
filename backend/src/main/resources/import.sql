INSERT INTO tbl_company (id, cnpj, email, endereco, nome, telefone) VALUES ('EMP-0001', '05.445.870/0001-98', 'empresa1@gmail.com', 'Rua Seilandia, N56, Centro', 'Empresa1', '31 99999-9999') ;
INSERT INTO tbl_company (id, cnpj, email, endereco, nome, telefone) VALUES ('EMP-0002', '05.445.870/0001-98', 'empresa2@gmail.com', 'Rua Seilandia, N56, Centro', 'Empresa2', '31 99999-9999') ;
INSERT INTO tbl_company (id, cnpj, email, endereco, nome, telefone) VALUES ('EMP-0003', '05.445.870/0001-98', 'empresa3@gmail.com', 'Rua Seilandia, N56, Centro', 'Empresa3', '31 99999-9999') ;


INSERT INTO tbl_collaborator (id, cpf, email, endereco, nome, telefone, company_id) VALUES ('CLB-0001', '166.977.670-06', 'jao@gmail.com', 'Rua Seilandia, N56, Centro', 'Jao', '31 99999-9999', 'EMP-0001');
INSERT INTO tbl_collaborator (id, cpf, email, endereco, nome, telefone, company_id) VALUES ('CLB-0002', '166.977.670-06', 'bob@gmail.com', 'Rua Seilandia, N56, Centro', 'Bob', '31 99999-9999', 'EMP-0001');
INSERT INTO tbl_collaborator (id, cpf, email, endereco, nome, telefone, company_id) VALUES ('CLB-0003', '166.977.670-06', 'maria@gmail.com', 'Rua Seilandia, N56, Centro', 'Maria', '31 99999-9999', 'EMP-0002');
INSERT INTO tbl_collaborator (id, cpf, email, endereco, nome, telefone, company_id) VALUES ('CLB-0004', '166.977.670-06', 'jose@gmail.com', 'Rua Seilandia, N56, Centro', 'Jose', '31 99999-9999', 'EMP-0002');

INSERT INTO tbl_users (name, email, password) VALUES ('Bob Brown', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tbl_roles (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tbl_user_role (user_id, role_id) VALUES (1, 1);