import {Input, Component, OnInit,AfterViewInit,NgModule,Output,EventEmitter,ElementRef,ViewChild } from '@angular/core';
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
  @Input() height:number= 150;
  @Input() header:string;
  @Input() customClass:string;
  @Input() btnPosition:string="";
  @Output() onRowClick:EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('buttonContainer') buttonDiv:ElementRef;
  @ViewChild('orderlistContainer') orderDiv:ElementRef;
  @ViewChild('orderListValues') orderListValues:ElementRef;
  @ViewChild ('orderContianer') orderContianer:ElementRef;
  selectedRow:any;

  constructor(private ele:ElementRef, private commonService:CommonHandler) {
  }

  ngAfterViewInit() {
    this.commonService.addClass(this.orderContianer,this.customClass)
    this.orderListValues.nativeElement.style.overflow = "auto";
    this.orderListValues.nativeElement.style.height= this.height+ "px";
    this.selectedRow = {target: undefined, data: undefined};
    this.buttonDiv.nativeElement.style.marginTop = (this.orderDiv.nativeElement.offsetHeight - this.buttonDiv.nativeElement.offsetHeight) / 2 + "px";
    this.buttonDiv.nativeElement.style.float = (this.btnPosition.trim().toLowerCase() == "right") ? "right" : "left";

  }

  isSelected() {
    if (this.commonService.isUndefined(this.selectedRow.target)) {
      console.error("select atleast one row")
      return false;
    }
    return true;
  }

  moveTop() {
    if (this.isSelected()) {
      let index = this.data.indexOf(this.selectedRow.data);
      this.data.splice(index, 1);
      this.data.splice(0, 0, this.selectedRow.data);

    }
  }

  oneTop() {
    if (this.isSelected()) {
      let index = this.data.indexOf(this.selectedRow.data);
      if (index !== 0) {
        this.data[index] = this.data[index - 1];
        this.data[index - 1] = this.selectedRow.data;
      }
    }
  }

  oneBottom() {
    if (this.isSelected()) {
      let index = this.data.indexOf(this.selectedRow.data);
      if (index != this.data.length - 1) {
        this.data[index] = this.data[index + 1];
        this.data[index + 1] = this.selectedRow.data;
      }
    }
  }

  moveBottom() {

    if (this.isSelected()) {
      let index = this.data.indexOf(this.selectedRow.data);
      this.data.splice(index, 1);
      this.data.push(this.selectedRow.data);

    }
  }

  rowClicked(e, data) {

    this.selectedRow.target = e.currentTarget;
    this.selectedRow.data = data;
    let listArray = this.ele.nativeElement.getElementsByClassName("a4c-list");
    for (let i = 0; i < listArray.length; i++) {
      this.commonService.removeClass(listArray[i], "active");
    }
    this.commonService.addClass(e.currentTarget, "active");
    this.onRowClick.emit({browserEvent: e, data: data});
  }
}
@NgModule({
  imports: [CommonModule, ButtonModule],
  exports: [OrderlistComponent],
  declarations: [OrderlistComponent],
  providers: [CommonHandler]
})
export class OrderlistModule {

}
