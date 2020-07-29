import { Component } from '@angular/core';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testbed';
  faNewspaper = faNewspaper;
  showSidebar = true;
}
