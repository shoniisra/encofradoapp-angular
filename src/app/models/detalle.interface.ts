import { Timestamp } from "@firebase/firestore-types";

export interface Detalle {
  det_puntales?: number;
  det_tableros?: number;
  det_tablerosP?: number;
  det_tablerosI?: number;
  det_crucetasL?: number;
  det_crucetasC?: number;
  det_viguetasL?: number;
  det_viguetasM?: number;
  det_viguetasP?: number;
  det_andamios?: number;
  det_andamios_crucetas?: number;

  det_columnas?: string;
  det_columnas_pernos?: string;

  det_concretera?: number;
  det_concretera_parihuelas?: number;

  det_distanciadores?: number;
  det_observaciones?: string;
  det_transporteEntrega?: boolean;
  det_transporteDevolucion?: boolean;
  det_metros?: number;
}
