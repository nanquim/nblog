create table usuario (
    id_usuario int not null auto_increment,
    nome varchar(40), 
    email varchar(320), 
    senha text, 
    data_criacao datetime, 
    tipo_usuario varchar(10),
    primary key(id_usuario)
);

create table contato (
    id_contato int not null auto_increment,
    nome_remetente  varchar(40),
    email_remetente varchar(320),
    texto text,
    data_inclusao date,
    primary key(id_contato)
);

create table artigo (
    id_artigo int not null auto_increment,
    titulo varchar(40),
    corpo text,
    resumo varchar(200),
    categoria int,
    data_inclusao date,
    primary key(id_artigo)
);

create table artigo_categoria (
    cod_categoria int not null auto_increment,
    desc_categoria varchar(20) not null,
    primary key (cod_categoria)
);