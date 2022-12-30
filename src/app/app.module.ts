import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { TodoItemsComponent } from './components/todo-items/todo-items.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { ClockComponent } from './components/clock/clock.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProgressbarComponent,
    TodoItemsComponent,
    AddTodoComponent,
    ClockComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
