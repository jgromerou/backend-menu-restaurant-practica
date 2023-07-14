import Producto from '../models/producto';

export const controladorPrueba = (req, res) => {
  res.send('Esta es una prueba de mi ruta GET de prueba');
};

export const crearProducto = async (req, res) => {
  try {
    const productoNuevo = new Producto(req.body);
    await productoNuevo.save();
    res.status(201).json({
      mensaje: 'El producto fue creado correctamente.',
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: 'Error no se pudo crear un producto',
    });
  }
};

export const obtenerListaProductos = async (req, res) => {
  try {
    //buscar en la BD la collection de productos
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error al intentar listar los productos',
    });
  }
};

export const obtenerProducto = async (req, res) => {
  try {
    //buscar en la BD un documento producto mediante el id
    const producto = await Producto.findById(req.params.id);
    res.status(200).json(producto);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error al intentar obtener el producto',
    });
  }
};

export const borrarProducto = async (req, res) => {
  try {
    //buscar en la BD un documento producto mediante el id y borrarlo
    await Producto.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: 'El producto fue eliminado correctamente.',
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error, no se pudo borrar el producto.',
    });
  }
};

export const editarProducto = async (req, res) => {
  try {
    //buscar en la BD un documento producto mediante el id y editarlo
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: 'El producto fue editado correctamente.',
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error, no se pudo editar el producto.',
    });
  }
};
