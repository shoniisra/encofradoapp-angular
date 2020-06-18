import { ListaUsuariosPage } from "./../lista-usuarios/lista-usuarios.page";
import { Detalle } from "src/app/models/detalle.interface";
import { Timestamp } from "@firebase/firestore-types";
import { Component, OnInit } from "@angular/core";
import { ContratoServiceService } from "src/app/services/contrato-service.service";
import { Contrato } from "src/app/models/contrato.interface";

import { ActivatedRoute } from "@angular/router";
import {
  NavController,
  LoadingController,
  AlertController,
  ModalController
} from "@ionic/angular";

@Component({
  selector: "app-nuevo",
  templateUrl: "./nuevo.page.html",
  styleUrls: ["./nuevo.page.scss"]
})
export class NuevoPage implements OnInit {
  public ocultar2: boolean = false;
  observaciones: string = "";
  entrega: boolean = false;
  devolucion: boolean = false;
  nombrecliente: string = "";
  detalle: Detalle = {
    det_observaciones: "",
    det_transporteEntrega: false,
    det_transporteDevolucion: false
  };
  encofrado: Detalle = {
    det_puntales: 0,
    det_viguetasL: 0,
    det_crucetasL: 0,
    det_crucetasC: 0,
    det_distanciadores: 0,
    det_tableros: 0,
    det_metros: 0
  };
  otro: Detalle = {
    det_viguetasM: 0,
    det_viguetasP: 0,
    det_tablerosP: 0,
    det_tablerosI: 0
  };
  andamios: Detalle = {
    det_andamios: 0,
    det_andamios_crucetas: 0
  };
  columnas: Detalle = {
    det_columnas: "",
    det_columnas_pernos: ""
  };
  concretera: Detalle = {
    det_concretera: 0,
    det_concretera_parihuelas: 0
  };
  contrato: Contrato = {
    cont_numero: "",
    cont_dias_postergados: 0,
    cont_estado: "pendiente",
    cont_id_cliente: "",
    cont_valor_total: 0,
    cont_saldo: 0,
    cont_detalle: this.detalle,
    cont_detalle_encofrado: this.encofrado,
    cont_detalle_otro: this.otro,
    cont_detalle_andamio: this.andamios,
    cont_detalle_columna: this.columnas,
    cont_detalle_concretera: this.concretera
  };

  contratoId = null;
  constructor(
    private route: ActivatedRoute,
    private nav: NavController,
    private contratoService: ContratoServiceService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private modalController: ModalController
  ) {}

  ngOnInit() {}

  limpiar() {
    this.contrato.cont_id_cliente = "";
    this.nombrecliente = "";
    this.observaciones = "";
    this.entrega = false;
    this.devolucion = false;
    this.detalle = {
      det_observaciones: "",
      det_transporteEntrega: false,
      det_transporteDevolucion: false
    };
    this.encofrado = {
      det_puntales: 0,
      det_viguetasL: 0,
      det_crucetasL: 0,
      det_crucetasC: 0,
      det_distanciadores: 0,
      det_tableros: 0,
      det_metros: 0
    };
    this.otro = {
      det_viguetasM: 0,
      det_viguetasP: 0,
      det_tablerosP: 0,
      det_tablerosI: 0
    };
    this.andamios = {
      det_andamios: 0,
      det_andamios_crucetas: 0
    };
    this.columnas = {
      det_columnas: "",
      det_columnas_pernos: ""
    };
    this.concretera = {
      det_concretera: 0,
      det_concretera_parihuelas: 0
    };
    this.contrato = {
      cont_numero: "",
      cont_dias_postergados: 0,
      cont_estado: "pendiente",
      cont_id_cliente: "",
      cont_valor_total: 0,
      cont_saldo: 0,
      cont_detalle: this.detalle,
      cont_detalle_encofrado: this.encofrado,
      cont_detalle_otro: this.otro,
      cont_detalle_andamio: this.andamios,
      cont_detalle_columna: this.columnas,
      cont_detalle_concretera: this.concretera
    };
  }
  ionViewWillEnter() {
    this.limpiar();
    this.contratoId = this.route.snapshot.params["id"];

    if (this.contratoId) {
      this.loadContrato();
    }
  }

