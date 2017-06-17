import {Input, Component, OnInit,AfterViewInit,NgModule,Output,EventEmitter,ElementRef } from '@angular/core';
import {CommonModule} from '@angular/common';
import  {ButtonModule} from '../a4Component';
import {CommonHandler} from "../shared/commonService";
@Component({
  selector: 'a4c-order',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements AfterViewInit {
  @Input() data:any[];
  @Input() field:any;
  @Input() header:string;
  @Output() onRowClick:EventEmitter<any> = new EventEmitter<any>();

  constructor(private ele:ElementRef, private commonService:CommonHandler) {
  }

  ngAfterViewInit() {
   var  copyData = this.commonService.copy(this.data,copyData,-1);

    copyData[0].name = "pradeep"
    console.log(copyData);
    console.log(this.data);
  }

  rowClicked(e, data) {
    let listArray = this.ele.nativeElement.getElementsByClassName("a4c-list");
    for (let i = 0; i < listArray.length; i++) {
      this.commonService.removeClass(listArray[i], "active");
    }
    this.commonService.addClass(e.currentTarget, "active");
  }
}
@NgModule({
  imports: [CommonModule,ButtonModule],
  exports: [OrderlistComponent],
  declarations: [OrderlistComponent],
  providers: [CommonHandler]
})
export class OrderlistModule {

}
