import { Component, ContentChild, NgModule, Input, Output, AfterViewInit, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common'
import { CommonHandler } from '../a4Component'
import { ButtonModule } from '../a4Component'
import { OrderlistModule, OrderlistComponent } from '../a4Component'
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
   Header string for the available header
   */
  @Input() availableHeader: string;
  /**
   Header string for the selected element
   */
  @Input() selectedHeader: string;
  /**
   Event Emitter on picking the element in the list
   */
  @Output() onPick: EventEmitter<any> = new EventEmitter<any>();
  /**
   Selected order list data
   */
  @Input() selectedData: any = [];
  /**
   Available order list  element reference
   */
  @ViewChild('availableGrid') availableGrid: ElementRef;
  /**
   Available order list  element component refference
   */
  @ViewChild(OrderlistComponent) availableGridComp: OrderlistComponent;

  /**
   Available order list  element component refference
   */
  @ViewChild('pickGrid') pickGridComp: OrderlistComponent;
  /**
   Available and selected button element reference
   */
  @ViewChild('btnGrid') btnGrid: ElementRef;

  @Input() multiple = false;

  @Input() height = 250;
  /**
   *  Stores the data of selected data in available order list
   */
  private _availableSelectedData: any;
  /**
   *  Stores the data of selected data in selected order list
   */
  private _pickSelectedData: any;

  /**
   * constructor for the pick list component
   * @param commonService
   */

  @Input() groupField: string;
  /**
   Available order list element data
   */
  @Input() data: any = [];

  constructor(private commonService: CommonHandler) {
    //

  }

  /**
   *  Implement Afterview init interface
   *  Vertically center align for the button grid
   */
  ngAfterViewInit() {
    console.log("---", this.pickGridComp);
    const btnNative = this.btnGrid.nativeElement;
    btnNative.style.marginTop = (this.availableGrid.nativeElement.offsetHeight - btnNative.offsetHeight) / 2 + 'px';

  }

  /**
   On row click of available grid
   */
  availableGridSelect(e) {
    this._availableSelectedData = e.selectedData;
  }

  /**
   On row click of selected grid
   */
  selectedGridSelect(e, data, selectedData) {
    this._pickSelectedData = e.selectedData;
    this.pickGridComp = e.reff;
  }

  /**
   Click event for available to select button
   */
  availToSelect(e) {
    if (!this.commonService.isUndefined(this._availableSelectedData)) {
      for (let i = 0; i < this._availableSelectedData.length; i++) {
        const index = this.data.indexOf(this._availableSelectedData[i].data);
        this.data.splice(index, 1);
        this._availableSelectedData[i].data.$$checked = false;
        this.selectedData.push(this._availableSelectedData[i].data);
      }
      if (this.pickGridComp.handleDataChange) {
        this.pickGridComp.handleDataChange();
      }
      this._availableSelectedData = [];
      this.availableGridComp.selectedRow = [];
      this.onPick.emit({ browserEvent: e, pickGridData: this.selectedData });
    }
  }

  /**
   * Click event for select to available button
   */

  selectToAvail() {
    if (!this.commonService.isUndefined(this._pickSelectedData)) {
      for (let i = 0; i < this._pickSelectedData.length; i++) {
        const index = this.selectedData.indexOf(this._pickSelectedData[i].data);
        this.selectedData.splice(index, 1);
        this._pickSelectedData[i].data.$$checked = false;
        this.data.push(this._pickSelectedData[i].data);
      }
      this._pickSelectedData = [];
      this.availableGridComp.handleDataChange();
      this.pickGridComp.selectedRow = [];
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
