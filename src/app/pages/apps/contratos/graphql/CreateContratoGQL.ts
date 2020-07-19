import { Injectable } from "@angular/core";
import { Mutation } from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: "root",
})
export class CreateContratoGQL extends Mutation {
  document = gql`
    mutation MyMutation($contrato: contrato_alquiler_insert_input!) {
      insert_contrato_alquiler_one(object: $contrato) {
        id
      }
    }
  `;
}
