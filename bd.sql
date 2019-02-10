create table usuarios (nome varchar(40), email varchar(320), senha text, data_criacao datetime, tipo_usuario varchar(10));

create table contato (
    id_contato int not null auto_increment,
    nome_remetente  varchar(40),
    email_remetente varchar(320),
    texto text,
    hora_inclusao date,
    primary key(id_contato)
);