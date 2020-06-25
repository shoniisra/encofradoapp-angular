import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Observable, of, ReplaySubject } from "rxjs";
import { filter } from "rxjs/operators";
import { Cliente } from "./interfaces/cliente.model";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatDialog } from "@angular/material/dialog";
import { TableColumn } from "../../../../@vex/interfaces/table-column.interface";
import { aioTableLabels } from "../../../../static-data/aio-table-data";
import { CustomerCreateUpdateComponent } from "./customer-create-update/customer-create-update.component";
import icEdit from "@iconify/icons-ic/twotone-edit";
import icDelete from "@iconify/icons-ic/twotone-delete";
import icSearch from "@iconify/icons-ic/twotone-search";
import icAdd from "@iconify/icons-ic/twotone-add";
import icFilterList from "@iconify/icons-ic/twotone-filter-list";
import { SelectionModel } from "@angular/cdk/collections";
import icMoreHoriz from "@iconify/icons-ic/twotone-more-horiz";
import icFolder from "@iconify/icons-ic/twotone-folder";
import { fadeInUp400ms } from "../../../../@vex/animations/fade-in-up.animation";
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions,
} from "@angular/material/form-field";
import { stagger40ms } from "../../../../@vex/animations/stagger.animation";
import { FormControl } from "@angular/forms";
import { untilDestroyed } from "ngx-take-until-destroy";
import { MatSelectChange } from "@angular/material/select";
import theme from "../../../../@vex/utils/tailwindcss";
import icPhone from "@iconify/icons-ic/twotone-phone";
import icMail from "@iconify/icons-ic/twotone-mail";
import icMap from "@iconify/icons-ic/twotone-map";

import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { map } from "rxjs/operators";

const GetClientes = gql`
  query allPosts {
    cliente {
      id
      cedula
      direccion
      direccion2
      email
      nombre
      nombre2
      observacion
      telf1
      telf2
      telf3
    }
  }
`;

@Component({
  selector: "vex-aio-table",
  templateUrl: "./aio-table.component.html",
  styleUrls: ["./aio-table.component.scss"],
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
export class AioTableComponent implements OnInit, AfterViewInit, OnDestroy {
  data: Observable<any>;
  loading: boolean;
  currentUser: any;
  error: any;
  layoutCtrl = new FormControl("boxed");

  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
  subject$: ReplaySubject<Cliente[]> = new ReplaySubject<Cliente[]>(1);
  data$: Observable<Cliente[]> = this.subject$.asObservable();
  customers: Cliente[];
  // customers: Observable<any>;

  @Input()
  columns: TableColumn<Cliente>[] = [
    {
      label: "Checkbox",
      property: "checkbox",
      type: "checkbox",
      visible: true,
    },
    { label: "cedula", property: "cedula", type: "text", visible: true },
    { label: "direccion", property: "direccion", type: "text", visible: true },
    {
      label: "direccion2",
      property: "direccion2",
      type: "text",
      visible: true,
    },
    { label: "email", property: "email", type: "text", visible: true },
    { label: "nombre", property: "nombre", type: "text", visible: true },
    { label: "nombre2", property: "nombre2", type: "text", visible: true },
    {
      label: "observacion",
      property: "observacion",
      type: "text",
      visible: true,
    },
    { label: "telf1", property: "telf1", type: "text", visible: true },
    { label: "telf2", property: "telf2", type: "text", visible: true },
    { label: "telf3", property: "telf3", type: "text", visible: true },
    { label: "Labels", property: "labels", type: "button", visible: true },
    { label: "Actions", property: "actions", type: "button", visible: true },
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<Cliente> | null;
  selection = new SelectionModel<Cliente>(true, []);
  searchCtrl = new FormControl();

  labels = aioTableLabels;

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

  constructor(private dialog: MatDialog, private apollo: Apollo) {}

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  getData() {
    this.data = this.apollo
      .watchQuery({ query: GetClientes })
      .valueChanges.pipe(map(({ data }) => data.cliente));

    return this.data;
  }

  ngOnInit() {
    this.getData().subscribe((customers) => {
      this.subject$.next(customers);
    });

    this.dataSource = new MatTableDataSource();

    this.data$.pipe(filter<Cliente[]>(Boolean)).subscribe((customers) => {
      this.customers = customers;
      this.dataSource.data = customers;
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
    this.dialog
      .open(CustomerCreateUpdateComponent)
      .afterClosed()
      .subscribe((customer: Cliente) => {
        /**
         * Customer is the updated customer (if the user pressed Save - otherwise it's null)
         */
        if (customer) {
          /**
           * Here we are updating our local array.
           * You would probably make an HTTP request here.
           */
          this.customers.unshift(new Cliente(customer));
          this.subject$.next(this.customers);
        }
      });
  }

  updateCustomer(customer: Cliente) {
    this.dialog
      .open(CustomerCreateUpdateComponent, {
        data: customer,
      })
      .afterClosed()
      .subscribe((updatedCustomer) => {
        /**
         * Customer is the updated customer (if the user pressed Save - otherwise it's null)
         */
        if (updatedCustomer) {
          /**
           * Here we are updating our local array.
           * You would probably make an HTTP request here.
           */
          const index = this.customers.findIndex(
            (existingCustomer) => existingCustomer.id === updatedCustomer.id
          );
          this.customers[index] = new Cliente(updatedCustomer);
          this.subject$.next(this.customers);
        }
      });
  }

  deleteCustomer(customer: Cliente) {
    /**
     * Here we are updating our local array.
     * You would probably make an HTTP request here.
     */
    this.customers.splice(
      this.customers.findIndex(
        (existingCustomer) => existingCustomer.id === customer.id
      ),
      1
    );
    this.selection.deselect(customer);
    this.subject$.next(this.customers);
  }

  deleteCustomers(customers: Cliente[]) {
    /**
     * Here we are updating our local array.
     * You would probably make an HTTP request here.
     */
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

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  trackByProperty<T>(index: number, column: TableColumn<T>) {
    return column.property;
  }

  onLabelChange(change: MatSelectChange, row: Cliente) {
    const index = this.customers.findIndex((c) => c === row);
    this.customers[index].labels = change.value;
    this.subject$.next(this.customers);
  }

  ngOnDestroy() {}
}
