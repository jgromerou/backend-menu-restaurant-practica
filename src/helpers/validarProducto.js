import { check } from 'express-validator';
import resultadoValidacion from './resultadoValidacion';

const validarProducto = [
  check('nombreProducto')
    .notEmpty()
    .withMessage('El nombre del producto es obligatorio.')
    .isLength({
      min: 2,
      max: 100,
    })
    .withMessage(
      'El nombre del producto debe contener entre 2 y 100 caracteres'
    ),
  check('precio')
    .notEmpty()
    .withMessage('El precio es obligatorio.')
    .isNumeric()
    .withMessage('El precio debe ser un valor numérico.')
    .custom((precioProducto) => {
      if (precioProducto >= 1 && precioProducto <= 10000) {
        return true;
      } else {
        throw new Error('El precio debe estar entre 1 y 10000.');
      }
    }),
  check('imagen')
    .notEmpty()
    .withMessage('La URL de la imagen es un dato obligatorio.')
    .matches(/^(http(s?):)([/|.|\w|\s|-])*\.(?:png|jpe?g|gif|svg)$/)
    .withMessage(
      'La imagen debe ser una URL válida, terminada en png,jpg,jpeg,gif y svg.'
    ),
  check('descripcion')
    .notEmpty()
    .withMessage('La descripción del producto es obligatorio.')
    .isLength({
      min: 2,
      max: 300,
    })
    .withMessage(
      'La descripción del producto debe contener entre 2 y 300 caracteres.'
    ),
  check('categoria')
    .notEmpty()
    .withMessage('La categoria es un dato obligatorio.')
    .isIn(['bebida caliente', 'bebida fria', 'dulce', 'salado'])
    .withMessage('La categoria debe ser una opción válida'),
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];

export default validarProducto;
