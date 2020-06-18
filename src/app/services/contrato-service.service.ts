import { Contrato } from "src/app/models/contrato.interface";
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
export class ContratoServiceService {
  private contratoCollection: AngularFirestoreCollection<Contrato>;
  private contratos: Observable<Contrato[]>;
  constructor(db: AngularFirestore) {
    this.contratoCollection = db.collection<Contrato>("contratos");
    this.contratos = this.contratoCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    //Mantiene actualizada la lista de Contratos
    this.getContratos().subscribe(data => {
      this.contratos = of(data);
    });
  }

  getContratos() {
    return this.contratos;
  }
  getContrato(id: string) {
    return this.contratoCollection.doc<Contrato>(id).valueChanges();
  }
  updateContrato(contrato: Contrato, id: string) {
    return this.contratoCollection.doc<Contrato>(id).update(contrato);
  }
  addContrato(contrato: Contrato) {
    return this.contratoCollection.add(contrato);
  }
  deleteContrato(id: string) {
    return this.contratoCollection.doc(id).delete();
  }
}
