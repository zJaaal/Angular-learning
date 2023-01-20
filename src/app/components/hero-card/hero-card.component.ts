import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
})
export class HeroCardComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() idx: number = 0;

  constructor(private routerService: Router) {}

  ngOnInit(): void {}

  navigateToHero() {
    this.routerService.navigate(['/heroe', this.idx]);
  }
}
