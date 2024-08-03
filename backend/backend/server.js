const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Configuração do Pool de Conexão
const pool = new Pool({
  user: '',       // Usuário do PostgreSQL
  host: '',      // Endereço do host do banco de dados
  database: '',  // Nome do banco de dados
  password: '',   // Nova senha do PostgreSQL
  port: 5432,             // Porta padrão do PostgreSQL
});

app.use(cors());

// Rota para buscar dados
app.get('/api/visitors', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM visitors');
    res.json(rows);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    res.status(500).json({ error: 'Erro ao buscar dados' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
