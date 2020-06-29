
const axios = require('axios');

const cardapio = () => {

  axios.get('http://api-menu.herokuapp.com/api/items')
    .then(function (response) {
      const cardapio = response.data;
      console.log(cardapio);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      console.log("Execução concluída!");
    });
}

const cadastrarItem = () => {
  axios.post('http://api-menu.herokuapp.com/api/items', {
    nome: 'Novo Item',
    preco: '12.80',
    acompanhamentos: `Rafael's X Burger`,
  })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

}

const excluirItem = () => {
  axios.delete('http://api-menu.herokuapp.com/api/items/1', {
  });
}


const cadastrarNovoItemCarrinho = () => {
  axios.post('http://api-menu.herokuapp.com/api/cart/', {
    idItem: '1',
  })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

}

const delivery = () => {

  axios.get('http://api-menu.herokuapp.com/api/cart/')
    .then(function (response) {
      const cardapio = response.data;
      console.log(cardapio);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      console.log("Execução concluída!");
    });
}

