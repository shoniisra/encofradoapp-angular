import { Timestamp } from "@firebase/firestore-types";

export interface Cliente {
  cli_cedula?: string;
  cli_direccion?: string;
  cli_direccion2?: string;
  cli_email?: string;
  cli_nombre?: string;
  cli_nombre2?: string;
  cli_telf1?: string;
  cli_telf2?: string;
  cli_telf3?: string;
  cli_nota?: string;
}
