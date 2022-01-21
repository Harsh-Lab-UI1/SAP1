import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CountriesComponent } from "./countries.component";
import { CountriesService } from "../countries.service";
import { Routes,RouterModule } from "@angular/router";

export const appRoutes:Routes = [
    {path:"",component:CountriesComponent}
]
@NgModule({
    declarations: [CountriesComponent],
    imports:[CommonModule,RouterModule],
    providers:[CountriesService],
    exports:[CountriesComponent]
})
export class countriesModule{}