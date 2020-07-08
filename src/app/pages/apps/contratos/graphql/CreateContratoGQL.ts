import { Injectable } from "@angular/core";
import { Mutation } from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: "root",
})
export class CreateContratoGQL extends Mutation {
  document = gql`
    mutation MyMutation(
      $numero: String!
      $fecha: Date!
      $lugar_obra: String!
      $area: String!
      $metros: String!
      $observacion: String!
      $estado_id: number!
      $cliente_id: number!
    ) {
      insert_contrato_alquiler_one(
        object: {
          area: "28"
          estado_id: 2
          fecha: "2020-07-05"
          lugar_obra: "mi casa"
          metros: "26"
          observacion: "ninguna"
          numero: 5
          cliente_id: 12
        }
      ) {
        id
      }
    }
  `;
}
