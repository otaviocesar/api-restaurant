'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

let items = require('./items');

let carts = require('./cart');

let deliveries = require('./delivery');

app.get('/api/items', (request, response) => {
  if (!items) {
    response.status(404).json({ message: 'No items found.' });
  }
  response.json(items);
});

app.get('/api/items/:id', (request, response) => {

  let itemId = request.params.id;

  let item = items.filter(item => {
    return item.id == itemId;
  });

  if (!item) {
    response.status(404).json({ message: 'Item não encontrado' });
  }

  response.json(item[0]);
});

app.post('/api/items', (request, response) => {

  let item = {
    id: items.length + 1,
    nome: request.body.nome,
    preco: request.body.preco,
    acompanhamentos: request.body.email
  };

  items.push(item);

  response.json(item);

});

app.put('/api/items/:id', (request, response) => {

  let itemId = request.params.id;

  let item = items.filter(item => {
    return item.id == itemId;
  })[0];

  const index = items.indexOf(item);

  let keys = Object.keys(request.body);

  keys.forEach(key => {
    item[key] = request.body[key];
  });

  items[index] = item;

  // response.json({ message: `Item ${itemId} atualizado.`});
  response.json(items[index]);
});

app.delete('/api/items/:id', (request, response) => {
  
  let itemId = request.params.id;

  let item = items.filter(item => {
    return item.id == itemId;
  })[0];

  const index = items.indexOf(item);

  items.splice(index, 1);

  response.json({ message: `Item ${itemId} deletado.`});

});

app.get('/api/carts', (request, response) => {
  if (!carts) {
    response.status(404).json({ message: 'Nenhum carrinho encontrado' });
  }
  response.json(carts);
});

app.get('/api/carts/:id', (request, response) => {

  let cartId = request.params.id;

  let cart = carts.filter(cart => {
    return cart.id == cartId;
  });

  if (!cart) {
    response.status(404).json({ message: 'Item não encontrado' });
  }

  response.json(cart[0]);
});

app.post('/api/carts', (request, response) => {

  let cart = {
    id: carts.length + 1,
    idItem: request.body.idItem
  };

  carts.push(cart);

  response.json(cart);

});

app.put('/api/carts/:id', (request, response) => {

  let cartId = request.params.id;

  let cart = carts.filter(cart => {
    return cart.id == cartId;
  })[0];

  const index = carts.indexOf(cart);

  let keys = Object.keys(request.body);

  keys.forEach(key => {
    cart[key] = request.body[key];
  });

  carts[index] = cart;

  // response.json({ message: `Item ${cartId} atualizado.`});
  response.json(carts[index]);
});

app.delete('/api/carts/:id', (request, response) => {
  
  let cartId = request.params.id;

  let cart = carts.filter(cart => {
    return cart.id == cartId;
  })[0];

  const index = carts.indexOf(cart);

  carts.splice(index, 1);

  response.json({ message: `Item ${cartId} deletado.`});

});

app.get('/api/deliveries', (request, response) => {
  if (!deliveries) {
    response.status(404).json({ message: 'Nenhuma entrega encontrada.' });
  }
  response.json(deliveries);
});

app.get('/api/deliveries/:id', (request, response) => {

  let deliveryId = request.params.id;

  let delivery = deliveries.filter(delivery => {
    return delivery.id == deliveryId;
  });

  if (!delivery) {
    response.status(404).json({ message: 'Item não encontrado' });
  }

  response.json(delivery[0]);
});

app.post('/api/deliveries', (request, response) => {

  let delivery = {
    id: deliveries.length + 1,
    cartId: request.body.cartId
  };

  deliveries.push(delivery);

  response.json(delivery);

});

app.put('/api/deliveries/:id', (request, response) => {

  let deliveryId = request.params.id;

  let delivery = deliveries.filter(delivery => {
    return delivery.id == deliveryId;
  })[0];

  const index = deliveries.indexOf(delivery);

  let keys = Object.keys(request.body);

  keys.forEach(key => {
    delivery[key] = request.body[key];
  });

  deliveries[index] = delivery;

  // response.json({ message: `Item ${deliveryId} atualizado.`});
  response.json(deliveries[index]);
});

app.delete('/api/deliveries/:id', (request, response) => {
  
  let deliveryId = request.params.id;

  let delivery = deliveries.filter(delivery => {
    return delivery.id == deliveryId;
  })[0];

  const index = deliveries.indexOf(delivery);

  deliveries.splice(index, 1);

  response.json({ message: `Item ${deliveryId} deletado.`});

});

const hostname = 'localhost';
const port = 3001;

const server = app.listen(port, hostname, () => {

  console.log(`Servidor rodando em http://${hostname}:${port}/`);
  
});
