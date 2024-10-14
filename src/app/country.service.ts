import { Injectable } from '@angular/core';
import { Country } from './country';
import countryData from './data/data.json';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  protected countryList: Country[] = [];


  getCountries(): Country[] {
    return this.countryList;
  }

}
