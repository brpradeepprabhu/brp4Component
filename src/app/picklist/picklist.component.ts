import { Component,NgModule, OnInit ,Input ,Output, AfterViewInit, EventEmitter,ElementRef,ViewChild } from '@angular/core';
import {CommonModule} from '@angular/common'
import  {CommonHandler} from '../a4Component'
import {ButtonModule} from '../a4Component'
import {OrderlistModule} from '../a4Component'
/**
 * Pick list component is angular 4 UI component to pick from available order list to selected order list
 */
@Component({
  selector: 'a4c-pick',
  templateUrl: './picklist.component.html',
  styleUrls: ['./picklist.component.css']
})
/**
 *
 */
export class PicklistComponent implements AfterViewInit {
  /**
   Available order list element data
   */
  @Input() data:any = [];
  /**
   Header string for the available header
   */
  @Input() availableHeader:string;
  /**
   Header string for the selected element
   */
  @Input() selectedHeader:string;
  /**
   Event Emitter on picking the element in the list
   */
  @Output() onPick:EventEmitter<any> = new EventEmitter<any>();
  /**
   Selected order list data
   */
  selectedData:any = [];
  /**
   Available order list  element reference
   */
  @ViewChild('availableGrid') availableGrid:ElementRef;
  /**
   Available and selected button element reference
   */
  @ViewChild('btnGrid') btnGrid:ElementRef;
  /**
   *  Stores the data of selected data in available order list
   */
  private _availableSelectedData:any;
  /**
   *  Stores the data of selected data in selected order list
   */
  private  _pickSelectedData:any;

  /**
   * constructor for the pick list component
   * @param commonService
   */
  constructor(private commonService:CommonHandler) {
    //

  }

  /**
   *  Implement Afterview init interface
   *  Vertically center align for the button grid
   */
  ngAfterViewInit() {
    this.btnGrid.nativeElement.style.marginTop = (this.availableGrid.nativeElement.offsetHeight - this.btnGrid.nativeElement.offsetHeight) / 2 + "px";

  }

  /**
   On row click of available grid
   */
  availableGridSelect(e) {
    this._availableSelectedData = e.data;
  }

  /**
   On row click of selected grid
   */
  selectedGridSelect(e, data) {
    this._pickSelectedData = e.data;
  }

  /**
   Click event for available to select button
   */
  availToSelect(e) {
    if (!this.commonService.isUndefined(this._availableSelectedData)) {
      let index = this.data.indexOf(this._availableSelectedData);
      this.data.splice(index, 1);
      this.selectedData.push(this._availableSelectedData);
      this._availableSelectedData = undefined;
      this.onPick.emit({browserEvent: e, pickGridData: this.selectedData});
    }
  }

  /**
   * Click event for select to available button
   */

  selectToAvail() {
    if (!this.commonService.isUndefined(this._pickSelectedData)) {
      let index = this.selectedData.indexOf(this._pickSelectedData);
      this.selectedData.splice(index, 1);
      this.data.push(this._pickSelectedData);
      this._pickSelectedData = undefined;
    }
  }


}
/**
 * Modules for pick list which reuses other module such as common module,buttonmodule,orderlist module
 */
@NgModule({
  imports: [CommonModule, ButtonModule, OrderlistModule],
  exports: [PicklistComponent],
  declarations: [PicklistComponent],
  providers: [CommonHandler]
})
export class PickListModule {

}
