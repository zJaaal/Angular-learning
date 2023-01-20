import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  heroes: Heroe[] = [];
  text: string = '';

  constructor(
    private _heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private routerService: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ text }) => {
      this.heroes = this._heroesService.searchHeroes(text);
      this.text = text;
    });
  }

  navigateToHero(idx: number) {
    this.routerService.navigate(['/heroe', idx]);
  }
}
