#!/usr/bin/node

const url = process.argv[2];
const request = require('request');

request(url, (err, { statusCode, body }) => {
  if (err) return console.log(err);
  if (statusCode === 200) {
    const dic = {};
    const tasks = JSON.parse(body);
    tasks.every(({ userId, completed }) => {
      if (completed) {
        if (dic[userId]) return (dic[userId] += 1);
        return (dic[userId] = 1);
      }
      return true;
    });
    return console.log(dic);
  }
  console.log(`Error code: ${statusCode}`);
});
