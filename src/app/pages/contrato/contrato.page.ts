import { Component, OnInit, Input } from "@angular/core";
import { AlertController } from "@ionic/angular";
@Component({
  selector: "app-contrato",
  templateUrl: "./contrato.page.html",
  styleUrls: ["./contrato.page.scss"]
})
export class ContratoPage implements OnInit {
  // @Input() contrato : Contrato
  public ocultar1: boolean = false;

  accion1() {
    this.ocultar1 = !this.ocultar1;
  }
  constructor(public alertController: AlertController) {}

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
  ngOnInit() {}
}
