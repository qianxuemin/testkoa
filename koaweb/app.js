import Koa from'koa';
import router from 'koa-simple-router';
import initController from './controller/initController';
import render from 'koa-swig';
import server from 'koa-static';
import config from './config/config';
import 'babel-polyfill';
import 'babel-register';
import co from 'co';
const app = new Koa();
initController.init(app,router);
 app.context.render = co.wrap(render({
   root: config.get('viewsDir'),
  autoescape: true,
  cache: 'memory', // disable, set to false 
  ext: 'html',
  writeBody: false
}));
 app.use(server(config.get('staticDir')));
app.listen(config.get('sport'),function(){
	console.log('接口已启动')
});

export default app;