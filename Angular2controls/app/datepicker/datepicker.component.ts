import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IMyOptions, IMyDateModel } from 'mydatepicker';
// other imports here...

@Component({
    moduleId: module.id,
    selector: 'datepicker',
    templateUrl: 'datepicker.component.html'
})

export class DatePickerComponent {

    private myDatePickerOptions: IMyOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy'
    };

    constructor() { }

    // dateChanged callback function called when the user select the date. This is mandatory callback
    // in this option. There are also optional inputFieldChanged and calendarViewChanged callbacks.
    onDateChanged(event: IMyDateModel) {
        // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    }
}