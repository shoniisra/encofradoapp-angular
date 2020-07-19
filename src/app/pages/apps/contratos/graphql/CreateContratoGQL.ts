import { Injectable } from "@angular/core";
import { Mutation } from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: "root",
})
export class CreateContratoGQL extends Mutation {
  document = gql`
    mutation MyMutation(
      # $contrato: jsonb!
      # $detallecontrato:detalle_alquiler_insert_input!
      $numero: Int!
      $lugar_obra: String
      $area: String
      $metros: String
      $observacion: String
      $estado_id: Int!
      $cliente_id: Int!
      $descripcion: String
      $transporte_entrega: String!
      $transporte_devolucion: String!
      $fecha_inicio: Date!
      $fecha_entrega: Date!
      $devuelto: String!
      $pago_cancelado: String!
      $valor_total: String!
    ) {
      insert_contrato_alquiler_one(
        object: {
          numero: $numero
          lugar_obra: $lugar_obra
          area: $area
          metros: $metros
          observacion: $observacion
          estado_id: $estado_id
          cliente_id: $cliente_id
          descripcion: $descripcion
          transporte_entrega: $transporte_entrega
          transporte_devolucion: $transporte_devolucion
          fecha_inicio: $fecha_inicio
          fecha_entrega: $fecha_entrega
          devuelto: $devuelto
          pago_cancelado: $pago_cancelado
          valor_total: $valor_total
        }
      ) {
        id
      }
    }
  `;
}
