import { Component, inject, OnInit } from '@angular/core';
import {  HttpClient  } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'; 
import { Country } from '../country';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private apiUrl = 'https://restcountries.com/v3.1/all';
  countryList: Country[] = [];
  filteredCountryList: Country[] = [];
  uniqueRegions: string[] = [];
  search: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Country[]>(this.apiUrl).subscribe((data: Country[]) => {
      this.countryList = data;
      this.filteredCountryList = data;
      this.uniqueRegions = this.getUniqueRegions(data);
    });
  }

  onCountrySelect(event: Event): void {
    const selectedCountry = (event.target as HTMLSelectElement).value;
    (selectedCountry === 'Select option') ? this.filteredCountryList = this.countryList : this.filteredCountryList = this.countryList.filter(country => country.region === selectedCountry);
  }

  getUniqueRegions(countries: Country[]): string[] {
    const regions = countries.map(country => country.region);
    return [...new Set(regions)];
  }

  onSearchCountry(event: Event): void {
    const searchCountry = (event.target as HTMLSelectElement).value.toLowerCase();
    (searchCountry === '') ? this.filteredCountryList =  this.countryList : this.filteredCountryList = this.countryList.filter(country => country.name.common.toLowerCase().includes(searchCountry));
  }

}
