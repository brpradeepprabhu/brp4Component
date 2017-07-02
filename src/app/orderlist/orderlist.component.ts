import { Input, Component, OnInit, AfterViewInit, NgModule, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../a4Component';
import { CommonHandler } from '../shared/commonService';
import { FormsModule } from '@angular/forms';
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
   * To display which field of the data in the list
   */
  @Input() field: any;
  /**
   * Height of the order list
   */
  @Input() height = 150;
  /**
   * Header for the order list element
   */
  @Input() header: string;
  /**
   * To add a custom class
   */
  @Input() customClass: string;
  /**
   * To display where the button to be displayed (left|Right)
   */
  @Input() btnPosition: String = '';
  /**
  * To display where to display the control
  */
  @Input() control = true;
  /**
   * To add the groupField
   */
  @Input() groupField: string;
  /**
  * To display whether to select multiple
  */
  @Input() multiple = false;


  /**
   * Event Emitter when row is selected
   * @type {EventEmitter<any>}
   */
  @Output() onRowClick: EventEmitter<any> = new EventEmitter<any>();
  /**
   * To get the element reference of button container
   */
  @ViewChild('buttonContainer') buttonDiv: ElementRef;
  /**
   * To get the element reference of the order list container
   */
  @ViewChild('orderlistContainer') orderDiv: ElementRef;
  /**
   * To get element reference order list values
   */
  @ViewChild('orderListValues') orderListValues: ElementRef;
  /**
   * To get element reference order container
   */
  @ViewChild('orderContianer') orderContianer: ElementRef;
  /**
   * To display the data in the grid
   */
  public _data: any = [];
  public dataSoruce = [];
  groupFieldValues = [];
  /**
 * Store the selected row in the list
 */
  selectedRow: any;
  filterSearch = ''
  @Input() get data(): any {
    return this._data;
  }
  set data(val: any) {
    this._data = val;
    this.handleDataChange();
  };
  handleDataChange() {
    if (this.groupField) {
      if (this.data.length > 0) {
        const groupFld = this.groupField;
        this.data.sort(function (a, b) {
          if (a[groupFld] > b[groupFld]) {
            return 1;
          } else if (a[groupFld] < b[groupFld]) {
            return -1;
          }
          return 0;
        })
      }
    }
    this.filterData(this.filterSearch)
  }
  updateDataToRender(data) {

    this.dataSoruce = data;

  }


  /**
   * Initalize the order list component
   * @param ele
   * @param commonService
     */
  constructor(private ele: ElementRef, private commonService: CommonHandler) {
  }

  /**
   * Implement the Afer view init
   */
  ngAfterViewInit() {
    this.commonService.addClass(this.orderContianer, this.customClass)
    this.orderListValues.nativeElement.style.overflow = 'auto';
    this.orderListValues.nativeElement.style.height = this.height + 'px';
    this.selectedRow = [];
    if (this.buttonDiv) {
      const btnNative = this.buttonDiv.nativeElement;
      btnNative.style.marginTop = (this.orderDiv.nativeElement.offsetHeight - btnNative.offsetHeight) / 2 + 'px';
      btnNative.style.float = (this.btnPosition.trim().toLowerCase() === 'right') ? 'right' : 'left';
    }
  }

  /**
   * To check whether the row is selected
   */
  isSelected() {
    if (this.selectedRow === 0) {
      console.error('select atleast one row')
      return false;
    }
    return true;
  }

  /**
   * On click of move the selected row to the top
   */
  moveTop() {
    if (this.isSelected()) {
      for (let i = 0; i < this.selectedRow.length; i++) {
        const index = this.data.indexOf(this.selectedRow[i].data);
        this.data.splice(index, 1);
        this.data.splice(0, 0, this.selectedRow[i].data);
      }
      this.updateDataToRender(this.data);
    }
  }

  /**
   * On click of one row to top
   */
  oneTop() {
    if (this.isSelected()) {
      for (let i = 0; i < this.selectedRow.length; i++) {
        const index = this.data.indexOf(this.selectedRow[i].data);
        if (index !== 0) {
          this.data[index] = this.data[index - 1];
          this.data[index - 1] = this.selectedRow[i].data;
        }
      }
      this.updateDataToRender(this.data);
    }
  }
  /**
   * On click of one row to the bottom
   */
  oneBottom() {
    if (this.isSelected()) {
      for (let i = 0; i < this.selectedRow.length; i++) {
        const index = this.data.indexOf(this.selectedRow[i].data);
        if (index !== this.data.length - 1) {
          this.data[index] = this.data[index + 1];
          this.data[index + 1] = this.selectedRow[i].data;
        }
      }
      this.updateDataToRender(this.data);
    }
  }

  /**
   * On click of one row to bottom
   */
  moveBottom() {

    if (this.isSelected()) {
      for (let i = 0; i < this.selectedRow.length; i++) {
        const index = this.data.indexOf(this.selectedRow[i].data);
        this.data.splice(index, 1);
        this.data.push(this.selectedRow[i].data);

      }
      this.updateDataToRender(this.data);
    }
  }

  /**
   * On click of the row in the list
   * @param e
   * @param data
   */
  rowClicked(e, data) {
    let valuesPresent = -1;
    for (let i = 0; i < this.selectedRow.length; i++) {
      if (this.selectedRow[i].target === e.currentTarget) {
        valuesPresent = i;
      }
    }
    if (this.multiple === false) {
      const listArray = this.ele.nativeElement.getElementsByClassName('a4c-list');
      this.selectedRow = [];
      this.selectedRow.push({ target: e.currentTarget, data: data });
      data.$$checked = true;
      for (let i = 0; i < listArray.length; i++) {
        this.commonService.removeClass(listArray[i], 'active');
      }
      this.commonService.addClass(e.currentTarget, 'active');
    } else {
      if (valuesPresent === -1) {
        this.selectedRow.push({ target: e.currentTarget, data: data });
        data.$$checked = true;
        this.commonService.addClass(e.currentTarget, 'active');
      } else {
        this.selectedRow.splice(valuesPresent, 1);
        data.$$checked = false;
        this.commonService.removeClass(e.currentTarget, 'active');
      }
    }
    this.onRowClick.emit({ browserEvent: e, data: data, selectedData: this.selectedRow, reff: this });
  }
  checkGroupExist(index: number) {

    if (index === 0) {
      this.groupFieldValues.push({ values: this.data[index][this.groupField], expanded: false });
      return true;
    } else {
      if (this.data[index][this.groupField] !== this.data[index - 1][this.groupField]) {
        console.log("age", this.data[index][this.groupField])
        let groupValues = false;
        for (let i = 0; i < this.groupFieldValues.length; i++) {
          if (this.groupFieldValues[i].values === this.data[index][this.groupField]) {
            groupValues = true;
          }
        }
        if (groupValues === false) {
          this.groupFieldValues.push({ values: this.data[index][this.groupField], expanded: false });
        }
        return true;
      }
    }
    return false;
  }
  checkGroupFieldExpanded(obj: object) {
    for (let i = 0; i < this.groupFieldValues.length; i++) {
      if (this.groupFieldValues[i].values === obj[this.groupField]) {
        return this.groupFieldValues[i].expanded;
      }
    }
    return true;
  }
  toggleGroupField(obj: object) {
    for (let i = 0; i < this.groupFieldValues.length; i++) {
      if (this.groupFieldValues[i].values === obj[this.groupField]) {
        this.groupFieldValues[i].expanded = !this.groupFieldValues[i].expanded;
      }
    }
  }
  filterData(filter: string) {
    this.expandAll();
    let filterData = this.data;
    if (filter.trim() !== '' && filter !== undefined && filter !== null) {
      const field: string = this.field;
      filterData = this.data.filter(function (obj) {
        return obj[field].toLowerCase().indexOf(filter) >= 0;
      });
    }
    this.updateDataToRender(filterData);
  }
  expandAll() {
    for (let i = 0; i < this.groupFieldValues.length; i++) {
      this.groupFieldValues[i].expanded = true;

    }
  }
  collapseAll() {
    for (let i = 0; i < this.groupFieldValues.length; i++) {
      this.groupFieldValues[i].expanded = false;
    }
  }
}
/**
 * Orderlist module  to use the common module and button module
 */
@NgModule({
  imports: [CommonModule, FormsModule, ButtonModule],
  exports: [OrderlistComponent],
  declarations: [OrderlistComponent],
  providers: [CommonHandler]
})
export class OrderlistModule {

}
