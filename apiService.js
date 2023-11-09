const axios = require('axios');

async function fetchAPI() {
  try {
    const urlList = 'https://api.mercadolibre.com/users/41725574/items/search?status=active&tags=poor_quality_thumbnail';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer APP_USR-2798119618392320-110914-68b8220993b55027b96cc73334cc7c85-41725574'
    };

    const responseList = await axios.get(urlList, { headers });
    return responseList.data;
  } catch (error) {
    console.error('Erro ao buscar a lista:', error);
    throw new Error('Erro ao obter dados da API');
  }
}

// Adicione o seguinte código para obter os dados da API ao ser executado diretamente
if (require.main === module) {
  (async () => {
    try {
      const apiData = await fetchAPI();
      console.log(apiData);
    } catch (error) {
      console.error('Erro ao buscar a lista:', error);
    }
  })();
}

module.exports = { fetchAPI };
