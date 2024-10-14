import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import {  HttpClient  } from '@angular/common/http';
import { Location } from '@angular/common';
import { Country} from '../country';
import countryData from '../data/data.json';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit  {
  name: string = '';
  private apiUrl = 'https://restcountries.com/v3.1/all';
  countryList: Country[] = [];
  countriesData:any  = countryData;
  borderCountries: string[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient, private location: Location ) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name') || '';
    this.http.get<Country[]>(this.apiUrl).subscribe((data: Country[]) => {
      this.countryList = data.filter(country => country.name?.common === this.name);
      const currentCountry = this.countriesData[0];
      this.borderCountries = this.countriesData.filter((border: any) => currentCountry.borders.includes(border.alpha3Code)).map((border: any) => border.name);
    });  
  }


  goBack(): void {
    this.location.back();
  }

}

