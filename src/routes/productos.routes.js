import { Router } from 'express';
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  obtenerListaProductos,
  obtenerProducto,
} from '../controllers/productos.controllers';
import validarProducto from '../helpers/validarProducto';
import validarJWT from '../helpers/token-verify';

const router = new Router();

router
  .route('/')
  .post([validarJWT, validarProducto], crearProducto)
  .get(obtenerListaProductos);
router
  .route('/:id')
  .get(obtenerProducto)
  .delete(validarJWT, borrarProducto)
  .put(validarJWT, validarProducto, editarProducto);
export default router;
