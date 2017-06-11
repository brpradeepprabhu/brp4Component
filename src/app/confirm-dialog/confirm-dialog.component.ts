import { NgModule, Component, ElementRef, AfterViewInit, OnDestroy, Input, Output, EventEmitter, Renderer2, ContentChild,ViewChild } from '@angular/core';
import {Header} from "../shared/shared"
import {CommonModule} from '@angular/common';
import * as global from '../shared/global';
import {ButtonModule,ButtonComponent} from '../button/button.component'
import setPrototypeOf = Reflect.setPrototypeOf;
import {passBoolean} from "protractor/built/util";
@Component({
  selector: 'a4c-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialog implements AfterViewInit {
  @Input() header;
  @Input() footer;
  @Input() visible:boolean = false;
  @Input() width:number = 500;

  @Input() get closeBtn():string {
    return this._close.toString();
  };

  set closeBtn(val:string) {
    this._close = (val == "true") ? true : false;
  };

  @Input() get modal():string {
    return this._modal.toString();
  };

  set modal(val:string) {
    this._modal = (val == "true") ? true : false;
    console.log("mm", this._modal, val)
  };
  @Output() confirm:EventEmitter<any> = new EventEmitter();
  @Output() cancel:EventEmitter<any> = new EventEmitter();
  @ViewChild('confirmDialog') confirmDialogEle:ElementRef;
  @ContentChild(Header) headerTemplate;
  public _modal:boolean = false;
  public _close:boolean = true;
  private confirmDialogDiv;

  constructor(private ele:ElementRef) {
    this.ele.nativeElement.style.position = "fixed";
    this.ele.nativeElement.style.left = 0;
    this.ele.nativeElement.style.top = 0;
  }

  ngAfterViewInit() {
    this.confirmDialogDiv = this.confirmDialogEle.nativeElement;
    this.visibleConfirm(this.visible);
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
    this.visibleConfirm(false);
    this.cancel.emit();
  }

  visibleConfirm(visibility:boolean) {
    this.visible = visibility;
    this.ele.nativeElement.style.display = this.visible ? 'block' : 'none';
  }

}
@NgModule({
  imports: [CommonModule, ButtonModule],
  exports: [ConfirmDialog],
  declarations: [ConfirmDialog]
})
export class ConfirmDialogModule {
}
