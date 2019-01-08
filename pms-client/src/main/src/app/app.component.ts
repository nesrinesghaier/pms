import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'pms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
    const redirectRoute = new URLSearchParams(document.location.search);
    if (redirectRoute.get('url') && redirectRoute.get('url') !== '') {
      router.navigate([redirectRoute.get('url')]);
    }
  }

  title = 'pms-client';
}
