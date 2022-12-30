import { Component, OnInit } from '@angular/core';
import { TimeService } from '../../services/time/time.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.sass']
})
export class ClockComponent implements OnInit {
  fTime: string[] = ["00", "00", "00"];

  constructor(private timeService: TimeService) {}

  ngOnInit(): void {
    this.timeService.currentTime$.subscribe((t) => {
      this.fTime = t.map((e) => (e < 10)
        ? e.toString().padStart(2, "0") : e.toString());
    })
  }
}
