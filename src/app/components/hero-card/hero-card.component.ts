import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
})
export class HeroCardComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() idx: number = 0;

  @Output() selectedHero: EventEmitter<number>;

  constructor() {
    this.selectedHero = new EventEmitter();
  }

  ngOnInit(): void {}

  emitIndex() {
    this.selectedHero.emit(this.idx);
  }
}
