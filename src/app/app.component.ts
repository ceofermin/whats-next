import { UiService } from './services/ui/ui.service';

import { Component, AfterContentInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterContentInit {
  constructor(private uiService: UiService, private elementRef: ElementRef) {}

  ngAfterContentInit(): void {
    this.uiService.colorTheme$.subscribe((theme) => {
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty("background-color", theme.background);
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty("color", theme.foreground);
    });
  }
}
