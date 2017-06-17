import { Component,ViewChild } from '@angular/core';
import { AlertDialog } from './a4Component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  //@ViewChild(AlertDialog) alertDialog:AlertDialog;
  //confrimYesClick() {
  //  alert("the confirm parent emitter")
  //}
  //showConfirm()
  //{
  //  this.alertDialog.visibleAlert(true);
  //}
  data = [{name: "Rambo", age: "28"}, {name: "Ram", age: "28"}, {name: "George", age: "28"}, {
    name: "Randy",
    age: "28"
  }, {name: "Rambo", age: "28"}, {name: "Ram", age: "28"}, {name: "George", age: "28"}, {name: "Randy", age: "28"}]
}
