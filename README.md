# Projeto_Agenda

O projeto foi criado com a finalidade de adquirir conhecimento sobre as linguagens,frameworks, arquiteturas, versionamento e demais softwares utilizados. 
Utilizarei o framework Express para realizar as mais diversas operações que serão demandadas para realizar a conexão web.
Utilizarei também várias extensões que o NPM disponibiliza algumas serão descritas abaixo.

Funcionalidades:
  1. Sistema de cadastro.
  2. Sisetma de login.
  3. Criar/Editar/Excluir/Listar contatos na agenda. Operações CRUD.

Requisitos do projeto:
  1. Deve possuir suporte a maior quantidade possivel de navegadores.
  2. Deve possuir uma conexão com um banco de dados.
  3. Deve utilizar um padrão de arquiterura de software.
  4. Deve conter verificações de segurança como protecão a senha dos usuários e demais dados sigilosos.
  
Sobre o projeto:
  1. Estou utilizando o webpack para realizar a conversão do código atualizado para um padrão compativel com a maioria dos navegadores.
  2. Optei por utilizar o MongoDB pois libera armazenamento para usuários free, por ser um BD NoSQL utilizaremos a extensão mongoose para realizar a modelagem dos dados.
  3. A arquitetura de software escolhida foi MVC.
  4. Proteção a ataques CSRF através da extensão "csurf". As senhas dos usuários serão salvas no banco de dados com um hash de senha, utilizaremos a extensão "bcryptjs". Terei o cuidado de sempre validar qualquer tipo de dado enviado pelos usuários.
  
  
  OBS: Projeto ainda em andamento, mais informações podem ser inseridas posteriormente.
