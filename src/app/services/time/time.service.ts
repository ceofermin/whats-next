import { interval } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  sInterval = interval(1000);

  constructor() {}

  get date(): string {
    return new Date().toDateString();
  }

  get hours(): number {
    return new Date().getHours();
  }

  get minutes(): number {
    return new Date().getMinutes();
  }

  get seconds(): number {
    return new Date().getSeconds();
  }

  get clockTime(): string[] {
    const padTime = (e: number) => (e < 10)
      ? e.toString().padStart(2, "0") : e.toString();

    const fHours = padTime(this.hours);
    const fMinutes = padTime(this.minutes);
    const fSeconds = padTime(this.seconds);

    return [fHours, fMinutes, fSeconds];
  }
}
