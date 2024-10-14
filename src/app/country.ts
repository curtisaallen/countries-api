export interface Country {
    name: {
      common: string;
      official: string;
      nativeName: { [key: string]: { official: string; common: string } };
    };
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: { [key: string]: { name: string; symbol: string } };
    idd: { root: string; suffixes: string[] };
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: { [key: string]: string };
    translations: { [key: string]: { official: string; common: string } };
    latlng: number[];
    landlocked: boolean;
    borders: string[];
    area: number;
    demonyms: { [key: string]: { f: string; m: string } };
    flag: string;
    maps: { googleMaps: string; openStreetMaps: string };
    population: number;
    fifa: string;
    car: { signs: string[]; side: string };
    timezones: string[];
    continents: string[];
    flags: { png: string; svg: string };
    coatOfArms: { png: string; svg: string };
    startOfWeek: string;
    capitalInfo: { latlng: number[] };
  }




export interface CountryData {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    subregion: string;
    region: string;
    population: number;
    latlng: number[];
    demonym: string;
    area: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: string;
    flags: {
      svg: string;
      png: string;
    };
    currencies: {
      code: string;
      name: string;
      symbol: string;
    }[];
    languages: {
      iso639_1: string;
      iso639_2: string;
      name: string;
      nativeName: string;
    }[];
    translations: {
      [key: string]: string;
    };
    flag: string;
    regionalBlocs: {
      acronym: string;
      name: string;
    }[];
    cioc: string;
    independent: boolean;
}
  
  