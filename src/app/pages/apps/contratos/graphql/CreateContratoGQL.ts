import { Injectable } from "@angular/core";
import { Mutation } from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: "root",
})
export class CreateContratoGQL extends Mutation {
  document = gql`
    mutation MyMutation(
      # $articulo_alquilers: articulo_alquiler_arr_rel_insert_input!
      $numero: Int!
      $lugar_obra: String
      $area: String
      $metros: String
      $observacion: String
      $estado_id: Int!
      $cliente_id: Int!
      $descripcion: String
      $transporte_entrega: Boolean!
      $transporte_devolucion: Boolean!
      $fecha_inicio: date!
      $fecha_entrega: date!
      $devuelto: Boolean!
      $pago_cancelado: Boolean!
      $valor_total: money!
    ) {
      insert_contrato_alquiler_one(
        object: {
          # articulo_alquilers: {data:$articulo_alquilers},
          area: $area,
          cliente_id: $cliente_id,
          descripcion: $descripcion,
          devuelto: $devuelto,
          estado_id: $estado_id,
          fecha_entrega: $fecha_entrega,
          fecha_inicio: $fecha_inicio,
          lugar_obra: $lugar_obra,
          metros: $metros,
          numero: $numero,
          observacion: $observacion,
          pago_cancelado: $pago_cancelado,
          transporte_devolucion: $transporte_devolucion,
          transporte_entrega: $transporte_entrega,
          valor_total: $valor_total,
        }
      ) {
        id
      }
    }
  `;
}
