import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myForm: FormGroup = this.__fb.group({
    phoneNumber: [],
  });

  constructor(private __fb: FormBuilder) {}

  print(): void {}
}
