function chunk(arr, count = 10, page) {
  if (!page && page !== 1) {
    return arr;
  }
  let chunkedData = [];
  for (let i = 0; i < arr.length; i += count) {
    let chunk = arr.slice(i, i + count);
    chunkedData.push(chunk);
  }
  return chunkedData[page - 1];
}

module.exports = {
  chunk,
};
