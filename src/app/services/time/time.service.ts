import { BehaviorSubject, interval } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  constructor() {}

  get currentTime(): number[] {
    const d = new Date();
    return [d.getHours(), d.getMinutes(), d.getSeconds()];
  }

  get currentTime$(): BehaviorSubject<number[]> {
    const time = new BehaviorSubject(this.currentTime);
    interval(1000).subscribe(() => time.next(this.currentTime));
    return time;
  }

  get dayCompletedPercent$(): BehaviorSubject<number> {
    const getDayCompleted = () => (this.currentTime[0] / 24) * 100;
    const dayCompleted = new BehaviorSubject(getDayCompleted());
    this.currentTime$.subscribe(() => dayCompleted.next(getDayCompleted()));
    return dayCompleted;
  }
}
