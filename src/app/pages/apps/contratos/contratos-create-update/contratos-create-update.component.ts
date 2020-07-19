import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

import { stagger80ms } from "../../../../../@vex/animations/stagger.animation";
import { fadeInUp400ms } from "../../../../../@vex/animations/fade-in-up.animation";
import { scaleIn400ms } from "../../../../../@vex/animations/scale-in.animation";
import { fadeInRight400ms } from "../../../../../@vex/animations/fade-in-right.animation";
import theme from "../../../../../@vex/utils/tailwindcss";

import icDescription from "@iconify/icons-ic/twotone-description";
import icVerticalSplit from "@iconify/icons-ic/twotone-vertical-split";
import icVisiblity from "@iconify/icons-ic/twotone-visibility";
import icVisibilityOff from "@iconify/icons-ic/twotone-visibility-off";
import icDoneAll from "@iconify/icons-ic/twotone-done-all";
import icMoreVert from "@iconify/icons-ic/twotone-more-vert";

import { CreateContratoGQL } from "../graphql/CreateContratoGQL";
import { Contrato } from "src/app/models/contratoalquiler.model";
import { Cliente } from "src/app/models/cliente.model";
import { EstadoActual } from "src/app/models/estadoactual.model";
import { DatePipe } from "@angular/common";

@Component({
  selector: "vex-contratos-create-update",
  templateUrl: "./contratos-create-update.component.html",
  styleUrls: ["./contratos-create-update.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [stagger80ms, fadeInUp400ms, scaleIn400ms, fadeInRight400ms],
})
export class ContratosCreateUpdateComponent implements OnInit {
  contrato: Contrato;
  cliente: Cliente;
  verticalAccountFormGroup: FormGroup;
  verticalContratoFormGroup: FormGroup;
  fecha: Date;
  icDoneAll = icDoneAll;
  icDescription = icDescription;
  icVerticalSplit = icVerticalSplit;
  icVisibility = icVisiblity;
  icVisibilityOff = icVisibilityOff;
  icMoreVert = icMoreVert;

  theme = theme;

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private snackbar: MatSnackBar,
    private createContratoGQL: CreateContratoGQL,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.verticalAccountFormGroup = this.fb.group({
      id: [null, Validators.required],
    });
    this.fecha = new Date();
    let fechaActual = this.datePipe.transform(this.fecha, "yyyy-MM-dd");
    this.verticalContratoFormGroup = this.fb.group({
      numero: [null, Validators.min(0)],
      lugar_obra: [null],
      area: [null],
      metros: [null],
      observacion: [null],
      cliente_id: [null],
      estado_id: [
        2,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      descripcion: [null],
      transporte_entrega: [false],
      transporte_devolucion: [false],
      fecha_inicio: [fechaActual],
      fecha_entrega: [fechaActual],
      devuelto: [false],
      pago_cancelado: [false],
      valor_total: [0, Validators.min(0)],
    });
  }

  submit() {
    this.createContrato();

    this.snackbar.open("Hooray! You successfully created your account.", null, {
      duration: 5000,
    });
  }
  submit1() {
    this.snackbar.open("Hooray! accion en boton1.", null, {
      duration: 5000,
    });
  }
  createContrato() {
    this.verticalContratoFormGroup.value.cliente_id = this.verticalAccountFormGroup.value.id;
    console.log(this.verticalContratoFormGroup.value);
    this.createContratoGQL
      .mutate({
        contrato: this.verticalContratoFormGroup.value,
      })
      .subscribe(
        ({ data }) => {
          this.openSnackbar("Contrato Guardado Exitosamente");
        },
        (error) => {
          console.log("Error al Guardar el Contrato", error);
          this.openSnackbar("Error al Guardar el Contrato");
        }
      );
  }
  openSnackbar(mensaje: string) {
    this.snackbar.open(mensaje, "cerrar", {
      duration: 3000,
      horizontalPosition: "right",
    });
  }
}
