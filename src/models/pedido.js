import mongoose, { Schema } from 'mongoose';

const pedidoSchema = new Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'usuario' },
  fechaPedido: {
    type: 'Date',
    default: Date.now(),
  },
  productos: [
    {
      producto: { type: mongoose.Schema.Types.ObjectId, ref: 'producto' },
      cantidad: {
        type: Number,
        required: true,
        min: 1,
        max: 15,
      },
      subtotalItem: {
        type: Number,
        required: true,
        min: 1,
        max: 100000,
      },
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
