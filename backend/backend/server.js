const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 5000;

// Configuração do CORS para permitir requisições do frontend
app.use(cors());

// Configuração do pool de conexões do PostgreSQL
const pool = new Pool({
  user: 'postgres',          // Usuário padrão
  host: 'localhost',         // Endereço do servidor PostgreSQL
  database: 'minha_aplicacao', // Nome do banco de dados
  password: '12345678',     // Sua senha
  port: 5432,                // Porta padrão do PostgreSQL
});

// Rota para obter usuários
app.get('/api/usuarios', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

app.get('/api/movday', async (req, res) => {
  try {
    const result = await pool.query('SELECT sum(valor_gasto) as faturamento FROM movday');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
