import { Cliente } from "src/app/models/cliente.interface";
import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { Observable } from "rxjs";
import { of } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ClienteServiceService {
  private clienteCollection: AngularFirestoreCollection<Cliente>;
  private clientes: Observable<Cliente[]>;
  constructor(db: AngularFirestore) {
    this.clienteCollection = db.collection<Cliente>("clientes");
    this.clientes = this.clienteCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.getClientes().subscribe((data) => {
      this.clientes = of(data);
    });
  }

  getClientes() {
    return this.clientes;
  }
  getCliente(id: string) {
    return this.clienteCollection.doc<Cliente>(id).valueChanges();
  }

  updateCliente(cliente: Cliente, id: string) {
    return this.clienteCollection.doc<Cliente>(id).update(cliente);
  }
  addCliente(cliente: Cliente) {
    return this.clienteCollection.doc(cliente.cli_cedula).set(cliente);
  }
  deleteCliente(id: string) {
    return this.clienteCollection.doc(id).delete();
  }
}
