import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ConfirmDialogModule,SharedModule} from './a4Component';
import {ButtonModule} from "./button/button.component";
import { AlertComponent } from './alert/alert.component';
@NgModule({
  declarations: [
    AppComponent,
    AlertComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    ConfirmDialogModule,
    SharedModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
