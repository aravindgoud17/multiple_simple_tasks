import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartssComponent } from './chartss/chartss.component';
import { CurdFormComponent } from './curd-form/curd-form.component';
import { CurdTaskComponent } from './curd-task/curd-task.component';
import { FormsExamplesComponent } from './forms-examples/forms-examples.component';
import { FulldetailsComponent } from './fulldetails/fulldetails.component';
import { GituserdetailsComponent } from './gituserdetails/gituserdetails.component';
import { TableformComponent } from './task/tableform/tableform.component';
import { TabletaskComponent } from './task/tabletask/tabletask.component';

const routes: Routes = [
  {path:"charts",component:ChartssComponent},
  {path:"curdform",component:CurdFormComponent},
  {path:"fulldetails/:id",component:FulldetailsComponent},
  {path:"getdetails/:login",component:GituserdetailsComponent},
  {path:"forms",component:FormsExamplesComponent},
  {path:"forms/:id",component:FormsExamplesComponent},
  {path:"curd",component:CurdTaskComponent},
  {path:"tabletask",component:TabletaskComponent},
  {path:"tableform",component:TableformComponent},
  {path:"tableform/:id",component:TableformComponent},
  { path: 'faculty', loadChildren: () => import('./faculty/faculty.module').then(m => m.FacultyModule) },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'owner', loadChildren: () => import('./owner/owner.module').then(m => m.OwnerModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
