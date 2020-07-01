import { Injectable } from "@angular/core";
import { Mutation } from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: "root",
})
export class DeleteClienteGQL extends Mutation {
  document = gql`
    mutation MyMutation($id: Int!) {
        delete_cliente_by_pk(id: $id) {
        id
      }
    }
  `;
}
