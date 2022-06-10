import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import morgan from 'morgan';
// import config from 'config';
import dotenv from 'dotenv';

const app = express();
const env = app.get('env');
dotenv.config({ path: `.env.${env}` });

app.use(express.json());
app.use(helmet());

const port = process.env.APP_PORT || 3000;
console.log(port);

if (app.get('env') === 'development') {
	app.use(morgan('tiny'));
}

mongoose
	.connect('mongodb://127.0.0.1:27017/unisportsDev')
	.then(() => {
		console.log('Connected to DB');
	})
	.catch((err) => {
		console.log(err);
	});

app.listen(port, () => {
	console.log('Server Started+++');
});
