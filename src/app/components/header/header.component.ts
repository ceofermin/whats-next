import { Component, OnInit } from '@angular/core';
import { faClock } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  hicon = faClock;

  constructor() {}

  ngOnInit(): void {}
}
