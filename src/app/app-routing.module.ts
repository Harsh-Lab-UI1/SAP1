import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './Components/index.component';
import { PageoneComponent } from './Components/pageone.component';
import {CountriesComponent} from './countries/countries.component';
const routes: Routes = [
  {path:"",component:IndexComponent},
  {path:"Page_one",component:PageoneComponent},
  {path:"Countries",component:CountriesComponent},
  {path:"Lazy",component:IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
