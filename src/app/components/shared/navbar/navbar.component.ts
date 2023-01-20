import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(private routerService: Router) {}

  searchHero(text: string) {
    this.routerService.navigate(['/search', text]);
  }
}
