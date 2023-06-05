import { Component, Input, OnInit } from '@angular/core';
import { Countries } from './data/countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @Input() placeholder: string = 'Select a Country';
  @Input() name: string = 'country';
  @Input() optionLabel: string = 'name';
  @Input() styleClass: string = 'tel-dropdown';

  selectedCountry: any = {
    name: 'Egypt',
    flag: '🇪🇬',
    code: 'eg',
    dial_code: '+20',
    pattern: /^(?:\+20|20)?[-\s]?1[0125][-\s]?\d{4}[-\s]?\d{4}$/,
    placeholder: '10 1234 5678',
    id: 64,
  };
  phoneNumber!: string;
  activeDialCode: string;
  get countries() {
    return Countries;
  }
  constructor() {
    this.activeDialCode = this.selectedCountry.dial_code;
  }
  ngOnInit() {}
  print() {
    console.log('Slected country: ' + JSON.stringify(this.selectedCountry));
    console.log('Active Code: ' + this.activeDialCode);
    console.log('Phone Number: ' + this.phoneNumber);
    console.log(
      'Phone Number without Spaces & dashs  ' +
        this.phoneNumber.replaceAll(' ', '').replaceAll('-', '')
    );
    console.log(
      'Result: ' +
        this.activeDialCode +
        this.phoneNumber
          .replaceAll(' ', '')
          .replaceAll('-', '')
          .replace(this.activeDialCode, '')
          .replace('00' + this.activeDialCode.slice(1), '')
    );
  }
  chageActiveDialCode(ev: any) {
    this.activeDialCode = ev.value.dial_code;
  }
}
