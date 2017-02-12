import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
    moduleId: module.id,
    selector: 'my-form',
    templateUrl : 'loginControl.component.html'
})
export class StudentFormComponent {
    form = new FormGroup({
        username: new FormControl('Nancy', Validators.required),
        password: new FormControl('', Validators.required),
    });
    get username(): any
    {
        return this.form.get('username');
    }
    get password(): any {
        return this.form.get('password');
    }
    onSubmit(): void {
        console.log(this.form.value);  // {first: 'Nancy', last: 'Drew'}
    }
   
}