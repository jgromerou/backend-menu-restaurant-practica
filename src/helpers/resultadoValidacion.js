import { validationResult } from 'express-validator';

const resultadoValidacion = (req, res, next) => {
  //trabajar con los resultados de la validación
  const errors = validationResult(req);

  //errors.isEmpty(); true: si está vacío, es false tiene errores
  //quiero saber si hay errores
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  //continuar con la ejecución
  next();
};

export default resultadoValidacion;
