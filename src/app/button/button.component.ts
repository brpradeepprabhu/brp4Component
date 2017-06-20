import { Component, AfterViewInit,Input,Output,ViewChild,ElementRef } from '@angular/core';
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import {CommonHandler} from '../shared/commonService'

/**
 * To genrate the button tag with icons and customize by adding the custom class
 */
@Component({
  selector: 'a4c-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements AfterViewInit {
  /**
   * To use the icon for the button
   */
  @Input() icon;
  /**
   * To add a custom class for the element
   */
  @Input() customClass:string;
  /**
   * To check whether button should be display as a block
   */
  @Input() block:boolean;
  /**
   * To get the buttom tag as reference
   */
  @ViewChild('buttonc') buttonTag:ElementRef;


  /**
   * To init the button component
   * @param commonService
   */
  constructor(private commonService:CommonHandler) {

  };

  /**
   * Implements the afterview init
   */
  ngAfterViewInit() {
    this.customClass = (this.block) ? "block " + this.customClass : this.customClass;
    this.commonService.addClass(this.buttonTag.nativeElement, this.customClass);
  };
}
/**
 * Button module to use it across the other module. Use the CommonModule and Commonhandler provider
 */
@NgModule({
  imports: [CommonModule],
  exports: [ButtonComponent],
  declarations: [ButtonComponent],
  providers: [CommonHandler],
})
export class ButtonModule {
}
