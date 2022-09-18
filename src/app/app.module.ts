import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {HttpClientModule } from '@angular/common/http';
import { ReciboComponent } from './pages/recibo/recibo.component'
import { FormsModule } from '@angular/forms';
import { DetalleComponent } from './pages/recibo/detalle/detalle.component';
import { CrearComponent } from './pages/recibo/crear/crear.component';

@NgModule({
  declarations: [
    AppComponent,
    ReciboComponent,
    DetalleComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
