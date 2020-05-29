# Projeto_Agenda

O projeto consiste no desenvolvimento de uma API_RESTFUL, que manipula contatos dentro de uma agenda (CRUD).
Foi utilizado a biblioteca Express para a criação da API.

Funcionalidades:
  1. Sistema de cadastro.
  2. Sistema de login.
  3. Criar/Editar/Excluir/Listar contatos na agenda.

Requisitos do projeto:
  1. Deve possuir suporte a maior quantidade possivel de navegadores.
  2. Deve possuir uma conexão com um banco de dados.
  3. Deve utilizar um padrão de arquiterura de software.
  4. Deve conter verificações de segurança como JWT e demais validações necessárias.
  
Implementação
  1. Estou utilizando o webpack para realizar a conversão do código atualizado para um padrão compativel com a maioria dos navegadores.
  2. A base de dados utilizada foi o MongoDB, o tratamento e modelagem dos dados foram realizados através da biblioteca mongoose.
  3. O padrão de arquitetura de software utilizado foi MVC.
  4. Proteção a ataques CSRF através da biblioteca "csurf". As senhas dos usuários serão salvas como um hash de senha, para isso foi    utilizado a biblioteca "bcryptjs", também foi implementado a validação do usuário através de um token gerado quando o cliente realiza o  login.
  5. Utilização de flash-messages para o controle de mensagens de sucesso e erro.
