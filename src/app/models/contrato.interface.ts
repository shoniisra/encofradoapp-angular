import { Detalle } from "./detalle.interface";
import { Timestamp } from "@firebase/firestore-types";

export interface Contrato {
  cont_numero?: string;
  cont_dias_postergados?: number;
  cont_estado?: string;
  cont_fecha_ent?: Date;
  cont_fecha_ini?: Date;
  cont_id_cliente?: string;
  cont_valor_total?: Number;
  cont_saldo?: Number;
  cont_detalle?: Detalle;
  cont_detalle_encofrado?: Detalle;
  cont_detalle_otro?: Detalle;
  cont_detalle_andamio?: Detalle;
  cont_detalle_columna?: Detalle;
  cont_detalle_concretera?: Detalle;
}
