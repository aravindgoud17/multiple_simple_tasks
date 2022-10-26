import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '../error/error.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FirstownerComponent } from './firstowner/firstowner.component';
import { HomeComponent } from './home/home.component';
import { OwnerComponent } from './owner.component';

const routes: Routes = [
  { path: '', component: OwnerComponent , children: [
   {path: '',pathMatch:'full',redirectTo:'about'} ,
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'profile',component:HomeComponent},
    {path:'firstowner',component:FirstownerComponent},
    {path:'**',component:ErrorComponent}
  ]
}
  // {path:"ownerfirst",component:},
];

@NgModule({
  imports: [
 
    RouterModule.forChild(routes)
  
  ],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
