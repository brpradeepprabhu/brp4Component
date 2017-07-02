import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/Forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ConfirmDialogModule, SharedModule, ButtonModule, AlertModule, OrderlistModule, PickListModule } from './a4Component';
import { PicklistComponent } from './picklist/picklist.component';
import { NameService } from './name.service'

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    ConfirmDialogModule,
    SharedModule,
    ButtonModule,
    AlertModule,
    OrderlistModule,
    PickListModule
  ],
  providers: [NameService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
