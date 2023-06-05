import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Countries } from '../data/countries';
import { Country, CountryCode } from '../models';

@Component({
  selector: 'cic-phonenumber',
  templateUrl: './cic-phonenumber.component.html',
  styleUrls: ['./cic-phonenumber.component.scss'],
})
export class CICPhonenumberComponent implements OnInit {
  @Input() controlName!: string;
  @Input() customPlaceholder!: string;
  @Input() styleClass!: string;
  @Input() inputStyleClass!: string;
  @Input() dropdownStyleClass!: string;
  @Input() pereferedCountry: CountryCode = CountryCode.Egypt;

  _phoneNumber!: string;
  _activeDialCode!: string;
  _form!: FormGroup;
  _currentValidator!: ValidatorFn;
  _selectedCountry!: Country;
  get _countries() {
    return Countries;
  }
  get _formControl() {
    return this._form.controls[this.controlName] as FormControl;
  }

  constructor(private __formDir: FormGroupDirective) {}

  ngOnInit(): void {
    this._form = this.__formDir.control;
    this.hasControlName();
    this.getActiveCountry();
    this.setValidation();
  }

  hasControlName(): void {
    if (!this.controlName || !this._formControl) {
      throw new Error('Control name must be provided');
    }
  }

  // print() {
  //   console.log('Slected country: ' + JSON.stringify(this._selectedCountry));
  //   console.log('Active Code: ' + this._activeDialCode);
  //   console.log('Phone Number: ' + this._phoneNumber);
  //   console.log(
  //     'Phone Number without Spaces & dashs  ' +
  //       this._phoneNumber.replaceAll(' ', '').replaceAll('-', '')
  //   );
  //   console.log(
  //     'Result: ' +
  //       this._activeDialCode +
  //       this._phoneNumber
  //         .replaceAll(' ', '')
  //         .replaceAll('-', '')
  //         .replace(this._activeDialCode, '')
  //   );
  // }

  activeDialChanged(event: any) {
    this._activeDialCode = event.value.dial_code;
    this.updateSelectedCountryValidator();
    this.setValidation();
  }

  getActiveCountry(): void {
    this._selectedCountry = this._countries.find(
      (country) => country.code === this.pereferedCountry
    )!;
    this._activeDialCode = this._selectedCountry.dial_code;
    this.updateSelectedCountryValidator();
  }

  getPlaceholder(): string {
    return this.customPlaceholder
      ? this.customPlaceholder
      : this._selectedCountry.placeholder;
  }

  setValidation(): void {
    this._formControl.removeValidators(this._currentValidator!);
    this._formControl.updateValueAndValidity();
    this._formControl.addValidators(this._selectedCountry.validator!);
    this._formControl.updateValueAndValidity();
    this._currentValidator = this._selectedCountry.validator!;
  }

  onPhoneChange(event: string): void {
    this._formControl.setValue(this._activeDialCode + event);
  }

  touched(): void {
    this._formControl.markAsTouched();
  }

  updateSelectedCountryValidator(): void {
    this._selectedCountry.validator = Validators.pattern(
      this._selectedCountry.pattern
    );
  }
}
