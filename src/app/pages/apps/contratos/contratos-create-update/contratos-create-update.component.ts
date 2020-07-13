import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import icDescription from "@iconify/icons-ic/twotone-description";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { stagger80ms } from "../../../../../@vex/animations/stagger.animation";
import { fadeInUp400ms } from "../../../../../@vex/animations/fade-in-up.animation";
import { scaleIn400ms } from "../../../../../@vex/animations/scale-in.animation";
import { fadeInRight400ms } from "../../../../../@vex/animations/fade-in-right.animation";
import icVerticalSplit from "@iconify/icons-ic/twotone-vertical-split";
import icVisiblity from "@iconify/icons-ic/twotone-visibility";
import icVisibilityOff from "@iconify/icons-ic/twotone-visibility-off";
import icDoneAll from "@iconify/icons-ic/twotone-done-all";
import icMoreVert from "@iconify/icons-ic/twotone-more-vert";
import theme from "../../../../../@vex/utils/tailwindcss";
import { CreateContratoGQL } from "../graphql/CreateContratoGQL";
import { Contrato } from "src/app/models/contratoalquiler.model";
import { Cliente } from "src/app/models/cliente.model";
import { EstadoActual } from "src/app/models/estadoactual.model";

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
  productosFormGroup: FormGroup;
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
    private createContratoGQL: CreateContratoGQL
  ) {}

  ngOnInit() {
    
    this.verticalAccountFormGroup = this.fb.group({
      id: [null, Validators.required],
    });
    
    this.fecha = new Date();
    this.verticalContratoFormGroup = this.fb.group({
      numero: [null, Validators.min(0)],
      fecha: [this.fecha, Validators.required],
      lugar_obra: [null],
      area: [null],
      metros: [null],
      observacion: [null],
      cliente_id: [null],
      estado_id: [
        null,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
    });
    this.verticalContratoFormGroup.value.fecha = this.fecha;

    this.productosFormGroup = this.fb.group({
      descripcion:[null],
      transporte_entrega:[null],
      transporte_devolucion:[null],
      fecha_inicio: [null, Validators.required],
      fecha_entrega: [null],
      devuelto:[null],
      pago_cancelado:[null],
      valor_total:[null, Validators.required]
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
    // this.contrato = this.verticalContratoFormGroup.value;
    // this.contrato.cliente=this.cliente;
    // this.contrato.nte=this.cliente;=2;
    console.log(this.verticalContratoFormGroup.value);
    // console.log(this.verticalContratoFormGroup.value); cliente;

    //Aqui validaciones
    // if (this.validateForm(customer)) {
    this.createContratoGQL
      .mutate({
        //  cedula: customer.cedula,
        //  direccion: customer.direccion,
        //  direccion2: customer.direccion2,
        // email: customer.email,
        // nombre: customer.nombre,
        // nombre2: customer.nombre2,
        // observacion: customer.observacion,
        // telf1: customer.telf1,
        // telf2: customer.telf2,
        // telf3: customer.telf3,
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
    // }
  }
  openSnackbar(mensaje: string) {
    this.snackbar.open(mensaje, "cerrar", {
      duration: 3000,
      horizontalPosition: "right",
    });
  }
}
