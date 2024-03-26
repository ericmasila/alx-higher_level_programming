#!/usr/bin/node

const request = require('request');
const id = process.argv[2];
const endpoint = `https://swapi-api.alx-tools.com/api/films/${id}`;
const opt = { method: 'GET' };

/**
 * Get name of a character from starwars using promises
 * @param {*} url url string
 * @returns Promise<string> (name)
 */
const getName = (url) => new Promise((resolve, reject) => {
  request(url, opt, (err, { statusCode: code, body: res }) => {
    if (err) reject(console.log(err));
    if (code === 200) {
      resolve(JSON.parse(res).name);
    } else {
      resolve(console.log(`Error code: ${code}`));
    }
  });
});

request(endpoint, opt, (err, { statusCode, body }) => {
  if (err) return console.log(err);
  if (statusCode === 200) {
    const { characters } = JSON.parse(body);
    const names = characters.map(url => getName(url));
    Promise.all(names)
      .then(names => names.forEach(name => console.log(name)));
  } else {
    console.log(`Error code: ${statusCode}`);
  }
});
