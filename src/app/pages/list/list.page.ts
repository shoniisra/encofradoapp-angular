import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const GetClientes = gql`
  query allPosts {
    Cliente {
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
  selector: "app-list",
  templateUrl: "list.page.html",
  styleUrls: ["list.page.scss"],
})
export class ListPage implements OnInit {
  data: Observable<any>;
  loading: boolean;
  currentUser: any;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    // this.data = this.apollo
    //   .watchQuery({ query: GetClientes })
    //   .valueChanges.pipe(map(({ data }) => data.Cliente));
  }
}
