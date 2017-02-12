import { Component, ViewChild, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
@Component({
    selector: 'my-list',
    template: `<ul class="list-group">
        <li *ngFor ="let menu of menuItems">
            <span>{{menu}}</span>
        </li>
    </ul> `
})
export class MyListComponent {
    menuItems: string[];
    constructor() {
        this.menuItems = ['Customer Attributes', 'Destinations', 'Discount Groups'];
    }

}