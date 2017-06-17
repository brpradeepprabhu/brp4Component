import { NgModule, Component, ElementRef, AfterViewInit, OnDestroy, Input, Output, EventEmitter, Renderer2, ContentChild,ViewChild } from '@angular/core';
import {Header} from "../shared/shared"
import {CommonModule} from '@angular/common';
import * as global from '../shared/global';
import {ButtonModule,ButtonComponent} from '../button/button.component'
import setPrototypeOf = Reflect.setPrototypeOf;
import {passBoolean} from "protractor/built/util";
@Component({
  selector: 'a4c-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertDialog implements AfterViewInit {
  @Input() header;
  @Input() visible:boolean = false;
  @Input() width:number = 100;

  @Input() get closeBtn():string {
    return this._close.toString();
  };

  set closeBtn(val:string) {
    this._close = (val == "true");
  };

  @Input() get modal():string {
    return this._modal.toString();
  };

  set modal(val:string) {
    this._modal = (val == "true");
    console.log("mm", this._modal, val)
  };

  @Output() alert:EventEmitter<any> = new EventEmitter();
  @Output() onOpen:EventEmitter<any> = new EventEmitter();
  @Output() onClose:EventEmitter<any> = new EventEmitter();
  @ViewChild('alertDialog') alertDialogEle:ElementRef;
  @ContentChild(Header) headerTemplate;
  public _modal:boolean = true;
  public _close:boolean = true;
  private alertDialogDiv;

  constructor(private ele:ElementRef) {
    this.ele.nativeElement.style.position = "fixed";
    this.ele.nativeElement.style.left = 0;
    this.ele.nativeElement.style.top = 0;
  }

  ngAfterViewInit() {
    this.alertDialogDiv = this.alertDialogEle.nativeElement;
    this.visibleAlert(this.visible);
    this.setPosition();
    window.addEventListener("resize",this.setPosition.bind(this))

  };
  setPosition() {

    var leftPos = (window.innerWidth/2 - this.alertDialogDiv.offsetWidth/2) ;
    var topPos = (window.innerHeight/2 - this.alertDialogDiv.offsetHeight/2) ;
    this.alertDialogDiv.style.position = "fixed";
    this.alertDialogDiv.style.left = leftPos + "px";
    this.alertDialogDiv.style.top = topPos + "px";
  }

  alertClick() {
    this.alert.emit();
    this.visibleAlert(false);
  }


  visibleAlert(visibility:boolean) {
    this.visible = visibility;
    this.ele.nativeElement.style.display = this.visible ? 'block' : 'none';
    if (visibility === true) {
      this.onOpen.emit();
    }
    else {
      this.onClose.emit();
    }
  }

}
@NgModule({
  imports: [CommonModule, ButtonModule],
  exports: [AlertDialog],
  declarations: [AlertDialog]
})
export class AlertModule {
}
