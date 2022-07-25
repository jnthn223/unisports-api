import express from 'express';
import { getAllProducts } from './product.controller';

const productRouter = express.Router();

productRouter.get('/', getAllProducts);

export default productRouter;
