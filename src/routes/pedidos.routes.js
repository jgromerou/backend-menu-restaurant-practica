import { Router } from 'express';
import {
  crearPedido,
  obtenerListaPedidos,
  entregarPedido,
  pedidoPendiente,
} from '../controllers/pedidos.controllers';

const router = new Router();

router.route('/').post(crearPedido).get(obtenerListaPedidos);
router.route('/entregado/:id').put(entregarPedido);
router.route('/pendiente/:id').put(pedidoPendiente);
// router
//   .route('/productos/:id')
//   .get(obtenerProducto)
//   .delete(validarJWT, borrarProducto)
//   .put(validarJWT, validarProducto, editarProducto);
export default router;
