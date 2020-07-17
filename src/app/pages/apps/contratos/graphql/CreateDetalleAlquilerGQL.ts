import { Injectable } from "@angular/core";
import { Mutation } from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: "root",
})
export class DetalleAlquilerGQL extends Mutation {
  document = gql`
    mutation MyMutation(
      # $contrato: jsonb!      
      # $detallecontrato:detalle_alquiler_insert_input!
    #   $numero: Int!
    #    $fecha: Date!
    #    $lugar_obra: String
    #   $area: String
    #   $metros: String
    #   $observacion: String
    #   $estado_id: Int!
    #   $cliente_id: Int!
      $detalle_alquiler: detalle_alquiler_insert_input!
    ) {
        insert_detalle_alquiler_one(
        object: $detalle_alquiler
        # {
        #   area: $area
        #   estado_id: $estado_id
        #   fecha: $fecha
        #   lugar_obra: $lugar_obra
        #   metros: $metros
        #   observacion: $observacion
        #   numero: $numero
        #   cliente_id: $cliente_id
        #   detalle_alquiler: $detalle_alquiler
        # }
      ) {
        id
      }
    }
  `;
}
