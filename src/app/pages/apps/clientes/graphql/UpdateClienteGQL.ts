import { Injectable } from "@angular/core";
import { Mutation } from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: "root",
})
export class UpdateClienteGQL extends Mutation {
  document = gql`
    mutation MyMutation(
      $id: Int!
      $cedula: String!
      $direccion: String!
      $direccion2: String!
      $email: String!
      $nombre: String!
      $nombre2: String!
      $observacion: String!
      $telf1: String!
      $telf2: String!
      $telf3: String!
    ) {
      update_cliente(
        _set: {
          cedula: $cedula
          direccion: $direccion
          direccion2: $direccion2
          email: $email
          nombre: $nombre
          nombre2: $nombre2
          observacion: $observacion
          telf1: $telf1
          telf2: $telf2
          telf3: $telf3
        }
        where: { id: { _eq: $id } }
      ) {
        returning {
          id
        }
      }
    }
  `;
}
