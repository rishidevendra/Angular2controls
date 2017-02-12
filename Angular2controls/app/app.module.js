/// <reference path="app.component.ts" />
/// <reference path="datepicker/datepicker.component.ts" />
/// <reference path="list/listcontrol.component.ts" />
/// <reference path="login/logincontrol.component.ts" />
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var tabs_component_1 = require('./tabs/tabs.component');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var ng2_drag_drop_1 = require("ng2-drag-drop");
var mydatepicker_1 = require('mydatepicker');
var datepicker_component_1 = require('./datepicker/datepicker.component');
var listcontrol_component_1 = require('./list/listcontrol.component');
var logincontrol_component_1 = require('./login/logincontrol.component');
var forms_1 = require('@angular/forms');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, ng2_bootstrap_1.TabsModule.forRoot(), ng2_drag_drop_1.Ng2DragDropModule, mydatepicker_1.MyDatePickerModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
            declarations: [app_component_1.AppComponent, tabs_component_1.TabsComponent, datepicker_component_1.DatePickerComponent, listcontrol_component_1.MyListComponent, logincontrol_component_1.StudentFormComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map