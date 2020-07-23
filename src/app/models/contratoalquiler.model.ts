import { Cliente } from './cliente.model';
import { EstadoActual } from './estadoactual.model';

export class Contrato {
    id: number;  
    numero:number;
    lugar_obra:string;
    area:string;
    metros:string;
    observacion:string;
    cliente:Cliente;
    estado_actual:EstadoActual;
    descripcion: string;
    transporte_entrega: boolean;
    transporte_devolucion: boolean;
    fecha_inicio: Date;
    fecha_entrega: Date;
    devuelto: boolean;
    pago_cancelado: boolean;
    valor_total: DoubleRange;


  constructor(customer) {
      this.id=customer.id;
      this.numero=customer.numero;
      this.lugar_obra=customer.lugar_obra;
      this.area=customer.area;
      this.metros=customer.metros;
      this.observacion=customer.observacion;
      this.cliente=customer.cliente;
      this.estado_actual=customer.estado_actual;
      this.descripcion=customer.descripcion;
      this.transporte_entrega=customer.transporte_entrega;
      this.transporte_devolucion=customer.transporte_devolucion;
      this.fecha_inicio=customer.fecha_inicio;
      this.fecha_entrega=customer.fecha_entrega;
      this.devuelto=customer.devuelto;
      this.pago_cancelado=customer.pago_cancelado;
      this.valor_total=customer.valor_total;
    } 
  }
  