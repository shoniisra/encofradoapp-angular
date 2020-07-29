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
import { Router } from "@angular/router";

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
import icClose from "@iconify/icons-ic/twotone-close";

import { CreateContratoGQL } from "../graphql/CreateContratoGQL";
import { Contrato } from "src/app/models/contratoalquiler.model";
import { Cliente } from "src/app/models/cliente.model";
import { CreateArticuloAlquilerGQL } from "../graphql/CreateArticuloAlquilerGQL";
import { MatDialog, MatDialogRef } from "@angular/material";

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
    articulo_alquiler: this.fb.array([]),
  });

  odgovorForm = this.fb.group({
    especificaciones_producto: [null],
    cantidad_entregado: [
      0,
      Validators.compose([Validators.required, Validators.min(0)]),
    ],
    cantidad_devuelto: 0,
    contrato_id: [null],
    articulo_id: [null],
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
    private router: Router,
    private fb: FormBuilder,
    private dialog: MatDialog,
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

  // public articulo_alquiler = this.pitanjeForm.controls["articulo_alquiler"];
  get articulo_alquiler() {
    return this.pitanjeForm.get('articulo_alquiler') as FormArray;
  }

  addArticulo(): void {
    console.log(this.articulo_alquiler);
    this.articulo_alquiler.push(this.odgovorForm);
    console.log(this.articulo_alquiler);
    console.log(this.pitanjeForm.value.articulo_alquiler);
  }

  submit() {
    this.createContrato();
  }

  createContrato() {
    let numerocontrato;
    this.verticalContratoFormGroup.value.cliente_id = this.verticalAccountFormGroup.value.id;
    console.log(this.verticalContratoFormGroup.value);

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
        // articulo_alquiler: this.ArticuloAlquilerFormGroup.value,
        objects: this.pitanjeForm.value.articulo_alquiler,
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

  // volver() {
  // }

  volver() {
    this.dialog
      .open(CloseDialogComponent, {
        disableClose: false,
        width: "400px",
      })
      .afterClosed()
      .subscribe((result) => {
        if (result == "Yes") {
          this.router.navigate(["apps/contratos"]);
        }
      });
  }

  openSnackbar(mensaje: string) {
    this.snackbar.open(mensaje, "cerrar", {
      duration: 3000,
      horizontalPosition: "right",
    });
  }
}

@Component({
  selector: "vex-components-overview-close-dialog",
  template: `
    <div mat-dialog-title fxLayout="row" fxLayoutAlign="space-between center">
      <div>Precaución</div>
      <button
        type="button"
        mat-icon-button
        (click)="close('No answer')"
        tabindex="-1"
      >
        <mat-icon [icIcon]="icClose"></mat-icon>
      </button>
    </div>

    <mat-dialog-content>
      <p>Seguro, Salir sin guardar?</p>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button (click)="close('No')">NO</button>
      <button mat-button color="primary" (click)="close('Yes')">YES</button>
    </mat-dialog-actions>
  `,
})
export class CloseDialogComponent {
  icClose = icClose;

  constructor(private dialogRef: MatDialogRef<CloseDialogComponent>) {}

  close(answer: string) {
    this.dialogRef.close(answer);
  }
}
