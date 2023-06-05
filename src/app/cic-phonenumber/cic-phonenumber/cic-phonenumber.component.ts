import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Countries } from '../data/countries';
import { Country, CountryCode } from '../models';

@Component({
  selector: 'cic-phonenumber',
  templateUrl: './cic-phonenumber.component.html',
  styleUrls: ['./cic-phonenumber.component.scss'],
})
export class CICPhonenumberComponent implements OnInit {
  @Input() controlName!: string;
  @Input() placeholder: string = 'Select a Country';
  @Input() name: string = 'country';
  @Input() optionLabel: string = 'name';
  @Input() styleClass: string = 'tel-dropdown';
  @Input() pereferedCountry: CountryCode = CountryCode.Egypt;

  _selectedCountry!: Country;
  _phoneNumber!: string;
  _activeDialCode!: string;
  get _countries() {
    return Countries;
  }
  _form!: FormGroup;

  constructor(private __formDir: FormGroupDirective) {}

  ngOnInit(): void {
    this._form = this.__formDir.control;
    this.hasControlName();
  }

  hasControlName(): void {
    if (!this.controlName) {
      throw new Error('Control name must be provided');
    }
  }

  print() {
    console.log('Slected country: ' + JSON.stringify(this._selectedCountry));
    console.log('Active Code: ' + this._activeDialCode);
    console.log('Phone Number: ' + this._phoneNumber);
    console.log(
      'Phone Number without Spaces & dashs  ' +
        this._phoneNumber.replaceAll(' ', '').replaceAll('-', '')
    );
    console.log(
      'Result: ' +
        this._activeDialCode +
        this._phoneNumber
          .replaceAll(' ', '')
          .replaceAll('-', '')
          .replace(this._activeDialCode, '')
    );
  }

  chageActiveDialCode(ev: any) {
    this._activeDialCode = ev.value.dial_code;
  }

  getActiveCountry(): void {
    this._selectedCountry = this._countries.find(
      (country) => country.code === this.pereferedCountry
    )!;
    this._activeDialCode = this._selectedCountry.dial_code;
  }
}
