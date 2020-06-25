import { Component, OnInit } from "@angular/core";
// import { Apollo, gql } from "apollo-angular-boost";
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

// import { Post, AllPostsGQL } from './graphql';
// import {Http, Headers, Response} from 'angular2/http'; 
import { Cliente, Query } from "../../models/types";
import { JsonPipe } from '@angular/common';
const FeedQuery = gql`
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
 // clientes: any;
  // rates: any[];
 
   loading: boolean;
   currentUser: any;
   error: any;
  // private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}
  

  ngOnInit() {
    this.data = this.apollo
      .watchQuery({query: FeedQuery})
      .valueChanges.pipe(map(({data}) => data.Cliente));
    
      
  }
}
