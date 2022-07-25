import express from 'express';

import usersRouter from './routes/users/users.router';
import productRouter from './routes/product/product.router';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.use(usersRouter);
app.use('/products', productRouter);

export default app;
