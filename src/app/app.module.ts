
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Erro404Component } from './Erro404/Erro404.component';
import { CourseModule } from './courses/course.module';

@NgModule({
  // Aqui declaramos todos os nossos componentes
  declarations: [
    AppComponent,
    NavBarComponent,
    Erro404Component,
  ],
  // Usado para quando for importar um módulo
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full'
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
