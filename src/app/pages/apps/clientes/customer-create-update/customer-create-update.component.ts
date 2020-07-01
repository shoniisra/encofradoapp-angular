import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
//icons
import icMoreVert from "@iconify/icons-ic/twotone-more-vert";
import icClose from "@iconify/icons-ic/twotone-close";
import icPrint from "@iconify/icons-ic/twotone-print";
import icDownload from "@iconify/icons-ic/twotone-cloud-download";
import icDelete from "@iconify/icons-ic/twotone-delete";
import icPhone from "@iconify/icons-ic/twotone-phone";
import icPerson from "@iconify/icons-ic/twotone-person";
import icMyLocation from "@iconify/icons-ic/twotone-my-location";
import icLocationCity from "@iconify/icons-ic/twotone-location-city";
import icEditLocation from "@iconify/icons-ic/twotone-edit-location";
//model
import { Cliente } from "src/app/models/cliente.model";
import { CreateClienteGQL } from "../graphql/CreateClienteGQL";
import { Apollo } from "apollo-angular";
import { UpdateClienteGQL } from "../graphql/UpdateClienteGQL";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "vex-customer-create-update",
  templateUrl: "./customer-create-update.component.html",
  styleUrls: ["./customer-create-update.component.scss"],
})
export class CustomerCreateUpdateComponent implements OnInit {
  static id = 100;

  form: FormGroup;
  mode: "create" | "update" = "create";

  icMoreVert = icMoreVert;
  icClose = icClose;

  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;

