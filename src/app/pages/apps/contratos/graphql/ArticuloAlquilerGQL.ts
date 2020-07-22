import { Injectable } from "@angular/core";
import { Mutation } from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: "root",
})
export class CreateArticuloAlquilerGQL extends Mutation {
  document = gql`
    mutation MyMutation($articulo_alquiler: articulo_alquiler_alquiler_insert_input!) {
      insert_articulo_alquiler_alquiler_one(object: $articulo_alquiler) {
        id
      }
    }
  `;
}
