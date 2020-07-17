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

  // contratoFormGroup: FormGroup;

  verticalAccountFormGroup: FormGroup;
  // verticalClienteFormGroup: FormGroup;
  verticalContratoFormGroup: FormGroup;
  // verticalContratoFormGroup: FormGroup;
  detalleAlquilerFormGroup: FormGroup;
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
      fecha: [fechaActual, Validators.required],
      lugar_obra: [null],
      area: [null],
      metros: [null],
      observacion: [null],
      cliente_id: [null],
      estado_id: [
        2,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
    });
    this.verticalContratoFormGroup.value.fecha = this.fecha;

    this.detalleAlquilerFormGroup = this.fb.group({
      descripcion: [null],
      transporte_entrega: [false],
      transporte_devolucion: [false],
      fecha_inicio: [fechaActual, Validators.required],
      fecha_entrega: [fechaActual],
      devuelto: [false],
      pago_cancelado: [false],
      valor_total: [0, Validators.required],
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
    // this.cliente=this.verticalAccountFormGroup.value;
    // this.cliente.id=2;
    this.contrato = this.verticalContratoFormGroup.value;
    // this.contrato.cliente=this.cliente;
    // this.contrato.nte=this.cliente;=2;
    // console.log(this.detalleAlquilerFormGroup.value);
    this.detalleAlquilerFormGroup.value.contrato_id=3;
    let detalle_alquiler = this.detalleAlquilerFormGroup.value;
    let detalle_aux = JSON.stringify({ detalle_alquiler });
    // JSON.parse(JSON.stringify(object))
    console.log(this.verticalContratoFormGroup.value); 
    console.log(detalle_aux);
    // console.log(this.verticalContratoFormGroup.value); cliente;
    // this.verticalContratoFormGroup.value.detalle_alquiler=this.detalleAlquilerFormGroup.value
    // console.log(this.verticalContratoFormGroup.value);
    //Aqui validaciones
    // if (this.validateForm(customer)) {
    this.createContratoGQL
      .mutate({
        numero: this.verticalContratoFormGroup.value.numero,
        fecha: this.verticalContratoFormGroup.value.fecha,
        lugar_obra: this.verticalContratoFormGroup.value.lugar_obra,
        area: this.verticalContratoFormGroup.value.area,
        metros: this.verticalContratoFormGroup.value.metros,
        observacion: this.verticalContratoFormGroup.value.observacion,
        estado_id: this.verticalContratoFormGroup.value.estado_id,
        cliente_id: this.verticalContratoFormGroup.value.cliente_id,
        detalle_alquiler:JSON.stringify({ detalle_alquiler })
        //     // telf2: customer.telf2,
        //     // telf3: customer.telf3,
        // contrato: aux,
        // detallecontrato:this.detalleAlquilerFormGroup.value
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
    // }
  }
  openSnackbar(mensaje: string) {
    this.snackbar.open(mensaje, "cerrar", {
      duration: 3000,
      horizontalPosition: "right",
    });
  }
}
