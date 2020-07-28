import { Injectable } from "@angular/core";
import { Mutation } from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: "root",
})
export class CreateArticuloAlquilerGQL extends Mutation {
  document = gql`
    mutation MyMutation($objects: [articulo_alquiler_insert_input!]!) {
      insert_articulo_alquiler(objects: $objects) {
        returning {
          id
        }
      }
    }
  `;
}
