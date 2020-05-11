const { count } = require('../models/Products');
const { check } = require('prettier');

function chunk(arr, chunkSize, page) {
  if (!page) {
    return arr;
  }
  let chunckedData = [];
  for (let i = 0; i < arr.length; i += 0) {
    let chunk = [];
    for (let j = 0; j < chunkSize; j += 1) {
      if (arr[i]) {
        chunk.push(arr[i]);
        i += 1;
      }
    }
    chunckedData.push(chunk);
  }

  return chunckedData[page - 1];
}

module.exports = {
  chunk,
};
