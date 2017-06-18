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
  data = [{name: "a", age: "28"}, {name: "b", age: "28"}, {name: "c", age: "28"}, {
    name: "d",
    age: "28"
  }, {name: "e", age: "28"}, {name: "f", age: "28"}, {name: "g", age: "28"}, {name: "h", age: "28"}]
}
