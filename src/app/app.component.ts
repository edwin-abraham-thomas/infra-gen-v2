import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'infra-gen';

  routes: (string | undefined)[] = [];

  /**
   *
   */
  constructor(private readonly _router: Router) {
    this.routes = [
      'poc/aws',
      'poc/fs'
    ]
  }

  navigateTo(route: string | undefined) {
    this._router.navigate([route])
  }
}
