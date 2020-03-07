import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../servicios/heroes.service";

@Component({
  selector: "app-buscador",
  templateUrl: "./buscador.component.html"
})
export class BuscadorComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {}

  heroes: any[] = [];
  termino: string;

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.termino = params["termino"];

      this.heroes = this._heroesService.buscarHeroes(this.termino);

      console.log(this.heroes);
    });
  }
}
