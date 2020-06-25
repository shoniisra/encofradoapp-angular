import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
// Apollo
import { ApolloBoostModule, ApolloBoost , APOLLO_BOOST_CONFIG} from "apollo-angular-boost";

const uri = "https://encofrado-app.herokuapp.com/v1/graphql";

@NgModule({
  exports: [
    HttpClientModule,
    ApolloBoostModule,
  ],
  providers: [{
    provide: APOLLO_BOOST_CONFIG,
    useValue: {
      uri
    }
  }]
})
export class GraphqlModule {
  
}
