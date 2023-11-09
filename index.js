const express = require('express');
const app = express();
const path = require('path');
const { fetchAPI } = require('./apiService');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', async (req, res) => {
  try {
    const apiData = await fetchAPI();
    const results = apiData.results;

    res.render('index', { results });
  } catch (error) {
    console.error('Erro ao buscar a lista:', error);
    res.status(500).send('Erro ao obter dados da API');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
