import { UiService } from './services/ui/ui.service';

import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(private uiService: UiService, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.uiService.colorTheme$.subscribe((theme) => {
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty("background-color", theme.background);
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty("color", theme.foreground);
    });
  }
}
