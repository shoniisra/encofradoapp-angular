import { NavController } from "@ionic/angular";
import { ContratoServiceService } from "src/app/services/contrato-service.service";
import { Contrato } from "src/app/models/contrato.interface";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  search: boolean = true;
  problemas: boolean = true;
  contratos: Contrato[];
  constructor(
    private nav: NavController,
    public contratoService: ContratoServiceService
  ) {}

  ngOnInit() {
    this.contratoService.getContratos().subscribe((res) => {
      this.contratos = res;
      console.log(res.length);
      if (res.length == 0) {
        this.problemas = true;
      } else {
        this.problemas = false;
      }
    });
  }
  ionViewWillEnter() {
    if (this.contratos.length == 0) {
      this.problemas = true;
    } else {
      this.problemas = false;
    }
  }
  showSearchBar() {
    this.search = !this.search;
  }
}
