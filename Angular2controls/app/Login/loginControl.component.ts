import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
    moduleId: module.id,
    selector: 'my-form',
    templateUrl: 'loginControl.component.html'
})
export class StudentFormComponent {
    public user: any;

    ngOnInit() {
        this.user = {
            name: '',
            address: {
                street: '',
                postcode: '8000'
            }
        };
    }

    save(loginForm: any) {
        // console.log(model, isValid);
        console.log("Save submitted");
    }
    model: any = {};
    //get username(): any
    //{
    //    return this.form.get('username');
    //}
    //get password(): any {
    //    return this.form.get('password');
    //}
    onSubmit(): void {
        console.log("Form submitted");  // {first: 'Nancy', last: 'Drew'}
    }

    login(): void {
        console.log("Form submitted on click");  // {first: 'Nancy', last: 'Drew'}
    }

}