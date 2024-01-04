# Projeto Store Manager

## Contexto

Este projeto é uma aplicação back-end no formato CRUD. Trata-se de um app de admnistração simplificada de uma loja. É possível acessar endpoints para listar os produtos ou as vendas realizadas, além de poder adicionar e deletar produtos e inserir novas vendas.

Os dados da loja são salvos em um banco de dados SQL em um contâiner do docker enquanto o back-end para fornecer os endpoints ficam em outro, os dois são orquestrados pelo docker-compose e conectados pela biblioteca MySQL2 do Node.

Esse projeto explora a arquitetura de camadas, no caso, controllers, models e services. Foram desenvolvidos middlaweres de validação para garatir a inserção correta de dados no banco.

Testes unitários desenvolvidos utilizando as bibliotecas Node Sinon e Chai.


## Técnologias usadas
- Node
- JavaScript ECMS6
- Bibliotecas MySQL2, express do Node.
- Docker, Docker-compose.
- Testes com Sinon, Chai.

## Iniciando o projeto localmente:

- Clone esse repositório em uma pasta.
- É necessário ter o docker-compose, execute o comando: **docker-compose up --build**
- Pronto, o terminal irá mostrar que está conectado a porta 3001
- Confira os endpoints GET e POST em /products and /sales e os deamais explorando os arquivos do router.

## Testes
- Em um novo terminal, acesse o contâiner rodando o back-end com o comando: **docker exec -i store_manager bash**
- Dentro do novo terminal do contâiner utilize os testes com: **npm run test:mocha**








