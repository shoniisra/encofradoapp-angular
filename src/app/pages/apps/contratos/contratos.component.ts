import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions,
} from "@angular/material/form-field";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
// import { MatDialog } from "@angular/material/dialog";
import { SelectionModel } from "@angular/cdk/collections";
import { FormControl } from "@angular/forms";
//vex
import { TableColumn } from "../../../../@vex/interfaces/table-column.interface";
import { fadeInUp400ms } from "../../../../@vex/animations/fade-in-up.animation";
import { stagger40ms } from "../../../../@vex/animations/stagger.animation";
import theme from "../../../../@vex/utils/tailwindcss";
//iconos
import icEdit from "@iconify/icons-ic/twotone-edit";
import icDelete from "@iconify/icons-ic/twotone-delete";
import icSearch from "@iconify/icons-ic/twotone-search";
import icAdd from "@iconify/icons-ic/twotone-add";
import icFilterList from "@iconify/icons-ic/twotone-filter-list";
import icMoreHoriz from "@iconify/icons-ic/twotone-more-horiz";
import icFolder from "@iconify/icons-ic/twotone-folder";
import icPhone from "@iconify/icons-ic/twotone-phone";
import icMail from "@iconify/icons-ic/twotone-mail";
import icMap from "@iconify/icons-ic/twotone-map";
//Manejo de Datos
import { Observable, ReplaySubject } from "rxjs";
import { filter } from "rxjs/operators";
import { untilDestroyed } from "ngx-take-until-destroy";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { map } from "rxjs/operators";

//Modelo
// import { CustomerCreateUpdateComponent } from "./customer-create-update/customer-create-update.component";xdxd
import { Contrato } from "src/app/models/contratoalquiler.model";
import { queryGetContratos } from "src/app/services/contratos";
// import { DeleteContratoGQL } from "./graphql/DeleteContratoGQL";

export type Query = {
  contrato_alquiler: Contrato[];
};
const GetContratos = queryGetContratos;

@Component({
  selector: "vex-contratos",
  templateUrl: "./contratos.component.html",
  styleUrls: ["./contratos.component.scss"],
  animations: [fadeInUp400ms, stagger40ms],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: "standard",
      } as MatFormFieldDefaultOptions,
    },
  ],
})
export class ContratosComponent implements OnInit, AfterViewInit, OnDestroy {
  layoutCtrl = new FormControl("fullwidth");
  subject$: ReplaySubject<Contrato[]> = new ReplaySubject<Contrato[]>(1);
  data$: Observable<Contrato[]> = this.subject$.asObservable();
  data: Observable<Contrato[]>;
  customers: Contrato[];

  @Input()
  columns: TableColumn<Contrato>[] = [
    { label: "Checkbox",property: "checkbox",type: "checkbox",visible: true,},
    { label: "cliente.nombre", property: "cliente.nombre", type: "text", visible: true },
    { label: "numero", property: "numero", type: "text", visible: true },
    { label: "fecha", property: "fecha", type: "text", visible: true },
    { label: "Actions", property: "actions", type: "button", visible: true },
    
    { label: "lugar", property: "lugar_obra", type: "text", visible: true },
    { label: "estado", property: "estado_actual.descripcion", type: "text", visible: true },
    { label: "area", property: "area", type: "text", visible: true },
    { label: "metraje", property: "metraje", type: "text", visible: true },
    {
      label: "observacion",
      property: "observacion",
      type: "text",
      visible: true,
    },
  ];

  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<Contrato> | null;
  selection = new SelectionModel<Contrato>(true, []);
  searchCtrl = new FormControl();

  icPhone = icPhone;
  icMail = icMail;
  icMap = icMap;
  icEdit = icEdit;
  icSearch = icSearch;
  icDelete = icDelete;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icMoreHoriz = icMoreHoriz;
  icFolder = icFolder;

  theme = theme;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private apollo: Apollo
  ) // private deleteContratoGQL: DeleteContratoGQL
  {}

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  getData() {
    this.data =  this.apollo
      .watchQuery<Query>({ query: GetContratos })
      .valueChanges.pipe(
        map(({ data }) => 
          data.contrato_alquiler
        )
      );
    return this.data;
  }

  ngOnInit() {
    this.getData().subscribe((customers) => {
      this.subject$.next(customers);
      // console.log(customers);
      // console.log(customers[0].cliente.nombre);
    });
   

    this.dataSource = new MatTableDataSource();

    this.data$.pipe(filter<Contrato[]>(Boolean)).subscribe((customers) => {
      this.customers = customers;
      this.dataSource.data = customers;
      console.log(this.customers);
      console.log(this.dataSource.data);
    });
   

    this.searchCtrl.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value) => this.onFilterChange(value));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createCustomer() {
    // console.log(this.searchCtrl.value);
    // this.dialog
    // .open(CustomerCreateUpdateComponent)
    // .afterClosed()
    // .subscribe((customer: Contrato) => {
    // if (customer) {
    // this.customers.unshift(new Contrato(customer));
    // this.subject$.next(this.customers);
    // }
    // });
  }

  updateCustomer(customer: Contrato) {
    // this.dialog
    //   .open(CustomerCreateUpdateComponent, {
    //     data: customer,
    //   })
    //   .afterClosed()
    //   .subscribe((updatedCustomer) => {
    //     /**
    //      * Customer is the updated customer (if the user pressed Save - otherwise it's null)
    //      */
    //     if (updatedCustomer) {
    //       /**
    //        * Here we are updating our local array.
    //        * You would probably make an HTTP request here.
    //        */
    //       const index = this.customers.findIndex(
    //         (existingCustomer) => existingCustomer.id === updatedCustomer.id
    //       );
    //       this.customers[index] = new Contrato(updatedCustomer);
    //       this.subject$.next(this.customers);
    //     }
    //   });
  }

  deleteCustomer(customer: Contrato) {
    // this.deleteContratoGQL.mutate({ id: customer.id }).subscribe();
    // this.customers.splice(
    //   this.customers.findIndex(
    //     (existingCustomer) => existingCustomer.id === customer.id
    //   ),
    //   1
    // );
    // this.selection.deselect(customer);
    // this.subject$.next(this.customers);
  }

  deleteCustomers(customers: Contrato[]) {
    customers.forEach((c) => this.deleteCustomer(c));
  }

  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  trackByProperty<T>(index: number, column: TableColumn<T>) {
    return column.property;
  }

  ngOnDestroy() {}
}
