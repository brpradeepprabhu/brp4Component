import { NgModule, Component, ElementRef, AfterViewInit, OnDestroy, Input, Output, EventEmitter, Renderer2, ContentChild, ViewChild } from '@angular/core';
import { Header } from "../shared/shared";
import { CommonModule } from '@angular/common';
import * as global from '../shared/global';
import { ButtonModule, ButtonComponent } from '../button/button.component'
import setPrototypeOf = Reflect.setPrototypeOf;
import { passBoolean } from "protractor/built/util";
/**
 * Angular4 UI component for the confirm dialog
 */
@Component({
  selector: 'a4c-confirm',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialog implements AfterViewInit {
  /**
   * header string for the confirm dialog
   */
  @Input() header;
  /**
   * Visibility for the confirm dialog
   */
  @Input() visible: boolean = false;
  /**
   * Width of the confirm dialog
   * @type {number}
   */
  @Input() width: number = 500;

  /**
   * To get the visibility status of the close button
   * @returns {string}
   */
  @Input() get closeBtn(): string {
    return this._close.toString();
  };

  /**
   * To set the visibility status of the close button
   * @param val
   */
  set closeBtn(val: string) {
    this._close = (val == "true") ? true : false;
  };

  /**
   * To get the visibility status of the modal
   * @returns {string}
   */
  @Input() get modal(): string {
    return this._modal.toString();
  };

  /**
   * To set the visibility status of the modal
   * @param val
   */
  set modal(val: string) {
    this._modal = (val == "true") ? true : false;
    console.log("mm", this._modal, val)
  };

  /**
   * Event Emitter on click of confirm button
   * @type {EventEmitter}
   */
  @Output() confirm: EventEmitter<any> = new EventEmitter();
  /**
   * Event emitter on click of cancel button
   * @type {EventEmitter}
   */
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  /**
   * Event emitter on open of the dialog
   * @type {EventEmitter}
   */
  @Output() onOpen: EventEmitter<any> = new EventEmitter();
  /**
   * Event emitter on close of the dialog
   * @type {EventEmitter}
   */
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  /**
   * Element reference for the confirm dialog
   */
  @ViewChild('confirmDialog') confirmDialogEle: ElementRef;
  /**
   * To check the content of  header template
   */
  @ContentChild(Header) headerTemplate;
  /**
   * Local variable for the modal
   * @type {boolean}
   * @private
   */
  public _modal: boolean = false;
  /**
   * Local variable for the close
   * @type {boolean}
   * @private
   */
  public _close: boolean = true;
  /**
   * Dom element for the confirm dialog
   */
  private confirmDialogDiv;

  /**
   * Initalize the confirm component
   * @param ele
   */
  constructor(private ele: ElementRef) {
    this.ele.nativeElement.style.position = "fixed";
    this.ele.nativeElement.style.left = 0;
    this.ele.nativeElement.style.top = 0;
  }

  /**
   * Implement the AfterViewInit interface
   */
  ngAfterViewInit() {
    this.confirmDialogDiv = this.confirmDialogEle.nativeElement;
    this.visibleConfirm(this.visible);
    this.setPosition();
    window.addEventListener("resize", this.setPosition.bind(this))

  }

  /**
   * Responsive position for the confirm dialog
   */
  setPosition() {

    var leftPos = (window.innerWidth - this.confirmDialogDiv.offsetWidth) / 2;
    var topPos = (window.innerHeight - this.confirmDialogDiv.offsetHeight) / 2;
    this.confirmDialogDiv.style.position = "fixed";
    this.confirmDialogDiv.style.left = leftPos + "px";
    this.confirmDialogDiv.style.top = topPos + "px";
  }

  /**
   * On click of confirm
   */
  confirmClick() {
    this.confirm.emit();
    this.visibleConfirm(false);
  }

  /**
   * On click of cancel
   */
  cancelClick() {
    this.visibleConfirm(false);
    this.cancel.emit();
  }

  /**
   * Set the visibilty of the element
   * @param visibility
   */
  visibleConfirm(visibility: boolean) {
    this.visible = visibility;
    this.ele.nativeElement.style.display = this.visible ? 'block' : 'none';
    if (visibility) {
      this.onOpen.emit();
    } else {
      this.onClose.emit();
    }
  }

}
/**
 * Module decalartion for the confirm dialog
 */
@NgModule({
  imports: [CommonModule, ButtonModule],
  exports: [ConfirmDialog],
  declarations: [ConfirmDialog]
})
export class ConfirmDialogModule {
}
