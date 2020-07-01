import { Cliente } from './cliente.model';
import { EstadoActual } from './estadoactual.model';

export class Contrato {
    id: number;  
    numero:number;
    fecha:Date;
    lugar_obra:string;
    area:string;
    metraje:string;
    observacion:string;
    cliente_id:Cliente;
    estado_id:EstadoActual;
  
    constructor(customer) {
      this.id = customer.id;      
      this.numero=customer.numero;
      this.fecha=customer.fecha;
      this.lugar_obra=customer.lugar_obra;
      this.area=customer.area;
      this.metraje=customer.metraje;
      this.observacion=customer.observacion;
      this.cliente_id=customer.cliente_id;
      this.estado_id=customer.estado_id;     
    } 
  }
  