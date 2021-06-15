INSERT INTO tbl_company (id, cnpj, codigo, email, endereco, nome, telefone) VALUES (1, '05.445.870/0001-98', 'EMP001', 'empresa1@gmail.com', 'Rua Seilandia, N56, Centro', 'Empresa1', '31 99999-9999') ;
INSERT INTO tbl_company (id, cnpj, codigo, email, endereco, nome, telefone) VALUES (2, '05.445.870/0001-98', 'EMP002', 'empresa2@gmail.com', 'Rua Seilandia, N56, Centro', 'Empresa2', '31 99999-9999') ;
INSERT INTO tbl_company (id, cnpj, codigo, email, endereco, nome, telefone) VALUES (3, '05.445.870/0001-98', 'EMP003', 'empresa3@gmail.com', 'Rua Seilandia, N56, Centro', 'Empresa3', '31 99999-9999') ;


INSERT INTO tbl_collaborator (id, codigo, cpf, email, endereco, nome, telefone, company_id) VALUES (1,'CLB001', '166.977.670-06', 'jao@gmail.com', 'Rua Seilandia, N56, Centro', 'Jao', '31 99999-9999', 1);
INSERT INTO tbl_collaborator (id, codigo, cpf, email, endereco, nome, telefone, company_id) VALUES (2,'CLB002', '166.977.670-06', 'bob@gmail.com', 'Rua Seilandia, N56, Centro', 'Bob', '31 99999-9999', 1);
INSERT INTO tbl_collaborator (id, codigo, cpf, email, endereco, nome, telefone, company_id) VALUES (3,'CLB003', '166.977.670-06', 'maria@gmail.com', 'Rua Seilandia, N56, Centro', 'Maria', '31 99999-9999', 2);
INSERT INTO tbl_collaborator (id, codigo, cpf, email, endereco, nome, telefone, company_id) VALUES (4,'CLB004', '166.977.670-06', 'jose@gmail.com', 'Rua Seilandia, N56, Centro', 'Jose', '31 99999-9999', 2);
