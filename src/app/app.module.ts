import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PublicDataComponent } from './public-data/public-data.component';
import {HttpClientModule} from '@angular/common/http';

const appRoutes:Routes=[
  {
    path:"",component:PublicDataComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PublicDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
