import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ConfirmDialogModule,SharedModule} from './a4Component';
import {ButtonModule} from "./a4Component";
import { AlertModule } from './a4Component';
@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    CommonModule,
    BrowserModule,
    ConfirmDialogModule,
    SharedModule,
    ButtonModule,
    AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
