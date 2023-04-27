import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppslistComponent } from './appslist/appslist.component';


@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    DashboardComponent,
    NavbarComponent,
    AppslistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      {
        path: "home",
        component: DashboardComponent
      },
      {
        "path": "Caluclator",
        component: CalcComponent
      },
      {
        "path": "apps",
        component: AppslistComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
