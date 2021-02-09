const animes = require('../modal/animes.json');

const listarTodosAnimes = (request, response) => {
  response.status(200).send(animes);
};

const pesquisaPorId = (request, response) => {
  const animeEncontrado = animes.filter((anime) => {
    return anime.id === Number(request.params.id)
  });

  if (animeEncontrado.length < 0) {
    response.status(200).send(animeEncontrado);  
  } else {
    response.status(404).send("Anime não encontrado");
  }
};

module.exports = { listarTodosAnimes, pesquisaPorId };
