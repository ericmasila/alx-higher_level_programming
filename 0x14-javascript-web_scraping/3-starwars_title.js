#!/usr/bin/node

const request = require('request');
const id = process.argv[2];
const endpoint = `https://swapi-api.alx-tools.com/api/films/${id}`;

request(endpoint, { method: 'GET' }, (err, { statusCode, body }) => {
  if (err) return console.log(err);
  if (statusCode === 200) {
    const { title } = JSON.parse(body);
    return console.log(title);
  }
  console.log(`Error code: ${statusCode}`);
});
