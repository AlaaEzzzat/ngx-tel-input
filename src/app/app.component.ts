import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myForm: FormGroup = this.__fb.group({
    phoneNumber: [, [Validators.required]],
  });

  constructor(private __fb: FormBuilder) {}

  print(): void {
    this.myForm.markAllAsTouched();
    console.log(
      this.myForm.value,
      this.myForm.controls['phoneNumber'].errors,
      this.myForm.status
    );
  }
}
