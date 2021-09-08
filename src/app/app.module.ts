
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { CourseInfoComponent } from './courses/course-info.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Erro404Component } from './Erro404/Erro404.component';

@NgModule({
  // Aqui declaramos todos os nossos componentes
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseInfoComponent,
    StarComponent,
    NavBarComponent,
    Erro404Component,
    ReplacePipe
  ],
  // Usado para quando for importar um módulo
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full'
      },
      {
        path: 'courses',
        component: CourseListComponent
      },
      {
        // Colocando um parâmetro na rota (PathVariable)
        path: 'courses/info/:id',
        component: CourseInfoComponent
      },
      {
        path: '**',
        component: Erro404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
