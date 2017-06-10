import { NgModule, Component, ElementRef, AfterViewInit, OnDestroy, Input, Output, EventEmitter, Renderer2, ContentChild,ViewChild } from '@angular/core';
import {Header} from "../shared/shared"
import {CommonModule} from '@angular/common';
import * as global from '../shared/global';
import setPrototypeOf = Reflect.setPrototypeOf;
@Component({
  selector: 'brp-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialog implements AfterViewInit {
  @Input() header;
  @Input() footer;
  @Input() visible:boolean = false;
  @Output() confirm:EventEmitter<any> = new EventEmitter();
  @Output() cancel:EventEmitter<any> = new EventEmitter();
  @ViewChild('confirmDialog') confirmDialogEle:ElementRef;
  @ContentChild(Header) headerTemplate;
  @Input() width:number = 500;
  private confirmDialogDiv;

  constructor(private ele:ElementRef) {
    this.ele.nativeElement.style.position = "fixed";
    this.ele.nativeElement.style.left = 0;
    this.ele.nativeElement.style.top = 0;
  }

  ngAfterViewInit() {
    this.confirmDialogDiv = this.confirmDialogEle.nativeElement;
    this.confirmDialogDiv.style.display = this.visible ? 'block' : 'none';
    this.setPosition();
    window.onresize = this.setPosition.bind(this);
  }

  setPosition() {

    var leftPos = (window.innerWidth - this.confirmDialogDiv.offsetWidth) / 2;
    var topPos = (window.innerHeight - this.confirmDialogDiv.offsetHeight) / 2;
    this.confirmDialogDiv.style.position = "fixed";
    this.confirmDialogDiv.style.left = leftPos + "px";
    this.confirmDialogDiv.style.top = topPos + "px";
  }

  confirmClick() {
    this.confirm.emit();
    console.log(this.confirmDialogEle)
  }

  cancelClick() {
    this.visible = false;
    this.cancel.emit();
  }

  visibleConfirm(visibility:boolean) {
    this.visible = visibility;
  }

}
@NgModule({
  imports: [CommonModule],
  exports: [ConfirmDialog],
  declarations: [ConfirmDialog]
})
export class ConfirmDialogModule {
}
