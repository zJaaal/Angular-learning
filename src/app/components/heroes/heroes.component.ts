import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(
    private _heroesService: HeroesService,
    private routerService: Router
  ) {}

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();

    console.log(this.heroes);
  }

  verHeroe(idx: number) {
    this.routerService.navigate(['/heroe', idx]);
  }
}
