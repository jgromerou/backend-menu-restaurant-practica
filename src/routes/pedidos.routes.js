import { Router } from 'express';
import {
  crearPedido,
  obtenerListaPedidos,
} from '../controllers/pedidos.controllers';

const router = new Router();

router.route('/').post(crearPedido).get(obtenerListaPedidos);
// router
//   .route('/productos/:id')
//   .get(obtenerProducto)
//   .delete(validarJWT, borrarProducto)
//   .put(validarJWT, validarProducto, editarProducto);
export default router;
