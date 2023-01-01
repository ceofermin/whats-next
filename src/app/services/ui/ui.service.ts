import { BehaviorSubject, interval, of } from 'rxjs';

import { Theme } from '../../Theme';
import { TimeService } from '../../services/time/time.service';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UiService {
  uiThemes: Theme[] = [
    { name: "morning", foreground: "#ffffff", background: "#d08f3c" },
    { name: "miday", foreground: "#ffffff", background: "#78b4b7" },
    { name: "evening", foreground: "#ffffff", background: "#202764" },
    { name: "midnight", foreground: "#ffffff", background: "#242035" },
  ];

  get colorTheme$(): BehaviorSubject<Theme> {
    const theme = new BehaviorSubject(this.uiThemes[0]);
    this.timeService.dayCompletedPercent$.subscribe((percent) => {
      if (percent <= 25) theme.next(this.uiThemes[0]);
      else if (percent <= 50) theme.next(this.uiThemes[1]);
      else if (percent <= 75) theme.next(this.uiThemes[2]);
      else if (percent <= 100) theme.next(this.uiThemes[3]);
    });
    return theme;
  }

  constructor(private timeService: TimeService) {}
}
