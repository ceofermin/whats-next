import { Component, OnInit } from '@angular/core';
import { TimeService } from '../../services/time/time.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.sass']
})
export class ClockComponent implements OnInit {
  fTime: string[] = [...this.timeService.clockTime];

  constructor(private timeService: TimeService) {}

  ngOnInit(): void {
    this.timeService.sInterval.subscribe(() => {
      this.fTime = [...this.timeService.clockTime];
    });
  }
}
