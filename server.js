require("dotenv").config(); // Carrega variáveis de ambiente do arquivo .env

// [API FUNCIONAL] Importa o framework Express para criar e gerenciar o servidor HTTP
const express = require("express");
const app = express();

// [API FUNCIONAL] Define a porta onde o servidor vai rodar (3000 por padrão)
const PORT = process.env.PORT || 3000;

// [TRAFEGO DE DADOS] Habilita o middleware para a API entender e processar dados no formato JSON
app.use(express.json());

// Banco de dados temporário na memória e contador para gerar IDs únicos (Voluntários)
let voluntarios = [];
let proximoId = 1;

// Funções de validação usando Expressões Regulares (Regex)
function emailValido(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function telefoneValido(telefone) {
  const regex = /^[0-9]{10,11}$/;
  return regex.test(telefone);
}

// [VALIDAÇÕES] Middleware que verifica os dados enviados antes de permitir salvar o voluntário
function validarCadastro(req, res, next) {
  const { nome, email, telefone, mensagem } = req.body;
  
  // Valida se o nome existe e tem pelo menos 3 caracteres
  if (!nome || nome.length < 3) {
    // [TESTAR ENDPOINTS] Retorna erro 400 (Bad Request) caso a validação falhe
    return res.status(400).json({ erro: "Nome deve ter pelo menos 3 caracteres" });
  }
  
  // Valida o formato do e-mail
  if (!email || !emailValido(email)) {
    return res.status(400).json({ erro: "Email inválido" });
  }
  
  // Valida se o telefone tem apenas números e a quantidade correta de dígitos
  if (!telefone || !telefoneValido(telefone)) {
    return res.status(400).json({ erro: "Telefone inválido (digite 10 ou 11 números)" });
  }
  
  // Valida o limite de caracteres da mensagem
  if (mensagem && mensagem.length > 500) {
    return res.status(400).json({ erro: "Mensagem deve ter no máximo 500 caracteres" });
  }
  
  // Se tudo estiver certo, o 'next()' autoriza a execução da próxima função da rota
  next();
}

app.get("/", (req, res) => {
  res.send("API rodando!");
});

// [ROTAS ORGANIZADAS + GET] Rota para listar todos os voluntários salvos
app.get("/voluntarios", (req, res) => {
  res.json(voluntarios);
});

// [ROTAS ORGANIZADAS + POST] Rota para cadastrar um novo profissional voluntário
// [VALIDAÇÕES] O middleware 'validarCadastro' é executado antes da lógica de criação
app.post("/voluntarios", validarCadastro, (req, res) => {
  const { nome, email, telefone, mensagem } = req.body;
  
  // Cria o objeto do voluntário com um ID gerado automaticamente
  const novoVoluntario = {
    id: proximoId++,
    nome,
    email,
    telefone,
    mensagem: mensagem || null,
  };
  
  // Adiciona o novo voluntário à nossa lista na memória
  voluntarios.push(novoVoluntario);
  
  // [TESTAR ENDPOINTS] Retorna o código 201 (Created) confirmando que o profissional foi registrado
  res.status(201).json({
    mensagem: "Profissional voluntário cadastrado com sucesso!",
    voluntario: novoVoluntario,
  });
});

// [API FUNCIONAL] Inicia o servidor e exibe a URL de acesso no console
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
