export class Cliente {
  id: number;
  cedula: string;
  direccion: string;
  direccion2: string;
  email: string;
  nombre: string;
  nombre2: string;
  observacion: string;
  telf1: string;
  telf2: string;
  telf3: string;

  constructor(customer) {
    this.id = customer.id;
    this.cedula=customer.cedula;
    this.direccion=customer.direccion;
    this.direccion2=customer.direccion2;
    this.email=customer.email;
    this.nombre=customer.nombre;
    this.nombre2=customer.nombre2;
    this.observacion=customer.observacion;
    this.telf1=customer.telf1;
    this.telf2=customer.telf2;
    this.telf3=customer.telf3;
   
  }

  get name() {
    let name = '';

    if (this.nombre && this.nombre2) {
      name = this.nombre + ' ' + this.nombre2;
    } else if (this.nombre) {
      name = this.nombre;
    } else if (this.nombre2) {
      name = this.nombre2;
    }

    return name;
  }

  set name(value) {
  }

  get address() {
    return `${this.direccion}, ${this.direccion2}`;
  }

  set address(value) {
  }
}
