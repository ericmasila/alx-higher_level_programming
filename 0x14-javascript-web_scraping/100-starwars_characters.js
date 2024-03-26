#!/usr/bin/node

const request = require('request');
const id = process.argv[2];
const endpoint = `https://swapi-api.alx-tools.com/api/films/${id}`;
const opt = { method: 'GET' };

request(endpoint, opt, (err, { statusCode, body }) => {
  if (err) return console.log(err);
  if (statusCode === 200) {
    const { characters } = JSON.parse(body);
    characters.forEach(url => {
      request(url, opt, (err, { statusCode: code, body: res }) => {
        if (err) return console.log(err);
        if (code === 200) {
          return console.log(JSON.parse(res).name);
        }
        console.log(`Error code: ${code}`);
      });
    });
  } else {
    console.log(`Error code: ${statusCode}`);
  }
});