  icPerson = icPerson;
  icMyLocation = icMyLocation;
  icLocationCity = icLocationCity;
  icEditLocation = icEditLocation;
  icPhone = icPhone;

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: Cliente,
    private dialogRef: MatDialogRef<CustomerCreateUpdateComponent>,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private createClienteGQL: CreateClienteGQL,
    private updateClienteGQL: UpdateClienteGQL
  ) {}

  ngOnInit() {
    if (this.defaults) {
      this.mode = "update";
    } else {
      this.defaults = {} as Cliente;
    }

    this.form = this.fb.group({
      id: [CustomerCreateUpdateComponent.id++],
      cedula: [this.defaults.cedula || ""],
      direccion: [this.defaults.direccion || ""],
      direccion2: [this.defaults.direccion2 || ""],
      email: [this.defaults.email || ""],
      nombre: [this.defaults.nombre || ""],
      nombre2: [this.defaults.nombre2 || ""],
      observacion: [this.defaults.observacion || ""],
      telf1: [this.defaults.telf1 || ""],
      telf2: [this.defaults.telf2 || ""],
      telf3: [this.defaults.telf3 || ""],
    });
  }

  save() {
    if (this.mode === "create") {
      this.createCustomer();
    } else if (this.mode === "update") {
      this.updateCustomer();
    }
  }

  onlyNumberKey(event) { 
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57; 
  } 

  openSnackbar(mensaje: string) {
    this.snackBar.open(mensaje, "cerrar", {
      duration: 3000,
      horizontalPosition: "right",
    });
  }

  validateForm(customer: Cliente) {
    if (this.validarCedula(customer.cedula)) {
      if (
        customer.nombre.length > 0 &&
        customer.nombre != null &&
        customer.nombre != undefined
      ) {
        return true;
      }else{
      this.openSnackbar("Nombre no válido");
    }
    }
    return false;
  }

  createCustomer() {
    let customer: Cliente;
    customer = this.form.value;
    //Aqui validaciones
    if (this.validateForm(customer)) {
      this.createClienteGQL
        .mutate({
          cedula: customer.cedula,
          direccion: customer.direccion,
          direccion2: customer.direccion2,
          email: customer.email,
          nombre: customer.nombre,
          nombre2: customer.nombre2,
          observacion: customer.observacion,
          telf1: customer.telf1,
          telf2: customer.telf2,
          telf3: customer.telf3,
        })
        .subscribe(
          ({ data }) => {
            this.openSnackbar("Cliente Guardado Exitosamente");
            this.dialogRef.close(customer);
          },
          (error) => {
            console.log("Error al Guardar el cliente", error);
            this.openSnackbar("Error al Guardar el cliente");
          }
        );
    }
  }

  validarCedula(cedula: string) {
    if (cedula.length == 13) {
      let digito_ruc = cedula.substring(10, 13);
      if (digito_ruc == "001") {
        cedula = cedula.substring(0, 10);
      }
    }
    if (cedula.length == 10) {
      //Obtenemos el digito de la region que sonlos dos primeros digitos
      let digito_region = cedula.substring(0, 2);

      //Pregunto si la region existe ecuador se divide en 24 regiones
      if (parseInt(digito_region) >= 1 && parseInt(digito_region) <= 24) {
        // Extraigo el ultimo digito
        let ultimo_digito = parseInt(cedula.substring(9, 10));

        //Agrupo todos los pares y los sumo
        let pares =
          parseInt(cedula.substring(1, 2)) +
          parseInt(cedula.substring(3, 4)) +
          parseInt(cedula.substring(5, 6)) +
          parseInt(cedula.substring(7, 8));

        //Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
        let numero1 = parseInt(cedula.substring(0, 1));
        numero1 = numero1 * 2;
        if (numero1 > 9) {
          numero1 = numero1 - 9;
        }

        let numero3 = parseInt(cedula.substring(2, 3));
        numero3 = numero3 * 2;
        if (numero3 > 9) {
          numero3 = numero3 - 9;
        }

        let numero5 = parseInt(cedula.substring(4, 5));
        numero5 = numero5 * 2;
        if (numero5 > 9) {
          numero5 = numero5 - 9;
        }

        let numero7 = parseInt(cedula.substring(6, 7));
        numero7 = numero7 * 2;
        if (numero7 > 9) {
          numero7 = numero7 - 9;
        }

        let numero9 = parseInt(cedula.substring(8, 9));
        numero9 = numero9 * 2;
        if (numero9 > 9) {
          numero9 = numero9 - 9;
        }

        let impares = numero1 + numero3 + numero5 + numero7 + numero9;

        //Suma total
        let suma_total = pares + impares;

        //extraemos el primero digito
        let primer_digito_suma = String(suma_total).substring(0, 1);

        //Obtenemos la decena inmediata
        let decena = (parseInt(primer_digito_suma) + 1) * 10;

        //Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
        let digito_validador = decena - suma_total;

        //Si el digito validador es = a 10 toma el valor de 0
        if (digito_validador == 10) digito_validador = 0;

        //Validamos que el digito validador sea igual al de la cedula
        if (digito_validador == ultimo_digito) {
          return true;
        } else {
          this.openSnackbar("la cedula:" + cedula + " es incorrecta");
        }
      } else {
        // imprimimos en consola si la region no pertenece
        this.openSnackbar("Esta cedula no pertenece a ninguna region");
      }
    } else {
      //imprimimos en consola si la cedula tiene mas o menos de 10 digitos
      this.openSnackbar("A esa cédula le falta o le sobran números ");
    }
    return false;
  }

  updateCustomer() {
    let customer: Cliente;
    customer = this.form.value;
    customer.id = this.defaults.id;
    //Aqui validaciones
    if (this.validateForm(customer)) {
      this.updateClienteGQL
        .mutate({
          id: customer.id,
          cedula: customer.cedula,
          direccion: customer.direccion,
          direccion2: customer.direccion2,
          email: customer.email,
          nombre: customer.nombre,
          nombre2: customer.nombre2,
          observacion: customer.observacion,
          telf1: customer.telf1,
          telf2: customer.telf2,
          telf3: customer.telf3,
        })
        .subscribe(
          ({ data }) => {
            this.openSnackbar("Cliente Guardado Exitosamente");
            this.dialogRef.close(customer);
          },
          (error) => {
            console.log("Error al Guardar el cliente", error);
            this.openSnackbar("Error al Guardar el cliente");
          }
        );
    }
  }

  isCreateMode() {
    return this.mode === "create";
  }

  isUpdateMode() {
    return this.mode === "update";
  }
}
