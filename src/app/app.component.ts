import { Component } from '@angular/core';
import { HeaderComponent } from './core/header/header.component';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the database of svg\'s';
}
