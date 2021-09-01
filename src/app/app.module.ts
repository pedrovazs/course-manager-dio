
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';

@NgModule({
  // Aqui declaramos todos os nossos componentes
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent
  ],
  // Usado para quando for importar um módulo
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
