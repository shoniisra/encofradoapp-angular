export class EstadoActual {
  id: number;
  descripcion: string;

  constructor(customer) {
    this.id = customer.id;
    this.descripcion = customer.descripcion;
  }
}
