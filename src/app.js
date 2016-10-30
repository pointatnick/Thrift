import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

const app = new Koa();
const router = new Router();

router.get('/', (next) => {
  next.body = 'Hello Nick and his friends';
});

router.post('/users', async (next) => {
  console.log(next.request.body);
  next.body = 'received';
});

app.use(bodyParser());
app.use(router.routes());
app.listen(3000);
