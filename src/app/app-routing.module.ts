import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartssComponent } from './chartss/chartss.component';
import { CurdFormComponent } from './curd-form/curd-form.component';
import { FulldetailsComponent } from './fulldetails/fulldetails.component';
import { GituserdetailsComponent } from './gituserdetails/gituserdetails.component';

const routes: Routes = [
  {path:"charts",component:ChartssComponent},
  {path:"curdform",component:CurdFormComponent},
  {path:"fulldetails/:id",component:FulldetailsComponent},
  {path:"getdetails/:login",component:GituserdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
