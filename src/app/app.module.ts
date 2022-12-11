import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { TodoItemsComponent } from './components/todo-items/todo-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProgressbarComponent,
    TodoItemsComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
