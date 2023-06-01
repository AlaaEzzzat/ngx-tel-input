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
    pattern: '^1\\d{9}$',
    placeholder: '(###)###-###',
  };
  phoneNumber!: string;
  activeDialCode: string;
  get countries() {
    return Countries;
  }
  constructor() {
    this.activeDialCode = this.selectedCountry.dial_code;
  }
  ngOnInit() {
    console.log(this.countries);
  }
  print() {
    console.log('Slected country: ' + JSON.stringify(this.selectedCountry));
    console.log('Active Code: ' + this.activeDialCode);
    console.log('Phone Number: ' + this.phoneNumber);
    console.log('Result: ' + this.activeDialCode + this.phoneNumber);
  }
  chageActiveDialCode(ev: any) {
    this.activeDialCode = ev.value.dial_code;
  }
}
