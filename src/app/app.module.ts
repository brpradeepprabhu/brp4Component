import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ConfirmDialogModule,SharedModule,ButtonModule,AlertModule,OrderlistModule,PickListModule} from './a4Component';
import { PicklistComponent } from './picklist/picklist.component';

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
    OrderlistModule,
    PickListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
