const { expect } = require('@jest/globals');
const { getLastWordStartsWithLtr } = require('./index');

test('getLastWordStartsWithLtr should return last word which starts with  ', () => {
  expect(getLastWordStartsWithLtr('біржа . фів бегемот п акс р  бристлбек і ангуляр ', 'а')).toBe('ангуляр');
});
