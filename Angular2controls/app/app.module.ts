/// <reference path="app.component.ts" />
/// <reference path="datepicker/datepicker.component.ts" />
/// <reference path="list/listcontrol.component.ts" />
/// <reference path="login/logincontrol.component.ts" />

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { DatepickerModule, AlertModule, TabsModule, Ng2BootstrapModule } from 'ng2-bootstrap';
import { Ng2DragDropModule } from "ng2-drag-drop";
import { MyDatePickerModule } from 'mydatepicker';
import { DatePickerComponent } from './datepicker/datepicker.component';
import { MyListComponent } from './list/listcontrol.component';
import { StudentFormComponent } from './login/logincontrol.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [BrowserModule, TabsModule.forRoot(), Ng2DragDropModule, MyDatePickerModule, FormsModule, ReactiveFormsModule],
    declarations: [AppComponent, TabsComponent, DatePickerComponent, MyListComponent, StudentFormComponent],
    bootstrap: [AppComponent],
    providers: []
})

export class AppModule { }
