import { Component, ViewChild } from '@angular/core';
import { AlertDialog } from './a4Component';
import { NameService } from './name.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data = [];
  @ViewChild(AlertDialog) alertDialog: AlertDialog;
  constructor(private ns: NameService) {
    this.data = this.ns.userData
   }
  confrimYesClick() {
    alert('the confirm parent emitter')
  }
  showConfirm() {
    this.alertDialog.visibleAlert(true);
  }
}
