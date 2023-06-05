import { CountryCode } from './country-code';

export interface Country {
  id: number;
  name: string;
  flag: string;
  code: CountryCode;
  dial_code: string;
  pattern: RegExp;
  placeholder: string;
}
