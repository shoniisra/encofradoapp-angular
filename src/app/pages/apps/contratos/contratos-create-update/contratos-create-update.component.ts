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

@Component({
  selector: "vex-contratos-create-update",
  templateUrl: "./contratos-create-update.component.html",
  styleUrls: ["./contratos-create-update.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [stagger80ms, fadeInUp400ms, scaleIn400ms, fadeInRight400ms],
})
export class ContratosCreateUpdateComponent implements OnInit {
  contrato: Contrato;

  accountFormGroup: FormGroup;
  // contratoFormGroup: FormGroup;
  confirmFormGroup: FormGroup;

  verticalAccountFormGroup: FormGroup;
  // verticalClienteFormGroup: FormGroup;
  verticalContratoFormGroup: FormGroup;
  // verticalContratoFormGroup: FormGroup;
  verticalConfirmFormGroup: FormGroup;

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
    /**
     * Horizontal Stepper
     * @type {FormGroup}
     */
    this.accountFormGroup = this.fb.group({
      username: [null, Validators.required],
      // name: [null, Validators.required],
      // email: [null, Validators.required]
    });

    this.confirmFormGroup = this.fb.group({
      terms: [null, Validators.requiredTrue],
    });

    /**
     * Vertical Stepper
     * @type {FormGroup}
     */
    this.verticalAccountFormGroup = this.fb.group({
      username: [null, Validators.required],
    });

    this.verticalContratoFormGroup = this.fb.group({
      numero: [
        null,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
      fecha: [null, Validators.required],
      lugar_obra: [null],
      area: [null],
      metraje: [null],
      observacion: [null],
      estado_id: [
        null,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
    });

    this.verticalConfirmFormGroup = this.fb.group({
      terms: [null, Validators.requiredTrue],
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
    this.contrato = this.verticalContratoFormGroup.value;

    // console.log(this.verticalContratoFormGroup.value);
      
    //Aqui validaciones
    // if (this.validateForm(customer)) {
    this.createContratoGQL
      .mutate({       
        area=this.contrato;
    
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
