import { http, delay, HttpResponse as res } from 'msw';
import { users } from './data';

export const handlers = [
  http.get('/users', async () => {
    await delay(4000);
    return res.json(users, { status: 200 });
  }),
];
