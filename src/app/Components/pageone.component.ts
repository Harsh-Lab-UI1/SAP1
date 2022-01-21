import { Component } from "@angular/core";
import { CountriesService } from "../countries.service";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
    templateUrl:"./pageone.component.html"
})
export class PageoneComponent{
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