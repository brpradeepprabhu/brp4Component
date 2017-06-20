import {Input, Component, OnInit,AfterViewInit,NgModule,Output,EventEmitter,ElementRef,ViewChild } from '@angular/core';
import {CommonModule} from '@angular/common';
import  {ButtonModule} from '../a4Component';
import {CommonHandler} from "../shared/commonService";
/**
 * Angular 4 component to display the object in order list
 */
@Component({
  selector: 'a4c-order',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements AfterViewInit {
  /**
   * To display the data in the grid
   */
  @Input() data:any[];
  /**
   * To display which field of the data in the list
   */
  @Input() field:any;
  /**
   * Height of the order list
   */
  @Input() height:number = 150;
  /**
   * Header for the order list element
   */
  @Input() header:string;
  /**
   * To add a custom class
   */
  @Input() customClass:string;
  /**
   * To display where the button to be displayed (left|Right)
   */
  @Input() btnPosition:string = "";
  /**
   * Event Emitter when row is selected
   * @type {EventEmitter<any>}
   */
  @Output() onRowClick:EventEmitter<any> = new EventEmitter<any>();
  /**
   * To get the element reference of button container
   */
  @ViewChild('buttonContainer') buttonDiv:ElementRef;
  /**
   * To get the element reference of the order list container
   */
  @ViewChild('orderlistContainer') orderDiv:ElementRef;
  /**
   * To get element reference order list values
   */
  @ViewChild('orderListValues') orderListValues:ElementRef;
  /**
   * To get element reference order container
   */
  @ViewChild('orderContianer') orderContianer:ElementRef;
  /**
   * Store the selected row in the list
   */
  selectedRow:any;

  /**
   * Initalize the order list component
   * @param ele
   * @param commonService
     */
  constructor(private ele:ElementRef, private commonService:CommonHandler) {
  }

  /**
   * Implement the Afer view init
   */
  ngAfterViewInit() {
    this.commonService.addClass(this.orderContianer, this.customClass)
    this.orderListValues.nativeElement.style.overflow = "auto";
    this.orderListValues.nativeElement.style.height = this.height + "px";
    this.selectedRow = {target: undefined, data: undefined};
    this.buttonDiv.nativeElement.style.marginTop = (this.orderDiv.nativeElement.offsetHeight - this.buttonDiv.nativeElement.offsetHeight) / 2 + "px";
    this.buttonDiv.nativeElement.style.float = (this.btnPosition.trim().toLowerCase() == "right") ? "right" : "left";

  }

  /**
   * To check whether the row is selected
   */
  isSelected() {
    if (this.commonService.isUndefined(this.selectedRow.target)) {
      console.error("select atleast one row")
      return false;
    }
    return true;
  }

  /**
   * On click of move the selected row to the top
   */
  moveTop() {
    if (this.isSelected()) {
      let index = this.data.indexOf(this.selectedRow.data);
      this.data.splice(index, 1);
      this.data.splice(0, 0, this.selectedRow.data);

    }
  }

  /**
   * On click of one row to top
   */
  oneTop() {
    if (this.isSelected()) {
      let index = this.data.indexOf(this.selectedRow.data);
      if (index !== 0) {
        this.data[index] = this.data[index - 1];
        this.data[index - 1] = this.selectedRow.data;
      }
    }
  }

  /**
   * On click of one row to the bottom
   */
  oneBottom() {
    if (this.isSelected()) {
      let index = this.data.indexOf(this.selectedRow.data);
      if (index != this.data.length - 1) {
        this.data[index] = this.data[index + 1];
        this.data[index + 1] = this.selectedRow.data;
      }
    }
  }

  /**
   * On click of one row to bottom
   */
  moveBottom() {

    if (this.isSelected()) {
      let index = this.data.indexOf(this.selectedRow.data);
      this.data.splice(index, 1);
      this.data.push(this.selectedRow.data);

    }
  }

  /**
   * On click of the row in the list
   * @param e
   * @param data
   */
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
/**
 * Orderlist module  to use the common module and button module
 */
@NgModule({
  imports: [CommonModule, ButtonModule],
  exports: [OrderlistComponent],
  declarations: [OrderlistComponent],
  providers: [CommonHandler]
})
export class OrderlistModule {

}
