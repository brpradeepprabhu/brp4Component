import { Component, OnInit,NgModule,ViewEncapsulation} from '@angular/core';
@Component({
    selector: 'a4-header',
    template: '<ng-content></ng-content>',


})
export class Header {}

@Component({
    selector: 'a4-footer',
    template: '<ng-content></ng-content>'
})
export class Footer {}

@NgModule({
  exports: [Header],
  declarations: [Header]
})
export class SharedModule { }

