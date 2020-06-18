import { Cliente } from "src/app/models/cliente.interface";
import { ClienteServiceService } from "src/app/services/cliente_service.service";
import {
  ModalController,
  LoadingController,
  AlertController
} from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lista-usuarios",
  templateUrl: "./lista-usuarios.page.html",
  styleUrls: ["./lista-usuarios.page.scss"]
})
export class ListaUsuariosPage implements OnInit {
  clientes: Cliente[];
  nuevocliente: Cliente = {
    cli_cedula: "",
    cli_direccion: "",
    cli_direccion2: "",
    cli_email: "",
    cli_nombre: "",
    cli_nombre2: "",
    cli_telf1: "",
    cli_telf2: "",
    cli_telf3: "",
    cli_nota: ""
  };
  lanzaralerta: boolean = false;
  search: boolean = true;
  constructor(
    private modalcontroller: ModalController,
    public clienteService: ClienteServiceService,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.clienteService.getClientes().subscribe((res) => (this.clientes = res));
  }

  cancelar() {
    this.modalcontroller.dismiss({
      nombre: "Consumidor Final",
      cedula: "9999999999"
    });
  }
  seleccionar(id: string, nombre: string) {
    this.modalcontroller.dismiss({
      nombre: nombre,
      id: id
    });
  }
  showSearchBar() {
    this.search = !this.search;
  }
  validarCedula(cedula: string): boolean {
    try {
      var cad = cedula.trim();
      parseInt(cad);

      var total = 0;
      var longitud = cad.length;
      var longcheck = longitud - 1;
      var i: number;
      var aux: number;
      if (cad !== "" && longitud === 10) {
        for (i = 0; i < longcheck; i++) {
          if (i % 2 === 0) {
            aux = parseInt(cad.charAt(i)) * 2;
            if (aux > 9) aux -= 9;
            total += aux;
          } else {
            total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
          }
        }

        total = total % 10 ? 10 - (total % 10) : 0;

        if (parseInt(cad.charAt(longitud - 1)) == total) {
          return true;
        } else {
          return false;
        }
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async AlertNuevoCliente() {
    const alert = await this.alertController.create({
      header: "Crear Cliente",
      mode: "ios",
      inputs: [
        {
          name: "cli_cedula",
          placeholder: "Cedula"
        },
        {
          name: "cli_nombre",
          placeholder: "Nombre"
        },
        {
          name: "cli_nombre2",
          placeholder: "Nombre 2"
        },
        {
          name: "cli_direccion",
          placeholder: "Direccion"
        },
        {
          name: "cli_direccion2",
          placeholder: "Direccion 2"
        },
        {
          name: "cli_email",
          placeholder: "Email"
        },
        {
          name: "cli_telf1",
          placeholder: "TelF 1"
        },
        {
          name: "cli_telf2",
          placeholder: "TelF 2"
        },
        {
          name: "cli_telf3",
          placeholder: "TelF 3"
        },
        {
          name: "cli_nota",
          placeholder: "Nota"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          }
        },
        {
          text: "Ok",
          handler: (data) => {
            this.nuevocliente = data;
            this.lanzaralerta = true;
            this.validarDatos();
          }
        }
      ]
    });

    await alert.present();
  }

  async showValidationMessage(mensaje: string) {
    if (this.lanzaralerta) {
      const alert = await this.alertController.create({
        header: "Alerta",
        message: mensaje,
        buttons: [
          {
            text: "Cancelar",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {}
          },
          {
            text: "Salir",
            handler: (data) => {}
          }
        ]
      });

      await alert.present();
    }
    this.lanzaralerta = false;
  }

  async validarDatos() {
    if (this.nuevocliente.cli_nombre === "") {
      this.showValidationMessage("Ingrese un nombre al Cliente");
      return;
    }
    if (this.nuevocliente.cli_cedula === "") {
      this.showValidationMessage("Ingrese una cedula al Cliente");
      return;
    }
    if (this.nuevocliente.cli_cedula.length != 10) {
      this.showValidationMessage("Tamaño Cedula Invalida");
      return;
    }
    if (!this.validarCedula(this.nuevocliente.cli_cedula)) {
      this.showValidationMessage("Cedula Inválida");
      return;
    }
    const loading = await this.loadingController.create({
      message: "Validando..."
    });
    await loading.present();
    await this.clienteService
      .getCliente(this.nuevocliente.cli_cedula)
      .subscribe((clienteBBDD) => {
        if (clienteBBDD != null) {
          loading.dismiss();
          this.showValidationMessage(
            "Ya existe un cliente registrado con esa cedula"
          );
        } else {
          this.clienteService.addCliente(this.nuevocliente);
          loading.dismiss();
          this.seleccionar(
            this.nuevocliente.cli_cedula,
            this.nuevocliente.cli_nombre
          );
          this.lanzaralerta = false;
          console.log("guardarCliente()");
          return;
        }
      });
  }
  async guardarCliente() {
    const loading = await this.loadingController.create({
      message: "Guardando Cliente..."
    });
    await loading.present();
    console.log("guardando " + this.nuevocliente);
    this.clienteService.addCliente(this.nuevocliente);
    loading.dismiss();
    this.seleccionar(
      this.nuevocliente.cli_cedula,
      this.nuevocliente.cli_nombre
    );
  }
}
