import { Component, AfterViewInit,Input,Output,ViewChild,ElementRef } from '@angular/core';
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import {CommonHandler} from '../shared/commonService'
@Component({
  selector: 'a4c-button',
  templateUrl: './button.component.html',
  styleUrls:['./button.component.css']
})

export class ButtonComponent implements AfterViewInit {
  @Input() icon;
  @Input() customClass:string;
  @Input() block:boolean;
  @ViewChild('buttonc') buttonTag :ElementRef;
  constructor(private commonService:CommonHandler) {

  };

  ngAfterViewInit() {
    console.log(this.icon);
    this.customClass = (this.block)? "block "+ this.customClass : this.customClass;
    this.commonService.addClass(this.buttonTag.nativeElement,this.customClass);
  };
}

@NgModule({
  imports: [CommonModule],
  exports: [ButtonComponent],
  declarations: [ButtonComponent],
  providers: [CommonHandler],
})
export class ButtonModule {
}
