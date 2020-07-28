import { Injectable } from "@angular/core";
import { Mutation } from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: "root",
})
export class CreateArticuloAlquilerGQL extends Mutation {
  document = gql`
    mutation MyMutation($articulo_alquiler: articulo_alquiler_insert_input!) {
      insert_articulo_alquiler_one(object: $articulo_alquiler) {
        id
      }
    }
  `;
}

// # insert_articulo_alquiler(
// #   objects: $articulo
// #   # {
// #     # articulo_id: 10
// #     # cantidad_devuelto: 10
// #     # cantidad_entregado: 10
// #     # contrato_id: 10
// #     # especificaciones_producto: ""
// #     # id: 10
// #   # }
// # ){
// #   id
// # }