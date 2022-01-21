import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesService } from './countries.service';
import { CountriesComponent } from './countries/countries.component';
import { CommonModule } from '@angular/common';
import { countriesModule } from './countries/countries.module';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './Components/index.component';
import { PageoneComponent } from './Components/pageone.component';
@NgModule({
  declarations: [
    AppComponent,IndexComponent,PageoneComponent
    
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,countriesModule,CommonModule
  ],
  providers: [CountriesService],
  bootstrap: [IndexComponent]
})
export class AppModule { }
