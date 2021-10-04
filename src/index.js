const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

// request para listar os arquivos de um repositório
const listArchives = {
  method: 'GET',
  url: 'https://api.github.com/repos/{USER}/{NAME-REPOSITORY}/contents/',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: 'token {TOKEN}'
  }
};

axios.request(listArchives).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});


// request para listar as especificações de um repositório
const repositoryAccess = {
  method: 'GET',
  url: 'https://api.github.com/repos/{USER}/{NAME-REPOSITORY}',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: 'token {TOKEN}'
  }
};

axios.request(repositoryAccess).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});


// request para fazer download de um repositório 
/* Caso queira fazer download em formato zip usar zipball na url */
/* Caso queira fazer download em formato tar usar tarball na url */
const downRepository = {
  method: 'GET',
  url: 'https://api.github.com/repos/{USER}/{NAME-REPOSITORY}/zipball/main',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: 'token {TOKEN}'
  }
};

axios.request(downRepository).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

app.listen(3333);

