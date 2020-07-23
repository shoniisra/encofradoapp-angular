import gql from "graphql-tag";

export const queryGetContratos = gql`
  query MyQuery {
    contrato_alquiler {
      cliente {
        id
        cedula
        direccion
        direccion2
        email
        nombre
        nombre2
        observacion
        telf1
        telf2
        telf3
      }
      id
      lugar_obra
      metros
      numero
      observacion
      area
      descripcion
      transporte_entrega
      transporte_devolucion
      fecha_inicio
      fecha_entrega
      devuelto
      pago_cancelado
      valor_total
      estado_actual {
        id
        descripcion
      }
    }
  }
`;

export const queryGetFullContrato = gql`
  query MyQuery {
    contrato_alquiler {
      cliente {
        nombre
        cedula
        direccion
        direccion2
        email
        id
        nombre2
        observacion
        telf1
        telf2
        telf3
      }
      detalle_alquilers {
        descripcion
        fecha_entrega
        fecha_inicio
        devuelto
        pago_cancelado
        articulo_alquilers {
          cantidad_devuelto
          cantidad_entregado
          articulo {
            nombre_producto
            codigo_producto
            costo_max_sugerido
            costo_min_sugerido
            id
          }
          detalle_id
          especificaciones_producto
          id
        }
        transporte_devolucion
        transporte_entrega
        valor_total
      }
      fecha
      id
      lugar_obra
      metros
      numero
      observacion
      area
      estado_actual {
        id
        descripcion
      }
    }
  }
`;