  onSearchChange(event) {}

  accion1() {
    this.ocultar2 = !this.ocultar2;
  }

  async salir() {
    const alert = await this.alertController.create({
      header: "Alerta",
      message: "Seguro que desea salir?, todos sus cambios se perderán",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {}
        },
        {
          text: "Salir",
          handler: () => {
            this.nav.navigateForward("/home");
          }
        }
      ]
    });

    await alert.present();
  }

  async loadContrato() {
    const loading = await this.loadingController.create({
      message: "Saving..."
    });
    await loading.present();
    this.contratoService.getContrato(this.contratoId).subscribe((res) => {
      loading.dismiss();
      this.contrato = res;
    });
  }
  async showValidationMessage(mensaje: string) {
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
          handler: (data) => {
            this.contrato.cont_detalle = data;
          }
        }
      ]
    });

    await alert.present();
  }

  async saveContrato() {
    this.contrato.cont_detalle = this.detalle;
    this.contrato.cont_detalle.det_transporteEntrega = this.entrega;
    this.contrato.cont_detalle.det_transporteDevolucion = this.devolucion;
    this.contrato.cont_detalle.det_observaciones = this.observaciones;
    if (this.contrato.cont_numero === "") {
      this.showValidationMessage("Ingrese Numero del Contrato");
      return;
    }
    if (this.contrato.cont_id_cliente === "") {
      this.showValidationMessage("Ingrese un Cliente");
      return;
    }
    if (
      this.contrato.cont_fecha_ent == null ||
      this.contrato.cont_fecha_ini == null
    ) {
      this.showValidationMessage("Ingrese las Fechas");
      return;
    }

    const loading = await this.loadingController.create({
      message: "Saving..."
    });
    await loading.present();
    // this.contrato.cont_detalle_andamio.

    // if (this.contratoId) {
    //   //update
    //   this.contratoService
    //     .updateContrato(this.contrato, this.contratoId)
    //     .then(() => {
    //       loading.dismiss();
    //       this.nav.navigateForward("/home");
    //     });
    // } else {
    //add
    this.contratoService.addContrato(this.contrato).then(() => {
      loading.dismiss();
      this.nav.navigateForward("/home");
    });
    // }
  }

  async AlertEncofrado() {
    const alert = await this.alertController.create({
      header: "Cantidad Encofrado!",
      mode: "ios",
      inputs: [
        {
          name: "det_puntales",
          type: "number",
          min: 0,
          max: 10000,
          placeholder: "Puntales"
        },
        {
          name: "det_viguetasL",
          type: "number",
          min: 0,
          max: 1000,
          placeholder: "Vigas"
        },
        {
          name: "det_crucetasL",
          type: "number",
          min: 0,
          max: 1000,
          placeholder: "Crucetas Largas"
        },
        {
          name: "det_crucetasC",
          type: "number",
          min: 0,
          max: 1000,
          placeholder: "Crucetas Cortas"
        },
        {
          name: "det_distanciadores",
          type: "number",
          min: 0,
          max: 1000,
          placeholder: "Distanciadores"
        },
        {
          name: "det_tableros",
          type: "number",
          min: 0,
          max: 1000,
          placeholder: "Tableros"
        },
        {
          name: "det_metros",
          type: "number",
          min: 0,
          max: 100000,
          placeholder: "Metros m2"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {}
        },
        {
          text: "Ok",
          handler: (data) => {
            this.contrato.cont_detalle_encofrado = data;
          }
        }
      ]
    });

    await alert.present();
  }

  async AlertOtroEncofrado() {
    const alert = await this.alertController.create({
      header: "Cantidad Otro Encofrado!",
      mode: "ios",
      inputs: [
        {
          name: "det_viguetasM",
          type: "number",
          min: 0,
          max: 1000,
          placeholder: "Vigas 1.80"
        },
        {
          name: "det_viguetasP",
          type: "number",
          min: 0,
          max: 1000,
          placeholder: "Vigas 1.20"
        },
        {
          name: "det_tablerosP",
          type: "number",
          min: 0,
          max: 1000,
          placeholder: "Tableros Pequ"
        },
        {
          name: "det_tablerosI",
          type: "number",
          min: 0,
          max: 1000,
          placeholder: "Tableros Incompletos"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {}
        },
        {
          text: "Ok",
          handler: (data) => {
            this.contrato.cont_detalle_otro = data;
          }
        }
      ]
    });

    await alert.present();
  }

  async AlertCosto() {
    const alert = await this.alertController.create({
      header: "Costo de Alquiler!",
      mode: "ios",
      inputs: [
        {
          name: "cont_valor_total",
          type: "number",
          placeholder: "$ Valor Total"
        },
        {
          name: "cont_saldo",
          type: "number",
          placeholder: "$ Abono"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {}
        },
        {
          text: "Ok",
          handler: (data) => {
            if (Number(data.cont_saldo) > Number(data.cont_valor_total)) {
              this.showValidationMessage(
                "El VALOR TOTAL debe ser mayor al Abono"
              );
            } else {
              this.contrato.cont_valor_total = Number(data.cont_valor_total);
              this.contrato.cont_saldo =
                Number(data.cont_valor_total) - Number(data.cont_saldo);
              this.saveContrato();
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async AlertColumnas() {
    const alert = await this.alertController.create({
      header: "Cantidad Columnas!",
      mode: "ios",
      inputs: [
        {
          name: "det_columnas",
          placeholder: "Columnas ej: 8/30,4/50"
        },
        {
          name: "det_columnas_pernos",
          placeholder: "Columnas Pernos ej: 40/p,50/c"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {}
        },
        {
          text: "Ok",
          handler: (data) => {
            this.contrato.cont_detalle_columna = data;
          }
        }
      ]
    });

    await alert.present();
  }

  async AlertAndamios() {
    const alert = await this.alertController.create({
      header: "Cantidad Andamios!",
      mode: "ios",
      inputs: [
        {
          name: "det_andamios",
          type: "number",
          min: 0,
          max: 1000,
          placeholder: "Andamios"
        },
        {
          name: "det_andamios_crucetas",
          type: "number",
          min: 0,
          max: 1000,
          placeholder: "Crucetas Andamios"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {}
        },
        {
          text: "Ok",
          handler: (data) => {
            this.contrato.cont_detalle_andamio = data;
          }
        }
      ]
    });

    await alert.present();
  }
  async AlertConcretera() {
    const alert = await this.alertController.create({
      header: "Alquiler Concretera!",
      mode: "ios",
      inputs: [
        {
          name: "det_concretera",
          type: "number",
          min: 0,
          max: 1000,
          placeholder: "Num Dias Concretera"
        },
        {
          name: "det_concretera_parihuelas",
          type: "number",
          min: 0,
          max: 1000,
          placeholder: "Parihuelas"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {}
        },
        {
          text: "Ok",
          handler: (data) => {
            this.contrato.cont_detalle_concretera = data;
          }
        }
      ]
    });

    await alert.present();
  }

  async BuscarCliente() {
    const modal = await this.modalController.create({
      component: ListaUsuariosPage,
      componentProps: {
        nombre: "johnny",
        pais: "asd"
      }
    });

    await modal.present();

    const cedula = await modal.onDidDismiss();
    this.contrato.cont_id_cliente = cedula.data.id;
    this.nombrecliente = cedula.data.nombre;
    console.log(cedula.data);
  }
}
