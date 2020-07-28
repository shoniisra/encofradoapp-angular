import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
} from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { DatePipe } from "@angular/common";

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
import { CreateArticuloAlquilerGQL } from "../graphql/CreateArticuloAlquilerGQL";

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
  ArticuloAlquilerFormGroup: FormGroup;

  pitanjeForm = this.fb.group({
    articulo_alquiler: this.fb.array([])
  });

  odgovorForm = this.fb.group({
    // data: ['', [Validators.required]],
    // color: 'danger',
    // especificaciones_producto: [null],
    // cantidad_entregado: [
    // null,
    // Validators.compose([Validators.required, Validators.min(0)]),
    // ],
    // cantidad_devuelto: [null, Validators.min(0)],
    // contrato_id: [null],
    // articulo_id: [null],
    cantidad_devuelto: 2,
    cantidad_entregado: 3,
    contrato_id: 1,
    articulo_id: 1,
    especificaciones_producto: "crucetas",
  });

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
    private createArticuloAlquilerGQL: CreateArticuloAlquilerGQL,
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

    this.ArticuloAlquilerFormGroup = this.fb.group({
      especificaciones_producto: [null],
      cantidad_entregado: [
        null,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      cantidad_devuelto: [null, Validators.min(0)],
      contrato_id: [null],
      articulo_id: [null],
    });
  }

  public articulo_alquiler = this.pitanjeForm.controls["articulo_alquiler"];
  // get odgovori() {
  //   return this.pitanjeForm.get('odgovori') as FormArray;
  // }

  addArticulo(): void {
    // this.info = this.odgovorForm.value;
    this.articulo_alquiler.push(this.odgovorForm);
    console.log(this.pitanjeForm.value, this.odgovorForm.value, this.articulo_alquiler);
  }

  submit() {
    this.createContrato();
  }

  createContrato() {
    let numerocontrato;
    this.verticalContratoFormGroup.value.cliente_id = this.verticalAccountFormGroup.value.id;
    console.log(this.verticalContratoFormGroup.value);

    // let articulo = [
    //   {
    //     cantidad_devuelto: 2,
    //     cantidad_entregado: 3,
    //     contrato_id: 1,
    //     articulo_id: 1,
    //     especificaciones_producto: "crucetas",
    //   }
    // ];

    (this.ArticuloAlquilerFormGroup.value.cantidad_devuelto = 2),
      (this.ArticuloAlquilerFormGroup.value.cantidad_entregado = 3),
      (this.ArticuloAlquilerFormGroup.value.contrato_id = 1),
      (this.ArticuloAlquilerFormGroup.value.articulo_id = 1),
      (this.ArticuloAlquilerFormGroup.value.especificaciones_producto =
        "crucetas"),
      console.log(this.ArticuloAlquilerFormGroup.value);
    // console.log(Array.of(articulo));

    // let jsonObject = {};
    // empArray.forEach((item) => (obj[item.id] = item.name));
    // let json = JSON.stringify(jsonObject);
    // console.log(empArray);
    // console.log(json);

    // this.createContratoGQL
    //   .mutate({
    //     contrato: this.verticalContratoFormGroup.value,
    //   })
    //   .subscribe(
    //     ({ data }) => {
    //       numerocontrato = data;
    //       console.log(data);
    //       this.openSnackbar("Contrato Guardado Exitosamente");
    //     },
    //     (error) => {
    //       console.log("Error al Guardar el Contrato", error);
    //       this.openSnackbar("Error al Guardar el Contrato");
    //     }
    //   );

    this.createArticuloAlquilerGQL
      .mutate({
        articulo_alquiler: this.ArticuloAlquilerFormGroup.value,
      })
      .subscribe(
        ({ data }) => {
          console.log(data);
          this.openSnackbar("Articulo Guardado Exitosamente");
        },
        (error) => {
          console.log("Error al Guardar el Articulo", error);
          this.openSnackbar("Error al Guardar el Articulo");
        }
      );

    // console.log(numerocontrato);
  }

  openSnackbar(mensaje: string) {
    this.snackbar.open(mensaje, "cerrar", {
      duration: 3000,
      horizontalPosition: "right",
    });
  }
}
