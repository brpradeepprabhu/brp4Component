import { NgModule, Component, ElementRef, AfterViewInit, OnDestroy, Input, Output, EventEmitter, Renderer2, ContentChild,ViewChild } from '@angular/core';
import {Header} from "../shared/shared"
import {CommonModule} from '@angular/common';
import * as global from '../shared/global';
import {ButtonModule,ButtonComponent} from '../button/button.component'
import setPrototypeOf = Reflect.setPrototypeOf;
import {passBoolean} from "protractor/built/util";
/**
 * Angular 4 component for dispalying the alert dialog
 */
@Component({
  selector: 'a4c-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertDialog implements AfterViewInit {
  /**
   * String to dispaly the title for the dialog
   */
  @Input() header;
  /**
   * Set the Visibility of alert dialog
   * @type {boolean}
   */
  @Input() visible:boolean = false;
  /**
   * Set the Width of the dialog
   * @type {number}
   */
  @Input() width:number = 100;

  /**
   * Set the visibility for the closebtn
   * @returns {string}
   */
  @Input() get closeBtn():string {
    return this._close.toString();
  };

  set closeBtn(val:string) {
    this._close = (val == "true");
  };

  /**
   * Set the visibility for the modal
   * @returns {string}
   */
  @Input() get modal():string {
    return this._modal.toString();
  };

  set modal(val:string) {
    this._modal = (val == "true");
    console.log("mm", this._modal, val)
  };

  /**
   * Event Emitter for on click of ok button
   * @type {EventEmitter}
   */
  @Output() alert:EventEmitter<any> = new EventEmitter();
  /**
   * Event Emitter for on dialog is opened
   * @type {EventEmitter}
   */
  @Output() onOpen:EventEmitter<any> = new EventEmitter();
  /**
   * Event  Emitter for on dialog box is closed
   * @type {EventEmitter}
   */
  @Output() onClose:EventEmitter<any> = new EventEmitter();
  /**
   * Element ref for the alert dialog element
   */
  @ViewChild('alertDialog') alertDialogEle:ElementRef;
  /**
   * To check whether header component is present
   */
  @ContentChild(Header) headerTemplate;
  /**
   * To set the local variable of the modal
   * @type {boolean}
   * @private
   */
  private _modal:boolean = true;
  /**
   * To set the local variable of the close button
   * @type {boolean}
   * @private
   */
  private _close:boolean = true;
  /**
   * Dom element of alert dialog
   */
  private alertDialogDiv;

  /**
   * Initalize the component
   * @param ele
   */
  constructor(private ele:ElementRef) {
    this.ele.nativeElement.style.position = "fixed";
    this.ele.nativeElement.style.left = 0;
    this.ele.nativeElement.style.top = 0;
  }

  /**
   * Implementing the Afterview init interface
   */
  ngAfterViewInit() {
    this.alertDialogDiv = this.alertDialogEle.nativeElement;
    this.visibleAlert(this.visible);
    this.setPosition();
    window.addEventListener("resize", this.setPosition.bind(this))

  };

  /**
   * To set the positon in the middle of the window
   */
  setPosition() {

    var leftPos = (window.innerWidth / 2 - this.alertDialogDiv.offsetWidth / 2);
    var topPos = (window.innerHeight / 2 - this.alertDialogDiv.offsetHeight / 2);
    this.alertDialogDiv.style.position = "fixed";
    this.alertDialogDiv.style.left = leftPos + "px";
    this.alertDialogDiv.style.top = topPos + "px";
  }

  /**
   * On click of ok button in the alert dialog
   */
  alertClick() {
    this.alert.emit();
    this.visibleAlert(false);
  }

  /**
   * To set the visibility of the dialog box
   * @param visibility
   */
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
/**
 * Angular module to set up the Alertmodule
 */
@NgModule({
  imports: [CommonModule, ButtonModule],
  exports: [AlertDialog],
  declarations: [AlertDialog]
})
export class AlertModule {
}
