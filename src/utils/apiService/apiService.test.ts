import { fetchData } from './apiService';

const axios = require('axios');

jest.mock('axios');

test('response', async () => {
  expect.assertions(1);
  const user = { name: 'John Doe', email: 'testing@verycool.com', password: 'myNam3jeff2012!' };
  const payload = { data: user };

  axios.get = jest.fn().mockResolvedValue(payload);
  await expect(fetchData()).resolves.toEqual(user);
});
