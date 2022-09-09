require('dotenv').config();

const koa = require('koa');
// routing package for Koa
const Router = require('koa-router');
// body parser for Koa (allows user to parse koa, urlencoded, multipart, json, body, parser & forms)
const bodyParser = require('koa-body');

const app = new koa();
var Route = new Router();

console.log(process.env, ' PROCESS.ENV');
console.log(process.env.PORT, ' PROCESS.ENV PORT');

// need body parsing middleware, up limit for cases like images/docs
app.use(bodyParser({ textLimit: '30mb' }));


// middleware


// routes
const healthRouter = require('./routes/healthRouter.js');
const userRouter = require('./routes/userRouter.js');


//---------------Route Definitions-----------------------------
app.use(healthRouter.routes());
app.use(userRouter.routes());


const PORT = process.env.PORT ? process.env.PORT : 3001;

const env = process.env.NODE_ENV || 'development';
console.log(env, ' ENV');

// TODO: serve react app

app.listen(PORT, () => {
    console.log(`listening on ${PORT}...`);
});