const Koa = require('koa');
const Router = require('koa-router');
const serveStatic = require('koa-static');
const cors = require('koa2-cors');
const http = require('http');
const DATA = require('./tmp-data.ts');
const send = require('koa-send')

const STATIC_ROOT = './build/'
const app = new Koa();
const router = new Router();

router.get('/ttm/v1/meeting_templates', async ctx => {
  const day = +ctx.query.day_week;
  ctx.set('Content-Type', 'application/json');
  ctx.body = (day >= 7) ? JSON.stringify(DATA.DATA_TABLE) 
                        : JSON.stringify(DATA.DATA_TABLE[day]);
  ctx.status = 200;
});

router.get('/ttm/v1/login', async ctx => {
  const day = +ctx.query.day_week;
  ctx.set('Content-Type', 'application/json');
  ctx.body = JSON.stringify({id: 1, name: 'Ilia', surname: 'Balabuev'});
  ctx.status = 200;
});

router.patch('/ttm/v1/meetings/:id', async ctx => {
  ctx.body = 'Отменена';
  ctx.status = 200;
});

router.get('/ttm/v1/meetings/:idMeeting', async ctx => {
  ctx.status = 200;
  ctx.body = JSON.stringify(DATA.DATA_TABLE[0][0])
});

app.use(router.routes());
app.use(serveStatic(STATIC_ROOT)); // раздавать статику

app.use(async ctx => { // если статика не найдена, то отдаем index.html
  ctx.type = 'html';
  await send(ctx, '/index.html', {root: STATIC_ROOT});
});

app.listen(process.env.PORT || 3030, () => console.log('port: 3000'));
