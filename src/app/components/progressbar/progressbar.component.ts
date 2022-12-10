import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.sass']
})
export class ProgressbarComponent implements OnInit, OnChanges, OnDestroy {
  id: any;
  now = new Date();
  getCurrentTime(): string {
    let rValue: string = "";
    let hours: number = this.now.getHours();
    rValue += `${hours < 10 ? '0' : ''}${hours}:`;
    rValue += `${this.now.getMinutes() < 10 ? '0' : ''}${this.now.getMinutes()}:`;
    rValue += `${this.now.getSeconds() < 10 ? '0' : ''}${this.now.getSeconds()}`;
    return rValue;
  }
  getHoursPassed(): boolean[] {
    let rValue = [];
    let passed = this.now.getHours();
    for (let hours = 24; hours > 0; --hours) {
      rValue.push(passed > 0);
      --passed;
    }
    return rValue;
  }
  time: string = this.getCurrentTime();
  hoursPassed: boolean[] = this.getHoursPassed();

  constructor() {}

  ngOnInit(): void {
    this.id = setInterval(() => {
      this.now = new Date();
      this.time = this.getCurrentTime();
      this.hoursPassed = this.getHoursPassed();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.id) {
      clearInterval(this.id);
    }
  }

  ngOnChanges(changes: any): void {}
}
