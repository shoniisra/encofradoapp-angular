import { Injectable } from "@angular/core";
import { Mutation } from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: "root",
})
export class DeleteContratoGQL extends Mutation {
  document = gql`
    mutation MyMutation($id: Int!) {
        delete_contrato_by_pk(id: $id) {
        id
      }
    }
  `;
}
