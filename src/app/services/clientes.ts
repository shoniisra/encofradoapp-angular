import gql from "graphql-tag";

export const queryGetClientes = gql`
  query allPosts {
    cliente {
      id
      cedula
      direccion
      direccion2
      email
      nombre
      nombre2
      observacion
      telf1
      telf2
      telf3
    }
  }
`;