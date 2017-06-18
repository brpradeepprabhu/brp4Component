import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ConfirmDialogModule,SharedModule,ButtonModule,AlertModule,OrderlistModule} from './a4Component';
import { PicklistComponent } from './picklist/picklist.component';

@NgModule({
  declarations: [
    AppComponent,
    PicklistComponent],
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
