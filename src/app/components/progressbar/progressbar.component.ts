import { Component, OnInit } from '@angular/core';
import { TimeService } from '../../services/time/time.service';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.sass']
})
export class ProgressbarComponent implements OnInit {
  hours: boolean[] = [];

  constructor(private timeService: TimeService) {}

  ngOnInit(): void {
    this.timeService.currentTime$.subscribe((t) => {
      this.hours = [...Array(24).map((e, i) => t[0] > i)];
    });
  }
}
