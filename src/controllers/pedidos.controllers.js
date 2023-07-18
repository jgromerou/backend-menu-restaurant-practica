import Pedido from '../models/pedido';

export const crearPedido = async (req, res) => {
  try {
    const pedidoNuevo = new Pedido(req.body);
    await pedidoNuevo.save();
    res.status(201).json({
      mensaje: 'El pedido fue creado correctamente.',
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: 'Error no se pudo crear un pedido',
    });
  }
};

export const obtenerListaPedidos = async (req, res) => {
  try {
    //buscar en la BD la collection de pedidos
    const pedidos = await Pedido.find()
      .populate({
        path: 'productos.producto',
        select: '-_id -__v', // Opcional: selecciona los campos que deseas excluir, como _id y __v
      })
      .populate({
        path: 'usuario',
        select: '-_id -__v -password -rol', //  Opcional: selecciona los campos que deseas excluir, como _id y __v
      });

    res.status(200).json(pedidos);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error al intentar listar los pedidos',
    });
  }
};
export const entregarPedido = async (req, res) => {
  const idPedido = req.params.id;
  try {
    const pedido = await Pedido.findById(idPedido);
    if (!pedido) {
      return res.status(404).json({ error: 'Pedido no encontrado' });
    }

    if (pedido.estado === 'Entregado') {
      return res
        .status(404)
        .json({ error: 'El pedido ya se encuentra en Entregado' });
    }

    pedido.estado = 'Entregado';
    await pedido.save();
    res.status(200).json({
      mensaje: 'Se entregó el pedido correctamente.',
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error, no se pudo pasar a entregado el pedido.',
    });
  }
};

export const pedidoPendiente = async (req, res) => {
  const idPedido = req.params.id;
  try {
    const pedido = await Pedido.findById(idPedido);
    if (!pedido) {
      return res.status(404).json({ error: 'Pedido no encontrado' });
    }

    if (pedido.estado === 'Pendiente') {
      return res
        .status(404)
        .json({ error: 'El pedido ya se encuentra en pendiente' });
    }

    pedido.estado = 'Pendiente';
    await pedido.save();
    res.status(200).json({
      mensaje: 'Se pasó a pendiente el pedido correctamente.',
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error, no se pudo pasar a pendiente el pedido.',
    });
  }
};
