import { http, HttpResponse as res } from 'msw';
import { users } from './data';

export const handlers = [
  http.get('/users', async () => {
    return res.json(users, { status: 200 });
  }),
];
