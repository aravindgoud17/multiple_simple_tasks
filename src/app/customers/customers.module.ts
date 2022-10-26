import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { FirstcustomerComponent } from './firstcustomer/firstcustomer.component';


@NgModule({
  declarations: [
    CustomersComponent,
    FirstcustomerComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
