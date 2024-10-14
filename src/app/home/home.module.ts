import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    // Remove HttpClientModule here
  ],
  declarations: [
    HomeComponent
    // other components
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [HomeComponent]
})
export class AppModule {}
