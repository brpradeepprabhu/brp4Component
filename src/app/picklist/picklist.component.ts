import { Component, OnInit ,Input ,Output, AfterViewInit, EventEmitter,ElementRef,ViewChild } from '@angular/core';
import  {CommonHandler} from '../a4Component'
@Component({
  selector: 'a4c-pick',
  templateUrl: './picklist.component.html',
  styleUrls: ['./picklist.component.css']
})
export class PicklistComponent implements AfterViewInit {
  @Input() data:any = [];
  @Input() availableHeader:string;
  @Input() selectedHeader:string;
  @Output() onPick:EventEmitter<any>=new EventEmitter<any>();
  selectedData:any = [];
  @ViewChild('availableGrid') availableGrid:ElementRef;
  @ViewChild('btnGrid') btnGrid:ElementRef;
  private _availableSelectedData:any;
  private  _pickSelectedData:any;

  constructor(private commonService:CommonHandler) {
    //

  }

  ngAfterViewInit() {
    this.btnGrid.nativeElement.style.marginTop = (this.availableGrid.nativeElement.offsetHeight - this.btnGrid.nativeElement.offsetHeight) / 2 + "px";

  }

  availableGridSelect(e) {
    this._availableSelectedData = e.data;
  }

  selectedGridSelect(e, data) {
    this._pickSelectedData = e.data;
  }

  availToSelect(e) {
    if (!this.commonService.isUndefined(this._availableSelectedData)) {
      let index = this.data.indexOf(this._availableSelectedData);
      this.data.splice(index, 1);
      this.selectedData.push(this._availableSelectedData);
      this._availableSelectedData = undefined;
      this.onPick.emit({browserEvent:e,pickGridData:this.selectedData});
    }
  }

  selectToAvail() {
    if (!this.commonService.isUndefined(this._pickSelectedData)) {
      let index = this.selectedData.indexOf(this._pickSelectedData);
      this.selectedData.splice(index, 1);
      this.data.push(this._pickSelectedData);
      this._pickSelectedData = undefined;
    }
  }


}
