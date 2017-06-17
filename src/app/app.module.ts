import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ConfirmDialogModule,SharedModule,ButtonModule,AlertModule,OrderlistModule} from './a4Component';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ConfirmDialogModule,
    SharedModule,
    ButtonModule,
    AlertModule,
    OrderlistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
