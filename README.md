# [en]Node JWT auth and refresh token
# [pt-BR]Autenticação JWT com Node e refresh token

## [en]A refresh token strategy for JWT using Node
## [pt-BR]Uma estratégia de refresh token para JWT usando Node

![Badge](https://img.shields.io/static/v1?label=NodeJS&message=12.18.1)
![Badge](https://img.shields.io/static/v1?label=TypeScript&message=3.9.6)
![Badge](https://img.shields.io/static/v1?label=Express&message=4.17.7)
![Badge](https://img.shields.io/static/v1?label=CORS&message=2.8.6)
![Badge](https://img.shields.io/static/v1?label=BcryptJS&message=2.4.2)
![Badge](https://img.shields.io/static/v1?label=JsonWebToken&message=8.5.0)
![Badge](https://img.shields.io/static/v1?label=TypeORM&message=0.2.25)

[en]In this repository I demonstrate JWT authentication together with a refresh token technique to keep the user always logged in. Including, delivering the token with a different expiration date (exp) in case of login in a mobile application, for example.
In addition, I represented the following scenario: a table of users - with different levels of permission access -, a table of books (which belongs to these users), and a table of ~~ blacklist ~~ (perjective expression?!?!) Denied tokens that represent a validation for "revoked" tokens that have already been refreshed or that have been subtracted, for example.

[pt-BR]Neste repositório faço uma demonstração de uma autenticação JWT juntamente com uma técnica de refresh token para manter o usuário sempre logado. Inclusive, entregando o token com uma válidade (exp) diferente em caso de login num aplicativo móvel, por exemplo.
Além disso, representamos o seguinte cenário: uma tabela de usuários - com diferentes níveis de permissão de acesso -, uma tabela de livros (percentes a estes usuários), e uma tabela de ~~lista negra~~ (vamos substituir esta expressão perojativa?) tokens negados que representam uma validação para "revogarmos" tokens que já foram atualizados ou que tenham sido subtraídos, por exemplo.

## Quick Start / [pt-BR]Como executar

#### Using this repository template / [pt-BR]Utilizando este repositório template
Just use the "use this template" button in the upper right corner and generate your project from this template. [pt-BR]Apenas utilize o botão **"use this template"** no canto superior direito e gere o seu projeto a partir deste template.

#### Cloning the repository / [pt-BR]Clonando o repositório
    $ git clone https://github.com/itallonardi/node-jwt-refresh-token.git

#### Go to the project folder / [pt-BR]Acesse a pasta do projeto
    $ cd node-jwt-refresh-token

#### Install the dependencies / [pt-BR]Instale as dependências
    $ yarn install
#### or / [pt-BR]ou
    $ npm install
    
#### Set the environment variables / [pt-BR]Configure as variáveis de ambiente
Use the file **.env.example** for create your **.env** file, and the **ormconfig.json.example** file to create your **ormconfig.json**.

[pt-BR]Utilize o arquivo **.env.example** para criar o seu próprio arquivo **.env**, e o arquivo **ormconfig.json.example** para criar o seu **ormconfig.json**

This project uses MySQL. Use the sgbd of your choice, such as postgres or another.

[pt-BR]Este projeto utiliza MySQL. Use o sgbd de sua preferência, como postgres ou outro.

**MIT License /[pt-BR]Licença MIT**

### Author / [pt-BR]Autor
---

<a href="http://itallonardi.com">
 <img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/4490817?s=150&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Itallo Nardi</b></sub></a> <a href="http://itallonardi.com/" title="Itallo Nardi website"></a>


Made by Itallo Nardi / [pt-BR]Feito por Itallo Nardi

[![Instagram Badge](https://img.shields.io/badge/-@itallonardi-dd2a7b?style=flat-square&labelColor=8134af&logo=instagram&logoColor=white&link=https://instagram.com/itallonardi)](https://instagram.com/itallonardi) 
[![Linkedin Badge](https://img.shields.io/badge/-Itallo%20Nardi-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/itallo-nardi-5970a51b2/)](https://www.linkedin.com/in/itallo-nardi-5970a51b2/) 
[![Gmail Badge](https://img.shields.io/badge/-itallonardi@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:itallonardi@gmail.com)](mailto:itallonardi@gmail.com)
