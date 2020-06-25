import { Component, OnInit } from "@angular/core";
// import { Apollo, gql } from "apollo-angular-boost";
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Post, AllPostsGQL } from './graphql';
import {Http, Headers, Response} from 'angular2/http'; 
import { Cliente, Query } from "../../models/types";
import { JsonPipe } from '@angular/common';
@Component({
  selector: "app-list",
  templateUrl: "list.page.html",
  styleUrls: ["list.page.scss"],
})
export class ListPage implements OnInit {
  //  clientes: Observable<Cliente[]>;
  clientes: any[];
  // rates: any[];
   loading = true;
   error: any;
  // private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}
  

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
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
        `,
      })
      .valueChanges
      // .pipe(
      //    map((res:Response) => 
      //   //  {
      //     // console.log(res); 
      //     res.json()
      //   //    this.clientes = res.data;
      //   //    console.log(res);
      //   // }
      //   )
      //     )         
      .subscribe((result) => {        
         console.log(result);
         console.log(result.data);
        // this.clientes = result && result.data;        
        this.clientes = <Cliente[]> result.data;        
        this.loading = result.loading;
        this.error = result.errors; 
        
        //  console.log(result.data);

       });
      
  }
}
