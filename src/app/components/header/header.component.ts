import { Component } from '@angular/core';
import { faClock } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  hicon = faClock;
  today = new Date();
}
