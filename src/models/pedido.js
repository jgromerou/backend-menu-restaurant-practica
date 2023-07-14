import mongoose, { Schema } from 'mongoose';
//import Producto from './producto';

const pedidoSchema = new Schema({
  fechaPedido: {
    type: 'Date',
    default: Date.now(),
  },
  //productos: [Producto.schema], //si queremos guardar el array con los objetos completos de cada producto en la base de datos.
  //   productos: [
  //     {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: 'Producto',
  //     },
  //   ], //si queremos solo el id.
  productos: [
    {
      type: Schema.Types.ObjectId,
      ref: 'producto',
    },
  ],
  estado: {
    type: String,
    required: true,
  },
  precioTotal: {
    type: Number,
    required: true,
    min: 1,
    max: 100000,
  },
});

const Pedido = mongoose.model('pedido', pedidoSchema);

export default Pedido;
