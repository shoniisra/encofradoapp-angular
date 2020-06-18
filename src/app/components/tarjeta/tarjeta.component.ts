import { Contrato } from "src/app/models/contrato.interface";
import { Cliente } from "src/app/models/cliente.interface";
import { Component, Input, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { ClienteServiceService } from "src/app/services/cliente_service.service";
@Component({
  selector: "app-tarjeta",
  templateUrl: "./tarjeta.component.html",
  styleUrls: ["./tarjeta.component.scss"]
})
export class TarjetaComponent implements OnInit {
  @Input() contrato: Contrato;
  public ocultar1: boolean = false;
  cliente: Cliente = {
    cli_cedula: ""
  };

  accion1() {
    this.ocultar1 = !this.ocultar1;
  }
  constructor(
    public alertController: AlertController,
    private clienteService: ClienteServiceService
  ) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Postergar Devolucion",
      inputs: [
        {
          name: "radio1",
          type: "radio",
          label: "1 Día",
          value: "value1",
          checked: true
        },
        {
          name: "radio2",
          type: "radio",
          label: "3 Días",
          value: "value2"
        },
        {
          name: "radio3",
          type: "radio",
          label: "1 Semana",
          value: "value3"
        },
        {
          name: "radio4",
          type: "radio",
          label: "2 Semanas",
          value: "value4"
        },
        {
          name: "radio5",
          type: "radio",
          label: "3 Semanas",
          value: "value5"
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
          handler: () => {
            console.log("Confirm Ok");
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
    this.loadCliente();
  }

  loadCliente() {
    this.clienteService
      .getCliente(this.contrato.cont_id_cliente)
      .subscribe((res) => {
        this.cliente = res;
        console.log(this.cliente);
      });
  }
}
