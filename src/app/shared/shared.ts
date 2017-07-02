import { Component, OnInit, NgModule, ViewEncapsulation } from '@angular/core';
/**
 * Header component using across the various module like dialog
 */
@Component({
    selector: 'a4-header',
    template: '<ng-content></ng-content>',


})
export class Header { }
/**
 * Footer component using across the various module like dialog
 */
@Component({
    selector: 'a4-footer',
    template: '<ng-content></ng-content>'
})
export class Footer { }

@NgModule({
    exports: [Header],
    declarations: [Header]
})
export class SharedModule { }

