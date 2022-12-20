import { Component, OnInit } from '@angular/core';
import { TimeService } from '../../services/time/time.service';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.sass']
})
export class ProgressbarComponent implements OnInit {
  hours: boolean[];

  constructor(private timeService: TimeService) {
    this.hours = this.hoursPassed;
  }

  get hoursPassed(): boolean[] {
    return [...Array(24)].map((e, i) => this.timeService.hours > i);
  }

  ngOnInit(): void {
    this.timeService.sInterval.subscribe(() => {
      this.hours = this.hoursPassed;
    });
  }
}
