import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.sass']
})
export class ProgressbarComponent implements OnInit {
  now = new Date();
  hours: boolean[];

  getHoursPassed(): boolean[] {
    return [...Array(24)].map((e, i) => this.now.getHours() > i);
  }

  constructor() {
    this.hours = this.getHoursPassed();
  }

  ngOnInit(): void {
    interval(1000).subscribe(() => {
      this.now = new Date();
      this.hours = this.getHoursPassed();
    });
  }
}
