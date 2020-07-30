import { Injectable } from "@angular/core";
import { Mutation } from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: "root",
})
export class CreateContratoGQL extends Mutation {
  document = gql`
    mutation MyMutation(
      $articulo_alquilers: articulo_alquiler_insert_input!
      $area: string!
      $cliente_id: number!
      $descripcion: string!
      $devuelto: boolean!
      $estado_id: number!
      $fecha_entrega: date!
      $fecha_inicio: date!
      $lugar_obra: string!
      $metros: string!
      $numero: number!
      $observacion: string!
      $pago_cancelado: boolean!
      $transporte_devolucion: boolean!
      $transporte_entrega: boolean!
      $valor_total: string!
    ) {
      insert_contrato_alquiler_one(
        object: {
          articulo_alquilers: $articulo_alquilers
          area: $area
          cliente_id: $cliente_id
          descripcion: $descripcion
          devuelto: $devuelto
          estado_id: $estado_id
          fecha_entrega: $fecha_entrega
          fecha_inicio: $fecha_inicio
          lugar_obra: $lugar_obra
          metros: $metros
          numero: $numero
          observacion: $observacion
          pago_cancelado: $pago_cancelado
          transporte_devolucion: $transporte_devolucion
          transporte_entrega: $transporte_entrega
          valor_total: $valor_total
        }
      ) {
        id
      }
    }
  `;
}
