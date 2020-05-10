const { chunk } = require('../chunk');

describe('Chunk function', () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  it('shoud chunck equal length array', () => {
    let secondPage = [4, 5, 6];
    expect(chunk(arr, 3, 2)).toEqual(secondPage);
  });

  it('shoud chunck equal length array', () => {
    let pageFour = [10];
    expect(chunk(arr, 3, 4)).toEqual(pageFour);
  });

  it('shoud return the array if no page added', () => {
    expect(chunk(arr, 3, undefined)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
