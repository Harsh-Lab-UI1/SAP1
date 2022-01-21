import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  public result:any;
  constructor(private _service:CountriesService) { }

  ngOnInit() {
    this._service.getCountries().subscribe((res: any) => this.result = res);
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Server Side Error !");
      } else {
        console.log("Client Side Error   !");
      }
    }
  }


}
