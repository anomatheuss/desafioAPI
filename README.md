# 🩺 API de Médicos e Dentistas Voluntários

Este projeto consiste em uma API funcional desenvolvida com **Node.js** e **Express**, simulando um sistema de cadastro para profissionais de saúde (médicos e dentistas) interessados em participar de ações sociais.

## 🚀 O que eu aprendi neste projeto

Através do desenvolvimento desta API, consolidei conceitos fundamentais de desenvolvimento Back-End:

*   **Node.js & Express:** Como configurar um servidor do zero e gerenciar rotas de forma escalável.
*   **Verbos HTTP (GET e POST):** 
    *   **GET /voluntarios:** Implementação para listar todos os profissionais cadastrados.
    *   **POST /voluntarios:** Implementação para receber e processar o registro de novos voluntários.
*   **Middlewares:** Uso do `express.json()` para permitir que a API entenda e processe dados no formato JSON, o padrão da indústria.
*   **Validação de Dados:** Criação de lógica personalizada para garantir a integridade dos dados:
    *   Nomes com pelo menos 3 caracteres.
    *   Validação de formato de E-mail via Regex.
    *   Telefones com 10 ou 11 números.
    *   Limite de 500 caracteres para mensagens.
*   **Gerenciamento de Erros:** Utilização de Status Codes (como o **400 Bad Request**) para informar ao usuário quando os dados não cumprem os requisitos.
*   **Armazenamento em Memória:** Uso de arrays e contadores de ID para simular um banco de dados temporário.

## 🛠️ Ferramentas Utilizadas

*   **JavaScript (ES6+)**
*   **Node.js**
*   **Express**
*   **Dotenv** (para variáveis de ambiente)
*   **Nodemon** (para desenvolvimento ágil)
*   **Git & GitHub** (para versionamento e hospedagem)

## 📡 Testando com Postman

Uma parte crucial do desenvolvimento foi o teste exaustivo dos endpoints utilizando o **Postman**. Através dele, realizei:

1.  **Requisições POST:** Enviei objetos JSON no corpo da requisição para cadastrar novos voluntários e verifiquei o retorno de sucesso (**201 Created**).
2.  **Requisições GET:** Validei se a lista de profissionais estava sendo atualizada corretamente após cada cadastro.
3.  **Testes de Validação:** Forcei o envio de dados incorretos (e-mails inválidos, nomes curtos) para garantir que as validações estavam bloqueando dados inconsistentes com as mensagens de erro apropriadas.

---
Desenvolvido por **Matheus** como parte do Desafio de API Back-End. 💻🏆
