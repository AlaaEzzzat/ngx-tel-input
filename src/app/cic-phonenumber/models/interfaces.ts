import { CountryCode } from './country-code';

export interface Country {
  name: string;
  flag: string;
  code: CountryCode;
  dial_code: string;
  pattern: RegExp;
  placeholder: string;
}
